#!/usr/bin/env python3
import os

images_dir = "/Users/sym/Code/art-style-showcase/images"
os.makedirs(images_dir, exist_ok=True)

# 1. Generate Scene A #14: Crayon & Pastel Picture Book
scene_a_14_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 1024" width="100%" height="100%">
  <defs>
    <!-- Paper texture filter -->
    <filter id="paper-texture" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
      <feDiffuseLighting in="noise" lighting-color="#fff" surfaceScale="2" result="light">
        <feDistantLight azimuth="45" elevation="60" />
      </feDiffuseLighting>
      <feBlend mode="multiply" in="SourceGraphic" in2="light" />
    </filter>
    <filter id="crayon-rough" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    <!-- Gradients -->
    <linearGradient id="wall-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#faedcd"/>
      <stop offset="100%" stop-color="#e9d8a6"/>
    </linearGradient>
    <linearGradient id="window-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#94d2bd"/>
      <stop offset="50%" stop-color="#0a9396"/>
      <stop offset="100%" stop-color="#005f73"/>
    </linearGradient>
    <linearGradient id="coat-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ee9b00"/>
      <stop offset="100%" stop-color="#ca6702"/>
    </linearGradient>
  </defs>

  <!-- Background Wall (Torn Paper Feel) -->
  <rect width="768" height="1024" fill="#fdf0d5" filter="url(#paper-texture)"/>
  
  <!-- Cafe Interior Collage Blocks -->
  <path d="M 0,0 L 768,0 L 768,1024 L 0,1024 Z" fill="url(#wall-grad)" opacity="0.8"/>
  <polygon points="40,60 520,50 500,680 30,700" fill="#fefae0" stroke="#d4a373" stroke-width="6" stroke-dasharray="16,8" filter="url(#crayon-rough)"/>
  
  <!-- Rain Window Frame & Outer Scenery -->
  <rect x="50" y="70" width="440" height="600" rx="12" fill="url(#window-grad)" opacity="0.85"/>
  <!-- Rain Streaks -->
  <g stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.6">
    <line x1="80" y1="90" x2="60" y2="150"/>
    <line x1="140" y1="120" x2="120" y2="200"/>
    <line x1="200" y1="80" x2="180" y2="180"/>
    <line x1="300" y1="110" x2="280" y2="210"/>
    <line x1="380" y1="95" x2="360" y2="190"/>
    <line x1="100" y1="260" x2="80" y2="340"/>
    <line x1="220" y1="240" x2="200" y2="350"/>
    <line x1="340" y1="270" x2="320" y2="380"/>
    <line x1="420" y1="230" x2="400" y2="330"/>
    <line x1="160" y1="420" x2="140" y2="520"/>
    <line x1="280" y1="400" x2="260" y2="510"/>
  </g>
  <!-- Window Grid lines -->
  <line x1="50" y1="370" x2="490" y2="370" stroke="#bb3e03" stroke-width="8" stroke-linecap="round"/>
  <line x1="270" y1="70" x2="270" y2="670" stroke="#bb3e03" stroke-width="8" stroke-linecap="round"/>

  <!-- Warm Cafe Ceiling Lamp -->
  <path d="M 620,0 L 620,160" stroke="#7f4f24" stroke-width="4"/>
  <path d="M 560,160 Q 620,120 680,160 Z" fill="#e76f51" filter="url(#crayon-rough)"/>
  <circle cx="620" cy="170" r="18" fill="#ffd166"/>
  <circle cx="620" cy="180" r="120" fill="#ffd166" opacity="0.18"/>

  <!-- Wooden Table (Collage paper layers) -->
  <polygon points="0,680 768,640 768,1024 0,1024" fill="#936639" filter="url(#paper-texture)"/>
  <polygon points="0,680 768,640 768,730 0,780" fill="#a68a64" filter="url(#crayon-rough)"/>
  <!-- Table Wood Lines in Crayon style -->
  <g stroke="#582f0e" stroke-width="4" opacity="0.4" stroke-linecap="round">
    <line x1="30" y1="740" x2="740" y2="690"/>
    <line x1="20" y1="820" x2="750" y2="770"/>
    <line x1="40" y1="910" x2="730" y2="860"/>
  </g>

  <!-- Sleeping Cat on Table (Chunky, cute collage) -->
  <g transform="translate(100, 700)" filter="url(#crayon-rough)">
    <!-- Cat Mat -->
    <rect x="0" y="20" width="220" height="140" rx="20" fill="#e9c46a" stroke="#f4a261" stroke-width="4" stroke-dasharray="10,6"/>
    <!-- Cat Body -->
    <ellipse cx="110" cy="90" rx="80" ry="50" fill="#e76f51"/>
    <!-- Stripes -->
    <path d="M 70,60 Q 80,90 70,120" stroke="#ae2012" stroke-width="6" fill="none"/>
    <path d="M 110,50 Q 120,90 110,130" stroke="#ae2012" stroke-width="6" fill="none"/>
    <path d="M 150,60 Q 160,90 150,120" stroke="#ae2012" stroke-width="6" fill="none"/>
    <!-- Cat Head -->
    <circle cx="60" cy="80" r="38" fill="#e76f51"/>
    <!-- Ears -->
    <polygon points="35,55 50,20 65,50" fill="#ae2012"/>
    <polygon points="65,50 85,20 95,55" fill="#ae2012"/>
    <!-- Closed Eyes -->
    <path d="M 40,85 Q 50,95 60,85" stroke="#333" stroke-width="3" fill="none"/>
    <path d="M 65,85 Q 75,95 85,85" stroke="#333" stroke-width="3" fill="none"/>
    <ellipse cx="62" cy="95" rx="4" ry="3" fill="#333"/>
    <!-- Tail curled -->
    <path d="M 180,90 Q 210,60 190,40 Q 170,30 170,50" stroke="#e76f51" stroke-width="16" stroke-linecap="round" fill="none"/>
    <!-- "Zzz" -->
    <text x="75" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="bold" fill="#ae2012">Zzz...</text>
  </g>

  <!-- Woman Sitting by Window -->
  <g transform="translate(380, 240)" filter="url(#crayon-rough)">
    <!-- Coat Body -->
    <path d="M 80,360 L 260,340 L 320,620 L 40,640 Z" fill="url(#coat-grad)"/>
    <!-- Knit Sweater Collar -->
    <path d="M 130,340 Q 170,380 210,340 Z" fill="#fdf0d5" stroke="#dda15e" stroke-width="5"/>
    <!-- Woman Head & Face -->
    <ellipse cx="170" cy="270" rx="55" ry="68" fill="#fcd5ce"/>
    <!-- Hair -->
    <path d="M 100,240 Q 80,380 140,400 Q 220,380 240,240 Z" fill="#582f0e"/>
    <!-- Facial Features (Storybook Cute) -->
    <!-- Closed Peaceful Eye & Smile -->
    <path d="M 140,270 Q 152,280 162,270" stroke="#6c584c" stroke-width="3.5" fill="none"/>
    <path d="M 145,295 Q 155,305 168,295" stroke="#bc6c25" stroke-width="3.5" fill="none"/>
    <!-- Rosy Cheek -->
    <circle cx="138" cy="285" r="14" fill="#ffb5a7" opacity="0.8"/>

    <!-- Wide Brim Hat -->
    <!-- Crown -->
    <path d="M 100,200 Q 170,120 240,200 Z" fill="#283618"/>
    <!-- Hat Ribbon -->
    <path d="M 98,195 Q 170,180 242,195" stroke="#dda15e" stroke-width="12" fill="none"/>
    <!-- Wide Brim -->
    <ellipse cx="170" cy="205" rx="140" ry="32" fill="#386641"/>

    <!-- Arm Holding Coffee Cup -->
    <path d="M 100,420 Q 60,460 70,500 L 120,500" stroke="#ca6702" stroke-width="38" stroke-linecap="round" fill="none"/>
    <!-- Coffee Cup & Saucer -->
    <g transform="translate(40, 480)">
      <ellipse cx="40" cy="35" rx="35" ry="12" fill="#dda15e"/>
      <path d="M 15,10 L 65,10 L 60,32 L 20,32 Z" fill="#fefae0" stroke="#bc6c25" stroke-width="3"/>
      <!-- Steam -->
      <path d="M 30,0 Q 25,-20 35,-35" stroke="#fefae0" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8"/>
      <path d="M 45,-5 Q 55,-25 45,-45" stroke="#fefae0" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8"/>
    </g>
  </g>

  <!-- Title Badge Overlay on Bottom -->
  <g transform="translate(40, 940)">
    <rect width="688" height="50" rx="14" fill="#283618" opacity="0.9"/>
    <text x="24" y="32" font-family="'Noto Serif SC', serif" font-size="20" font-weight="bold" fill="#fefae0">
      14. 绘本蜡笔与拼贴 (Picture Book Crayon Collage) · 场景 A
    </text>
  </g>
