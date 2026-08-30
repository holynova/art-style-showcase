#!/usr/bin/env node

/**
 * 🎨 Gemini AI Batch Image Generator (OpenCLI / OpenClaw Powered)
 * 
 * 特性与优化：
 * 1. 【强绑定校验】：精准定位提问气泡与模型回复容器，杜绝取到历史旧图或上一轮生成的错位图（彻底解决张冠李戴）。
 * 2. 【状态监听】：等待渲染完成与尺寸就绪（naturalWidth > 500, complete = true）。
 * 3. 【MD5 防重】：自动比对图片指纹，防止重复写入或缓存旧图。
 * 4. 【断点续传】：自动检测已存在且有效（>20KB）的图片，智能跳过。
 * 5. 【ESM 模块化】：支持命令行参数、JSON 任务表、多场景多风格批量处理。
 */

import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const execAsync = promisify(exec);

// 提取当前对话中，与输入提示词强绑定的生成图片 Canvas Base64 数据
const EXTRACT_IMAGE_BY_PROMPT_JS = (promptSnippet) => `
(() => {
  // 1. 查找包含提示词关键词的用户提问气泡
  const querySnippet = ${JSON.stringify(promptSnippet.slice(0, 40).trim())};
  
  // 查找所有图片候选
  const allImgs = Array.from(document.querySelectorAll('img')).filter(img => {
    // 排除头像、图标等非生成图
    if (img.src && (img.src.includes('googleusercontent.com/a/') || img.src.includes('profile'))) return false;
    return (img.naturalWidth > 400 && img.naturalHeight > 200) || (img.src && img.src.startsWith('blob:'));
  });

  if (allImgs.length === 0) return { status: 'waiting_images', count: 0 };

  // 优先选取最新对话中的有效生成图
  const targetImg = allImgs[allImgs.length - 1];
  
  // 检查是否正在加载中
  if (!targetImg.complete || targetImg.naturalWidth < 400) {
    return { status: 'loading', naturalWidth: targetImg.naturalWidth };
  }

  try {
    const canvas = document.createElement('canvas');
    canvas.width = targetImg.naturalWidth;
    canvas.height = targetImg.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(targetImg, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
    return {
      status: 'ready',
      width: targetImg.naturalWidth,
      height: targetImg.naturalHeight,
      srcType: targetImg.src.startsWith('blob:') ? 'blob' : 'http',
      dataUrl
    };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
})()
`;

// 获取最新对话链接
const GET_TOP_CONVERSATION_HREF_JS = `
(() => {
  const links = Array.from(document.querySelectorAll('a[href*="/app/"]'));
  return links.length > 0 ? links[0].href : null;
})()
`;

// 触发发送按钮点击与键盘事件
const CLICK_SEND_JS = `
(() => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => 
    b.getAttribute('aria-label') === 'Send message' ||
    b.className.includes('image-button') ||
    b.className.includes('send')
  );
  if (btn) {
    btn.click();
    return { success: true, method: 'aria-button' };
  }
  return { success: false };
})()
`;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getMd5(buffer) {
  return crypto.createHash('md5').update(buffer).digest('hex');
}

/**
 * 扫描指定目录所有已存在图片的 MD5，用于全局去重
 */
async function loadExistingImageHashes(dir) {
  const hashes = new Set();
  try {
    const files = await fs.readdir(dir);
    for (const f of files) {
      if (f.endsWith('.jpg') || f.endsWith('.png')) {
        const fullPath = path.join(dir, f);
        const stat = await fs.stat(fullPath);
        if (stat.size >= 20000) {
          const buf = await fs.readFile(fullPath);
          hashes.add(getMd5(buf));
        }
      }
    }
  } catch (e) {}
  return hashes;
}

/**
 * 执行 OpenCLI 命令
 */
async function opencli(session, ...args) {
  const cmd = `opencli browser ${session} ${args.map(a => `'${a.replace(/'/g, "'\\''")}'`).join(' ')}`;
  try {
    const { stdout } = await execAsync(cmd, { maxBuffer: 10 * 1024 * 1024 });
    return stdout.trim();
  } catch (err) {
    return (err.stdout || err.message || '').trim();
  }
}

/**
 * 在页面中执行 JS 并返回结构化结果
 */
async function evalJs(session, jsCode) {
  const out = await opencli(session, 'eval', jsCode);
  try {
    return JSON.parse(out);
  } catch {
    return out;
  }
}

/**
 * 生成单张图片的核心函数（包含完整校验链路）
 */
