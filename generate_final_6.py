#!/usr/bin/env python3
import subprocess
import time
import base64
import os
import hashlib

TASKS = [
    {
        "id": "scene_c_03_impressionism",
        "prompt": "Generate an image: Impressionist oil painting of a blossoming cherry tree on a cliff overlooking a serene lake at sunset, loose dappled brushstrokes, Claude Monet style, vibrant flickering color spots, shimmering water surface, atmospheric light vibration --ar 16:9"
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
    }
]

IMAGE_DIR = "/Users/sym/Code/art-style-showcase/images"

def eval_js(code):
    res = subprocess.run(["opencli", "browser", "eyqqvdnr", "eval", code], capture_output=True, text=True)
    return res.stdout.strip()

def run():
    for idx, t in enumerate(TASKS, 1):
        target = os.path.join(IMAGE_DIR, f"{t['id']}.jpg")
        print(f"\n[{idx}/{len(TASKS)}] Generating {t['id']}...")
        safe_text = t['prompt'].replace('\\', '\\\\').replace("'", "\\'")
        
        # 1. Type
        type_js = f"""(() => {{
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
          return 'typed';
        }})()"""
        eval_js(type_js)
        time.sleep(1.5)
        
        # 2. Click Send
        click_js = """(() => {
          const btn = document.querySelector('button[aria-label="Send message"], button[aria-label="发送"]');
          if (btn) { btn.click(); return 'clicked'; }
          return 'not found';
        })()"""
        eval_js(click_js)
        print("⏳ Submitted. Waiting 20s for image rendering...")
        time.sleep(20)
        
        # 3. Extract Image
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
        
        saved = False
        for _ in range(10):
            data_url = eval_js(extract_js)
            if data_url.startswith("data:image/jpeg;base64,"):
                b64 = data_url.split("data:image/jpeg;base64,")[1]
                data = base64.b64decode(b64)
                with open(target, "wb") as f:
                    f.write(data)
                h = hashlib.md5(data).hexdigest()[:8]
                print(f"✅ Saved {t['id']}.jpg (MD5: {h})")
                saved = True
                break
            time.sleep(3)
            
        if not saved:
            print(f"❌ Failed to save {t['id']}")
            
        print("⏱ Cooling 30s...")
        time.sleep(30)
        
    print("\n🎉 All 6 final images generated!")

if __name__ == "__main__":
    run()
