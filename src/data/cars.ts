export interface Car {
  id: string;
  name: string;
  category: "Tiggo" | "Omoda" | "J6";
  image: string;
  price: string;
  tagline: string;
  specs?: string[];
  description?: string;
  variants?: { name: string; price: string }[];
  colors?: { name: string; hex: string; image: string }[];
}

export const cars: Car[] = [
  { 
    id: "tiggo-cross", 
    name: "Tiggo Cross", 
    category: "Tiggo", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "The Urban Companion",
    specs: ["Mesin 1.5L VVT", "Transmisi CVT 9-Speed CVT", "Kabin Luas Ekstra", "Sistem Infotainment 10.25 inch", "Kamera Parkir Belakang HD", "Velg Alloy 17 inch"]
  },
  { 
    id: "tiggo-cross-sport", 
    name: "Tiggo Cross Sport", 
    category: "Tiggo", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "Sporty & Dynamic",
    specs: ["Mesin 1.5L Turbo Dual VVT", "Transmisi CVT 9-Speed Sport Mode", "Aksen Sporty Eksterior", "Panoramic Sunroof", "Sistem Keamanan ADAS Dasar", "Velg Alloy 18 inch Sport"]
  },
  { 
    id: "tiggo-5x", 
    name: "Tiggo 5X", 
    category: "Tiggo", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "Your First Choice",
    specs: ["Mesin 1.5L Naturally Aspirated", "Transmisi MT/CVT 7-Speed", "Ground Clearance 190mm", "Layar Sentuh 10.25 inch dengan Apple CarPlay", "Dual Airbags", "Desain Gril Parametrik"]
  },
  { 
    id: "tiggo-7-pro", 
    name: "Tiggo 7 Pro", 
    category: "Tiggo", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "Premium Driving Experience",
    specs: ["Mesin 1.5L TCI 155 HP", "Transmisi 9-Speed CVT", "Advanced Driver-Assistance System (ADAS)", "Panoramic Sunroof", "Layar Interaktif Dual", "Kamera 360 Derajat HD"]
  },
  { 
    id: "tiggo-8", 
    name: "Tiggo 8", 
    category: "Tiggo", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "First Class Cabin",
    specs: ["Kapasitas 7 Penumpang Medium SUV", "Mesin 2.0L TGDI 250 HP", "Transmisi 7-Speed DCT", "Sistem Keselamatan 6 Airbags", "Kursi Baris Ketiga Fleksibel", "Fitur Perintah Suara Cerdas"]
  },
  { 
    id: "tiggo-8-pro-max", 
    name: "Tiggo 8 Pro Max", 
    category: "Tiggo", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Rp 628.500.000", 
    tagline: "Ultimate Power & Luxury",
    specs: ["Penggerak AWD All-Wheel Drive", "Mesin 2.0L TGDI Generasi Terbaru", "Sony Premium Audio 8 Speakers", "ADAS Terlengkap (Level 2+)", "Interior Kulit Nappa Premium", "Layar Sentuh 24.6 inch Melengkung"],
    description: "Tiggo 8 Pro Max menghadirkan level kemewahan baru dengan kinerja 2.0L Turbo yang sangat bertenaga. Dirancang dengan presisi untuk kenyamanan berkendara di semua medan (AWD), SUV 7-seater ini memastikan keamanan keluarga dengan ADAS 2.0 terlengkap.",
    variants: [
      { name: "Tiggo 8 Pro Max 2.0 TGDI FWD", price: "Rp 568.500.000" },
      { name: "Tiggo 8 Pro Max 2.0 TGDI AWD", price: "Rp 628.500.000" }
    ],
    colors: [
      { name: "Khaki White", hex: "#f0f0f0", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" },
      { name: "Roland Purple", hex: "#3b304f", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800" },
      { name: "Carbon Crystal Black", hex: "#1a1a1a", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  { id: "tiggo-8-csh", name: "Tiggo 8 CSH", category: "Tiggo", image: "/images/cars/tiggo-cross-fallback.jpg", price: "Hubungi Kami", tagline: "Advanced Hybrid" },
  { id: "tiggo-9-csh", name: "Tiggo 9 CSH", category: "Tiggo", image: "/images/cars/tiggo-cross-fallback.jpg", price: "Hubungi Kami", tagline: "The Flagship Luxury" },
  { id: "tiggo-cross-csh", name: "Tiggo Cross CSH", category: "Tiggo", image: "/images/cars/tiggo-cross-fallback.jpg", price: "Hubungi Kami", tagline: "Hybrid Urban Style" },
  
  { 
    id: "omoda-5", 
    name: "Omoda 5", 
    category: "Omoda", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "Cross Future",
    specs: ["Mesin 1.5L Turbo 145 HP", "Desain Crossover Futuristik", "Gril Depan Integrasi Tiga Dimensi", "Sistem Keamanan Bintang 5 Euro NCAP", "Layar Pintar Ganda 20.5 inch", "Sistem Ambient Light 64 Warna"]
  },
  { 
    id: "omoda-e5", 
    name: "Omoda E5", 
    category: "Omoda", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Rp 488.800.000", 
    tagline: "Drive The Future, Electric",
    specs: ["100% Electric Vehicle (EV)", "Jarak Tempuh Hingga 430 km (WLTP)", "Baterai 61 kWh LFP", "Pengisian Cepat (30-80% dalam 28 menit)", "Desain Aerodinamis Koefisien 0.281", "V2L (Vehicle to Load) 3.3 kW"],
    description: "Omoda E5 adalah wujud nyata mobilitas masa depan 100% bertenaga listrik murni tanpa emisi. Menampilkan desain eksterior aerodinamis modern yang dikurasi oleh desainer top global, kapabilitas baterai jarak jauh hingga 430 KM memastikan Anda tenang bepergian ke pelosok kota.",
    variants: [
      { name: "Omoda E5 Pure", price: "Rp 419.800.000" },
      { name: "Omoda E5 Long Range", price: "Rp 488.800.000" }
    ],
    colors: [
      { name: "Aqua Green", hex: "#94bfa2", image: "/images/cars/omoda-e5.png" },
      { name: "Space Black", hex: "#121212", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800" },
      { name: "Jupiter Blue", hex: "#1e3a8a", image: "https://images.unsplash.com/photo-1503376713215-6ceceeb15682?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  { 
    id: "omoda-5-gt", 
    name: "Omoda 5 GT", 
    category: "Omoda", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "Unleash The Power",
    specs: ["Mesin 1.6L TGDI 197 HP", "Transmisi 7-Speed DCT Respons Cepat", "Suspensi Independent Multi-Link Belakang", "Akselerasi 0-100 km/jam dalam 7.8 detik", "ADAS Lengkap Tertinggi", "Velg Alloy 19 inch Performa"]
  },
  
  { 
    id: "j6", 
    name: "Chery J6", 
    category: "J6", 
    image: "/images/cars/tiggo-cross-fallback.jpg", 
    price: "Hubungi Kami", 
    tagline: "Elegant & Futuristic",
    specs: ["Desain Tiga Ruang Proporsional", "Interior Minimalis namun Mewah", "Sistem Manajemen Baterai Canggih C-BMS", "Teknologi Kabin Pintar Terhubung", "Fitur Keselamatan Aktif Lanjutan", "Kenyamanan Suspensi Adaptif"]
  },
];