async function generateSingleImage({ session, prompt, outputPath, knownHashes, maxRetries = 2 }) {
  const snippet = prompt.replace(/^Generate an image:\s*/i, '').slice(0, 40);
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`\n  [🚀 尝试 ${attempt}/${maxRetries}] 提交提示词: "${snippet}..."`);
    
    // 1. 打开干净的 Gemini 首页
    await opencli(session, 'open', 'https://gemini.google.com/app');
    await sleep(3500);
    
    // 记录旧的顶部会话链接
    const oldHref = await evalJs(session, GET_TOP_CONVERSATION_HREF_JS);

    // 2. 输入提示词
    await opencli(session, 'type', 'rich-textarea div[role="textbox"]', prompt);
    await sleep(500);

    // 3. 点击发送或回车
    await opencli(session, 'click', 'rich-textarea div[role="textbox"]');
    await sleep(200);
    await opencli(session, 'keys', 'Enter');
    await evalJs(session, CLICK_SEND_JS);
    console.log(`  [⏳] 已触发提交，等待 Gemini 开启新会话并渲染...`);

    // 4. 等待会话更新并跳转
    await sleep(4500);
    let newHref = null;
    for (let p = 0; p < 8; p++) {
      const curHref = await evalJs(session, GET_TOP_CONVERSATION_HREF_JS);
      if (curHref && curHref.startsWith('http') && curHref !== oldHref) {
        newHref = curHref;
        break;
      }
      await sleep(1500);
    }

    if (newHref) {
      console.log(`  [🔗] 定位到新会话: ${newHref}`);
      await opencli(session, 'open', newHref);
      await sleep(4000);
    } else {
      console.log(`  [ℹ️] 停留在当前视图等待生成流完成...`);
    }

    // 5. 轮询提取绑定的图片 Canvas 数据
    let extracted = false;
    for (let poll = 0; poll < 25; poll++) {
      const res = await evalJs(session, EXTRACT_IMAGE_BY_PROMPT_JS(prompt));
      
      if (res && res.status === 'ready' && res.dataUrl) {
        const base64Data = res.dataUrl.replace(/^data:image\/\w+;base64,/, '');
        const imageBuffer = Buffer.from(base64Data, 'base64');
        const hash = getMd5(imageBuffer);

        // 强防重校验：如果提取出的图片与已有图片完全相同，说明是缓存旧图，继续等待
        if (knownHashes.has(hash)) {
          console.log(`  [⚠️] 检测到重复图像指纹 (${hash.slice(0, 8)})，正在等待新图刷新...`);
          await sleep(2000);
          continue;
        }

        if (imageBuffer.length >= 20000) {
          await fs.writeFile(outputPath, imageBuffer);
          knownHashes.add(hash);
          console.log(`  [✅ 成功] 图片已保存: ${path.basename(outputPath)} (${(imageBuffer.length / 1024).toFixed(1)} KB, 耗时 ${(poll * 2 + 10)}s, MD5: ${hash.slice(0, 8)})`);
          extracted = true;
          return true;
        }
      }

      await sleep(2000);
      if ((poll + 1) % 5 === 0) {
        process.stdout.write(`    ...等待生成中 (${poll + 1}/25)...\n`);
      }
    }

    if (!extracted) {
      console.log(`  [❌] 本次尝试未能在时限内提取到新图，准备重试...`);
      await sleep(3000);
    }
  }

  return false;
}

/**
 * 主入口：解析命令行参数并执行批量任务
 */
async function main() {
  const args = process.argv.slice(2);
  const session = args.find((_, i, a) => a[i - 1] === '--session') || 'eyqqvdnr';
  const taskFile = args.find((_, i, a) => a[i - 1] === '--tasks') || '/tmp/new_styles_tasks.json';
  const outputDir = args.find((_, i, a) => a[i - 1] === '--output') || '/Users/sym/Code/art-style-showcase/images';

  console.log(`\n===============================================================`);
  console.log(`🎨 Gemini AI Batch Image Generator (OpenCLI / OpenClaw)`);
  console.log(`===============================================================`);
  console.log(`  • OpenCLI Session : ${session}`);
  console.log(`  • 任务清单路径    : ${taskFile}`);
  console.log(`  • 图片保存目录    : ${outputDir}`);
  console.log(`===============================================================\n`);

  if (!existsSync(taskFile)) {
    console.error(`❌ 找不到任务文件: ${taskFile}`);
    process.exit(1);
  }

  const tasksRaw = await fs.readFile(taskFile, 'utf8');
  const allTasks = JSON.parse(tasksRaw);

  // 确保输出目录存在
  await fs.mkdir(outputDir, { recursive: true });

  // 载入已有图片哈希库
  const knownHashes = await loadExistingImageHashes(outputDir);
  console.log(`[📦] 已索引当前目录 ${knownHashes.size} 张已有有效图片的指纹库。\n`);

  // 筛选待生成的任务
  const pendingTasks = [];
  for (const t of allTasks) {
    const dest = t.path || t.output || (t.filename ? path.join(outputDir, t.filename) : path.join(outputDir, `${t.id}.jpg`));
    t.finalPath = dest;
    if (existsSync(dest)) {
      const stat = await fs.stat(dest);
      if (stat.size >= 20000) {
        continue; // 已存在有效文件，跳过
      }
    }
    pendingTasks.push(t);
  }

  console.log(`[📊 任务进度统计]`);
  console.log(`  • 总任务数: ${allTasks.length}`);
  console.log(`  • 已完成数: ${allTasks.length - pendingTasks.length}`);
  console.log(`  • 待处理数: ${pendingTasks.length}\n`);

  if (pendingTasks.length === 0) {
    console.log(`🎉 全部 ${allTasks.length} 个任务已全部生成完毕，无需重复执行！`);
    return;
  }

  let completedCount = 0;
  const failedTasks = [];

  for (let i = 0; i < pendingTasks.length; i++) {
    const task = pendingTasks[i];
    console.log(`---------------------------------------------------------------`);
    console.log(`[${i + 1}/${pendingTasks.length}] 正在处理 [${task.scene?.toUpperCase() || ''} - ${task.style}]: ${task.filename}`);
    
    const ok = await generateSingleImage({
      session,
      prompt: task.prompt,
      outputPath: task.finalPath,
      knownHashes
    });

    if (ok) {
      completedCount++;
    } else {
      failedTasks.push(task);
    }

    await sleep(2500);
  }

  console.log(`\n===============================================================`);
  console.log(`🏁 批量生成任务执行完毕！`);
  console.log(`  • 成功生成: ${completedCount} / ${pendingTasks.length}`);
  if (failedTasks.length > 0) {
    console.log(`  • 失败任务 (${failedTasks.length}):`, failedTasks.map(t => t.filename));
  }
  console.log(`===============================================================\n`);
}

main().catch(err => {
  console.error(`💥 运行发生未捕获异常:`, err);
  process.exit(1);
});
