<p align="right"><a href="README.md">中文</a></p>

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Art Style Archive — one scene, 41 styles: 9 benchmark scenes × 41 movements = 369 comparison works">
</p>

<p align="center">
  <a href="https://xiaosang.cc/art-style-showcase/">▶ Browse Online</a>
  ·
  <a href="https://holynova.github.io/art-style-showcase/">GitHub Pages Mirror</a>
  ·
  <a href="https://github.com/holynova/art-style-showcase">GitHub Repository</a>
</p>

Art Style Archive is a style matrix built like a controlled experiment: 9 benchmark scenes (a rainy café window with a cat, a seaside tram at dusk, an ancient pine over a mirror lake…), each rendered in 41 art styles — 369 works in total. Subject and composition stay fixed; only the style changes, so you can see exactly what each movement does to the same scene — the same rainy window in impasto, watercolor, ukiyo-e, or cyberpunk, side by side.

## Screenshot

<p align="center">
  <img src="./assets/readme/screenshot.png" width="100%" alt="Gallery home page: 9 scene tabs; under the rainy café window scene, four works side by side — impasto oil, minimalist vector, claymation, and dark fantasy ink">
</p>

## Features

- **9 benchmark scenes**: 咖啡馆雨窗与猫 (Rainy Café Window with a Cat), 雨后黄昏海滨电车 (Seaside Tram at Dusk After Rain), 悬崖古树与镜湖 (Ancient Pine on a Cliff over a Mirror Lake), 午夜古书店与老学者 (Midnight Antique Bookshop with an Old Scholar), 云海机械飞艇与悬空港 (Mechanical Airship over a Sea of Clouds), 深海发光水母与潜水员 (Glowing Deep-Sea Jellyfish with a Diver), 赛博雨夜拉面馆与机械少女 (Cyberpunk Ramen Shop on a Rainy Night), 森林魔导树屋与炼金女巫 (Forest Witch Treehouse), 荒漠废墟与流浪机械驼兽 (Desert Ruins with a Wandering Mechanical Camel); 3:4 portrait ratio.
- **41 styles** in 5 groups: 传统画种 Traditional Painting 13 (impasto, watercolor, Impressionism, ukiyo-e…), 版画印刷 Printmaking 5, 时代美学 Retro/Pop Aesthetics 7, 现代数码 Modern Digital 8, 版画与媒介 Print & Media 8 — covering Impressionism, Art Deco, Bauhaus, Pop Art, cyberpunk, Ghibli, pixel art, claymation, and more.
- **Every work has a full prompt**: all 369 carry their English prompt, tags, reference masters, color tone, and technique notes — copyable from the lightbox.
- **Dual-model compare**: switch Gemini / ChatGPT inside the lightbox (4 ChatGPT variants: impasto and watercolor across the café and tram scenes).
- **Two ways to browse**: by scene or by style; search styles, scenes, or prompts; random style; Chinese/English toggle.
- **Lightbox**: zoom in on brushwork, flip between works, usable on mobile.

## Run Locally

A pure static site with no build step — just open `index.html`, or serve it statically:

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

The repo is about 218MB (369 full images + 369 thumbnails), so keep the size in mind when cloning.

## Tech

- Pure HTML + CSS + JS, zero build, zero runtime dependencies; data lives in `data.js` (9 scenes × 41 styles, 369 entries, with prompt and technique fields).
- Images: 369 originals in `images/` + 369 thumbnails in `images/thumbs/`; `chatgpt_images/` holds the 4 ChatGPT comparison originals.
- Batch generation scripts: `gemini-batch-generator.mjs` (Gemini batch generation), `generate_style_visuals.py`.

```
index.html                  Entry (gallery / lightbox / search / random)
data.js                     Dataset: 9 scenes × 41 styles × prompts
style.css                   Dark gallery styling
images/                     369 original images
images/thumbs/              369 thumbnails
chatgpt_images/             4 ChatGPT comparison versions
gemini-batch-generator.mjs  Gemini batch generation
generate_style_visuals.py   Style visual generation script
```
