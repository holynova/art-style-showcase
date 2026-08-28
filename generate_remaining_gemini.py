#!/usr/bin/env python3
"""
Automated Gemini Web Image Generator via opencli (Fixed Event Handling)
"""

import subprocess
import time
import base64
import os
import sys

TASKS = [
    # Scene B
    {
        "id": "scene_b_12_flatvector",
        "prompt": "Generate an image: Minimalist flat vector graphic illustration by Malika Favre of a coastal tram intersection at sunset, bold geometric shapes, high contrast negative space, razor-sharp clean edges, chic modern travel poster --ar 16:9"
    },
    {
        "id": "scene_b_13_pixelart",
        "prompt": "Generate an image: 16-bit pixel art of a coastal city street intersection at twilight after rain, a vintage yellow tram passing, glowing streetlights reflected in puddles, meticulous pixel dithering, nostalgic retro 90s arcade aesthetic --ar 16:9"
    },
    {
        "id": "scene_b_14_crayon",
        "prompt": "Generate an image: Whimsical children's picture book illustration of a cute yellow tram driving through a rainy coastal town at dusk, visible waxy crayon textures, soft oil pastels, torn paper collage elements, warm cozy storybook art --ar 16:9"
    },

    # Scene C (02 to 14)
    {
        "id": "scene_c_02_watercolor",
        "prompt": "Generate an image: Luminous watercolor landscape of an ancient blossoming tree on a cliff overlooking a calm alpine lake at sunset, distant mountains, translucent wet-on-wet bleeding washes, soft gradient skies, visible cold-press paper grain, delicate ink accents --ar 16:9"
    },
    {
        "id": "scene_c_03_impressionism",
        "prompt": "Generate an image: Impressionist oil painting of a blossoming tree on a cliff overlooking a serene lake at sunset, loose dappled brushstrokes, Claude Monet style, vibrant flickering color spots, shimmering water surface, atmospheric light vibration --ar 16:9"
    },
    {
        "id": "scene_c_04_silkscreen",
        "prompt": "Generate an image: Silkscreen screenprint artwork of a blossoming tree on a cliff overlooking a lake and distant mountains, bold flat color blocks, slight misregistration print offset, high contrast pop art style, Andy Warhol nature poster --ar 16:9"
    },
    {
        "id": "scene_c_05_ukiyoe",
        "prompt": "Generate an image: Authentic Japanese Ukiyo-e woodblock print of an ancient sakura tree on a cliff overlooking Mount Fuji and a calm lake at sunset, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9"
    },
    {
        "id": "scene_c_06_vintage_comic",
        "prompt": "Generate an image: Vintage 1960s comic book illustration of a blossoming tree on a cliff overlooking a mountain lake at sunset, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, aged pulp paper texture --ar 16:9"
    },
    {
        "id": "scene_c_07_citypop",
        "prompt": "Generate an image: 1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, an ancient blooming tree on a cliff overlooking a crystal clear lake at sunset, distant purple mountains, pastel sky gradients, clean flat shadows, retro 80s resort vibe --ar 16:9"
    },
    {
        "id": "scene_c_08_artnouveau",
        "prompt": "Generate an image: Art Nouveau landscape illustration of an ancient blossoming tree on a cliff over a lake at dusk, Alphonse Mucha style, sinuous organic floral branches, intricate decorative circular botanical frame, golden leaf accents, elegant lithograph --ar 16:9"
    },
    {
        "id": "scene_c_09_artdeco",
        "prompt": "Generate an image: Art Deco illustration of an ancient tree on a cliff overlooking a mountain lake at sunset, sleek geometric stylized branches, radiating gold and teal sunbeams, glamorous symmetrical 1920s Gatsby aesthetic --ar 16:9"
    },
    {
        "id": "scene_c_10_cyberpunk",
        "prompt": "Generate an image: Cyberpunk sci-fi landscape of a glowing holographic sakura tree on a cliff overlooking a dark reflective lake, distant neon megacity spires under night sky, vivid cyan and magenta laser light, volumetric mist, Blade Runner vibe --ar 16:9"
    },
    {
        "id": "scene_c_11_ghibli",
        "prompt": "Generate an image: Anime cel-shaded landscape in the style of Studio Ghibli, a giant blossoming cherry tree on a cliff overlooking a calm blue lake, distant snow mountains, massive fluffy sunset clouds, hand-painted Kazuo Oga background, heartwarming and breathtaking --ar 16:9"
    },
    {
        "id": "scene_c_12_flatvector",
        "prompt": "Generate an image: Minimalist flat vector graphic illustration by Malika Favre, a silhouette of a solitary tree on a cliff over a calm lake at sunset, bold geometric color blocking, high contrast negative space, clean razor-sharp vector lines --ar 16:9"
    },
    {
        "id": "scene_c_13_pixelart",
        "prompt": "Generate an image: 16-bit pixel art of an ancient blossoming tree on a cliff overlooking a calm alpine lake at sunset, distant snowy mountain peaks, glowing sky gradients, meticulous pixel dithering, nostalgic retro 90s RPG game vista --ar 16:9"
    },
    {
        "id": "scene_c_14_crayon",
        "prompt": "Generate an image: Whimsical children's picture book illustration of a giant blossoming tree on a cliff overlooking a quiet lake and mountains, visible waxy crayon strokes, soft oil pastel texture, layered collage paper cutouts, Eric Carle style --ar 16:9"
    }
]

