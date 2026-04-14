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
    specs: ["Mesin 1.5L VVT", "Transmisi CVT 9-Speed CVT", "Kabin Luas Ekstra"]
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
    specs: ["Mesin 1.5L Turbo Dual VVT", "Transmisi CVT 9-Speed Sport Mode"]
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
    specs: ["Kapasitas 7 Penumpang Medium SUV", "Mesin 2.0L TGDI 250 HP"]
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
    specs: ["Penggerak AWD All-Wheel Drive", "Mesin 2.0L TGDI Generasi Terbaru"]
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
    ]
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
    }
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
    }
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
    }
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
    specs: ["Mesin 1.5L Turbo 145 HP", "Desain Crossover Futuristik"]
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
    ]
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
    ]
  }
];
