/**
 * 艺术风格矩阵数据集 (Art Style Matrix Database)
 * 涵盖 9 大基准测试场景 × 34 种经典艺术与插画流派 (全 306 组完整出图与视觉图谱)
 */

const STYLE_CATEGORIES = [
  {
    "id": "all",
    "name": "全部流派",
    "icon": "layout-grid",
    "desc": "全量 24 种经典绘画与插画流派"
  },
  {
    "id": "fine_art",
    "name": "传统绘画与油彩",
    "icon": "palette",
    "desc": "颜料堆叠、笔触肌理与古典光影层次"
  },
  {
    "id": "printmaking",
    "name": "版画与印刷媒介",
    "icon": "printer",
    "desc": "套印对位、网点纹理与木刻矿物拓印"
  },
  {
    "id": "retro_pop",
    "name": "时代美学与潮流",
    "icon": "compass",
    "desc": "经典时代符号、装饰曲线与复古光泽"
  },
  {
    "id": "digital",
    "name": "现代数码与概念",
    "icon": "monitor",
    "desc": "极简矢量、赛璐珞光影与点阵像素美学"
  }
];

const SCENES_DATA = [
  {
    "id": "scene_a",
    "title": "I · 咖啡馆雨窗与猫",
    "subtitle": "人物肖像 · 室内外冷暖光影与织物质感",
    "badge": "3:4 肖像比例",
    "description": "咖啡馆雨窗旁，戴宽檐帽喝咖啡的优雅女性，木桌上趴着一只睡猫。用于测试人物五官结构、衣褶质感、室内外冷暖对比与情绪传达。",
    "coreSubject": "A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table",
    "aspectRatio": "3:4",
    "styles": [
      {
        "id": "scene_a_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 3:4",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_a_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 3:4",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_a_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 3:4",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_a_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_a_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 3:4",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_a_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_a_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 3:4",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_a_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_a_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 3:4",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_a_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_a_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 3:4",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_a_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_a_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 3:4",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_a_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_a_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 3:4",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_a_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 3:4",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_a_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 3:4",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_a_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 3:4",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_a_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 3:4",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_a_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 3:4",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_a_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_a_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 3:4",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_a_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 3:4",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_a_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 3:4",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_a_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 3:4",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_a_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_a_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 3:4",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_a_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 3:4",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_a_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 3:4",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_a_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_a_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 3:4",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_a_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 3:4",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_a_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_a_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 3:4",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_a_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 3:4",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_a_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_a_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 3:4",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_a_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 3:4",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_a_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_a_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 3:4",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_a_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 3:4",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_a_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_a_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 3:4",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_a_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_a_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 3:4",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_a_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 3:4",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_a_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 3:4",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_a_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_a_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of A stylish woman in a wide-brim hat sitting by a rainy cafe window, sipping coffee, a fluffy cat sleeping on the wooden table, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 3:4",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_b",
    "title": "II · 雨后黄昏海滨电车",
    "subtitle": "街景建筑 · 空间透视、黄昏光影与湿地反射",
    "badge": "16:9 全景比例",
    "description": "滨海大道上行驶的复古绿色有轨电车，雨后黄昏金色落日，湿漉沥青路面倒映路灯与云霞。用于测试空间纵深、建筑立面、车辆金属反光与湿地漫反射。",
    "coreSubject": "A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_b_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_b_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_b_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_b_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_b_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_b_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_b_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_b_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_b_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_b_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_b_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_b_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_b_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_b_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_b_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_b_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_b_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_b_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_b_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_b_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_b_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_b_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_b_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_b_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_b_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_b_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_b_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_b_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_b_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_b_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_b_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_b_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_b_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_b_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_b_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_b_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_b_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_b_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_b_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_b_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_b_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_b_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_b_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_b_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_b_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_b_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_b_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_b_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_b_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of A vintage green electric tram moving along a seaside coastal boulevard at golden sunset, wet asphalt reflecting streetlights, ocean waves in the background, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_c",
    "title": "III · 悬崖古树与镜湖",
    "subtitle": "自然风光 · 远近景深、树木肌理与水面倒影",
    "badge": "16:9 全景比例",
    "description": "暮色中悬崖边缘傲然挺立的苍劲松树，俯瞰下方薄雾弥漫的如镜高山湖泊与远方层峦叠嶂。用于测试有机自然形态、空气透视、植被微细节与水天倒影。",
    "coreSubject": "An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_c_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_c_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_c_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_c_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_c_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_c_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_c_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_c_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_c_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_c_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_c_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_c_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_c_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_c_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_c_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_c_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_c_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_c_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_c_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_c_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_c_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_c_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_c_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_c_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_c_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_c_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_c_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_c_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_c_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_c_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_c_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_c_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_c_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_c_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_c_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_c_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_c_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_c_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_c_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_c_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_c_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_c_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_c_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_c_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_c_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_c_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_c_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_c_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_c_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of An ancient gnarled pine tree clinging to a misty cliff overlooking a pristine mirror-like mountain lake at twilight, dramatic peaks and ethereal fog in the distance, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_d",
    "title": "IV · 午夜古书店与老学者",
    "subtitle": "室内群组 · 密集物体排列与局部暖光源暗调光影",
    "badge": "16:9 全景比例",
    "description": "午夜堆满泛黄古卷的高耸旧书店里，戴圆形眼镜的老学者借着复古铜台灯光芒专注阅读大部头古籍，空气中漂浮着微光尘埃。用于测试复杂空间群组、密集物体排列、暗调暖光氛围与人物神态刻画。",
    "coreSubject": "An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_d_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_d_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_d_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_d_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_d_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_d_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_d_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_d_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_d_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_d_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_d_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_d_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_d_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_d_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_d_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_d_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_d_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_d_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_d_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_d_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_d_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_d_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_d_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_d_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_d_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_d_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_d_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_d_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_d_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_d_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_d_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_d_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_d_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_d_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_d_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_d_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_d_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_d_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_d_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_d_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_d_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_d_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_d_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_d_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_d_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_d_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_d_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_d_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_d_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of An elderly scholar with round spectacles reading a leather-bound grimoire inside a towering midnight antique bookstore, towering bookshelves, warm brass desk lamp, floating dust motes, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_e",
    "title": "V · 云海机械飞艇与悬空港",
    "subtitle": "奇幻工业 · 复杂机械结构与宏大云雾大气透视",
    "badge": "16:9 全景比例",
    "description": "一艘由黄铜齿轮与巨大气囊构成的蒸汽朋克机械巨型飞艇，正缓缓停靠在云海之上的悬空浮岛空港，落日余晖穿透蒸腾云海，悬索桥在狂风中微摆。用于测试复杂机械硬表面、材质金属反光、多层云雾景深与工业科幻宏大构图。",
    "coreSubject": "A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_e_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_e_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_e_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_e_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_e_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_e_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_e_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_e_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_e_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_e_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_e_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_e_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_e_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_e_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_e_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_e_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_e_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_e_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_e_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_e_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_e_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_e_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_e_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_e_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_e_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_e_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_e_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_e_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_e_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_e_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_e_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_e_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_e_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_e_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_e_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_e_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_e_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_e_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_e_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_e_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_e_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_e_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_e_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_e_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_e_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_e_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_e_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_e_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_e_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of A colossal steampunk brass mechanical airship docking at a floating cloud city skyport, spinning bronze propellers, intricate suspension bridges, dramatic sunset clouds billowing below, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_f",
    "title": "VI · 深海发光水母与探险潜水员",
    "subtitle": "幽暗水下 · 生物荧光、丁达尔光束与半透明材质",
    "badge": "16:9 全景比例",
    "description": "在幽深静谧的海底深渊中，身着复古铜盔潜水服的探险家手持探照灯，正迎面穿过一群散发着梦幻荧光的巨大半透明水母群，丁达尔光束穿透深蓝海水，气泡闪烁升腾。用于测试半透明介质折射、自发光体散射、深水环境光衰减与神秘深邃氛围。",
    "coreSubject": "A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_f_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_f_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_f_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_f_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_f_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_f_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_f_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_f_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_f_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_f_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_f_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_f_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_f_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_f_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_f_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_f_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_f_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_f_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_f_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_f_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_f_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_f_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_f_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_f_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_f_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_f_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_f_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_f_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_f_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_f_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_f_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_f_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_f_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_f_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_f_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_f_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_f_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_f_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_f_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_f_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_f_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_f_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_f_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_f_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_f_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_f_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_f_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_f_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_f_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of A deep sea diver in antique bronze diving suit encountering a majestic swarm of giant glowing bioluminescent jellyfish in deep oceanic trench, volumetric god rays, sparkling bubbles, deep sapphire water, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_g",
    "title": "VII · 赛博雨夜拉面馆与机械少女",
    "subtitle": "未来街头 · 霓虹倒影、机能服饰与机械臂结构",
    "badge": "16:9 全景比例",
    "description": "赛博朋克风格的新东京雨夜窄巷中，半机械少女正坐在冒着热气的路边拉面摊前，由多轴仿生机械臂厨师递上拉面，周围是层叠的霓虹广告牌与湿滑沥青地面的倒影。用于测试高饱和未来光影、机械关节结构、雨丝质感与科幻市井烟火气。",
    "coreSubject": "A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_g_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_g_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_g_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_g_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_g_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_g_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_g_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_g_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_g_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_g_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_g_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_g_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_g_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_g_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_g_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_g_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_g_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_g_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_g_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_g_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_g_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_g_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_g_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_g_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_g_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_g_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_g_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_g_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_g_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_g_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_g_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_g_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_g_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_g_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_g_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_g_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_g_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_g_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_g_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_g_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_g_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_g_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_g_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_g_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_g_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_g_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_g_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_g_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_g_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of A cyborg girl and an android chef preparing ramen in a steaming noodle cart inside a rain-slicked Neo-Tokyo alleyway, holographic neon signs, steaming broth, wet asphalt reflections, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_h",
    "title": "VIII · 森林深处的魔导树屋与炼金女巫",
    "subtitle": "奇幻自然 · 苍古巨树生态、魔药器皿与微光氛围",
    "badge": "16:9 全景比例",
    "description": "在一棵贯通天地的万年魔导发光巨树躯干上搭建的多层精致木构树屋实验室中，年轻的炼金女巫正在调配发光的魔药，周围挂满了风干草药、发光荧光菌菇与咕嘟冒泡的蒸馏瓶。用于测试奇幻生态、木质与玻璃材质反光、柔和微光照明与温馨童话细节。",
    "coreSubject": "A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_h_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_h_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_h_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_h_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_h_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_h_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_h_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_h_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_h_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_h_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_h_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_h_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_h_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_h_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_h_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_h_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_h_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_h_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_h_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_h_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_h_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_h_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_h_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_h_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_h_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_h_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_h_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_h_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_h_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_h_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_h_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_h_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_h_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_h_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_h_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_h_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_h_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_h_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_h_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_h_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_h_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_h_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_h_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_h_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_h_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_h_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_h_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_h_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_h_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of A young alchemist witch brewing glowing potions inside a whimsical multi-level treehouse laboratory in deep ancient enchanted forest, bubbling glass alembics, bioluminescent mushrooms, soft moonbeam, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  },
  {
    "id": "scene_i",
    "title": "IX · 荒漠废墟与流浪机械驼兽",
    "subtitle": "废土异星 · 风蚀古遗迹、重装机械兽与黄昏沙海",
    "badge": "16:9 全景比例",
    "description": "金黄色漫天沙尘暴渐歇的废土荒漠上，一位披着防风斗篷的异星流浪者牵着一头背负重型货柜的四足重装机械驼兽，正缓缓穿过风蚀严重的古文明神庙巨柱废墟。用于测试粗糙砂石与风化石材肌理、重型工业骨架、黄昏强逆光与苍茫苍凉的史诗空间感。",
    "coreSubject": "A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset",
    "aspectRatio": "16:9",
    "styles": [
      {
        "id": "scene_i_01_impasto",
        "number": "01",
        "nameCn": "厚涂油画",
        "nameEn": "Impasto Oil Painting",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_01_impasto.jpg",
        "hasImage": true,
        "tags": [
          "颜料堆叠",
          "油画刀刮痕",
          "明暗对比",
          "厚重体积"
        ],
        "master": "Craig Mullins / 梵高 / 伦勃朗",
        "colorTone": "浓郁原色厚彩与雕塑感明暗",
        "technique": "使用厚重油彩与油画刀层叠涂抹，强调厚重物理肌理与雕塑般的形体转折。",
        "prompt": "Impasto oil painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, thick visible palette knife strokes, heavy textured oil paint, rich chiaroscuro lighting, Craig Mullins style --ar 16:9",
        "keyModifiers": [
          "impasto oil painting",
          "thick visible palette knife strokes",
          "heavy textured oil paint",
          "rich chiaroscuro lighting",
          "Craig Mullins style"
        ]
      },
      {
        "id": "scene_i_02_watercolor",
        "number": "02",
        "nameCn": "通透水彩",
        "nameEn": "Luminous Watercolor",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_02_watercolor.jpg",
        "hasImage": true,
        "tags": [
          "湿画晕染",
          "边缘渗色",
          "水光透明",
          "冷压纸纹"
        ],
        "master": "Sargent / 现代水彩插画",
        "colorTone": "清透水色与柔和扩散边缘",
        "technique": "利用水分在粗纹水彩纸上的自然扩散与留白，形成半透明的色彩交融与光影流动感。",
        "prompt": "Luminous watercolor painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, wet-on-wet bleeding washes, translucent watercolor pigments, visible cold-press paper grain, delicate soft ink lines --ar 16:9",
        "keyModifiers": [
          "luminous watercolor painting",
          "wet-on-wet bleeding washes",
          "translucent watercolor pigments",
          "visible cold-press paper grain",
          "delicate soft ink lines"
        ]
      },
      {
        "id": "scene_i_03_impressionism",
        "number": "03",
        "nameCn": "印象派与点彩",
        "nameEn": "Impressionist Oil",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_03_impressionism.jpg",
        "hasImage": true,
        "tags": [
          "瞬时光影",
          "颤动笔触",
          "色彩并置",
          "空气透视"
        ],
        "master": "莫奈 (Monet) / 皮萨罗 (Pissarro)",
        "colorTone": "跳跃纯色并置与室外日光微颤",
        "technique": "以碎小跳跃的纯色笔触并置，利用人眼视觉混合产生光彩闪烁的颤动感与空气感。",
        "prompt": "Impressionist oil painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, loose flickering brushstrokes, Claude Monet style, vibrant unmixed color vibration, dappled ambient light --ar 16:9",
        "keyModifiers": [
          "impressionist oil painting",
          "loose flickering brushstrokes",
          "Claude Monet style",
          "vibrant unmixed color vibration",
          "dappled ambient light"
        ]
      },
      {
        "id": "scene_i_04_silkscreen",
        "number": "04",
        "nameCn": "丝网版画 / 波普艺术",
        "nameEn": "Silkscreen / Pop Art",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_i_04_silkscreen.jpg",
        "hasImage": true,
        "tags": [
          "对位错版",
          "高饱和平涂",
          "粗颗粒网点",
          "波普海报"
        ],
        "master": "安迪·沃霍尔 (Andy Warhol)",
        "colorTone": "高对比荧光色与平涂色块碰撞",
        "technique": "模拟手工丝网多层孔版套印，带有标志性的边缘微错位与印刷漏色质感。",
        "prompt": "Silkscreen screenprint pop art of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, bold flat color blocks, slight misregistration print offset, Andy Warhol graphic poster aesthetic --ar 16:9",
        "keyModifiers": [
          "silkscreen screenprint pop art",
          "bold flat color blocks",
          "slight misregistration print offset",
          "Andy Warhol graphic poster aesthetic"
        ]
      },
      {
        "id": "scene_i_05_ukiyoe",
        "number": "05",
        "nameCn": "浮世绘木刻版画",
        "nameEn": "Japanese Ukiyo-e",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_i_05_ukiyoe.jpg",
        "hasImage": true,
        "tags": [
          "黑墨勾线",
          "矿物颜料平涂",
          "和纸纤维",
          "散点构图"
        ],
        "master": "葛饰北斋 / 歌川广重",
        "colorTone": "青花靛蓝、岱赭与和纸米白",
        "technique": "严谨克制的木刻雕版墨线，搭配传统矿物植物颜料的大面积平涂与木质拓印感。",
        "prompt": "Authentic Japanese Ukiyo-e woodblock print of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, crisp black sumi-e outlines, flat mineral pigment washes, washi paper texture, Hokusai style --ar 16:9",
        "keyModifiers": [
          "authentic Japanese Ukiyo-e",
          "woodblock print",
          "crisp black sumi-e outlines",
          "flat mineral pigment washes",
          "washi paper texture",
          "Hokusai style"
        ]
      },
      {
        "id": "scene_i_06_vintage_comic",
        "number": "06",
        "nameCn": "美式复古网点漫画",
        "nameEn": "1960s Vintage Comic",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_i_06_vintage_comic.jpg",
        "hasImage": true,
        "tags": [
          "Ben-Day 网点",
          "粗黑墨线",
          "胶印三原色",
          "复古分镜"
        ],
        "master": "Roy Lichtenstein / Jack Kirby",
        "colorTone": "复古洋红、青蓝、柠檬黄三色套印",
        "technique": "采用 1960 年代廉价纸浆漫画印刷的本戴网点（Ben-Day dots）与粗粝黑线描边。",
        "prompt": "Vintage 1960s comic book illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Roy Lichtenstein style, prominent Ben-Day halftone dots, bold black ink contour lines, retro pulp adventure panel --ar 16:9",
        "keyModifiers": [
          "vintage 1960s comic book illustration",
          "Roy Lichtenstein style",
          "prominent Ben-Day halftone dots",
          "bold black ink contour lines",
          "retro pulp comic panel"
        ]
      },
      {
        "id": "scene_i_07_citypop",
        "number": "07",
        "nameCn": "日系 80s City Pop",
        "nameEn": "Japanese 80s City Pop",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_i_07_citypop.jpg",
        "hasImage": true,
        "tags": [
          "高饱和度",
          "几何硬边阴影",
          "度假泳池蓝",
          "复古都市浪漫"
        ],
        "master": "永井博 (Hiroshi Nagai) / 铃木英人",
        "colorTone": "晴空蔚蓝、棕榈青翠、落日火烈鸟粉",
        "technique": "极简平整的无渐变色块、干脆利落的几何投射硬阴影，营造平静且略带怀旧的度假氛围。",
        "prompt": "1980s Japanese City Pop aesthetic illustration by Hiroshi Nagai, A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, clean flat geometric shadows, vibrant dusk sky gradients, retro resort mood --ar 16:9",
        "keyModifiers": [
          "1980s Japanese City Pop aesthetic",
          "illustration by Hiroshi Nagai",
          "clean flat geometric shadows",
          "vibrant dusk sky gradients",
          "retro resort mood"
        ]
      },
      {
        "id": "scene_i_08_artnouveau",
        "number": "08",
        "nameCn": "新艺术运动装饰画",
        "nameEn": "Art Nouveau",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_i_08_artnouveau.jpg",
        "hasImage": true,
        "tags": [
          "有机波浪曲线",
          "植物卷草纹",
          "流线型发丝",
          "唯美装饰"
        ],
        "master": "阿尔丰斯·穆夏 (Alphonse Mucha)",
        "colorTone": "金箔色、鼠尾草绿与淡鸢尾紫",
        "technique": "汲取自然植物花茎的有机流动曲线（鞭绳线），辅以华丽繁复的几何边框与石版画色泽。",
        "prompt": "Art Nouveau masterpiece illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Alphonse Mucha style, flowing organic curves, intricate decorative border, golden foil accents, elegant lithograph --ar 16:9",
        "keyModifiers": [
          "Art Nouveau masterpiece illustration",
          "Alphonse Mucha style",
          "flowing organic curves",
          "intricate decorative border",
          "golden foil accents",
          "elegant lithograph"
        ]
      },
      {
        "id": "scene_i_09_artdeco",
        "number": "09",
        "nameCn": "装饰风艺术",
        "nameEn": "Art Deco",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_i_09_artdeco.jpg",
        "hasImage": true,
        "tags": [
          "流线型对称",
          "阶梯折线",
          "奢华金色",
          "工业摩登"
        ],
        "master": "Tamara de Lempicka / A.M. Cassandre",
        "colorTone": "黑曜石、香槟金与高贵翡翠绿",
        "technique": "强调机械时代的几何纯粹性、放射状射线与阶梯状轮廓，散发爵士时代的摩登奢华感。",
        "prompt": "1920s Art Deco illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, sleek streamlined symmetries, rich gold and emerald palette, Great Gatsby aesthetic, luxury geometric poster --ar 16:9",
        "keyModifiers": [
          "1920s Art Deco illustration",
          "sleek streamlined symmetries",
          "rich gold and emerald palette",
          "Great Gatsby aesthetic",
          "luxury geometric poster"
        ]
      },
      {
        "id": "scene_i_10_cyberpunk",
        "number": "10",
        "nameCn": "赛博朋克概念美术",
        "nameEn": "Cyberpunk Concept Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_10_cyberpunk.jpg",
        "hasImage": true,
        "tags": [
          "霓虹眩光",
          "雨夜潮湿倒影",
          "全息投影",
          "高科技低生活"
        ],
        "master": "Syd Mead / 《银翼杀手》",
        "colorTone": "电光蓝、荧光品红与暗夜漆黑",
        "technique": "通过强烈对比的霓虹自发光、潮湿地面反射与大气体积光雾，构建高密度未来都市。",
        "prompt": "Cyberpunk sci-fi illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Blade Runner atmosphere, volumetric neon mist, glowing cyan and magenta signs, high-tech cybernetic details --ar 16:9",
        "keyModifiers": [
          "cyberpunk sci-fi illustration",
          "Blade Runner atmosphere",
          "volumetric neon mist",
          "glowing cyan and magenta signs",
          "high-tech cybernetic details"
        ]
      },
      {
        "id": "scene_i_11_ghibli",
        "number": "11",
        "nameCn": "吉卜力手绘动画",
        "nameEn": "Studio Ghibli Cel Anime",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_11_ghibli.jpg",
        "hasImage": true,
        "tags": [
          "温暖手绘感",
          "积雨云",
          "清透自然光",
          "赛璐珞治愈"
        ],
        "master": "宫崎骏 / 男鹿和雄 / 吉卜力工作室",
        "colorTone": "青草绿、晴空蓝与水洗暖白",
        "technique": "追求手绘赛璐珞水粉背景的温润自然感，强调丰富细腻的植被光影与治愈系生活气息。",
        "prompt": "Studio Ghibli style cel-shaded anime background of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, vast blue sky, billowing clouds, Hayao Miyazaki aesthetic, lush hand-painted warmth --ar 16:9",
        "keyModifiers": [
          "Studio Ghibli style",
          "cel-shaded anime background",
          "vast blue sky",
          "billowing clouds",
          "Hayao Miyazaki aesthetic",
          "lush hand-painted warmth"
        ]
      },
      {
        "id": "scene_i_12_flatvector",
        "number": "12",
        "nameCn": "极简矢量几何插画",
        "nameEn": "Minimalist Flat Vector",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_12_flatvector.jpg",
        "hasImage": true,
        "tags": [
          "负空间构图",
          "锐利几何边缘",
          "极致克制",
          "现代平面"
        ],
        "master": "Malika Favre / Noma Bar",
        "colorTone": "极度克制的 3-4 种高对比纯色",
        "technique": "将形体高度抽象概括为几何矢量贝塞尔曲线，巧用正负形转换与无渐变平涂。",
        "prompt": "Minimalist flat vector illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Malika Favre style, bold negative space, high contrast silhouette, clean geometric vector shapes --ar 16:9",
        "keyModifiers": [
          "minimalist flat vector illustration",
          "Malika Favre style",
          "bold negative space",
          "high contrast silhouette",
          "clean geometric vector shapes"
        ]
      },
      {
        "id": "scene_i_13_pixelart",
        "number": "13",
        "nameCn": "16-bit 怀旧像素",
        "nameEn": "16-Bit Pixel Art",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_13_pixelart.jpg",
        "hasImage": true,
        "tags": [
          "有限调色盘",
          "网点抖动",
          "点阵网格",
          "复古游戏"
        ],
        "master": "90s SNES / SFC 经典 RPG 黄金时代",
        "colorTone": "经典 32 色受限调色板与像素抖动",
        "technique": "在低分辨率像素网格中严谨排布单个色块，使用 Dithering（抖动算法）模拟过渡光影。",
        "prompt": "16-bit pixel art of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, nostalgic retro 90s RPG aesthetic, crisp pixel details, warm glowing dithering --ar 16:9",
        "keyModifiers": [
          "16-bit pixel art",
          "nostalgic retro 90s RPG aesthetic",
          "crisp pixel details",
          "warm glowing dithering"
        ]
      },
      {
        "id": "scene_i_14_crayon",
        "number": "14",
        "nameCn": "儿童蜡笔拼贴绘本",
        "nameEn": "Crayon & Collage Picture Book",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_14_crayon.jpg",
        "hasImage": true,
        "tags": [
          "蜡质刮痕",
          "撕纸拼贴",
          "童趣纯真",
          "手工触感"
        ],
        "master": "艾瑞·卡尔 (Eric Carle) / 李欧·李奥尼",
        "colorTone": "明亮稚拙的原色与蜡笔混色",
        "technique": "结合手绘压花色纸撕贴与厚重油画棒涂抹，保留未修饰的孩童般直觉表现力。",
        "prompt": "Children's picture book illustration in Eric Carle style, A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, rich waxy crayon textures, hand-painted textured paper collage, playful naive art --ar 16:9",
        "keyModifiers": [
          "children's picture book illustration",
          "Eric Carle style",
          "rich waxy crayon textures",
          "hand-painted textured paper collage",
          "playful naive art"
        ]
      },
      {
        "id": "scene_i_15_gothic",
        "number": "15",
        "nameCn": "哥特中世纪蚀刻版画",
        "nameEn": "Gothic Medieval Woodcut",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_i_15_gothic.jpg",
        "hasImage": true,
        "tags": [
          "中世纪蚀刻",
          "细密排线",
          "羊皮纸肌理",
          "暗黑神秘"
        ],
        "master": "阿尔布雷希特·丢勒 (Albrecht Dürer) / 古斯塔夫·多雷",
        "colorTone": "古旧羊皮纸黄、炭黑蚀刻墨线与暗金微芒",
        "technique": "严密繁复的交叉羽状排线（Cross-Hatching），辅以暗黄羊皮纸纤维沉淀与中世纪神秘学图腾感。",
        "prompt": "Gothic medieval woodcut engraving of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Albrecht Dürer and Gustave Doré style, intricate cross-hatching, antique parchment texture, dark fantasy atmosphere, delicate black ink contour lines, 16th century print --ar 16:9",
        "keyModifiers": [
          "Gothic medieval woodcut engraving",
          "Albrecht Dürer and Gustave Doré style",
          "intricate cross-hatching",
          "antique parchment texture",
          "dark fantasy atmosphere",
          "16th century print"
        ]
      },
      {
        "id": "scene_i_16_cubism",
        "number": "16",
        "nameCn": "立体主义解构",
        "nameEn": "Cubism & Geometric Deconstruction",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_16_cubism.jpg",
        "hasImage": true,
        "tags": [
          "多重视角",
          "几何切面",
          "解构重组",
          "拼贴质感"
        ],
        "master": "巴勃罗·毕加索 (Pablo Picasso) / 乔治·布拉克",
        "colorTone": "土赭石、灰蓝、炭黑与麻布原色",
        "technique": "打破单一焦点透视，将物体分解为多个几何平面在同一画面上重叠拼贴与多角度并置。",
        "prompt": "Synthetic Cubism oil painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Pablo Picasso and Georges Braque style, deconstructed geometric facets, multiple viewpoints, textured ochre and slate blue collage planes, bold angular composition --ar 16:9",
        "keyModifiers": [
          "Synthetic Cubism oil painting",
          "Pablo Picasso and Georges Braque style",
          "deconstructed geometric facets",
          "multiple viewpoints",
          "textured collage planes",
          "bold angular composition"
        ]
      },
      {
        "id": "scene_i_17_surrealism",
        "number": "17",
        "nameCn": "超现实主义梦境",
        "nameEn": "Surrealism & Dreamscape",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_17_surrealism.jpg",
        "hasImage": true,
        "tags": [
          "潜意识梦境",
          "违背物理",
          "悬浮异象",
          "空旷地平线"
        ],
        "master": "萨尔瓦多·达利 (Salvador Dalí) / 勒内·玛格利特",
        "colorTone": "诡谲黄昏金、空灵暮蓝与超现实冷调光影",
        "technique": "以极度写实细腻的古典油画技法，描绘荒诞违背常理的梦境幻象与极度延伸的无限透视空间。",
        "prompt": "Surrealist dreamscape painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Salvador Dalí and René Magritte style, impossible physics, floating objects, long mysterious twilight shadows, metaphysical desolate horizon, hyper-detailed oil rendering --ar 16:9",
        "keyModifiers": [
          "Surrealist dreamscape painting",
          "Salvador Dalí and René Magritte style",
          "impossible physics",
          "floating objects",
          "long mysterious twilight shadows",
          "metaphysical desolate horizon"
        ]
      },
      {
        "id": "scene_i_18_chinese_ink",
        "number": "18",
        "nameCn": "新中式青绿水墨",
        "nameEn": "Contemporary Chinese Ink & Gongbi",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_18_chinese_ink.jpg",
        "hasImage": true,
        "tags": [
          "宣纸留白",
          "青绿设色",
          "水墨晕染",
          "金线工笔"
        ],
        "master": "张大千 / 宋代院体工笔 / 傅抱石",
        "colorTone": "石青、石绿、焦墨与生宣温润牙白",
        "technique": "取宋画院体工笔的精微骨线与青绿矿物设色，融合大写意泼墨水晕，以气韵生动的留白营造东方意境。",
        "prompt": "Contemporary Chinese ink wash and mineral pigment painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, poetic negative space, wet sumi-e ink bleeding on rice paper, lush mineral malachite green and azurite blue washes, delicate golden gongbi line work --ar 16:9",
        "keyModifiers": [
          "contemporary Chinese ink wash",
          "mineral pigment painting",
          "poetic negative space",
          "wet sumi-e ink bleeding on rice paper",
          "mineral malachite green washes",
          "delicate golden gongbi line work"
        ]
      },
      {
        "id": "scene_i_19_steampunk",
        "number": "19",
        "nameCn": "维多利亚蒸汽朋克工笔",
        "nameEn": "Victorian Steampunk Blueprint",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_i_19_steampunk.jpg",
        "hasImage": true,
        "tags": [
          "黄铜发条",
          "精细机械齿轮",
          "达芬奇手稿",
          "复古蓝图"
        ],
        "master": "维多利亚工业版画 / 大友克洋 (《蒸汽男孩》)",
        "colorTone": "熟褐青铜、抛光黄铜与发黄工程羊皮纸",
        "technique": "融合达芬奇机械设计草图的工笔精确性与维多利亚时代铜版工程雕刻，充满外露发条与蒸汽管路细节。",
        "prompt": "Victorian steampunk technical illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, intricate exposed brass clockwork gears, polished copper pipes, blueprint architectural drafting aesthetics, antique sepia paper, Da Vinci engineering drawing precision --ar 16:9",
        "keyModifiers": [
          "Victorian steampunk technical illustration",
          "intricate exposed brass clockwork gears",
          "polished copper pipes",
          "blueprint architectural drafting",
          "antique sepia paper",
          "Da Vinci drawing precision"
        ]
      },
      {
        "id": "scene_i_20_synthwave",
        "number": "20",
        "nameCn": "复古未来 80s 霓虹波",
        "nameEn": "80s Synthwave Retrowave",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_20_synthwave.jpg",
        "hasImage": true,
        "tags": [
          "电波网格",
          "发光条纹落日",
          "粉青激光",
          "80s 科幻卡带"
        ],
        "master": "1980s Arcade & Retrowave 潮流美学",
        "colorTone": "极光品红、电光青绿、镀铬银与暗黑宇宙紫",
        "technique": "基于 80 年代早期计算机图形学的透视线框网格，搭配强烈高发光度的镭射激光与镀铬镜面反射。",
        "prompt": "1980s Synthwave retrowave neon illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, glowing wireframe vector grid landscape, vibrant magenta and cyan lasers, chrome reflections, giant striped setting sun, retro-futuristic arcade aesthetic --ar 16:9",
        "keyModifiers": [
          "1980s Synthwave retrowave neon illustration",
          "glowing wireframe vector grid landscape",
          "vibrant magenta and cyan lasers",
          "chrome reflections",
          "giant striped setting sun"
        ]
      },
      {
        "id": "scene_i_21_gouache_folk",
        "number": "21",
        "nameCn": "北欧民间水粉插画",
        "nameEn": "Nordic Folk Art & Gouache",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_21_gouache_folk.jpg",
        "hasImage": true,
        "tags": [
          "不透明水粉",
          "民间植物纹样",
          "质朴对称",
          "温润童话"
        ],
        "master": "斯堪的纳维亚传统手作 / 托芙·扬松",
        "colorTone": "陶土红、鼠尾草绿、芥末黄与粉白",
        "technique": "使用不透明哑光水粉颜料平涂，点缀充满节奏感的北欧民间花草几何图案与温厚亲切的手绘质感。",
        "prompt": "Scandinavian Nordic folk art gouache painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, opaque matte gouache textures, whimsical decorative floral motifs and border patterns, charming naive symmetry, earthy ochre, sage green and brick red palette --ar 16:9",
        "keyModifiers": [
          "Scandinavian Nordic folk art",
          "opaque matte gouache textures",
          "whimsical decorative floral motifs",
          "charming naive symmetry",
          "earthy palette"
        ]
      },
      {
        "id": "scene_i_22_risograph",
        "number": "22",
        "nameCn": "Risograph 荧光孔版印刷",
        "nameEn": "Risograph Printmaking",
        "category": "printmaking",
        "categoryName": "版画印刷",
        "image": "images/scene_i_22_risograph.jpg",
        "hasImage": true,
        "tags": [
          "双色错位叠印",
          "荧光油墨",
          "半色调粗颗粒",
          "Zine 独立出版"
        ],
        "master": "当代 Riso 独立出版艺术 / Nobrow Press",
        "colorTone": "荧光粉 (Fluorescent Pink) 与深青绿 (Teal) 叠印",
        "technique": "模拟理光快速孔版印刷机的单色逐层套印，利用不透明荧光大豆油墨在粗面未涂布纸上的混色与错位。",
        "prompt": "Two-tone Risograph print of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, fluorescent pink and deep teal overlapping inks, grainy spot halftone screen textures, intentional print misregistration, tactile uncoated zine paper aesthetic --ar 16:9",
        "keyModifiers": [
          "two-tone Risograph print",
          "fluorescent pink and deep teal overlapping inks",
          "grainy spot halftone screen textures",
          "intentional print misregistration",
          "tactile uncoated zine paper"
        ]
      },
      {
        "id": "scene_i_23_claymation",
        "number": "23",
        "nameCn": "定格粘土与微缩模型",
        "nameEn": "Claymation Stop-Motion",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_23_claymation.jpg",
        "hasImage": true,
        "tags": [
          "指纹捏痕",
          "微缩移轴摄影",
          "温润粘土",
          "定格手工质感"
        ],
        "master": "阿德曼动画 (Aardman) / 韦斯·安德森 (《犬之岛》)",
        "colorTone": "暖调影棚光、手工彩泥原色与真实物理反光",
        "technique": "微距移轴摄影捕捉的真实手工捏塑黏土雕塑，保留微小的手工指纹痕迹、柔和光泽与浅景深虚化。",
        "prompt": "Handmade claymation stop-motion miniature scene of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, tactile plasticine clay with subtle fingerprint textures, warm studio lighting, shallow depth of field tilt-shift macro photography, Aardman aesthetic --ar 16:9",
        "keyModifiers": [
          "handmade claymation stop-motion miniature scene",
          "tactile plasticine clay with subtle fingerprint textures",
          "warm studio lighting",
          "shallow depth of field tilt-shift macro photography",
          "Aardman aesthetic"
        ]
      },
      {
        "id": "scene_i_24_stained_glass",
        "number": "24",
        "nameCn": "大教堂彩色玻璃花窗",
        "nameEn": "Luminescent Stained Glass",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_i_24_stained_glass.jpg",
        "hasImage": true,
        "tags": [
          "粗黑铅条拼接",
          "高透光琉璃",
          "神圣棱镜折射",
          "哥特花窗大作"
        ],
        "master": "夏特尔大教堂花窗 / 路易斯·康福特·蒂芙尼 (Tiffany)",
        "colorTone": "红宝石红、钴蓝、琥珀金与透光纯黑铅条",
        "technique": "以纯黑铅条分割几何玻璃骨架，内部填充如宝石般通透璀璨的彩色熔融琉璃，背光穿透产生神圣折射光斑。",
        "prompt": "Gothic cathedral luminescent stained glass window mosaic of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, bold black lead came contours, glowing translucent jewel-toned ruby, sapphire and amber glass segments, radiant backlighting and divine prism refractions --ar 16:9",
        "keyModifiers": [
          "Gothic cathedral luminescent stained glass window mosaic",
          "bold black lead came contours",
          "glowing translucent jewel-toned glass segments",
          "radiant backlighting and divine prism refractions"
        ]
      },
      {
        "id": "scene_i_25_fauvism",
        "number": "25",
        "nameCn": "野兽派色彩表现",
        "nameEn": "Fauvism Expression",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_25_fauvism.jpg",
        "hasImage": true,
        "tags": [
          "原色狂放",
          "情绪张力",
          "无拘笔触",
          "高饱和对比"
        ],
        "master": "亨利·马蒂斯 (Henri Matisse) / 安德烈·德兰 (André Derain)",
        "colorTone": "鲜明野性纯色与高对比强烈色块",
        "technique": "采用非写实的纯原色与狂放写意笔触，注重画面的直觉情绪张力与平面色彩节奏。",
        "prompt": "Fauvism oil painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Henri Matisse style, wild intense unmixed colors, bold expressive brushstrokes, emotional color fields --ar 16:9",
        "keyModifiers": [
          "fauvism oil painting",
          "Henri Matisse style",
          "wild intense unmixed colors",
          "bold expressive brushstrokes",
          "emotional color fields"
        ]
      },
      {
        "id": "scene_i_26_bauhaus",
        "number": "26",
        "nameCn": "包豪斯几何构成",
        "nameEn": "Bauhaus Constructivism",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_i_26_bauhaus.jpg",
        "hasImage": true,
        "tags": [
          "红黄蓝三原色",
          "几何网格",
          "构成主义",
          "理性秩序"
        ],
        "master": "瓦西里·康定斯基 (Wassily Kandinsky) / 莫霍利-纳吉",
        "colorTone": "纯正红黄蓝三原色与黑白灰理性底色",
        "technique": "运用圆形、三角形与矩形等几何基本形构成画面，强调秩序感与现代工业设计美学。",
        "prompt": "Bauhaus constructivism graphic art of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Wassily Kandinsky style, bold primary colors red yellow blue, sharp geometric shapes, minimalist modern grid composition --ar 16:9",
        "keyModifiers": [
          "bauhaus constructivism graphic art",
          "Wassily Kandinsky style",
          "bold primary colors red yellow blue",
          "sharp geometric shapes",
          "minimalist modern grid composition"
        ]
      },
      {
        "id": "scene_i_27_charcoal",
        "number": "27",
        "nameCn": "炭笔素描与古典排线",
        "nameEn": "Charcoal & Classical Hatching",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_27_charcoal.jpg",
        "hasImage": true,
        "tags": [
          "交叉排线",
          "炭粉颗粒",
          "黑白灰明暗",
          "解剖手稿"
        ],
        "master": "达芬奇 (Leonardo da Vinci) / 埃德加·德加 (Edgar Degas)",
        "colorTone": "复古泛黄羊皮纸上的深邃炭黑与石墨单色",
        "technique": "利用细腻精微的交叉排线与粗粝炭笔粉末，刻画结构形体与古典光影层次。",
        "prompt": "Classical charcoal and graphite sketch of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Leonardo da Vinci style, fine cross-hatching, rich monochrome graphite tones, vintage aged parchment paper --ar 16:9",
        "keyModifiers": [
          "classical charcoal and graphite sketch",
          "Leonardo da Vinci style",
          "fine cross-hatching",
          "rich monochrome graphite tones",
          "vintage aged parchment paper"
        ]
      },
      {
        "id": "scene_i_28_opart",
        "number": "28",
        "nameCn": "欧普视错觉艺术",
        "nameEn": "Op Art & Geometric Illusion",
        "category": "retro_pop",
        "categoryName": "时代美学",
        "image": "images/scene_i_28_opart.jpg",
        "hasImage": true,
        "tags": [
          "视错觉",
          "几何波纹",
          "黑白律动",
          "动态催眠"
        ],
        "master": "布里吉特·莱利 (Bridget Riley) / 维克多·瓦萨雷里 (Victor Vasarely)",
        "colorTone": "极高反差黑白对比与精准几何干涉波",
        "technique": "通过严谨的几何重复、形变与条纹间隙，在人眼视网膜上产生动态眩晕与视错觉空间。",
        "prompt": "Op Art optical illusion illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Bridget Riley style, black and white high-contrast geometric wave patterns, kinetic illusion lines --ar 16:9",
        "keyModifiers": [
          "op art optical illusion illustration",
          "Bridget Riley style",
          "black and white high-contrast geometric wave patterns",
          "kinetic illusion lines"
        ]
      },
      {
        "id": "scene_i_29_rococo",
        "number": "29",
        "nameCn": "洛可可华丽粉彩",
        "nameEn": "Rococo Pastel Elegance",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_29_rococo.jpg",
        "hasImage": true,
        "tags": [
          "宫廷奢华",
          "柔美粉彩",
          "金色卷草纹",
          "轻盈浪漫"
        ],
        "master": "让-奥诺雷·弗拉戈纳尔 (Fragonard) / 弗朗索瓦·布歇 (Boucher)",
        "colorTone": "柔美浅粉、薄荷绿与奢华镀金光泽",
        "technique": "强调轻盈优雅的曲线、细腻粉润的肤色与繁复华丽的宫廷装饰细节。",
        "prompt": "Rococo oil painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Jean-Honoré Fragonard style, soft pastel palette, ornate gilded gold details, romantic soft lighting, delicate brushwork --ar 16:9",
        "keyModifiers": [
          "rococo oil painting",
          "Jean-Honoré Fragonard style",
          "soft pastel palette",
          "ornate gilded gold details",
          "romantic soft lighting",
          "delicate brushwork"
        ]
      },
      {
        "id": "scene_i_30_lowpoly",
        "number": "30",
        "nameCn": "低多边形三维艺术",
        "nameEn": "Low Poly 3D & Papercraft",
        "category": "digital",
        "categoryName": "现代数码",
        "image": "images/scene_i_30_lowpoly.jpg",
        "hasImage": true,
        "tags": [
          "硬边多边形",
          "折纸雕塑",
          "环境光遮蔽",
          "极简棱角"
        ],
        "master": "现代 3D 概念艺术 / 折纸几何雕塑",
        "colorTone": "纯净块面着色与柔和渐变环境光",
        "technique": "以精简的平面多边形网格构筑三维物体，配合硬边缘与柔和着色形成立体折纸感。",
        "prompt": "Low poly 3D papercraft art of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, geometric faceted polygons, sharp origami edges, ambient occlusion lighting, modern 3D digital art --ar 16:9",
        "keyModifiers": [
          "low poly 3D papercraft art",
          "geometric faceted polygons",
          "sharp origami edges",
          "ambient occlusion lighting",
          "modern 3D digital art"
        ]
      },
      {
        "id": "scene_i_31_chalkboard",
        "number": "31",
        "nameCn": "粉笔黑板报手绘",
        "nameEn": "Chalkboard Art & Typography",
        "category": "printmaking",
        "categoryName": "版画与媒介",
        "image": "images/scene_i_31_chalkboard.jpg",
        "hasImage": true,
        "tags": [
          "哑光黑板",
          "粉笔粉尘",
          "手绘字线",
          "怀旧质朴"
        ],
        "master": "复古手绘黑板画 / 粉笔艺术",
        "colorTone": "深灰哑光石板底与手绘白、黄、浅蓝粉笔色",
        "technique": "在粗糙深色黑板表面以彩色粉笔勾画涂抹，呈现真实的粉质颗粒感与手作怀旧温度。",
        "prompt": "Chalkboard art and typography illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, dusty colored chalk textures, matte slate blackboard background, hand-drawn vintage bistro style --ar 16:9",
        "keyModifiers": [
          "chalkboard art and typography illustration",
          "dusty colored chalk textures",
          "matte slate blackboard background",
          "hand-drawn vintage bistro style"
        ]
      },
      {
        "id": "scene_i_32_pointillism",
        "number": "32",
        "nameCn": "点彩派光学分割",
        "nameEn": "Pointillism & Divisionism",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_32_pointillism.jpg",
        "hasImage": true,
        "tags": [
          "纯色点阵",
          "光学混色",
          "静穆光晕",
          "色调分割"
        ],
        "master": "乔治·修拉 (Georges Seurat) / 保罗·西涅克 (Paul Signac)",
        "colorTone": "细密点状纯色并置形成的柔和微光色调",
        "technique": "拒绝在调色板上混合颜料，完全以细密纯色小点在画布上排列，利用视网膜实现光学混色。",
        "prompt": "Pointillism painting of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Georges Seurat style, tiny distinct dots of pure color, optical color blending, serene luminous atmosphere --ar 16:9",
        "keyModifiers": [
          "pointillism painting",
          "Georges Seurat style",
          "tiny distinct dots of pure color",
          "optical color blending",
          "serene luminous atmosphere"
        ]
      },
      {
        "id": "scene_i_33_klimt",
        "number": "33",
        "nameCn": "克里姆特金箔装饰",
        "nameEn": "Klimt Gilded Gold Leaf",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_33_klimt.jpg",
        "hasImage": true,
        "tags": [
          "金箔贴金",
          "螺旋纹样",
          "拜占庭华贵",
          "几何嵌画"
        ],
        "master": "古斯塔夫·克里姆特 (Gustav Klimt) / 拜占庭马赛克",
        "colorTone": "璀璨真金箔色、浓郁宝石蓝与奢华翡翠绿",
        "technique": "将平面人物与繁复奢华的金箔装饰图案、螺旋几何纹样完美融合，呈现璀璨神秘质感。",
        "prompt": "Gustav Klimt style oil painting with gilded gold leaf of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, intricate gold mosaic patterns, Byzantine golden spirals, opulent decorative textures --ar 16:9",
        "keyModifiers": [
          "Gustav Klimt style oil painting",
          "gilded gold leaf",
          "intricate gold mosaic patterns",
          "Byzantine golden spirals",
          "opulent decorative textures"
        ]
      },
      {
        "id": "scene_i_34_darkfantasy",
        "number": "34",
        "nameCn": "暗黑奇幻水墨",
        "nameEn": "Dark Fantasy Ink & Macabre",
        "category": "fine_art",
        "categoryName": "传统画种",
        "image": "images/scene_i_34_darkfantasy.jpg",
        "hasImage": true,
        "tags": [
          "空灵水墨",
          "暗黑哥特",
          "飘逸线条",
          "神秘异界"
        ],
        "master": "天野喜孝 (Yoshitaka Amano) / John Blanche",
        "colorTone": "冷冽夜空蓝、苍白月白与深邃墨黑",
        "technique": "以极其纤细飘逸的墨线勾勒轮廓，结合大面积暗色水渍晕染，营造幽玄凄美的奇幻意境。",
        "prompt": "Dark fantasy watercolor and ink illustration of A desert wanderer leading a giant steampunk mechanical camel past crumbling ancient sandstone temple ruins across sand dunes at golden sunset, Yoshitaka Amano style, fluid delicate ink lines, moody ethereal shadows, haunting atmospheric watercolor washes --ar 16:9",
        "keyModifiers": [
          "dark fantasy watercolor and ink illustration",
          "Yoshitaka Amano style",
          "fluid delicate ink lines",
          "moody ethereal shadows",
          "haunting atmospheric watercolor washes"
        ]
      }
    ]
  }
];
