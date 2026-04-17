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

export interface ColorOption {
  name: string;
  hex: string;
  image: string;
}

export interface ColorGroup {
  name: string;
  colors: ColorOption[];
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
    engine?: string;
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
    mileage?: string;
    pureEvMileage?: string;
    comprehensiveMileage?: string;
  };
  variants?: { name: string; price: string; image?: string; specs?: string[] }[];
  colors?: ColorOption[];
  colorGroups?: ColorGroup[];
  featureTitle?: string;
  featureSubtitle?: string;
  featureGroups?: FeatureGroup[];
  featureSliders?: FeatureSliderSection[]; // Multiple independent slider sections
  experienceSlides?: { title: string; image: string }[]; // Super Experience coverflow slider
  experienceGroups?: FeatureGroup[];
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
    id: "chery-c5",
    name: "Chery C5",
    category: "Chery",
    powertrain: "ICE",
    image: "/images/cars/ice/cheryc5/coloroptions/cheryc5rz/C5-RZ-White-Howlite (1).png",
    price: "IDR 324.900.000",
    tagline: "Cross Future Experience",
    dimensions: {
      engine: "1,5L TCI", engineType: "CVT",
      length: "4400", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      power: "145 HP",
      torque: "230 Nm",
      topSpeed: "190+ Km/h",
      //acceleration: "9.9 Sec"
    },
    specs: ["Engine 1,5L TCI", "Rear Multi-link Suspension", "Idling Start Stop"],
    variants: [
      {
        name: "Chery C5 Z",
        price: "IDR 324.900.000",
        image: "/images/cars/ice/cheryc5/coloroptions/cheryc5z/C5-RZ-White-Howlite.png",
        specs: ["Engine 1,5L TCI", "Rear Multi-link Suspension", "Idling Start Stop"]
      },
      {
        name: "Chery C5 RZ",
        price: "IDR 354.900.000",
        image: "/images/cars/ice/cheryc5/coloroptions/cheryc5rz/C5-RZ-Red-Ruby.png",
        specs: ["Electric Sunroof", "540 HD Panoramic Camera", "Electric Power Tailgate"]
      }
    ],
    colorGroups: [
      {
        name: "Chery C5 Z",
        colors: [
          { name: "White Howlite", hex: "#ffffff", image: "/images/cars/ice/cheryc5/coloroptions/cheryc5z/C5-RZ-White-Howlite.png" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/ice/cheryc5/coloroptions/cheryc5z/C5-RZ-Black-Platinum.png" },
        ]
      },
      {
        name: "Chery C5 RZ",
        colors: [
          { name: "White Howlite", hex: "#ffffff", image: "/images/cars/ice/cheryc5/coloroptions/cheryc5rz/C5-RZ-White-Howlite (1).png" },
          { name: "White Howlite Two-Tone", hex: "#f5f5f5", image: "/images/cars/ice/cheryc5/coloroptions/cheryc5rz/C5-RZ-White-Howlite-Two-Tone.png" },
          { name: "Red Ruby", hex: "#cc0000", image: "/images/cars/ice/cheryc5/coloroptions/cheryc5rz/C5-RZ-Red-Ruby.png" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/ice/cheryc5/coloroptions/cheryc5rz/C5-RZ-Black-Platinum.png" },
        ]
      }
    ],
    featureTitle: "CHERY C5 — ART IN MOTION",
    featureSubtitle: "Desain crossover futuristik yang memadukan garis tajam dengan teknologi pencahayaan cerdas untuk gaya hidup urban yang dinamis.",
    featureSliders: [
      {
        title: "EXTERIOR & DESIGN",
        subtitle: "Estetika progresif yang memimpin tren desain masa depan dengan detail premium di setiap sudut.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "X-Style Front Face", image: "/images/cars/ice/cheryc5/slider1/x-style-front-face.jpg" },
              { title: "Seamless Horizon DRL", image: "/images/cars/ice/cheryc5/slider1/Seemless-Horizon-DRL.jpg" },
              { title: "Arrowheads Dynamic LED", image: "/images/cars/ice/cheryc5/slider1/arrowheads-dynamic-led.png" },
              { title: "Sequential Rear Lamp", image: "/images/cars/ice/cheryc5/slider1/full-led-rear-lamp-with-sequential-turning-light.png" },
              { title: "Black Gloss 5-Spoke Alloy", image: "/images/cars/ice/cheryc5/slider1/Black-Gloss-5-Spoke-Alloy.jpg" },
              { title: "Electric Power Tailgate", image: "/images/cars/ice/cheryc5/slider1/electric-power-tailgate.png" },
              { title: "Rear Door Heater", image: "/images/cars/ice/cheryc5/slider1/rear-door-heater.png" },
              { title: "Smart Key System", image: "/images/cars/ice/cheryc5/slider1/chery-c5-key.png" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Hadirkan kenyamanan kelas satu dengan ekosistem interior yang intelligent, dirancang untuk memanjakan indra Anda.",
    experienceSlides: [
      { title: "Super Wide Screen 20.5 Inch", image: "/images/cars/ice/cheryc5/sliderexperience/super-wide-screen.png" },
      { title: "Wireless Smartphone Charging", image: "/images/cars/ice/cheryc5/sliderexperience/wireless-charging.png" },
      { title: "Intelligent Voice Assistant", image: "/images/cars/ice/cheryc5/sliderexperience/intelligent-voice-assistant.png" },
      { title: "Apple CarPlay & Android Auto", image: "/images/cars/ice/cheryc5/sliderexperience/apple-car-play-android-auto-sync.png" },
      { title: "Ultra Efficient AC Filter", image: "/images/cars/ice/cheryc5/sliderexperience/ultra-efficient-air-conditioning-filter.png" },
      { title: "Smart Sunvisor with Light", image: "/images/cars/ice/cheryc5/sliderexperience/futuristic-sunvisor-with-vanity-mirror-light.png" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Performa bertenaga yang dipadukan dengan standar keamanan global untuk ketenangan berkendara tanpa batas.",
      items: [
        {
          title: "10 ADAS Features",
          description: "Sistem asisten pengemudi tingkat lanjut yang membantu mencegah potensi bahaya secara proaktif.",
          image: "/images/cars/ice/cheryc5/slidersafety/10-adas.png"
        },
        {
          title: "6 Airbags Protection",
          description: "Perlindungan kantong udara menyeluruh yang mengelilingi kabin untuk keamanan maksimal.",
          image: "/images/cars/ice/cheryc5/slidersafety/6-airbags.png"
        },
        {
          title: "1.5L Turbocharged Engine",
          description: "Mesin turbo yang responsif memberikan tenaga besar namun tetap efisien dalam penggunaan bahan bakar.",
          image: "/images/cars/ice/cheryc5/slidersafety/1.5-turbo-charged-engine.png"
        },
        {
          title: "Electronic Gear Shift (DCT)",
          description: "Transmisi kopling ganda yang memberikan perpindahan gigi halus dan responsivitas tinggi.",
          image: "/images/cars/ice/cheryc5/slidersafety/6-dct-transmission.png"
        },
        {
          title: "Multi-link Suspension",
          description: "Sistem suspensi belakang yang memberikan stabilitas berkendara superior dan kenyamanan maksimal.",
          image: "/images/cars/ice/cheryc5/slidersafety/front-mcpherson-rear-multi-link-suspension.png"
        },
      ],
    },
  },
  {
    id: "tiggo-cross-sport",
    name: "Tiggo Cross Sport",
    category: "Tiggo",
    powertrain: "ICE",
    image: "/images/cars/ice/tiggocrosssport/coloroptions/car-white-howlite.png",
    price: "IDR 304.900.000",
    tagline: "Sporty & Dynamic Driving Experience",
    dimensions: {
      engine: "1,5T", engineType: "6-Speed Wet DCT",
      length: "4330", lengthUnit: "MM",
      wheelbase: "2610", wheelbaseUnit: "MM"
    },
    performance: {
      //acceleration: "8.9 Sec",
      topSpeed: "191 Km/h",
      power: "147 PS",
      torque: "210 Nm"
    },
    specs: ["7 Airbags Protection", "High Torque 320 Nm", "6-Speed Wet DCT Transmission"],
    colors: [
      { name: "White Howlite", hex: "#ffffff", image: "/images/cars/ice/tiggocrosssport/coloroptions/car-white-howlite.png" },
      { name: "Silver Moonlight", hex: "#C0C0C0", image: "/images/cars/ice/tiggocrosssport/coloroptions/car-silver-moonlight.png" },
      { name: "Red Ruby", hex: "#cc0000", image: "/images/cars/ice/tiggocrosssport/coloroptions/car-red-ruby.png" },
      { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/ice/tiggocrosssport/coloroptions/car-black-platinum.png" },
    ],
    featureTitle: "TIGGO CROSS SPORT — TIGER CONCEPT DESIGN",
    featureSubtitle: "Setiap detail dirancang untuk mencerminkan kekuatan dan kelincahan sang raja hutan, memberikan tampilan sporty yang tak terbantahkan.",
    featureSliders: [
      {
        title: "SPORTY EXTERIOR",
        subtitle: "Desain eksterior yang agresif namun elegan, terinspirasi dari konsep 'Tiger' untuk performa visual yang maksimal.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "Rhomboid Star Diamond Grill", image: "/images/cars/ice/tiggocrosssport/slider1/rhomboid-star-diamond-shaped-grill.png" },
              { title: "Tiger Claw LED Headlamp", image: "/images/cars/ice/tiggocrosssport/slider1/tiger-claw-led-headlamp.png" },
              { title: "Tiger Stripes LED Rear Lamp", image: "/images/cars/ice/tiggocrosssport/slider1/tiger-stripes-led-rear-lamp.png" },
              { title: "Energy Crystal Outline LED", image: "/images/cars/ice/tiggocrosssport/slider1/energy-crystal-outline-led-lamp.png" },
              { title: "High Mount Stop Lamp", image: "/images/cars/ice/tiggocrosssport/slider1/high-mount-stop-lamp.png" },
              { title: "Tiger Concept Design", image: "/images/cars/ice/tiggocrosssport/slider1/tiger-concept.png" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Nikmati kabin sporty yang dilengkapi dengan teknologi terkini untuk kenyamanan dan konektivitas tak terbatas di setiap perjalanan.",
    experienceSlides: [
      { title: "10.25-inch Dual Screen", image: "/images/cars/ice/tiggocrosssport/sliderexperience/10.25-inch-dual-screen.png" },
      { title: "360 HD Panoramic Camera", image: "/images/cars/ice/tiggocrosssport/sliderexperience/360-hd-camera.png" },
      { title: "Electric Sunroof", image: "/images/cars/ice/tiggocrosssport/sliderexperience/electric-sunroof.png" },
      { title: "Wireless Android Auto & Apple CarPlay", image: "/images/cars/ice/tiggocrosssport/sliderexperience/wireless-android-auto-apple-carplay.png" },
      { title: "Fast Wireless Charging", image: "/images/cars/ice/tiggocrosssport/sliderexperience/wireless-charging.png" },
      { title: "6-Way Electric Driver Seat", image: "/images/cars/ice/tiggocrosssport/sliderexperience/6-way-driver-seat-electric-adjuster-lumbar.png" },
      { title: "Dual Zone Auto AC", image: "/images/cars/ice/tiggocrosssport/sliderexperience/dual-zone-auto-ac.png" },
      { title: "Full Soft Touch Panel", image: "/images/cars/ice/tiggocrosssport/sliderexperience/full-soft-touch-panel.png" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Keamanan adalah prioritas utama kami dengan perlindungan menyeluruh dan sistem asisten pengemudi yang cerdas.",
      items: [
        {
          title: "Advanced Driver Assistant System",
          description: "Sistem asisten pengemudi tingkat lanjut yang membantu Anda berkendara lebih aman dan responsif terhadap bahaya.",
          image: "/images/cars/ice/tiggocrosssport/slidersafety/advanced-driver-assistant-system.png"
        },
      ],
    },
  },
  {
    id: "tiggo-cross",
    name: "Tiggo Cross",
    category: "Tiggo",
    powertrain: "ICE",
    image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosspremium/white-howlite-car-desktop.png",
    price: "IDR 264.500.000",
    tagline: "The Urban Companion",
    dimensions: {
      engine: "1,5L N/A", engineType: "7-Speed CVT",
      length: "4320", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      //acceleration: "10.5 Sec",
      topSpeed: "170 Km/h",
      power: "116 PS",
      torque: "138 Nm"
    },
    specs: ["1,5L N/A Engine & 7 Speed CVT", "Intelligent Voice Assistant", "Car Link O"],
    variants: [
      {
        name: "Tiggo Cross Comfort",
        price: "IDR 264.500.000",
        image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosscomfort/white-howlite-car-desktop.png",
        specs: ["1,5L N/A Engine & 7 Speed CVT", "Intelligent Voice Assistant", "Car Link O"]
      },
      {
        name: "Tiggo Cross Premium",
        price: "IDR 294.500.000",
        image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosspremium/red-ruby-car-desktop (1).png",
        specs: ["Electric Sunroof", "6 Airbags", "15 ADAS"]
      }
    ],
    colorGroups: [
      {
        name: "Tiggo Cross Comfort",
        colors: [
          { name: "White Howlite", hex: "#ffffff", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosscomfort/white-howlite-car-desktop.png" },
          { name: "Silver Moonlight", hex: "#C0C0C0", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosscomfort/silver-moonlight-car-desktop.png" },
          { name: "Red Ruby", hex: "#cc0000", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosscomfort/red-ruby-car-desktop.png" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosscomfort/black-platinum-car-desktop.png" },
        ]
      },
      {
        name: "Tiggo Cross Premium",
        colors: [
          { name: "White Howlite", hex: "#ffffff", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosspremium/white-howlite-car-desktop.png" },
          { name: "Silver Moonlight", hex: "#C0C0C0", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosspremium/silver-moonlight-car-desktop.png" },
          { name: "Red Ruby", hex: "#cc0000", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosspremium/red-ruby-car-desktop (1).png" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/ice/tiggocross/coloroptions/tiggocrosspremium/black-platinum-car-desktop.png" },
        ]
      }
    ],
    featureTitle: "TIGGO CROSS — URBAN DYNAMIC DESIGN",
    featureSubtitle: "Setiap lekukan mencerminkan gaya hidup urban yang modern, memadukan fungsionalitas cerdas dalam balutan desain crossover yang tangguh.",
    featureSliders: [
      {
        title: "EXTERIOR & DESIGN",
        subtitle: "Estetika progresif dengan detail 'Tiger' yang ikonik, memberikan karakter kuat di setiap sisi kendaraan.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "Rhomboid Star Diamond Grill", image: "/images/cars/ice/tiggocross/slider1/rhomboid-star-diamond-grill.webp" },
              { title: "Tiger Claw LED Headlamp", image: "/images/cars/ice/tiggocross/slider1/tiger-claw-led-headlamp.webp" },
              { title: "Tiger Stripes LED Rear Lamp", image: "/images/cars/ice/tiggocross/slider1/tiger-stripes-led-rear-lamp.webp" },
              { title: "Energy Crystal Outline Lamp", image: "/images/cars/ice/tiggocross/slider1/energy-crystal-outline-lamp.webp" },
              { title: "High Mount Stop Lamp", image: "/images/cars/ice/tiggocross/slider1/high-mount-stop-lamp.webp" },
              { title: "Three-Stream Dynamic Line", image: "/images/cars/ice/tiggocross/slider1/three-stream-dynamic-line.webp" },
              { title: "Tiger Concept Design", image: "/images/cars/ice/tiggocross/slider1/tiger-concept.webp" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Ruang kabin yang dirancang untuk kenyamanan maksimal dengan ekosistem teknologi yang intuitif bagi pengemudi dan penumpang.",
    experienceSlides: [
      { title: "Spacious Interior Design", image: "/images/cars/ice/tiggocross/sliderexperience/tc-interior.webp" },
      { title: "Electric Sunroof", image: "/images/cars/ice/tiggocross/sliderexperience/tc-sunroof.webp" },
      { title: "Intelligent Voice Assistant", image: "/images/cars/ice/tiggocross/sliderexperience/push-start-stop-engine.webp" },
      { title: "Soft Touch Material Cabin", image: "/images/cars/ice/tiggocross/sliderexperience/soft-touch-material.webp" },
      { title: "Multicolor Ambient Light", image: "/images/cars/ice/tiggocross/sliderexperience/ambient-light (1).webp" },
      { title: "Advanced AC Filter System", image: "/images/cars/ice/tiggocross/sliderexperience/tc-1st-row-ac-filter.webp" },
      { title: "Rear Row Ventilation", image: "/images/cars/ice/tiggocross/sliderexperience/tc-2nd-row-fan-ac.webp" },
      { title: "One-Touch Power Window", image: "/images/cars/ice/tiggocross/sliderexperience/all-power-window.webp" },
      { title: "Complete Power Outlet", image: "/images/cars/ice/tiggocross/sliderexperience/complete-power-outlet.webp" },
      { title: "Electronic Parking Brake", image: "/images/cars/ice/tiggocross/sliderexperience/tc-electronic-parking-brake.webp" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Keamanan tanpa kompromi melalui perlindungan struktural dan sistem asisten pintar terkini.",
      items: [
        {
          title: "60% Strength Body Steel",
          description: "Konstruksi rangka baja berkekuatan tinggi hingga 60% yang memberikan zona pertahanan solid dalam kondisi benturan.",
          image: "/images/cars/ice/tiggocross/slidersafety/60-strength-body-steel.webp"
        },
        {
          title: "6 Airbags Protection",
          description: "Sistem perlindungan kantong udara menyeluruh untuk keamanan maksimal bagi seluruh penumpang.",
          image: "/images/cars/ice/tiggocross/slidersafety/Screenshot 2026-04-18 021927.png"
        },
        {
          title: "Advanced ADAS System",
          description: "Sistem asisten pengemudi tingkat lanjut yang membantu mencegah bahaya secara proaktif di jalan raya.",
          image: "/images/cars/ice/tiggocross/slidersafety/Screenshot 2026-04-18 021916.png"
        },
      ],
    },
  },
  {
    id: "omoda-5-gt",
    name: "Omoda 5 GT",
    category: "Chery",
    powertrain: "ICE",
    image: "/images/cars/ice/omoda5gt/coloroptions/white-howlite-black-car-rwd.webp",
    price: "IDR 458.800.000",
    tagline: "The Futuristic GT Performance",
    dimensions: {
      engine: "1,6L TGDI", engineType: "7-Speed DCT",
      length: "4400 mm", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      //acceleration: "7.8 Sec",
      topSpeed: "200 Km/h",
      power: "197 HP",
      torque: "290 Nm"
    },
    specs: ["1,6L TGDI Engine & 7 DCT", "12 ADAS Features", "540 HD Panoramic Camera"],
    variants: [
      {
        name: "Omoda 5 GT FWD",
        price: "IDR 458.800.000",
        image: "/images/cars/ice/omoda5gt/coloroptions/white-howlite-black-car-rwd.webp",
        specs: ["1,6L TGDI Engine & 7 DCT", "12 ADAS Features", "540 HD Panoramic Camera"]
      },
      {
        name: "Omoda 5 GT AWD",
        price: "IDR 499.000.000",
        image: "/images/cars/ice/omoda5gt/coloroptions/white-howlite-black-car-awd.webp",
        specs: ["All Wheel Drive", "12 ADAS Features", "540 HD Panoramic Camera"]
      }
    ],
    colors: [
      { name: "White Howlite (FWD)", hex: "#ffffff", image: "/images/cars/ice/omoda5gt/coloroptions/white-howlite-black-car-rwd.webp" },
      { name: "White Howlite (AWD)", hex: "#f0f0f0", image: "/images/cars/ice/omoda5gt/coloroptions/white-howlite-black-car-awd.webp" },
    ],
    featureTitle: "OMODA 5 GT — ART IN MOTION",
    featureSubtitle: "Setiap detail dirancang dengan estetika futuristik yang memadukan performa tinggi dengan kenyamanan premium.",
    featureSliders: [
      {
        title: "PREMIUM INTERIOR & TECH",
        subtitle: "Kabin modern yang dilengkapi dengan fitur-fitur tercanggih untuk pengalaman berkendara yang lebih personal.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "64-Colors ambient light", image: "/images/cars/ice/omoda5gt/sliderexperience/64-colors-ambient-light.webp" },
              { title: "Acoustic Glass", image: "/images/cars/ice/omoda5gt/sliderexperience/acoustic-glass.webp" },
              { title: "All Auto Power Window", image: "/images/cars/ice/omoda5gt/sliderexperience/all-auto-power-window.webp" },
              { title: "Sony Premium Speakers", image: "/images/cars/ice/omoda5gt/sliderexperience/sony-premium-speakers.webp" },
              { title: "Sporty Ventilated Seats", image: "/images/cars/ice/omoda5gt/sliderexperience/sporty-ventilated-seats.webp" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Hadirkan kenyamanan luar biasa dengan ekosistem interior yang intelligent, dirancang untuk memuaskan jiwa petualang Anda.",
    experienceSlides: [
      { title: "Apple CarPlay & Android Auto", image: "/images/cars/ice/omoda5gt/sliderexperience/apple-car-play.webp" },
      { title: "Floating Transmission", image: "/images/cars/ice/omoda5gt/sliderexperience/floating-transmission.webp" },
      { title: "Front Armrest with Cooling Storage", image: "/images/cars/ice/omoda5gt/sliderexperience/front-armrest-with-cooling-storage.webp" },
      { title: "Intelligent Wireless Charger", image: "/images/cars/ice/omoda5gt/sliderexperience/intelligent-wireless-charger.webp" },
      { title: "Mid Console Design", image: "/images/cars/ice/omoda5gt/sliderexperience/mid-console.webp" },
      { title: "Multi Function Switch", image: "/images/cars/ice/omoda5gt/sliderexperience/multi-function-strong-switch.webp" },
      { title: "Power Seat Adjuster", image: "/images/cars/ice/omoda5gt/sliderexperience/seat-power-adjuster.webp" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Keamanan tanpa kompromi dengan perlindungan menyeluruh dan sistem asisten pengemudi tercanggih.",
      items: [
        {
          title: "12 ADAS System",
          description: "Sistem asisten pengemudi tingkat lanjut yang membantu Anda berkendara lebih aman dan responsif terhadap bahaya.",
          image: "/images/cars/ice/omoda5gt/slidersafety/adas.webp"
        },
        {
          title: "6-Ring Airbags",
          description: "Sistem perlindungan kantong udara menyeluruh untuk keamanan maksimal bagi seluruh penumpang.",
          image: "/images/cars/ice/omoda5gt/slidersafety/6-ring-airbags.webp"
        },
      ],
    },
  },

  {
    id: "tiggo-8",
    name: "Tiggo 8",
    category: "Tiggo",
    powertrain: "ICE",
    image: "/images/cars/ice/tiggo8/coloroptions/blue-sapphire-desktop.png",
    price: "IDR 362.500.000",
    tagline: "First Class Cabin",
    dimensions: {
      engine: "1.6 TGDI", engineType: "DCT",
      length: "4722", lengthUnit: "MM",
      wheelbase: "2710", wheelbaseUnit: "MM"
    },
    performance: {
      //acceleration: "8.9 Sec",
      topSpeed: "190 Km/h",
      power: "186 PS",
      torque: "290 Nm"
    },
    specs: ["1.6 TGDI Engine", "360 Panoramic Camera", "6 Airbags Protection"],
    variants: [
      {
        name: "Tiggo 8 Comfort",
        price: "IDR 362.500.000",
        image: "/images/cars/ice/tiggo8/coloroptions/white-howlite-desktop.png",
        specs: ["1.6 TGDI", "360 Panoramic Camera", "6 Airbags"]
      },
      {
        name: "Tiggo 8 Premium",
        price: "IDR 402.500.000",
        image: "/images/cars/ice/tiggo8/coloroptions/black-platinum-desktop.png",
        specs: ["Electric Panoramic Sunroof", "9 ADAS", "Memory Seat + Driving Seat Welcome Function"]
      }
    ],
    colors: [
      { name: "White Howlite", hex: "#ffffff", image: "/images/cars/ice/tiggo8/coloroptions/white-howlite-desktop.png" },
      { name: "Blue Sapphire", hex: "#1e3a8a", image: "/images/cars/ice/tiggo8/coloroptions/blue-sapphire-desktop.png" },
      { name: "Grey Morganite", hex: "#4a4a4a", image: "/images/cars/ice/tiggo8/coloroptions/grey-morganite-desktop.png" },
      { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/ice/tiggo8/coloroptions/black-platinum-desktop.png" },
    ],
    featureTitle: "TIGGO 8 — PREDEFINED LUXURY",
    featureSubtitle: "Interior kelas dunia yang dipadukan dengan performa mesin TGDI yang responsif untuk kenyamanan keluarga maksimal.",
    featureSliders: [
      {
        title: "EXTERIOR & PERFORMANCE",
        subtitle: "Desain yang megah dan bertenaga, mencerminkan prestise dan kekuatan SUV flagship Chery.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "Galaxy Front Face", image: "/images/cars/ice/tiggo8/slider1/galaxy-front-face.png" },
              { title: "18-inch Alloy Wheel", image: "/images/cars/ice/tiggo8/slider1/18-inch-tyre.png" },
              { title: "Dual Exhaust Muffler", image: "/images/cars/ice/tiggo8/slider1/dual-exhaust.png" },
              { title: "3-Streamline Efficiency", image: "/images/cars/ice/tiggo8/slider1/3-streamline-eff.png" },
              { title: "Powerful Performance", image: "/images/cars/ice/tiggo8/slider1/powerful-performance.png" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Tiggo 8 menghadirkan kabin kelas dunia untuk 7 penumpang — kemewahan, keluasan, dan teknologi hadir dalam satu paket sempurna.",
    experienceSlides: [
      { title: "1st Class Cabin", image: "/images/cars/ice/tiggo8/sliderexperience/1st-class-cabin.png" },
      { title: "Super Large 7-Seater", image: "/images/cars/ice/tiggo8/sliderexperience/7-seater.png" },
      { title: "Panoramic Sunroof", image: "/images/cars/ice/tiggo8/sliderexperience/panoramic-sunroof.png" },
      { title: "360 HD Panoramic Camera", image: "/images/cars/ice/tiggo8/sliderexperience/360-hd-camera.png" },
      { title: "Intelligent Voice Assistant", image: "/images/cars/ice/tiggo8/sliderexperience/intelligent-voice-assistant.png" },
      { title: "Premium Leather Seat", image: "/images/cars/ice/tiggo8/sliderexperience/premium-leather-seat.png" },
      { title: "Leather Steering Wheel", image: "/images/cars/ice/tiggo8/sliderexperience/leather-steering-wheel.png" },
      { title: "Dual Zone Auto AC", image: "/images/cars/ice/tiggo8/sliderexperience/dual-zone-ac.png" },
      { title: "3rd Row AC Vents", image: "/images/cars/ice/tiggo8/sliderexperience/ac-3rd-row.png" },
      { title: "Sporty Meter Cluster", image: "/images/cars/ice/tiggo8/sliderexperience/sporty-meter-cluster.png" },
      { title: "Premium Soft Touch Material", image: "/images/cars/ice/tiggo8/sliderexperience/premium-material.png" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Keamanan tanpa kompromi melalui perlindungan struktural dan sistem asisten pintar terkini.",
      items: [
        {
          title: "6 Airbags Protection",
          description: "Sistem perlindungan kantong udara menyeluruh untuk keamanan maksimal bagi seluruh penumpang.",
          image: "/images/cars/ice/tiggo8/slidersafety/6-airbags.png"
        },
        {
          title: "Advanced ADAS System",
          description: "Sistem asisten pengemudi tingkat lanjut yang membantu mencegah bahaya secara proaktif.",
          image: "/images/cars/ice/tiggo8/slidersafety/adas.png"
        },
      ],
    },
  },

  {
    id: "chery-c5-csh",
    name: "Chery C5 CSH",
    category: "Chery",
    powertrain: "CSH",
    image: "/images/cars/csh/chery-c5-csh-fix.webp",
    price: "IDR 399.900.000",
    tagline: "Hybrid Crossover",
    dimensions: {
      engine: "1,5 TGDI", engineType: "CSH",
      length: "4400", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    performance: {
      // acceleration: "7.7 Sec",
      // topSpeed: "175 km/h",
      power: "204 PS",
      torque: "310 Nm",
      //pureEvMileage: "75 Km",
      comprehensiveMileage: "1000 Km+",
    },
    specs: ["Comprehensive Mileage 1000km+", "Fuel Consumption 20,4 km/L (NEDC)", "Acceleration 0-100 km in 7,7s"],
    variants: [
      {
        name: "Chery C5 CSH",
        price: "IDR 399.900.000",
        image: "/images/cars/csh/cheryc5csh/coloroptions/car-white-howlite.webp",
        specs: ["Comprehensive Mileage 1000km+", "Fuel Consumption 20,4 km/L (NEDC)", "Acceleration 0-100 km in 7,7s"]
      }
    ],
    colors: [
      { name: "White Howlite", hex: "#ffffff", image: "/images/cars/csh/cheryc5csh/coloroptions/car-white-howlite.webp" },
      { name: "White Howlite Two Tone", hex: "#f5f5f5", image: "/images/cars/csh/cheryc5csh/coloroptions/car-white-howlite-two-tone.webp" },
      { name: "Red", hex: "#C0392B", image: "/images/cars/csh/cheryc5csh/coloroptions/car-red.webp" },
      { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/csh/cheryc5csh/coloroptions/car-black-platinum.webp" },
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
      { title: "24-inch Super Curve Screen", image: "/images/cars/csh/cheryc5csh/sliderexperience/24-inch-super-large-curve-screen.webp" },
      { title: "Ambient Light", image: "/images/cars/csh/cheryc5csh/sliderexperience/ambient-light.webp" },
      { title: "Gear Selector", image: "/images/cars/csh/cheryc5csh/sliderexperience/gear-selector.webp" },
      { title: "Heating Steer", image: "/images/cars/csh/cheryc5csh/sliderexperience/heating-steer-new.webp" },
      { title: "Seat Heating 1st Row", image: "/images/cars/csh/cheryc5csh/sliderexperience/seat-heating-1st-seat-row.webp" },
      { title: "Super Large Luggage", image: "/images/cars/csh/cheryc5csh/sliderexperience/super-large-luggage.webp" },
      { title: "Wireless Fast Charging 50W", image: "/images/cars/csh/cheryc5csh/sliderexperience/wireless-fast-charging-50w.webp" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "The synergy of efficient engines and advanced systems ensures excellent dynamics of the Chery C5 CSH and a comfortable, safe ride.",
      items: [
        {
          title: "6 Airbags Protection",
          description: "Sistem perlindungan kantong udara menyeluruh yang dirancang untuk meminimalkan risiko cedera fatal dalam berbagai skenario benturan.",
          image: "/images/cars/csh/cheryc5csh/slidersafety/Screenshot 2026-04-17 180339.png"
        },
        {
          title: "Advanced ADAS System",
          description: "Sistem asisten pengemudi tingkat lanjut yang memastikan keamanan maksimal dengan sensor pintar di sekeliling kendaraan.",
          image: "/images/cars/csh/cheryc5csh/slidersafety/adas.webp"
        },
      ],
    },
  },
  {
    id: "tiggo-9-csh",
    name: "Tiggo 9 CSH",
    category: "Tiggo",
    powertrain: "CSH",
    image: "/images/cars/csh/tiggo9csh/coloroptions/aurora-green.png",
    price: "IDR 739.900.000",
    tagline: "The Flagship Luxury",
    dimensions: {
      engine: "1,5T", engineType: "CSH",
      length: "4810", lengthUnit: "MM",
      wheelbase: "2800", wheelbaseUnit: "MM"
    },
    performance: {
      // acceleration: "5.4 Sec",
      // topSpeed: "230 Km/h",
      // power: "360 HP",
      torque: "650 Nm",
      pureEvMileage: "180 Km+",
      comprehensiveMileage: "1400 Km+",
    },
    specs: ["Acceleration 0-100 km/h in 5,4s", "Pure EV Milage 180km+", "Automatic Parking Assistant"],
    variants: [
      {
        name: "Tiggo 9 CSH AWD",
        price: "IDR 739.900.000",
        image: "/images/cars/csh/tiggo9csh/coloroptions/aurora-green.png",
        specs: ["Acceleration 0-100 km/h in 5,4s", "Pure EV Milage 180km+", "Automatic Parking Assistant"]
      }
    ],
    colors: [
      { name: "Aurora Green", hex: "#2E5E4E", image: "/images/cars/csh/tiggo9csh/coloroptions/aurora-green.png" },
      { name: "White Khaki", hex: "#EADDC6", image: "/images/cars/csh/tiggo9csh/coloroptions/white-khaki.png" },
      { name: "Universal Grey", hex: "#8A8A8A", image: "/images/cars/csh/tiggo9csh/coloroptions/universal-grey.png" },
      { name: "Black Carbo Crystal", hex: "#1A1A1A", image: "/images/cars/csh/tiggo9csh/coloroptions/black-carbo-crystal.png" },
    ],
    featureTitle: "TIGGO 9 CSH — THE FLAGSHIP HYBRID",
    featureSubtitle: "Puncak kemewahan dan performa hibrida dari Chery, dirancang untuk memberikan pengalaman berkendara kelas dunia.",
    featureSliders: [
      {
        title: "INTERIOR & COMFORT",
        subtitle: "Kabin executive-class yang dirancang untuk kenyamanan maksimal 7 penumpang dengan fitur futuristik.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "15.6 Inch Head Unit", image: "/images/cars/csh/tiggo9csh/slider1/15 6 Inch Head Unit.jpg" },
              { title: "2nd Row AC Controller", image: "/images/cars/csh/tiggo9csh/slider1/4-2nd-Row-AC-Controler.png" },
              { title: "4-ways Electric Wheel Steering", image: "/images/cars/csh/tiggo9csh/slider1/4-ways-electric-wheel-steering.png" },
              { title: "8-ways Electric Driver Seat", image: "/images/cars/csh/tiggo9csh/slider1/8-ways-electric-driver-seat-with-4-way-lumbar-support.png" },
              { title: "Electric Panoramic Sunroof", image: "/images/cars/csh/tiggo9csh/slider1/Electric Panoramic Sunroof.jpg" },
              { title: "Super Large Comfortable 7-Seat", image: "/images/cars/csh/tiggo9csh/slider1/super-large-comfortable-7-seat.png" },
            ]
          }
        ]
      },
      {
        title: "HYBRID PERFORMANCE",
        subtitle: "Sistem hibrida canggih yang memadukan tenaga luar biasa dengan efisiensi bahan bakar yang impresif.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/tiggo9csh/sliderfeatures/dedicated-hybrid-battery-powerful-drive-motor.png" },
              { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/tiggo9csh/sliderfeatures/dedicated-hybrid-engine.png" },
              { title: "Dedicated Hybrid Transmission", image: "/images/cars/csh/tiggo9csh/sliderfeatures/dedicated-hybrid-transmission.png" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Tiggo 9 CSH menghadirkan interior executive-class yang intelligent — di mana teknologi canggih dan kenyamanan berpadu sempurna.",
    experienceSlides: [
      { title: "15.6-inch Central Console Screen", image: "/images/cars/csh/tiggo9csh/sliderexperience/1-15.6-inch-2.5k-High-Definition-Central-Console-Screen-8155-Snapdragon-Chip.png" },
      { title: "14 Sony Speakers", image: "/images/cars/csh/tiggo9csh/sliderexperience/2-14-Sony-Speakers.png" },
      { title: "Headrest Speakers", image: "/images/cars/csh/tiggo9csh/sliderexperience/3-Headrest-Speakers.png" },
      { title: "50w Fast Wireless Charging", image: "/images/cars/csh/tiggo9csh/sliderexperience/50w-fast-wireless-phone-charging.png" },
      { title: "Automatic Parking Assist", image: "/images/cars/csh/tiggo9csh/sliderexperience/automatic-parking-assist.png" },
      { title: "Intelligent Voice Command", image: "/images/cars/csh/tiggo9csh/sliderexperience/intelligent-voice-command.png" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Teknologi keamanan aktif dan perlindungan struktural terbaik untuk menjaga Anda dan keluarga di setiap perjalanan.",
      items: [
        {
          title: "17 ADAS System",
          description: "Sistem asisten pengemudi tingkat lanjut dengan 17 fitur pintar untuk keamanan berkendara yang proaktif.",
          image: "/images/cars/csh/tiggo9csh/slidersafety/17-adas.png"
        },
        {
          title: "Multi Airbags Protection",
          description: "Sistem perlindungan kantong udara menyeluruh untuk keamanan maksimal bagi seluruh penumpang.",
          image: "/images/cars/csh/tiggo9csh/slidersafety/airbags.png"
        },
        {
          title: "Strength Body Structure",
          description: "Konstruksi rangka baja berkekuatan tinggi yang memberikan pertahanan solid dalam skenario benturan.",
          image: "/images/cars/csh/tiggo9csh/slidersafety/strength-body-structure.png"
        },
      ],
    },
  },
  {
    id: "tiggo-cross-csh",
    name: "Tiggo Cross CSH",
    category: "Tiggo",
    powertrain: "CSH",
    image: "/images/cars/csh/tiggocrosscsh/coloroptions/car-white-howlite.png",
    price: "IDR 329.800.000",
    tagline: "Hybrid Urban Dynamic",
    dimensions: {
      engine: "1,5L DHE", engineType: "CSH",
      length: "4330", lengthUnit: "MM",
      wheelbase: "2610", wheelbaseUnit: "MM"
    },
    performance: {
      // acceleration: "8.2 Sec",
      // topSpeed: "185 Km/h",
      power: "204 PS",
      torque: "310 Nm",
      //pureEvMileage: "75 Km",
      comprehensiveMileage: "1000 Km+",
    },
    specs: ["1,5L DHE Engine", "Length 4330 MM", "17 ADAS"],
    variants: [
      {
        name: "Tiggo Cross CSH",
        price: "IDR 329.800.000",
        image: "/images/cars/csh/tiggocrosscsh/coloroptions/car-white-howlite.png",
        specs: ["1,5L DHE Engine", "Length 4330 MM", "17 ADAS"]
      }
    ],
    colors: [
      { name: "White Howlite", hex: "#ffffff", image: "/images/cars/csh/tiggocrosscsh/coloroptions/car-white-howlite.png" },
      { name: "Red Ruby", hex: "#cc0000", image: "/images/cars/csh/tiggocrosscsh/coloroptions/car-red-ruby.png" },
      { name: "Silver Moonlight", hex: "#C0C0C0", image: "/images/cars/csh/tiggocrosscsh/coloroptions/car-silver-moonlight.png" },
      { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/csh/tiggocrosscsh/coloroptions/car-black-platinum.png" },
      { name: "Grey Tech", hex: "#8a8a8a", image: "/images/cars/csh/tiggocrosscsh/coloroptions/New-TCCSH-Grey-Tech.png" },
    ],
    featureTitle: "TIGGO CROSS CSH — URBAN HYBRID DYNAMICS",
    featureSubtitle: "Kombinasi sempurna antara kelincahan urban dengan efisiensi Dedicated Hybrid Engine (DHE) terbaru.",
    featureSliders: [
      {
        title: "HYBRID PERFORMANCE",
        subtitle: "Sistem hibrida canggih yang dirancang untuk efisiensi maksimal dalam berkendara di perkotaan.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "1.5L DHE Engine", image: "/images/cars/csh/tiggocrosscsh/sliderfeatures/new-DHE-Engine.png" },
              { title: "Dedicated Hybrid Battery", image: "/images/cars/csh/tiggocrosscsh/sliderfeatures/dedicated-hybrid-battery.png" },
              { title: "Dedicated Hybrid Transmission", image: "/images/cars/csh/tiggocrosscsh/sliderfeatures/dedicated-hybrid-transmission.png" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Nikmati kabin yang terhubung sepenuhnya dengan teknologi asisten pintar dan kenyamanan tingkat premium.",
    experienceSlides: [
      { title: "10.25-inch Dual Screen", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/10.25-inch-dual-screen.png" },
      { title: "6-way Electric Seat Adjusters", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/6-way-electric-seat-adjusters.png" },
      { title: "Electric Sunroof", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/electric-sunroof.png" },
      { title: "Wireless Charging", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/wireless-charging.png" },
      { title: "Wireless CarPlay & Android Auto", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/wireless-carplay-android-auto.png" },
      { title: "Carlink-O Connectivity", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/carlink-o.png" },
      { title: "Dual Zone Auto AC", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/dual-zone-auto-ac.png" },
      { title: "2nd Row Vents", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/2nd-row-vents.png" },
      { title: "CN95 Filter Element", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/cn95-filter-element.png" },
      { title: "Silent Start", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/silent-start.png" },
      { title: "Low NVH (Noise, Vibration, Harshness)", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/good-nvh.png" },
      { title: "Voice Command", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/voice-command.png" },
      { title: "Multicolor Ambient Light", image: "/images/cars/csh/tiggocrosscsh/sliderexperience/multicolor-ambient-light.png" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Keamanan tanpa kompromi dengan perlindungan 360 derajat dan sistem asisten pengemudi tercanggih.",
      items: [
        {
          title: "17 ADAS Protection",
          description: "Sistem asisten pengemudi tingkat lanjut dengan 17 fitur pintar untuk keamanan proaktif.",
          image: "/images/cars/csh/tiggocrosscsh/slidersafety/17-adas.png"
        },
        {
          title: "7 Airbags Protection",
          description: "Perlindungan kantong udara menyeluruh dari segala sisi untuk meminimalkan risiko benturan.",
          image: "/images/cars/csh/tiggocrosscsh/slidersafety/surrounding-7-airbags-for-safety-protection.png"
        },
        {
          title: "High Rigidity Body",
          description: "Konstruksi rangka baja berkekuatan tinggi untuk perlindungan struktural maksimal.",
          image: "/images/cars/csh/tiggocrosscsh/slidersafety/high-rigidity-vehicle-body.png"
        },
        {
          title: "ANCAP Five Star",
          description: "Telah memenuhi standar keamanan tabrakan bintang lima yang diakui secara global.",
          image: "/images/cars/csh/tiggocrosscsh/slidersafety/ancap-five-star-collision-safety.png"
        },
        {
          title: "Aluminum Alloy Front Beam",
          description: "Balok anti-tabrakan depan dari paduan aluminium untuk meredam energi benturan dengan efisien.",
          image: "/images/cars/csh/tiggocrosscsh/slidersafety/aluminum-alloy-front-anti-collision-beam.png"
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
    price: "IDR 560.500.000",
    tagline: "Elegant & Futuristic",
    dimensions: {
      //engine: "BEV",
      engineType: "CSH",
      length: "4406", lengthUnit: "MM",
      wheelbase: "2715", wheelbaseUnit: "MM"
    },
    performance: {
      acceleration: "6.5 Sec",
      topSpeed: "150 Km/h",
      power: "279 PS",
      torque: "385 Nm"
    },
    specs: ["Desain Tiga Ruang Proporsional", "Interior Minimalis namun Mewah"],
    colors: [
      { name: "White Howlite", hex: "#f5f5f5", image: "/images/cars/bev/j6/coloroptions/910x445 J6 White Howlite.webp" },
      { name: "Green Emerald", hex: "#2E8664", image: "/images/cars/bev/j6/coloroptions/910x445 J6 Green Emerald.webp" },
      { name: "Grey Morganite", hex: "#4a4a4a", image: "/images/cars/bev/j6/coloroptions/910x445 J6 Grey Morganite.webp" },
      { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/bev/j6/coloroptions/910x445 J6 Black Platinum.webp" },
    ],
    variants: [
      {
        name: "J6T IWD",
        price: "IDR 645.500.000",
        image: "/images/cars/bev/j6/j6 variants/j6t-iwd.png",
        specs: ["Intelligent Wheel Drive", "436 km EV Range (NEDC)", "30 - 80% SOC Fast Charging in 25 Minutes"]
      },
      {
        name: "J6T RWD",
        price: "IDR 580.500.000",
        image: "/images/cars/bev/j6/j6 variants/j6t-rwd.png",
        specs: ["Aluminium H-Arm Multi-Link Suspension", "625mm Wading Depth", "225mm Ground Clearance"]
      },
      {
        name: "J6 RWD",
        price: "IDR 560.500.000",
        image: "/images/cars/bev/j6/j6 variants/j6-rwd.webp",
        specs: ["Rear Wheel Drive", "Aluminium H-Arm Multi-Link Suspension", "Unique All-Aluminium Multi-Cavity Cage Body"]
      },
      {
        name: "J6 IWD",
        price: "IDR 625.500.000",
        image: "/images/cars/bev/j6/j6 variants/j6-iwd.webp",
        specs: ["Intelligent Wheel Drive", "12 Infinity Speaker", "14 ADAS"]
      },
      {
        name: "J6 RWD Phantom Edition",
        price: "IDR 610.500.000",
        image: "/images/cars/bev/j6/j6 variants/520x275-J6-Phantom-RWD.png",
        specs: ["Rear Wheel Drive", "Aluminium H-Arm Multi-Link Suspension", "Unique All-Aluminium Multi-Cavity Cage Body + Phantom Kit"]
      },
      {
        name: "J6 IWD Phantom Edition",
        price: "IDR 675.500.000",
        image: "/images/cars/bev/j6/j6 variants/520x275-J6-Phantom-IWD.png",
        specs: ["Intelligent Wheel Drive", "12 Infinity Speaker", "14 ADAS + Phantom Kit"]
      },
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
    experienceGroups: [
      {
        name: "J6",
        slides: [
          { title: "AC Dual Zone", image: "/images/cars/bev/j6/sliderexperience/AC Dual Zone.webp" },
          { title: "AC Second Row", image: "/images/cars/bev/j6/sliderexperience/AC Second Row.webp" },
          { title: "Dual Color Seats", image: "/images/cars/bev/j6/sliderexperience/Dual Color Seats.webp" },
          { title: "Multi Function Steering Wheel", image: "/images/cars/bev/j6/sliderexperience/Multi Fuction Steering Wheel.webp" },
          { title: "One-Push Thumb Open Door", image: "/images/cars/bev/j6/sliderexperience/One-Push Thumb Open Door.webp" },
          { title: "Panoramic Sunroof", image: "/images/cars/bev/j6/sliderexperience/Panoramic Sunroof.webp" },
          { title: "Speakers", image: "/images/cars/bev/j6/sliderexperience/Speakers.webp" },
        ]
      },
      {
        name: "J6T",
        slides: [
          { title: "Additional Features Journey Navigation", image: "/images/cars/bev/j6t/sliderexperience/additional-features-journey-navigation.jpg" },
          { title: "Brand New Sunvisor", image: "/images/cars/bev/j6t/sliderexperience/brand-new-sunvisor.jpg" },
          { title: "Front Armrest with Cooling System", image: "/images/cars/bev/j6t/sliderexperience/front-armrest-with-cooling-system.jpg" },
          { title: "New Integrated Head Rest", image: "/images/cars/bev/j6t/sliderexperience/new-integrated-head-rest.jpg" },
        ]
      }
    ],
    colorGroups: [
      {
        name: "J6",
        colors: [
          { name: "White Howlite", hex: "#f5f5f5", image: "/images/cars/bev/j6/coloroptions/910x445 J6 White Howlite.webp" },
          { name: "Green Emerald", hex: "#2E8664", image: "/images/cars/bev/j6/coloroptions/910x445 J6 Green Emerald.webp" },
          { name: "Grey Morganite", hex: "#4a4a4a", image: "/images/cars/bev/j6/coloroptions/910x445 J6 Grey Morganite.webp" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/bev/j6/coloroptions/910x445 J6 Black Platinum.webp" },
        ]
      },
      {
        name: "J6T",
        colors: [
          { name: "White Howlite", hex: "#f5f5f5", image: "/images/cars/bev/j6t/coloroptions/white-howlite-car.png" },
          { name: "Red Ruby", hex: "#cc0000", image: "/images/cars/bev/j6t/coloroptions/red-ruby-car.png" },
          { name: "Grey Morganite", hex: "#4a4a4a", image: "/images/cars/bev/j6t/coloroptions/grey-morganite-car.png" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/bev/j6t/coloroptions/black-platinum-car.png" },
        ]
      }
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Chery J6 dilengkapi dengan teknologi keamanan pintar yang menjaga Anda tetap aman dalam petualangan off-road maupun di jalanan kota.",
      items: [
        {
          title: "Airbags",
          description: "Sistem perlindungan kantong udara menyeluruh untuk menjamin keselamatan maksimal bagi seluruh penumpang.",
          image: "/images/cars/bev/j6/slidersafety/Airbags.webp"
        },
        {
          title: "Battery Safety",
          description: "Teknologi proteksi baterai tingkat tinggi yang tahan benturan dan kedap air (IP68) untuk performa yang aman.",
          image: "/images/cars/bev/j6/slidersafety/Battery Safety.webp"
        },
        {
          title: "Chassis Drive",
          description: "Konstruksi sasis tangguh yang dirancang untuk stabilitas luar biasa di berbagai medan jalan.",
          image: "/images/cars/bev/j6/slidersafety/Chassis Drive.webp"
        },
        {
          title: "Frame Safety",
          description: "Rangka baja berkekuatan tinggi yang memberikan zona proteksi maksimal saat terjadi benturan.",
          image: "/images/cars/bev/j6/slidersafety/Frame.webp"
        },
        {
          title: "H-arm Multi-link Suspension",
          description: "Sistem suspensi canggih yang meredam getaran dengan sempurna, memberikan kenyamanan berkendara kelas satu.",
          image: "/images/cars/bev/j6/slidersafety/H-arm Multi link b.webp"
        },
        {
          title: "35 Storage Spaces",
          description: "Ruang penyimpanan cerdas di seluruh kabin yang memaksimalkan utilitas dan kerapian barang bawaan Anda.",
          image: "/images/cars/bev/j6/slidersafety/Multi Dimensional Rubik Cube (35 Storage Space).webp"
        },
      ],
    },
  },
  {
    id: "chery-e5",
    name: "Chery E5",
    category: "Chery",
    powertrain: "BEV",
    image: "/images/cars/bev/CheryE5.png",
    heroImage: "/images/cars/bev/cherye5/specshighlight-cherye5.jpg",
    price: "Rp  419.900.000",
    tagline: "Drive The Future, Electric",
    dimensions: {
      //engine: "BEV",
      engineType: "CSH",
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
    variants: [
      {
        name: "Chery E5",
        price: "IDR 419.900.000",
        image: "/images/cars/bev/CheryE5/coloroptions/cherye5/910x445-Green-Jade-Two-Tone.png",
        specs: ["Electric Sunroof", "540 HD Panoramic Camera", "Electric Power Tailgate"]
      },
      {
        name: "Chery E5 Pure",
        price: "IDR 379.900.000",
        image: "/images/cars/bev/cherye5/coloroptions/cherye5pure/910x445-White-Howlite.png",
        specs: ["Acceleration 0 - 100 km/h in 6.5s", "505 km EV Range (NEDC)", "17 ADAS"]
      }
    ],
    colorGroups: [
      {
        name: "Chery E5",
        colors: [
          { name: "White Howlite", hex: "#ffffff", image: "/images/cars/bev/cherye5/coloroptions/cherye5/910x445-White-Howlite.png" },
          { name: "White Howlite Two Tone", hex: "#f5f5f5", image: "/images/cars/bev/cherye5/coloroptions/cherye5/910x445-White-Howlite-Two-Tone.png" },
          { name: "Grey Morganite", hex: "#4a4a4a", image: "/images/cars/bev/cherye5/coloroptions/cherye5/910x445-Grey-Morganite.png" },
          { name: "Green Jade Two Tone", hex: "#2E8664", image: "/images/cars/bev/cherye5/coloroptions/cherye5/910x445-Green-Jade-Two-Tone.png" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/bev/cherye5/coloroptions/cherye5/910x445-Black-Platinum.png" },
        ]
      },
      {
        name: "Chery E5 Pure",
        colors: [
          { name: "White Howlite", hex: "#ffffff", image: "/images/cars/bev/cherye5/coloroptions/cherye5pure/910x445-White-Howlite.png" },
          { name: "Black Platinum", hex: "#1a1a1a", image: "/images/cars/bev/cherye5/coloroptions/cherye5pure/910x445-Black-Platinum.png" },
        ]
      }
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
      { title: "24.6-inch Curved Screen", image: "/images/cars/bev/cherye5/sliderexperience/24.6-inch-curved-screen.webp" },
      { title: "8 Sony Speakers", image: "/images/cars/bev/cherye5/sliderexperience/8-sony-speakers.webp" },
      { title: "Futuristic Cabin", image: "/images/cars/bev/cherye5/sliderexperience/futuristic-cabin.webp" },
      { title: "Intelligent Voice Assistant", image: "/images/cars/bev/cherye5/sliderexperience/intelligent-voice-assistant.webp" },
      { title: "Multi-color Ambient Light", image: "/images/cars/bev/cherye5/sliderexperience/multi-color-ambient-light.webp" },
      { title: "Smartphone Fast Wireless Charger", image: "/images/cars/bev/cherye5/sliderexperience/smartphone-fast-wireless-charger.webp" },
      { title: "Panoramic Sunroof", image: "/images/cars/bev/cherye5/sliderexperience/sunroof.webp" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Advanced protection and intelligent driving technology to keep you and your loved ones secure on every journey.",
      items: [
        {
          title: "17 ADAS Safety System",
          description: "Sistem asisten pengemudi tingkat lanjut yang mencakup 17 fitur pintar untuk keamanan maksimal di setiap kondisi jalan.",
          image: "/images/cars/bev/cherye5/slidersafety/safety-adas.jpg"
        },
        {
          title: "Battery IP68 Certification",
          description: "Baterai yang telah tersertifikasi IP68, kedap air dan debu, memastikan keamanan meskipun melewati genangan air.",
          image: "/images/cars/bev/cherye5/slidersafety/ip68-certification.webp"
        },
        {
          title: "6 Ring Air Bags",
          description: "Perlindungan kantong udara menyeluruh dari segala sisi untuk meminimalkan risiko cedera saat terjadi benturan.",
          image: "/images/cars/bev/cherye5/slidersafety/6-ring-air-bags.webp"
        },
        {
          title: "High Strength Steel Body",
          description: "Konstruksi rangka baja berkekuatan tinggi yang memberikan pertahanan solid dan stabilitas berkendara yang luar biasa.",
          image: "/images/cars/bev/cherye5/slidersafety/high-strength-steel-body.webp"
        },
        {
          title: "Qualcomm 8155 Chip",
          description: "Otak digital berperforma tinggi yang memastikan semua sistem keamanan dan infotainment berjalan tanpa hambatan.",
          image: "/images/cars/bev/cherye5/slidersafety/qualcomm-8155-chip.webp"
        },
        {
          title: "ISOFIX Child Seat",
          description: "Sistem pengait kursi anak standar internasional yang memudahkan pemasangan kursi bayi dengan aman dan stabil.",
          image: "/images/cars/bev/cherye5/slidersafety/isofix.webp"
        },
      ],
    },
  },
  {
    id: "tiggo-8-csh",
    name: "Tiggo 8 CSH",
    category: "Tiggo",
    powertrain: "CSH",
    image: "/images/cars/csh/tiggo8csh/coloroptions/green-aurora-car-desktop.webp",
    price: "IDR 469.900.000",
    tagline: "The Flagship Hybrid SUV",
    dimensions: {
      engine: "1,5T", engineType: "CSH",
      length: "4722", lengthUnit: "MM",
      wheelbase: "2710", wheelbaseUnit: "MM"
    },
    performance: {
      //acceleration: "6.8 Sec",
      //topSpeed: "200 Km/h",
      power: "204 PS",
      torque: "310 Nm",
      pureEvMileage: "90 Km",
      comprehensiveMileage: "1300+ Km"
    },
    specs: ["Front Wheel Drive", "Comprehensive Mileage 1300+ Km", "90 km Pure EV Mileage"],
    variants: [
      {
        name: "Tiggo 8 CSH FWD Comfort",
        price: "IDR 469.900.000",
        image: "/images/cars/csh/tiggo8csh/coloroptions/green-aurora-car-desktop.webp",
        specs: ["Front Wheel Drive", "Comprehensive Mileage 1300+ Km", "90 km Pure EV Mileage"]
      },
      {
        name: "Tiggo 8 CSH FWD Premium",
        price: "IDR 519.900.000",
        image: "/images/cars/csh/tiggo8csh/coloroptions/black-carbon-crystal-car-desktop.webp",
        specs: ["Front Wheel Drive", "Panoramic Sunroof", "Power Tailgate & 12 Speakers"]
      },
      {
        name: "Tiggo 8 CSH AWD",
        price: "IDR 569.900.000",
        image: "/images/cars/csh/tiggo8csh/coloroptions/white-khaki-car-desktop.webp",
        specs: ["All Wheel Drive", "Triple Motor", "Acceleration 0-100 km/h in 6.8s"]
      }
    ],
    colors: [
      { name: "Aurora Green", hex: "#2E5E4E", image: "/images/cars/csh/tiggo8csh/coloroptions/green-aurora-car-desktop.webp" },
      { name: "Bamboo Ash Grey", hex: "#4a4a4a", image: "/images/cars/csh/tiggo8csh/coloroptions/grey-bamboo-ash-car-desktop.webp" },
      { name: "White Khaki", hex: "#EADDC6", image: "/images/cars/csh/tiggo8csh/coloroptions/white-khaki-car-desktop.webp" },
      { name: "Carbon Crystal Black", hex: "#1A1A1A", image: "/images/cars/csh/tiggo8csh/coloroptions/black-carbon-crystal-car-desktop.webp" },
    ],
    featureTitle: "TIGGO 8 CSH — PREDEFINED LUXURY HYBRID",
    featureSubtitle: "Interior kelas satu yang dipadukan dengan performa hibrida luar biasa untuk kenyamanan maksimal keluarga Anda.",
    featureSliders: [
      {
        title: "INTERIOR & COMFORT",
        subtitle: "Kabin 7-seater yang dirancang dengan material premium dan fitur relaksasi terbaik di kelasnya.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "Super Large 7-Seater", image: "/images/cars/csh/tiggo8csh/slider1/super-large-comfortable-7-seater.webp" },
              { title: "Electric Panoramic Sunroof", image: "/images/cars/csh/tiggo8csh/slider1/electric-panoramic-sunroof.webp" },
              { title: "Front Passenger Massage Seat", image: "/images/cars/csh/tiggo8csh/slider1/front-passenger-seat-massage.webp" },
              { title: "Ventilated Front Seats", image: "/images/cars/csh/tiggo8csh/slider1/ventilated-front-seat.webp" },
              { title: "Nap Mode", image: "/images/cars/csh/tiggo8csh/slider1/nap-mode.webp" },
              { title: "Multilink Suspension", image: "/images/cars/csh/tiggo8csh/slider1/multilink-suspension.webp" },
              { title: "Optimized Vibration Reduction", image: "/images/cars/csh/tiggo8csh/slider1/comfortable-chassis-optimize-vibration-reduction.webp" },
              { title: "Multi-adjustment Cabin Trunk", image: "/images/cars/csh/tiggo8csh/slider1/multi-adjustment-cabin-trunk.webp" },
            ]
          }
        ]
      },
      {
        title: "HYBRID PERFORMANCE",
        subtitle: "Teknologi hibrida canggih yang memberikan tenaga responsif sekaligus efisiensi bahan bakar yang tak terkalahkan.",
        groups: [
          {
            name: "Standard",
            slides: [
              { title: "Dedicated Hybrid Engine", image: "/images/cars/csh/tiggo8csh/sliderfeatures/dedicated-hybrid-engine (1).webp" },
              { title: "Dedicated Hybrid Transmission", image: "/images/cars/csh/tiggo8csh/sliderfeatures/dedicated-hybrid-transmission (1).webp" },
              { title: "High Performance Battery", image: "/images/cars/csh/tiggo8csh/sliderfeatures/high-performance-battery.webp" },
            ]
          }
        ]
      }
    ],
    experienceTitle: "SUPER EXPERIENCE",
    experienceSubtitle: "Experience unmatched efficiency with the TIGGO 8 CSH—the most efficient hybrid car yet, driving like a true EV. With fuel consumption reaching up to 76 km/l, it seamlessly switches between electric and engine power to maximize performance.",
    experienceSlides: [
      { title: "HD Central Console Screen", image: "/images/cars/csh/tiggo8csh/sliderexperience/high-definition-central-console-screen.webp" },
      { title: "12 Sony Loudspeakers", image: "/images/cars/csh/tiggo8csh/sliderexperience/12-loudspeakers-front-headrest-speakers.webp" },
      { title: "540 Panoramic Camera", image: "/images/cars/csh/tiggo8csh/sliderexperience/540-panoramic-camera.webp" },
      { title: "Vehicle To Load (V2L)", image: "/images/cars/csh/tiggo8csh/sliderexperience/vehicle-to-load.webp" },
      { title: "50W Fast Wireless Charging", image: "/images/cars/csh/tiggo8csh/sliderexperience/50w-fast-wireless-phone-charging.webp" },
    ],
    safetyFeatures: {
      sectionTitle: "DYNAMICS AND SAFETY",
      sectionSubtitle: "Keamanan tanpa kompromi melalui perlindungan struktural dan sistem asisten pintar tercanggih.",
      items: [
        {
          title: "12 ADAS Safety System",
          description: "Sistem asisten pengemudi tingkat lanjut yang menjaga Anda tetap aman dengan fitur pintar yang responsif.",
          image: "/images/cars/csh/tiggo8csh/slidersafety/ADAS-t8csh.png"
        },
        {
          title: "Battery IP68 Protection",
          description: "Baterai yang dirancang tahan air dan benturan untuk memastikan performa yang aman di setiap kondisi.",
          image: "/images/cars/csh/tiggo8csh/slidersafety/battery-pack-with-a-waterproof-rating-of-IP68.webp"
        },
        {
          title: "High Strength Steel Body",
          description: "Konstruksi rangka baja berkekuatan tinggi yang memberikan zona perlindungan maksimal bagi seluruh keluarga.",
          image: "/images/cars/csh/tiggo8csh/slidersafety/Screenshot 2026-04-17 221901.png"
        },
        {
          title: "Intelligent Passive Safety",
          description: "Sistem mitigasi benturan pasif yang bekerja instan untuk mengurangi risiko cedera saat terjadi insiden.",
          image: "/images/cars/csh/tiggo8csh/slidersafety/Screenshot 2026-04-17 221916.png"
        },
        {
          title: "Guard-Ring Airbags",
          description: "Perlindungan kantong udara menyeluruh yang mengelilingi kabin untuk keamanan tanpa celah.",
          image: "/images/cars/csh/tiggo8csh/slidersafety/Screenshot 2026-04-17 221909.png"
        },
        {
          title: "Cloud Battery Safety System",
          description: "Sistem manajemen baterai cerdas yang memantau kondisi sel secara real-time untuk mencegah overheat dan malfungsi.",
          image: "/images/cars/csh/tiggo8csh/slidersafety/Screenshot 2026-04-17 221928.png"
        },
      ],
    },
  },
];
