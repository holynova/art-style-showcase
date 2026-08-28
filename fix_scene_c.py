#!/usr/bin/env python3
"""
Regenerate duplicate Scene C images with fresh New Chat sessions.
"""

import subprocess
import time
import base64
import os

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
    },
    {
        "id": "scene_c_14_crayon",
        "prompt": "Generate an image: Whimsical children's picture book illustration of a giant blossoming tree on a cliff overlooking a quiet lake and mountains, visible waxy crayon strokes, soft oil pastel texture, layered collage paper cutouts, Eric Carle style --ar 16:9"
    }
]

IMAGE_DIR = "/Users/sym/Code/art-style-showcase/images"

def eval_js(code):
    res = subprocess.run(["opencli", "browser", "eyqqvdnr", "eval", code], capture_output=True, text=True)
    return res.stdout.strip()

def run_task(task):
    target = os.path.join(IMAGE_DIR, f"{task['id']}.jpg")
    safe_text = task['prompt'].replace('\\', '\\\\').replace("'", "\\'")
    print(f"\n🚀 Starting: {task['id']} ...")
    
    # 1. Click New Chat
    new_chat_js = """(() => {
      const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.innerText && el.innerText.includes('New chat'));
      if (btn) { btn.click(); return 'clicked'; }
      return 'not found';
    })()"""
    eval_js(new_chat_js)
    time.sleep(2)
    
    # 2. Type & Send
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
        if (sendBtn) sendBtn.click();
      }}, 500);
      return 'sent';
    }})()"""
    eval_js(submit_js)
    print("⏳ Prompt submitted. Waiting for generation...")
    time.sleep(15)
    
    # 3. Poll for the generated image
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
    start = time.time()
    while time.time() - start < 45:
        data_url = eval_js(extract_js)
        if data_url.startswith("data:image/jpeg;base64,"):
            b64 = data_url.split("data:image/jpeg;base64,")[1]
            with open(target, "wb") as f:
                f.write(base64.b64decode(b64))
            print(f"✅ Successfully saved {task['id']}.jpg")
            saved = True
            break
        time.sleep(3)
        
    if not saved:
        print(f"❌ Failed to save {task['id']}")
        
    print("⏱ Cooling 30s...")
    time.sleep(30)

def main():
    for t in TASKS:
        run_task(t)
    print("\n🎉 Completed all 7 targeted regenerations!")

if __name__ == "__main__":
    main()
