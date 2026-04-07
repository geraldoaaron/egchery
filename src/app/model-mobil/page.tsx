"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cars } from "@/data/cars";
import Link from "next/link";

export default function ModelMobilPage() {
  const [filter, setFilter] = useState<"All" | "Tiggo" | "Omoda" | "J6">("All");

  const filteredCars = filter === "All" ? cars : cars.filter(c => c.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-black text-center">
            Model <span className="text-primary text-center">Chery</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
            Jelajahi inovasi terkini dan kemewahan dalam setiap koleksi mobil Chery kami.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Tiggo", "Omoda", "J6"].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === tab 
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(204,0,0,0.4)]" 
                  : "bg-black/5 text-gray-600 hover:bg-black/10 hover:text-black"
              }`}
            >
              {tab === "All" ? "Semua Model" : `${tab} Series`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCars.map(car => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/model-mobil/${car.id}`} className="group block relative rounded-2xl overflow-hidden bg-white border border-black/10 shadow-sm aspect-[4/3] hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent z-10" />
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-multiply"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                    <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block transform group-hover:-translate-y-2 transition-transform duration-300">{car.category}</span>
                    <h3 className="text-3xl font-bold text-black transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">{car.name}</h3>
                    <p className="text-gray-600 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-8">
                      Lihat Detail &rarr;
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