</svg>"""

with open(os.path.join(images_dir, "scene_a_14_crayon.svg"), "w", encoding="utf-8") as f:
    f.write(scene_a_14_svg)

print("Created scene_a_14_crayon.svg")

# 2. Styles configuration for Scene B and Scene C
STYLES = [
    {
        "num": "01", "id": "01_impasto", "cn": "厚涂油画", "en": "Impasto Oil Painting",
        "bg_grad": ["#1a0f00", "#3d1e03", "#7f2e00"], "accent": "#f39c12", "cat": "传统画种",
        "motif": "impasto", "tags": ["厚重刮刀", "颜料堆积", "明暗对比"]
    },
    {
        "num": "02", "id": "02_watercolor", "cn": "通透水彩", "en": "Luminous Watercolor",
        "bg_grad": ["#0b1d28", "#1a4968", "#4895ef"], "accent": "#4cc9f0", "cat": "传统画种",
        "motif": "watercolor", "tags": ["湿画晕染", "透明水光", "冷压纸纹"]
    },
    {
        "num": "03", "id": "03_impressionism", "cn": "印象派与点彩", "en": "Impressionist Oil",
        "bg_grad": ["#1b1338", "#382970", "#6d597a"], "accent": "#f72585", "cat": "传统画种",
        "motif": "dots", "tags": ["瞬时光影", "纯色并置", "空气颤动"]
    },
    {
        "num": "04", "id": "04_silkscreen", "cn": "丝网版画 / 波普", "en": "Silkscreen / Pop Art",
        "bg_grad": ["#2b0938", "#7209b7", "#f72585"], "accent": "#ffe600", "cat": "版画印刷",
        "motif": "pop", "tags": ["对位微错版", "高反差平涂", "波普招贴"]
    },
    {
        "num": "05", "id": "05_ukiyoe", "cn": "浮世绘木刻版画", "en": "Japanese Ukiyo-e",
        "bg_grad": ["#1c1917", "#292524", "#44403c"], "accent": "#e0a96d", "cat": "版画印刷",
        "motif": "wave", "tags": ["和纸拓印", "洗练墨线", "名所绘"]
    },
    {
        "num": "06", "id": "06_vintage_comic", "cn": "美漫复古网点", "en": "Vintage Comic / Halftone",
        "bg_grad": ["#1a0505", "#450a0a", "#7f1d1d"], "accent": "#fbbf24", "cat": "版画印刷",
        "motif": "comic", "tags": ["本戴网点", "四色套印", "粗墨线"]
    },
    {
        "num": "07", "id": "07_citypop", "cn": "City Pop 昭和复古", "en": "1980s City Pop Aesthetic",
        "bg_grad": ["#10002b", "#3c096c", "#7b2cbf", "#ff6b6b", "#ffd166"], "accent": "#48cae4", "cat": "时代美学",
        "motif": "citypop", "tags": ["粉紫晚霞", "几何平涂", "永井博假日"]
    },
    {
        "num": "08", "id": "08_artnouveau", "cn": "新艺术运动", "en": "Art Nouveau Masterpiece",
        "bg_grad": ["#0f1710", "#1b3820", "#31572c"], "accent": "#d4af37", "cat": "时代美学",
        "motif": "nouveau", "tags": ["植物藤蔓线", "对称金框", "石版画优雅"]
    },
    {
        "num": "09", "id": "09_artdeco", "cn": "装饰风艺术", "en": "Art Deco Luxury",
        "bg_grad": ["#0a0a0a", "#171717", "#262626"], "accent": "#f59e0b", "cat": "时代美学",
        "motif": "deco", "tags": ["几何放射", "盖茨比黑金", "流线型工业"]
    },
    {
        "num": "10", "id": "10_cyberpunk", "cn": "赛博朋克霓虹", "en": "Cyberpunk Neon",
        "bg_grad": ["#050510", "#0b0c2a", "#1a0b2e"], "accent": "#00f0ff", "cat": "现代数码",
        "motif": "cyber", "tags": ["全息霓虹", "雨雾光斑", "赛博都市"]
    },
    {
        "num": "11", "id": "11_ghibli", "cn": "吉卜力 / 赛璐珞", "en": "Studio Ghibli / Anime Cel",
        "bg_grad": ["#022b3a", "#1f7a8c", "#bfdbf7"], "accent": "#80ed99", "cat": "现代数码",
        "motif": "ghibli", "tags": ["水粉手绘", "蓬松夏云", "治愈暖调"]
    },
    {
        "num": "12", "id": "12_flatvector", "cn": "极简扁平矢量", "en": "Minimalist Flat Vector",
        "bg_grad": ["#0f172a", "#1e293b", "#334155"], "accent": "#38bdf8", "cat": "现代数码",
        "motif": "vector", "tags": ["负空间构图", "纯粹几何色块", "现代海报"]
    },
    {
        "num": "13", "id": "13_pixelart", "cn": "16-bit 像素风", "en": "16-bit Pixel Art",
        "bg_grad": ["#09090b", "#18181b", "#27272a"], "accent": "#a855f7", "cat": "现代数码",
        "motif": "pixel", "tags": ["点阵网格", "抖动渐变 (Dithering)", "怀旧街机"]
    },
    {
        "num": "14", "id": "14_crayon", "cn": "绘本蜡笔与拼贴", "en": "Picture Book Crayon Collage",
        "bg_grad": ["#283618", "#606c38", "#dda15e"], "accent": "#bc6c25", "cat": "传统画种",
        "motif": "crayon", "tags": ["蜡笔笔触", "剪纸拼贴", "质朴童趣"]
    }
]

def make_scene_svg(scene_letter, scene_title, scene_badge, style):
    # Determine scene motif elements
    is_scene_b = (scene_letter == 'b')
    scene_name = "场景 B · 雨后黄昏海滨电车" if is_scene_b else "场景 C · 悬崖古树与镜湖"
    
    grad_stops = "".join([f'<stop offset="{int(i/(len(style["bg_grad"])-1)*100)}%" stop-color="{c}"/>' for i, c in enumerate(style["bg_grad"])])
    
    # Specific graphic elements per motif
    motif_art = ""
    if is_scene_b: # Tram & Coast
        if style["motif"] == "citypop":
            motif_art = """
            <!-- City Pop Sunset & Palm Trees & Tram -->
            <circle cx="960" cy="380" r="160" fill="#ff6b6b" opacity="0.9"/>
            <polygon points="0,540 1920,540 1920,1080 0,1080" fill="#03071e"/>
            <!-- Palm trees silhouettes -->
            <path d="M 240,650 Q 280,450 320,250" stroke="#03071e" stroke-width="18" fill="none"/>
            <path d="M 320,250 Q 200,220 120,260 M 320,250 Q 240,160 220,90 M 320,250 Q 360,150 440,130 M 320,250 Q 420,220 480,280" stroke="#03071e" stroke-width="12" fill="none"/>
            <!-- Vintage Tram Yellow Box -->
            <rect x="760" y="440" width="400" height="200" rx="20" fill="#ffd166" stroke="#03071e" stroke-width="12"/>
            <rect x="800" y="470" width="70" height="70" rx="8" fill="#48cae4" stroke="#03071e" stroke-width="8"/>
            <rect x="900" y="470" width="70" height="70" rx="8" fill="#48cae4" stroke="#03071e" stroke-width="8"/>
            <rect x="1000" y="470" width="70" height="70" rx="8" fill="#48cae4" stroke="#03071e" stroke-width="8"/>
            <!-- Headlight -->
            <circle cx="780" cy="580" r="16" fill="#fff"/>
            <polygon points="780,580 300,720 300,880" fill="#ffffff" opacity="0.25"/>
            """
        elif style["motif"] == "cyber":
            motif_art = """
            <!-- Cyberpunk Neon City & Hover Tram -->
            <g stroke="#00f0ff" stroke-width="2" opacity="0.4">
              <line x1="0" y1="600" x2="1920" y2="600"/>
              <line x1="0" y1="700" x2="1920" y2="700"/>
              <line x1="0" y1="850" x2="1920" y2="850"/>
              <line x1="960" y1="600" x2="100" y2="1080"/>
              <line x1="960" y1="600" x2="1820" y2="1080"/>
            </g>
            <!-- Skyscraper silhouettes with neon signs -->
            <rect x="200" y="150" width="180" height="500" fill="#0a0a1f" stroke="#ff007f" stroke-width="4"/>
            <rect x="1500" y="100" width="220" height="550" fill="#0a0a1f" stroke="#00f0ff" stroke-width="4"/>
            <!-- Glowing Tram -->
            <rect x="760" y="460" width="420" height="170" rx="24" fill="#120e2e" stroke="#00f0ff" stroke-width="8"/>
            <rect x="790" y="490" width="360" height="50" rx="10" fill="#ff007f" opacity="0.8"/>
            <!-- Neon glow underneath -->
            <ellipse cx="970" cy="650" rx="260" ry="20" fill="#00f0ff" opacity="0.6"/>
            """
        elif style["motif"] == "ghibli":
            motif_art = """
            <!-- Studio Ghibli Summer Sea & Fluffy Clouds -->
            <circle cx="1400" cy="300" r="180" fill="#ffffff" opacity="0.9"/>
            <circle cx="1250" cy="350" r="140" fill="#ffffff" opacity="0.95"/>
            <circle cx="1550" cy="360" r="150" fill="#ffffff" opacity="0.9"/>
            <!-- Coastline & Road -->
            <polygon points="0,580 1920,520 1920,1080 0,1080" fill="#2d6a4f"/>
            <polygon points="0,680 1920,620 1920,1080 0,1080" fill="#40916c"/>
            <!-- Yellow Seaside Tram -->
            <rect x="800" y="520" width="340" height="180" rx="16" fill="#f4a261" stroke="#264653" stroke-width="10"/>
            <rect x="830" y="550" width="80" height="60" rx="6" fill="#a8dadc" stroke="#264653" stroke-width="6"/>
            <rect x="930" y="550" width="80" height="60" rx="6" fill="#a8dadc" stroke="#264653" stroke-width="6"/>
            <rect x="1030" y="550" width="80" height="60" rx="6" fill="#a8dadc" stroke="#264653" stroke-width="6"/>
            """
        elif style["motif"] == "wave" or style["motif"] == "ukiyoe":
            motif_art = """
            <!-- Ukiyo-e Sea Wave & Tram Mount Fuji -->
            <polygon points="960,200 680,560 1240,560" fill="#3d5a80"/>
            <polygon points="960,200 840,360 1080,360" fill="#f8f9fa"/>
            <!-- Stylized waves -->
            <path d="M 0,680 Q 200,600 400,680 T 800,680 T 1200,680 T 1600,680 T 2000,680" stroke="#98c1d9" stroke-width="16" fill="none"/>
            <path d="M 0,760 Q 200,680 400,760 T 800,760 T 1200,760 T 1600,760 T 2000,760" stroke="#e0fbfc" stroke-width="12" fill="none"/>
            <!-- Classic Wooden Tram Silhouette -->
            <rect x="780" y="500" width="360" height="180" rx="10" fill="#293241" stroke="#ee6c4d" stroke-width="8"/>
            """
        else: # Generic stylized tram & street composition
            motif_art = f"""
            <!-- Stylized Architectural Tram Lines -->
            <polygon points="0,580 1920,520 1920,1080 0,1080" fill="#0f172a" opacity="0.8"/>
            <line x1="0" y1="720" x2="1920" y2="660" stroke="{style['accent']}" stroke-width="8" stroke-dasharray="24,12"/>
            <!-- Tram Block -->
            <rect x="780" y="480" width="380" height="190" rx="20" fill="{style['accent']}" opacity="0.9" stroke="#fff" stroke-width="6"/>
            <rect x="820" y="510" width="70" height="60" rx="8" fill="#0f172a"/>
            <rect x="910" y="510" width="70" height="60" rx="8" fill="#0f172a"/>
            <rect x="1000" y="510" width="70" height="60" rx="8" fill="#0f172a"/>
            """
    else: # Scene C: Cliff Tree & Lake
        if style["motif"] == "wave" or style["motif"] == "ukiyoe":
            motif_art = """
            <!-- Mount Fuji & Sakura Tree on Cliff -->
            <polygon points="1200,160 880,560 1520,560" fill="#2b2d42"/>
            <polygon points="1200,160 1080,320 1320,320" fill="#edf2f4"/>
            <!-- Cliff Left -->
            <polygon points="0,380 500,480 400,1080 0,1080" fill="#1b1c24"/>
            <!-- Sakura Tree Trunk & Blooms -->
            <path d="M 180,600 Q 320,500 360,340" stroke="#4a3b32" stroke-width="32" stroke-linecap="round" fill="none"/>
            <circle cx="360" cy="300" r="140" fill="#ffb7b2" opacity="0.85"/>
            <circle cx="460" cy="340" r="100" fill="#ffdac1" opacity="0.85"/>
            <circle cx="280" cy="320" r="90" fill="#ffb7b2" opacity="0.85"/>
            """
        elif style["motif"] == "cyber":
            motif_art = """
            <!-- Holographic Sakura Tree & Neon Lake -->
            <polygon points="0,440 520,520 420,1080 0,1080" fill="#080816" stroke="#00f0ff" stroke-width="4"/>
            <!-- Holographic Glowing Tree -->
            <path d="M 180,640 Q 300,520 340,360" stroke="#00f0ff" stroke-width="24" stroke-linecap="round" fill="none"/>
            <circle cx="340" cy="320" r="150" fill="#ff007f" opacity="0.5"/>
            <circle cx="340" cy="320" r="100" fill="#00f0ff" opacity="0.4"/>
            <!-- Laser grid on lake -->
            <line x1="420" y1="620" x2="1920" y2="620" stroke="#ff007f" stroke-width="4" stroke-dasharray="16,8"/>
            <line x1="420" y1="740" x2="1920" y2="740" stroke="#00f0ff" stroke-width="4" stroke-dasharray="24,12"/>
            """
        elif style["motif"] == "nouveau" or style["motif"] == "deco":
            motif_art = """
            <!-- Sinuous Art Nouveau Tree & Golden Lake -->
            <circle cx="960" cy="400" r="320" fill="none" stroke="#d4af37" stroke-width="8"/>
            <circle cx="960" cy="400" r="280" fill="none" stroke="#d4af37" stroke-width="3" stroke-dasharray="12,6"/>
            <!-- Graceful Tree -->
            <path d="M 220,700 Q 360,560 400,380" stroke="#d4af37" stroke-width="20" stroke-linecap="round" fill="none"/>
            <path d="M 400,380 Q 480,260 620,240 M 400,380 Q 320,240 240,260 M 400,380 Q 440,200 500,120" stroke="#d4af37" stroke-width="10" stroke-linecap="round" fill="none"/>
            <!-- Stylized Lake & Distant Peaks -->
            <polygon points="0,580 1920,580 1920,1080 0,1080" fill="#0d1b2a" opacity="0.9"/>
            """
        else: # Natural painterly / vector mountain landscape
            motif_art = f"""
            <!-- Mountain Range in Background -->
            <polygon points="1200,220 860,620 1540,620" fill="#1e293b" opacity="0.6"/>
            <polygon points="1500,300 1260,620 1740,620" fill="#334155" opacity="0.5"/>
            <!-- Cliff Left -->
            <polygon points="0,420 540,520 440,1080 0,1080" fill="#0f172a"/>
            <!-- Ancient Blossoming Tree -->
            <path d="M 220,680 Q 340,540 380,360" stroke="#475569" stroke-width="28" stroke-linecap="round" fill="none"/>
            <circle cx="380" cy="300" r="160" fill="{style['accent']}" opacity="0.8"/>
            <circle cx="480" cy="340" r="110" fill="{style['accent']}" opacity="0.6"/>
            <!-- Reflective Lake -->
            <polygon points="440,620 1920,620 1920,1080 440,1080" fill="{style['bg_grad'][-1]}" opacity="0.75"/>
            """

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-grad-{scene_letter}-{style['num']}" x1="0" y1="0" x2="1" y2="1">
      {grad_stops}
    </linearGradient>
    <filter id="glow-{scene_letter}-{style['num']}">
      <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1920" height="1080" fill="url(#bg-grad-{scene_letter}-{style['num']})"/>

  <!-- Scene Specific Artwork Motifs -->
  {motif_art}

  <!-- Stylized Overlay Grid & Texture -->
  <rect width="1920" height="1080" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>

  <!-- Master Info Card Banner (Bottom Glass Box) -->
  <g transform="translate(60, 880)">
    <rect width="1800" height="140" rx="24" fill="rgba(10, 15, 30, 0.85)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="2"/>
    
    <!-- Number Badge -->
    <rect x="30" y="30" width="80" height="80" rx="16" fill="{style['accent']}" opacity="0.2"/>
    <rect x="30" y="30" width="80" height="80" rx="16" fill="none" stroke="{style['accent']}" stroke-width="3"/>
    <text x="70" y="80" font-family="'JetBrains Mono', monospace" font-size="34" font-weight="900" fill="{style['accent']}" text-anchor="middle">
      {style['num']}
    </text>

    <!-- Style Names -->
    <text x="140" y="66" font-family="'Noto Serif SC', serif" font-size="32" font-weight="bold" fill="#ffffff">
      {style['cn']}
    </text>
    <text x="140" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="500" fill="{style['accent']}">
      {style['en']} · {scene_name}
    </text>

    <!-- Category & Tags on Right -->
    <g transform="translate(1300, 48)">
      <rect x="0" y="0" width="140" height="42" rx="10" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.4)"/>
      <text x="70" y="27" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold" fill="#a5b4fc" text-anchor="middle">
        {style['cat']}
      </text>
      <text x="180" y="27" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#94a3b8">
        {' · '.join(style['tags'])}
      </text>
    </g>
  </g>
</svg>"""

# Generate Scene B (14 styles) & Scene C (14 styles)
for st in STYLES:
    # Scene B
    filename_b = f"scene_b_{st['id']}.svg"
    svg_content_b = make_scene_svg('b', "雨后黄昏海滨电车", "16:9 全景", st)
    with open(os.path.join(images_dir, filename_b), "w", encoding="utf-8") as f:
        f.write(svg_content_b)
    
    # Scene C
    filename_c = f"scene_c_{st['id']}.svg"
    svg_content_c = make_scene_svg('c', "悬崖古树与镜湖", "16:9 全景", st)
    with open(os.path.join(images_dir, filename_c), "w", encoding="utf-8") as f:
        f.write(svg_content_c)

print("Successfully generated all 14 Scene B SVGs and 14 Scene C SVGs!")
