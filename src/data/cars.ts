export interface FeatureSlide {
  id?: string | number;
  title: string;
  image: string;
}

export interface FeatureGroup {
  name: string; // e.g. "J6", "J6T" or "Standard"
  slides: FeatureSlide[];
}

// Represents one full independent slider section with its own heading
export interface FeatureSliderSection {
  title: string;
  subtitle?: string;
  groups: FeatureGroup[];
}

export interface Car {
  id: string;
  name: string;
  category: "Tiggo" | "Chery" | "J6";
  powertrain: "ICE" | "BEV" | "CSH";
  image: string;
  heroImage?: string;
  price: string;
  tagline: string;
  specs?: string[];
  dimensions?: {
    engine: string;
    engineType?: string;
    length: string;
    lengthUnit?: string;
    wheelbase: string;
    wheelbaseUnit?: string;
  };
  description?: string;
  performance?: {
    acceleration?: string;
    topSpeed?: string;
    power?: string;
    torque?: string;
  };
  variants?: { name: string; price: string }[];
  colors?: { name: string; hex: string; image: string }[];
  featureTitle?: string;
  featureSubtitle?: string;
  featureGroups?: FeatureGroup[];
  featureSliders?: FeatureSliderSection[]; // Multiple independent slider sections
  experienceSlides?: { title: string; image: string }[]; // Super Experience coverflow slider
  experienceTitle?: string;
  experienceSubtitle?: string;
  safetyFeatures?: {
    sectionTitle?: string;
    sectionSubtitle?: string;
    items: { title: string; description?: string; image: string }[];
  };
}

