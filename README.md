# 🎨 AI Art Style Matrix & Comparator (AI 艺术风格全景对比实验室)

> 基于控制变量法，固定 3 大基准测试场景，深度剖析 14 种经典绘画与插画流派的**笔触肌理、色彩语言、光影逻辑与出图提示词**。

🌐 **在线预览 (GitHub Pages)**: [https://holynova.github.io/art-style-showcase/](https://holynova.github.io/art-style-showcase/)

---

## 🌟 核心特性

- 🎯 **控制变量基准测试 (Benchmark Scenes)**：
  - **场景 A（人物与生活情境 · 咖啡馆女性与猫）**：已生成 13 种主流画风的高清实测图。
  - **场景 B（城市与建筑街景 · 雨后黄昏海滨电车）**：全套 14 种风格空间透视与倒影 Prompt 矩阵。
  - **场景 C（自然与宏大风光 · 悬崖古树与镜湖）**：全套 14 种风格色彩渐变与写意度 Prompt 矩阵。
- ⚖️ **双画风同屏实时对比台 (Split Comparator)**：
  - 支持任意挑选 2 种画风并排对比。
  - 提供**滑动拆分对比 (Interactive Slider)** 与 **双栏并排 (Dual View)**，联动输出笔触、色彩与修饰词对比表。
- 📋 **一键复制与批量导出**：
  - 卡片快速复制完整英文出图 Prompt（附 Toast 反馈）。
  - 支持一键导出全套 14 组 Prompt 为 `.txt` 文件。
- 🔍 **沉浸式画廊 Lightbox**：
  - 高清大图预览与风格修饰词（Key Modifiers）提取，支持键盘快捷键（`←` `→` 左右翻页，`Esc` 关闭）。

---

## 🖌️ 涵盖的 14 种艺术流派

| 分类 | 艺术风格 | 代表大师 / 视觉特征 |
| :--- | :--- | :--- |
| **传统画种** | 01. 厚涂油画 (*Impasto Oil Painting*) | Craig Mullins / 梵高 · 颜料堆叠与雕塑感肌理 |
| **传统画种** | 02. 通透水彩 (*Luminous Watercolor*) | Sargent / 现代水彩 · 湿画晕染与通透留白 |
| **传统画种** | 03. 印象派与点彩 (*Impressionist Oil*) | 莫奈 / 皮萨罗 · 纯色并置与光影颤动 |
| **版画印刷** | 04. 丝网版画 / 波普 (*Silkscreen / Pop Art*) | 安迪·沃霍尔 · 鲜艳平涂与套印微错位 |
| **版画印刷** | 05. 浮世绘木刻版画 (*Japanese Ukiyo-e*) | 葛饰北斋 / 歌川广重 · 和纸纤维与洗练墨线 |
| **版画印刷** | 06. 美漫复古网点 (*Vintage Comic*) | 罗伊·利希滕斯坦 · 本戴网点 (Ben-Day Dots) 与四色印刷 |
| **时代美学** | 07. 80年代 City Pop (*1980s City Pop*) | 永井博 / 铃木英人 · 晚霞渐变与都市假日感 |
| **时代美学** | 08. 新艺术运动 (*Art Nouveau*) | 阿尔丰斯·慕夏 · 自然藤蔓曲线与华丽边框 |
| **时代美学** | 09. 装饰风艺术 (*Art Deco*) | 塔玛拉·德·蓝披卡 · 几何对称与黑金奢华 |
| **现代数码** | 10. 赛博朋克霓虹 (*Cyberpunk Neon*) | 《银翼杀手》 · 雨雾光晕与青粉霓虹反光 |
| **现代数码** | 11. 吉卜力 / 赛璐珞 (*Studio Ghibli*) | 男鹿和雄 / 宫崎骏 · 水粉手绘背景与温馨暖调 |
| **现代数码** | 12. 极简扁平矢量 (*Minimalist Flat Vector*) | Malika Favre · 负空间构图与几何纯色块 |
| **现代数码** | 13. 16-bit 像素风 (*16-bit Pixel Art*) | SNES 经典街机 · 点阵颗粒与抖动渐变 (Dithering) |
| **传统画种** | 14. 绘本蜡笔与拼贴 (*Picture Book Crayon*) | Eric Carle · 凹凸油画棒手感与童趣剪纸 |

---

## 🚀 本地运行

纯原生前端架构（HTML5 + Tailwind CSS + Lucide Icons + Vanilla JS），零依赖，无需任何安装构建步骤：

```bash
# 克隆仓库
git clone https://github.com/holynova/art-style-showcase.git
cd art-style-showcase

# 直接使用浏览器打开
open index.html

# 或通过 Python 启动轻量静态服务
python3 -m http.server 8080
```
浏览器访问 `http://localhost:8080` 即可。

---

## 📄 License
MIT License.
