export interface Car {
  id: string;
  name: string;
  category: "Tiggo" | "Chery" | "J6";
  powertrain: "ICE" | "BEV" | "CSH";
  image: string;
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
  variants?: { name: string; price: string }[];
  colors?: { name: string; hex: string; image: string }[];
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
    specs: ["Penggerak AWD All-Wheel Drive", "Mesin 2.0L TGDI Generasi Terbaru"]
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
    specs: ["Mesin 1.5L Turbo 145 HP", "Desain Crossover Futuristik"]
  },
  {
    id: "chery-e5",
    name: "Chery E5",
    category: "Chery",
    powertrain: "BEV",
    image: "/images/cars/bev/CheryE5.png",
    price: "Rp 488.800.000",
    tagline: "Drive The Future, Electric",
    dimensions: {
      engine: "BEV", engineType: "CSH",
      length: "4424", lengthUnit: "MM",
      wheelbase: "2630", wheelbaseUnit: "MM"
    },
    specs: ["100% Electric Vehicle (EV)", "Jarak Tempuh Hingga 430 km (WLTP)"]
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
    specs: ["Desain Tiga Ruang Proporsional", "Interior Minimalis namun Mewah"]
  },
];