export const cars: Car[] = [
  {
    id: "tiggo-cross",
    name: "Tiggo Cross",
    category: "Tiggo",
    powertrain: "ICE",
    image: "/images/cars/ice/TiggoCross.png",
    price: "Hubungi Kami",
    tagline: "The Urban Companion",
    dimensions: {
      engine: "1,5L", engineType: "CVT",
      length: "4320", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "10.5 Sec",
      topSpeed: "170 Km/h",
      power: "113 HP",
      torque: "138 Nm"
    },
    specs: ["Mesin 1.5L VVT", "Transmisi CVT 9-Speed CVT", "Kabin Luas Ekstra"],
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/ice/TiggoCross.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/ice/TiggoCross.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/ice/TiggoCross.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/ice/TiggoCross.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Nikmati kabin Tiggo Cross yang lapang dan nyaman, dipadukan dengan teknologi infotainment terkini untuk setiap perjalanan.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
      { title: "New Roof Rack", image: "/images/cars/csh/cheryc5csh/slider1/new-roof-rack.webp" },
      { title: "New CSH Emblem", image: "/images/cars/csh/cheryc5csh/slider1/new-csh-emblem.webp" },
    ],
  },
  {
    id: "tiggo-cross-sport",
    name: "Tiggo Cross Sport",
    category: "Tiggo",
    powertrain: "ICE",
    image: "/images/cars/ice/TiggoCrossSport.png",
    price: "Hubungi Kami",
    tagline: "Sporty & Dynamic",
    dimensions: {
      engine: "1,5T", engineType: "DCT",
      length: "4330", lengthUnit: "MM",
      wheelbase: "2610", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "9.8 Sec",
      topSpeed: "180 Km/h",
      power: "156 HP",
      torque: "230 Nm"
    },
    specs: ["Mesin 1.5L Turbo Dual VVT", "Transmisi CVT 9-Speed Sport Mode"],
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/ice/TiggoCrossSport.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/ice/TiggoCrossSport.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/ice/TiggoCrossSport.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/ice/TiggoCrossSport.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Rasakan kabin sporty Tiggo Cross Sport yang dirancang untuk jiwa petualang — dinamis, responsif, dan penuh gaya.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
      { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-engine.webp" },
      { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp" },
    ],
  },

  {
    id: "tiggo-8",
    name: "Tiggo 8",
    category: "Tiggo",
    powertrain: "ICE",
    image: "/images/cars/ice/Tiggo8.png",
    price: "Hubungi Kami",
    tagline: "First Class Cabin",
    dimensions: {
      engine: "2.0T", engineType: "TGDI",
      length: "4722", lengthUnit: "MM",
      wheelbase: "2710", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "8.9 Sec",
      topSpeed: "190 Km/h",
      power: "186 HP",
      torque: "275 Nm"
    },
    specs: ["Kapasitas 7 Penumpang Medium SUV", "Mesin 2.0L TGDI 250 HP"],
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/ice/Tiggo8.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/ice/Tiggo8.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/ice/Tiggo8.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/ice/Tiggo8.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Tiggo 8 menghadirkan kabin kelas dunia untuk 7 penumpang — kemewahan, keluasan, dan teknologi hadir dalam satu paket sempurna.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New Roof Rack", image: "/images/cars/csh/cheryc5csh/slider1/new-roof-rack.webp" },
      { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
      { title: "Dedicated Hybrid Transmission", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-transmission.webp" },
    ],
  },
  {
    id: "tiggo-8-pro-max",
    name: "Tiggo 8 Pro Max",
    category: "Tiggo",
    powertrain: "ICE",
    image: "/images/cars/ice/Tiggo-8-Pro-Max.png",
    price: "Rp 628.500.000",
    tagline: "Ultimate Power & Luxury",
    dimensions: {
      engine: "2,0T", engineType: "TGDI",
      length: "4722", lengthUnit: "MM",
      wheelbase: "2710", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "7.3 Sec",
      topSpeed: "210 Km/h",
      power: "250 HP",
      torque: "390 Nm"
    },
    specs: ["Penggerak AWD All-Wheel Drive", "Mesin 2.0L TGDI Generasi Terbaru"],
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/ice/Tiggo-8-Pro-Max.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/ice/Tiggo-8-Pro-Max.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/ice/Tiggo-8-Pro-Max.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/ice/Tiggo-8-Pro-Max.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Tiggo 8 Pro Max adalah puncak dari kemewahan otomotif — material premium, teknologi setara supercar, dan kenyamanan tanpa kompromi.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
      { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-engine.webp" },
      { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp" },
    ],
  },
  {
    id: "chery-c5-csh",
    name: "Chery C5 CSH",
    category: "Chery",
    powertrain: "CSH",
    image: "/images/cars/csh/chery-c5-csh-fix.webp",
    price: "Hubungi Kami",
    tagline: "Hybrid Crossover",
    dimensions: {
      engine: "1,5T", engineType: "CSH",
      length: "4400", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "7.5 Sec",
      topSpeed: "205 Km/h",
      power: "220 HP",
      torque: "330 Nm"
    },
    specs: ["Sistem Hybrid Canggih", "Efisiensi Bahan Bakar Ekstra"],
    colors: [
      { name: "White Howlite Black", hex: "#e8e8e8", image: "/images/cars/csh/chery-c5-csh-fix.webp" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/csh/chery-c5-csh-fix.webp" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/csh/chery-c5-csh-fix.webp" },
      { name: "Pearl White", hex: "#f8f8f8", image: "/images/cars/csh/chery-c5-csh-fix.webp" },
    ],
    featureTitle: "CHERY C5 CSH — HYBRID PERFECTION",
    featureSubtitle: "Teknologi CSH terdepan yang menghadirkan efisiensi hibrida canggih tanpa kompromi pada performa.",
    featureSliders: [
      {
        title: "EXTERIOR DESIGN",
        subtitle: "Setiap lekukan penuh makna, estetika progresif yang memimpin tren desain masa depan.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp" },
              { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-engine.webp" },
              { title: "Dedicated Hybrid Transmission", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-transmission.webp" },
            ]
          }
        ]
      },
      {
        title: "HYBRID TECHNOLOGY",
        subtitle: "Sistem hibrida canggih yang memadukan efisiensi tinggi dengan tenaga penuh untuk pengalaman berkendara terbaik.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "New CSH Emblem", image: "/images/cars/csh/cheryc5csh/slider1/new-csh-emblem.webp" },
              { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
              { title: "New Roof Rack", image: "/images/cars/csh/cheryc5csh/slider1/new-roof-rack.webp" },
              { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Interior Chery C5 CSH memadukan material premium dengan sistem infotainment cerdas untuk pengalaman berkendara hibrida yang tak tertandingi.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
      { title: "New Roof Rack", image: "/images/cars/csh/cheryc5csh/slider1/new-roof-rack.webp" },
      { title: "New CSH Emblem", image: "/images/cars/csh/cheryc5csh/slider1/new-csh-emblem.webp" },
      { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "The synergy of efficient engines and advanced systems ensures excellent dynamics of the Chery C5 CSH and a comfortable, safe ride.",
      items: [
        {
          title: "Dedicated Hybrid Battery",
          description: "Baterai hibrida khusus dengan manajemen termal canggih, memastikan keandalan maksimum dan ketahanan jangka panjang.",
          image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp"
        },
        {
          title: "Dedicated Hybrid Engine",
          description: "Mesin hibrida generasi terbaru yang dioptimalkan untuk efisiensi pembakaran tertinggi dan emisi paling rendah.",
          image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-engine.webp"
        },
        {
          title: "Dedicated Hybrid Transmission",
          description: "Transmisi hibrida pin-point yang memastikan perpindahan daya paling halus antara motor listrik dan mesin pembakaran.",
          image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-transmission.webp"
        },
        {
          title: "Advanced Interior Design",
          description: "Interior premium yang dirancang dengan ergonomi terbaik, mendukung kenyamanan berkendara dalam jarak jauh.",
          image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp"
        },
      ],
    },
  },
  {
    id: "tiggo-8-csh",
    name: "Tiggo 8 CSH",
    category: "Tiggo",
    powertrain: "CSH",
    image: "/images/cars/csh/Tiggo8CSH.png",
    price: "Hubungi Kami",
    tagline: "Advanced Hybrid",
    dimensions: {
      engine: "1,5T", engineType: "CSH",
      length: "4722", lengthUnit: "MM",
      wheelbase: "2710", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "7.7 Sec",
      topSpeed: "200 Km/h",
      power: "241 HP",
      torque: "375 Nm"
    },
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/csh/Tiggo8CSH.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/csh/Tiggo8CSH.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/csh/Tiggo8CSH.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/csh/Tiggo8CSH.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Tiggo 8 CSH menghadirkan interior full hybrid yang intelligent — segalanya terkoneksi, responsif, dan mewah di dalam kabin.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-engine.webp" },
      { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp" },
      { title: "Dedicated Hybrid Transmission", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-transmission.webp" },
    ],
  },
  {
    id: "tiggo-9-csh",
    name: "Tiggo 9 CSH",
    category: "Tiggo",
    powertrain: "CSH",
    image: "/images/cars/csh/Tiggo9CSH.png",
    price: "Hubungi Kami",
    tagline: "The Flagship Luxury",
    dimensions: {
      engine: "1,5T", engineType: "CSH",
      length: "4810", lengthUnit: "MM",
      wheelbase: "2800", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "7.0 Sec",
      topSpeed: "210 Km/h",
      power: "360 HP",
      torque: "530 Nm"
    },
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/csh/Tiggo9CSH.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/csh/Tiggo9CSH.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/csh/Tiggo9CSH.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/csh/Tiggo9CSH.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Tiggo 9 CSH adalah puncak flagship Chery — kabin executive-class yang memanjakan dengan teknologi hibrida terdepan di kelasnya.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
      { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-engine.webp" },
      { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp" },
      { title: "Dedicated Hybrid Transmission", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-transmission.webp" },
    ],
  },
  {
    id: "tiggo-cross-csh",
    name: "Tiggo Cross CSH",
    category: "Tiggo",
    powertrain: "CSH",
    image: "/images/cars/csh/Tiggo-Cross-CSH.png",
    price: "Hubungi Kami",
    tagline: "Hybrid Urban Style",
    dimensions: {
      engine: "1,5L", engineType: "CSH",
      length: "4330", lengthUnit: "MM",
      wheelbase: "2610", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "8.5 Sec",
      topSpeed: "190 Km/h",
      power: "215 HP",
      torque: "320 Nm"
    },
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/csh/Tiggo-Cross-CSH.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/csh/Tiggo-Cross-CSH.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/csh/Tiggo-Cross-CSH.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/csh/Tiggo-Cross-CSH.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Tiggo Cross CSH memadukan gaya urban compact dengan teknologi hibrida canggih — efisien di kota, bertenaga di jalan.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New CSH Emblem", image: "/images/cars/csh/cheryc5csh/slider1/new-csh-emblem.webp" },
      { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-engine.webp" },
      { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/cheryc5csh/sliderfeatures/dedicated-hybrid-battery.webp" },
    ],
  },
  {
    id: "chery-5",
    name: "Chery 5",
    category: "Chery",
    powertrain: "ICE",
    image: "/images/cars/ice/CheryC5.png",
    price: "Hubungi Kami",
    tagline: "Cross Future",
    dimensions: {
      engine: "1,5T", engineType: "CVT",
      length: "4400", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "7.8 Sec",
      topSpeed: "206 Km/h",
      power: "197 HP",
      torque: "290 Nm"
    },
    specs: ["Mesin 1.5L Turbo 145 HP", "Desain Crossover Futuristik"],
    colors: [
      { name: "White Howlite", hex: "#f0f0f0", image: "/images/cars/ice/CheryC5.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/ice/CheryC5.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/ice/CheryC5.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/ice/CheryC5.png" },
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Interior Chery 5 yang futuristik menghadirkan ekosistem digital yang sepenuhnya terhubung untuk gaya hidup modern Anda.",
    experienceSlides: [
      { title: "New Interior Design", image: "/images/cars/csh/cheryc5csh/slider1/new-interior-design.webp" },
      { title: "New Wheel Design", image: "/images/cars/csh/cheryc5csh/slider1/new-wheel-design.webp" },
      { title: "New Roof Rack", image: "/images/cars/csh/cheryc5csh/slider1/new-roof-rack.webp" },
      { title: "New CSH Emblem", image: "/images/cars/csh/cheryc5csh/slider1/new-csh-emblem.webp" },
    ],
  },
  {
    id: "chery-e5",
    name: "Chery E5",
    category: "Chery",
    powertrain: "BEV",
    image: "/images/cars/bev/CheryE5.png",
    heroImage: "/images/cars/bev/cherye5/specshighlight-cherye5.jpg",
    price: "Rp 488.800.000",
    tagline: "Drive The Future, Electric",
    dimensions: {
      engine: "BEV", engineType: "CSH",
      length: "4424", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "7.2 Sec",
      topSpeed: "175 Km/h",
      power: "201 HP",
      torque: "340 Nm"
    },
    specs: ["100% Electric Vehicle (EV)", "Jarak Tempuh Hingga 430 km (WLTP)"],
    colors: [
      { name: "Pearl White", hex: "#f5f5f5", image: "/images/cars/bev/CheryE5.png" },
      { name: "Crimson Red", hex: "#C0392B", image: "/images/cars/bev/CheryE5.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/bev/CheryE5.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/bev/CheryE5.png" },
    ],
    featureTitle: "DRIVEN BY THE FUTURE",
    featureSubtitle: "Teknologi elektrik terdepan yang menghadirkan performa luar biasa tanpa emisi, untuk perjalanan yang lebih bersih dan bertenaga.",
    featureGroups: [
      {
        name: "Standard",
        slides: [
          { title: "Futuristic Alumunium Velg", image: "/images/cars/bev/cherye5/slider1/Futuristic Alumunium Velg.jpg" },
          { title: "LED Rear Lamp", image: "/images/cars/bev/cherye5/slider1/LED-Rear-Lamp.jpg" },
          { title: "Light Shadow Body", image: "/images/cars/bev/cherye5/slider1/Light-Shadow-Stream-Line-Body.jpg" },
          { title: "X Future Tech Front", image: "/images/cars/bev/cherye5/slider1/X-Future-Tech-Front.jpg" },
          { title: "Full LED Headlamp", image: "/images/cars/bev/cherye5/slider1/full-led-highbeam-lowbeam.webp" },
          { title: "LED Daytime Running Light", image: "/images/cars/bev/cherye5/slider1/led-daytime-running-light.webp" },
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Rasakan kemewahan interior Chery E5 yang futuristik — di mana teknologi inovatif dan kenyamanan berkelas tinggi berpadu sempurna.",
    experienceSlides: [
      { title: "X Future Tech Front", image: "/images/cars/bev/cherye5/slider1/X-Future-Tech-Front.jpg" },
      { title: "Light Shadow Body", image: "/images/cars/bev/cherye5/slider1/Light-Shadow-Stream-Line-Body.jpg" },
      { title: "LED Rear Lamp", image: "/images/cars/bev/cherye5/slider1/LED-Rear-Lamp.jpg" },
      { title: "Full LED Headlamp", image: "/images/cars/bev/cherye5/slider1/full-led-highbeam-lowbeam.webp" },
      { title: "LED DRL", image: "/images/cars/bev/cherye5/slider1/led-daytime-running-light.webp" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Advanced protection and intelligent driving technology to keep you and your loved ones secure on every journey.",
      items: [
        {
          title: "X Future Tech Front",
          description: "Paket keselamatan aktif depan yang mendeteksi potensi tabrakan dan mengaktifkan pengereman darurat secara otomatis.",
          image: "/images/cars/bev/cherye5/slider1/X-Future-Tech-Front.jpg"
        },
        {
          title: "Full LED Highbeam & Lowbeam",
          description: "Sistem pencahayaan LED penuh dengan pengaturan otomatis yang memaksimalkan visibilitas tanpa menyilaukan pengemudi lain.",
          image: "/images/cars/bev/cherye5/slider1/full-led-highbeam-lowbeam.webp"
        },
        {
          title: "LED Daytime Running Light",
          description: "DRL LED hemat energi yang meningkatkan visibilitas kendaraan di siang hari, mengurangi risiko kecelakaan secara signifikan.",
          image: "/images/cars/bev/cherye5/slider1/led-daytime-running-light.webp"
        },
        {
          title: "LED Rear Lamp",
          description: "Lampu belakang LED dengan desain khas Chery E5 yang memberikan sinyal yang jelas dan respons lebih cepat dibanding lampu konvensional.",
          image: "/images/cars/bev/cherye5/slider1/LED-Rear-Lamp.jpg"
        },
      ],
    },
  },

  {
    id: "j6",
    name: "Chery J6",
    category: "J6",
    powertrain: "BEV",
    image: "/images/cars/bev/J6.png",
    price: "Hubungi Kami",
    tagline: "Elegant & Futuristic",
    dimensions: {
      engine: "BEV", engineType: "CSH",
      length: "4406", lengthUnit: "MM",
      wheelbase: "2715", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "6.5 Sec",
      topSpeed: "150 Km/h",
      power: "184 HP",
      torque: "285 Nm"
    },
    specs: ["Desain Tiga Ruang Proporsional", "Interior Minimalis namun Mewah"],
    colors: [
      { name: "Pearl White", hex: "#f5f5f5", image: "/images/cars/bev/J6.png" },
      { name: "Sky Blue", hex: "#2E86AB", image: "/images/cars/bev/J6.png" },
      { name: "Graphite Gray", hex: "#4a4a4a", image: "/images/cars/bev/J6.png" },
      { name: "Midnight Black", hex: "#1a1a1a", image: "/images/cars/bev/J6.png" },
    ],
    featureTitle: "EMBRACE A NEW DIMENSION OF ELEGANCE",
    featureSubtitle: "Setiap sudut dirancang dengan presisi, memadukan estetika futuristik dengan kenyamanan berkendara yang tak tertandingi.",
    featureGroups: [
      {
        name: "J6",
        slides: [
          { title: "540 Transparent Chassis", image: "/images/cars/bev/j6/slider1/540-Transparent-Chassis.webp" },
          { title: "High Mount Stop Lamp", image: "/images/cars/bev/j6/slider1/High Mount Stop Lamp.webp" },
          { title: "LED Prism Headlamp", image: "/images/cars/bev/j6/slider1/LED-Prism-Headlamp-new.webp" },
          { title: "Matrix Vision Rear Lamp", image: "/images/cars/bev/j6/slider1/Matrix Vision Rear Lamp.webp" },
          { title: "Matrix Box Storage", image: "/images/cars/bev/j6/slider1/Matrix-Box-Storage-new.webp" },
          { title: "Two-tone 19 Inch Velg", image: "/images/cars/bev/j6/slider1/Two-tone 19 Inch Velg.webp" },
        ]
      },
      {
        name: "J6T",
        slides: [
          { title: "Brand New Design", image: "/images/cars/bev/j6t/slider1/brand-new-design.jpg" },
          { title: "Ground Clearance 225mm", image: "/images/cars/bev/j6t/slider1/ground-clearance-225mm.jpg" },
          { title: "New Aero Vent", image: "/images/cars/bev/j6t/slider1/new-aero-vent.jpg" },
          { title: "New Fog Lamp", image: "/images/cars/bev/j6t/slider1/new-fog-lamp.jpg" },
          { title: "New Rear Bumper", image: "/images/cars/bev/j6t/slider1/new-rear-bumper.jpg" },
          { title: "New Shape Box", image: "/images/cars/bev/j6t/slider1/new-shape-box.jpg" },
          { title: "Water Wading Depth 625mm", image: "/images/cars/bev/j6t/slider1/water-wading-depth-625mm.jpg" },
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Chery J6 menghadirkan ruang kabin yang elegan dan futuristik — setiap material dipilih dengan presisi untuk memanjakan semua penumpang.",
    experienceSlides: [
      { title: "540 Transparent Chassis", image: "/images/cars/bev/j6/slider1/540-Transparent-Chassis.webp" },
      { title: "LED Prism Headlamp", image: "/images/cars/bev/j6/slider1/LED-Prism-Headlamp-new.webp" },
      { title: "Matrix Vision Rear Lamp", image: "/images/cars/bev/j6/slider1/Matrix Vision Rear Lamp.webp" },
      { title: "Matrix Box Storage", image: "/images/cars/bev/j6/slider1/Matrix-Box-Storage-new.webp" },
      { title: "Two-tone 19 Inch Velg", image: "/images/cars/bev/j6/slider1/Two-tone 19 Inch Velg.webp" },
    ],
  }
];
