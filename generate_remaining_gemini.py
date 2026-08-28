#!/usr/bin/env python3
"""
Automated Gemini Web Image Generator via opencli
Generates all remaining Scene B & Scene C images with 30s intervals.
"""

import subprocess
import time
import base64
import os
import sys

TASKS = [
    # 场景 B 剩余 3 种
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

    # 场景 C 全套 14 种
    {
        "id": "scene_c_01_impasto",
        "prompt": "Generate an image: Impasto oil painting of a solitary blossoming cherry tree on a rocky cliff overlooking a serene alpine lake at sunset, distant snowy peaks, thick sculptural palette knife strokes, heavy oil paint texture, dramatic rich golden-hour lighting --ar 16:9"
    },
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

def send_prompt(prompt_text):
    # Escape single quotes and backslashes
    safe_text = prompt_text.replace('\\', '\\\\').replace("'", "\\'")
    
    js = f"""(() => {{
      // 1. Click New Chat if available or clear editor
      const newChatBtn = Array.from(document.querySelectorAll('button, a')).find(el => el.innerText && el.innerText.includes('New chat'));
      if (newChatBtn) newChatBtn.click();
      
      setTimeout(() => {{
        const editor = document.querySelector('.ql-editor');
        if (!editor) return;
        editor.focus();
        document.execCommand('selectAll', false, null);
        document.execCommand('delete', false, null);
        document.execCommand('insertText', false, '{safe_text}');
        editor.dispatchEvent(new Event('input', {{ bubbles: true }}));
        
        setTimeout(() => {{
          const sendBtn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Send message' || b.innerHTML.includes('arrow_upward'));
          if (sendBtn) {{
            const target = sendBtn.querySelector('.mat-mdc-button-touch-target') || sendBtn;
            target.dispatchEvent(new PointerEvent('pointerdown', {{ bubbles: true }}));
            target.dispatchEvent(new MouseEvent('mousedown', {{ bubbles: true }}));
            target.dispatchEvent(new PointerEvent('pointerup', {{ bubbles: true }}));
            target.dispatchEvent(new MouseEvent('mouseup', {{ bubbles: true }}));
            target.dispatchEvent(new MouseEvent('click', {{ bubbles: true }}));
          }}
        }}, 600);
      }}, 1000);
      return 'submitted';
    }})()"""
    eval_js(js)

def extract_latest_image():
    js = """(() => {
      const imgs = Array.from(document.querySelectorAll('img.image, img[alt*="AI generated"]'));
      if (imgs.length === 0) return 'none';
      const img = imgs[imgs.length - 1]; // pick latest
      if (!img.complete || img.naturalWidth === 0) return 'loading';
      
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 1280;
      canvas.height = img.naturalHeight || 720;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      return canvas.toDataURL('image/jpeg', 0.95);
    })()"""
    return eval_js(js)

def run():
    print(f"🎨 Starting batch image generation for {len(TASKS)} remaining artworks...")
    
    for idx, item in enumerate(TASKS, 1):
        target_file = os.path.join(IMAGE_DIR, f"{item['id']}.jpg")
        print(f"\n[{idx}/{len(TASKS)}] Generating: {item['id']} ...")
        print(f"Prompt: {item['prompt'][:80]}...")
        
        send_prompt(item['prompt'])
        
        # Wait up to 35s for image to appear
        image_saved = False
        start_wait = time.time()
        while time.time() - start_wait < 40:
            time.sleep(4)
            data_url = extract_latest_image()
            if data_url.startswith("data:image/jpeg;base64,"):
                b64_data = data_url.split("data:image/jpeg;base64,")[1]
                with open(target_file, "wb") as f:
                    f.write(base64.b64decode(b64_data))
                print(f"✅ Successfully saved: {target_file}")
                image_saved = True
                break
            elif data_url == "loading":
                print("⏳ Image is rendering in browser...")
        
        if not image_saved:
            print(f"⚠️ Warning: Could not extract image for {item['id']}, continuing...")
            
        print("⏱ Waiting 30s before next generation (rate limit safety)...")
        time.sleep(30)
        
    print("\n🎉 Batch generation complete!")

if __name__ == "__main__":
    run()