IMAGE_DIR = "/Users/sym/Code/art-style-showcase/images"
os.makedirs(IMAGE_DIR, exist_ok=True)

def eval_js(code):
    res = subprocess.run(["opencli", "browser", "eyqqvdnr", "eval", code], capture_output=True, text=True)
    return res.stdout.strip()

def send_and_wait(prompt_text, target_file):
    safe_text = prompt_text.replace('\\', '\\\\').replace("'", "\\'")
    
    # 1. Type and submit
    submit_js = f"""(() => {{
      const editor = document.querySelector('.ql-editor');
      if (!editor) return 'no editor';
      editor.focus();
      let p = editor.querySelector('p');
      if (!p) {{
        p = document.createElement('p');
        editor.appendChild(p);
      }}
      p.textContent = '{safe_text}';
      editor.dispatchEvent(new InputEvent('beforeinput', {{ bubbles: true, inputType: 'insertText', data: '{safe_text}' }}));
      editor.dispatchEvent(new InputEvent('input', {{ bubbles: true, inputType: 'insertText', data: '{safe_text}' }}));
      editor.dispatchEvent(new Event('input', {{ bubbles: true }}));
      editor.dispatchEvent(new Event('change', {{ bubbles: true }}));
      
      setTimeout(() => {{
        const sendBtn = document.querySelector('button[aria-label="Send message"], button[aria-label="发送"]');
        if (sendBtn) {{
          sendBtn.click();
        }}
      }}, 600);
      return 'sent';
    }})()"""
    
    eval_js(submit_js)
    
    # Wait for image generation (15s to 30s)
    extract_js = """(() => {
      const imgs = Array.from(document.querySelectorAll('img.image, img[alt*="AI generated"]'));
      if (imgs.length === 0) return 'none';
      const img = imgs[imgs.length - 1];
      if (!img.complete || img.naturalWidth === 0) return 'loading';
      
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 1024;
      canvas.height = img.naturalHeight || 576;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      return canvas.toDataURL('image/jpeg', 0.95);
    })()"""
    
    start_time = time.time()
    while time.time() - start_time < 45:
        time.sleep(4)
        data_url = eval_js(extract_js)
        if data_url.startswith("data:image/jpeg;base64,"):
            b64_data = data_url.split("data:image/jpeg;base64,")[1]
            with open(target_file, "wb") as f:
                f.write(base64.b64decode(b64_data))
            return True
    return False

def main():
    print(f"🎨 Running generation for {len(TASKS)} images...")
    for i, t in enumerate(TASKS, 1):
        target = os.path.join(IMAGE_DIR, f"{t['id']}.jpg")
        print(f"\n[{i}/{len(TASKS)}] Generating {t['id']}...")
        ok = send_and_wait(t['prompt'], target)
        if ok:
            print(f"✅ Generated & saved {t['id']}.jpg")
        else:
            print(f"❌ Failed to generate {t['id']}")
            
        print("⏱ 30s cooling interval...")
        time.sleep(30)

if __name__ == "__main__":
    main()
