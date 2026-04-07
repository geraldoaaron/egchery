"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InfoPromoPage() {
  const promos = [
    {
      id: 1,
      title: "Promo Gebyar Akhir Tahun Omoda E5",
      date: "01 Nov - 31 Des 2025",
      type: "Promo",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      description: "Dapatkan subsidi Dp hingga 20Jt dan gratis wall charger untuk setiap pembelian Omoda E5."
    },
    {
      id: 2,
      title: "Test Drive Berhadiah Tiggo 8 Pro",
      date: "15 Okt - 15 Nov 2025",
      type: "Event",
      image: "https://images.unsplash.com/photo-1629897048514-3dd7c0303e87?w=800&q=80",
      description: "Ikuti test drive Tiggo 8 Pro Max di dealer kami dan menangkan hadiah eksklusif dari Chery."
    },
    {
      id: 3,
      title: "Trade-In Festival Chery Bogor",
      date: "Sepanjang Bulan",
      type: "Promo",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
      description: "Tukar tambah mobil lama Anda dengan mobil Chery baru. Kami hargai mobil lama Anda lebih tinggi."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-black">
            Info & <span className="text-primary">Promo</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Berita terbaru, kegiatan seru, dan promo penawaran terbatas dari Chery Wonder Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/5 border border-black/10 rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {promo.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm text-gray-500 font-medium mb-2 block">{promo.date}</span>
                <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">{promo.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{promo.description}</p>
                <div className="mt-auto">
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:text-black transition-colors group-hover:gap-3">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
