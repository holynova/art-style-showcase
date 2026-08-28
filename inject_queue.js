// 准备写入作图队列的 29 条完整风格提示词
const PROMPTS = [
  // 场景 A 剩余第 14 种风格 (3:4)
  "Whimsical children's picture book illustration of a gentle woman in a wide-brim hat at a rainy cafe window with a sleeping cat and coffee, visible waxy crayon strokes, soft oil pastel texture, torn paper collage layers, Eric Carle and Oliver Jeffers style --ar 3:4",

  // 场景 B 全套 14 种风格 (16:9)
  "Impasto oil painting of a coastal city street intersection at twilight after rain, a vintage yellow tram on rails, glowing street lamps, wet reflections on asphalt, thick expressive palette knife strokes, heavy oil texture, rich dramatic evening light --ar 16:9",
  "Luminous watercolor painting of a coastal city street intersection at twilight after rain, a vintage yellow tram passing, glowing street lamps, wet-on-wet bleeding washes, delicate puddles with soft reflections, visible cold-press paper grain, poetic and breezy --ar 16:9",
  "Impressionist oil painting of a coastal city intersection at twilight after rain with a vintage yellow tram, flickering unmixed brushstrokes, Claude Monet and Pissarro style, shimmering water reflections and vibrant sunset light vibration --ar 16:9",
  "Silkscreen screenprint artwork of a coastal street intersection with a vintage yellow tram at twilight, high contrast pop art style, bold flat color blocks, misregistration offset print effect, Andy Warhol graphic city poster --ar 16:9",
  "Authentic Japanese Ukiyo-e woodblock print of a coastal city street with a vintage tram in the rain, distant sea horizon, crisp black sumi ink lines, flat mineral pigment washes, washi paper texture, Hiroshige Meisho Edo style --ar 16:9",
  "Vintage 1960s comic book panel of a coastal street intersection with a vintage yellow tram after rain, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, CMYK 4-color printing bleed, aged pulp paper --ar 16:9",
  "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai and Eizin Suzuki, a coastal street with a vintage yellow tram, palm trees, glowing sunset ocean horizon, pastel gradient sky, clean flat shadows, retro 80s album cover art --ar 16:9",
  "Art Nouveau illustration of a coastal tram street at twilight, Alphonse Mucha style, elegant sinuous flowing lines on iron lamp posts and rails, decorative botanical frame, golden sunset accents, vintage lithograph art --ar 16:9",
  "Art Deco illustration of a coastal city street with a streamlined vintage yellow tram at twilight, sleek geometric architectural lines, radiant gold and navy blue palette, dramatic 1920s symmetrical perspective, Gatsby luxury --ar 16:9",
  "Cyberpunk neon illustration of a futuristic tram crossing a rain-drenched coastal city intersection at night, vibrant glowing cyan and magenta holographic signs, steam rising, glossy wet asphalt reflections, Blade Runner aesthetic --ar 16:9",
  "Anime cel-shaded landscape in the style of Studio Ghibli and Makoto Shinkai, a seaside town street with a vintage yellow tram after summer rain, fluffy sunset clouds, sparkling lens flares, Kazuo Oga painted scenery, heartwarming nostalgia --ar 16:9",
  "Minimalist flat vector graphic illustration by Malika Favre of a coastal tram intersection at sunset, bold geometric shapes, high contrast negative space, razor-sharp clean edges, chic modern travel poster --ar 16:9",
  "16-bit pixel art of a coastal city street intersection at twilight after rain, a vintage yellow tram passing, glowing streetlights reflected in puddles, meticulous pixel dithering, nostalgic retro 90s arcade aesthetic --ar 16:9",
  "Whimsical children's picture book illustration of a cute yellow tram driving through a rainy coastal town at dusk, visible waxy crayon textures, soft oil pastels, torn paper collage elements, warm cozy storybook art --ar 16:9",

  // 场景 C 全套 14 种风格 (16:9)
  "Impasto oil painting of a solitary blossoming cherry tree on a rocky cliff overlooking a serene alpine lake at sunset, distant snowy peaks, thick sculptural palette knife strokes, heavy oil paint texture, dramatic rich golden-hour lighting --ar 16:9",
  "Luminous watercolor landscape of an ancient blossoming tree on a cliff overlooking a calm alpine lake at sunset, distant mountains, translucent wet-on-wet bleeding washes, soft gradient skies, visible cold-press paper grain, delicate ink accents --ar 16:9",
  "Impressionist oil painting of a blossoming tree on a cliff overlooking a serene lake at sunset, loose dappled brushstrokes, Claude Monet style, vibrant flickering color spots, shimmering water surface, atmospheric light vibration --ar 16:9",
  "Silkscreen screenprint artwork of a blossoming tree on a cliff overlooking a lake and distant mountains, bold flat color blocks, slight misregistration print offset, high contrast pop art style, Andy Warhol nature poster --ar 16:9",
  "Authentic Japanese Ukiyo-e woodblock print of an ancient sakura tree on a cliff overlooking Mount Fuji and a calm lake at sunset, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
  "Vintage 1960s comic book illustration of a blossoming tree on a cliff overlooking a mountain lake at sunset, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, aged pulp paper texture --ar 16:9",
  "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, an ancient blooming tree on a cliff overlooking a crystal clear lake at sunset, distant purple mountains, pastel sky gradients, clean flat shadows, retro 80s resort vibe --ar 16:9",
  "Art Nouveau landscape illustration of an ancient blossoming tree on a cliff over a lake at dusk, Alphonse Mucha style, sinuous organic floral branches, intricate decorative circular botanical frame, golden leaf accents, elegant lithograph --ar 16:9",
  "Art Deco illustration of an ancient tree on a cliff overlooking a mountain lake at sunset, sleek geometric stylized branches, radiating gold and teal sunbeams, glamorous symmetrical 1920s Gatsby aesthetic --ar 16:9",
  "Cyberpunk sci-fi landscape of a glowing holographic sakura tree on a cliff overlooking a dark reflective lake, distant neon megacity spires under night sky, vivid cyan and magenta laser light, volumetric mist, Blade Runner vibe --ar 16:9",
  "Anime cel-shaded landscape in the style of Studio Ghibli, a giant blossoming cherry tree on a cliff overlooking a calm blue lake, distant snow mountains, massive fluffy sunset clouds, hand-painted Kazuo Oga background, heartwarming and breathtaking --ar 16:9",
  "Minimalist flat vector graphic illustration by Malika Favre, a silhouette of a solitary tree on a cliff over a calm lake at sunset, bold geometric color blocking, high contrast negative space, clean razor-sharp vector lines --ar 16:9",
  "16-bit pixel art of an ancient blossoming tree on a cliff overlooking a calm alpine lake at sunset, distant snowy mountain peaks, glowing sky gradients, meticulous pixel dithering, nostalgic retro 90s RPG game vista --ar 16:9",
  "Whimsical children's picture book illustration of a giant blossoming tree on a cliff overlooking a quiet lake and mountains, visible waxy crayon strokes, soft oil pastel texture, layered collage paper cutouts, Eric Carle style --ar 16:9"
];

// 将配置注入并启动扩展队列
(() => {
  // 1. 设置前缀与后缀为空（因为我们的 Prompt 已经是完整自包含的）
  const prefixInputs = Array.from(document.querySelectorAll('input.gemini-input-field'));
  if (prefixInputs[0]) {
    prefixInputs[0].value = "";
    prefixInputs[0].dispatchEvent(new Event('input', { bubbles: true }));
  }
  if (prefixInputs[1]) {
    prefixInputs[1].value = "";
    prefixInputs[1].dispatchEvent(new Event('input', { bubbles: true }));
  }

  // 2. 设置提示词多行文本框
  const textareas = Array.from(document.querySelectorAll('textarea'));
  const promptArea = textareas[0];
  if (promptArea) {
    promptArea.value = PROMPTS.join('\n');
    promptArea.dispatchEvent(new Event('input', { bubbles: true }));
    promptArea.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // 3. 找到并点击“启动作图队列”按钮
  const buttons = Array.from(document.querySelectorAll('button'));
  const startBtn = buttons.find(b => b.innerText.includes('启动作图队列'));
  if (startBtn) {
    startBtn.click();
    return `成功配置 ${PROMPTS.length} 条提示词，并点击了【启动作图队列】按钮！每隔 30 秒自动出图一张。`;
  }
  return `已注入 ${PROMPTS.length} 条提示词，但未找到启动按钮。`;
})()
