"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface ColorChoice {
  name: string;
  hex: string;
  image: string;
}

export function CarColorPicker({ colors, defaultImage }: { colors: ColorChoice[], defaultImage: string }) {
  const [activeColor, setActiveColor] = useState<ColorChoice | null>(colors[0] || null);

  if (!colors || colors.length === 0) {
    return (
      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/5 relative">
        <Image 
          fill 
          src={defaultImage} 
          alt="Car View" 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
    );
  }

  const currentImage = activeColor ? activeColor.image : defaultImage;

  return (
    <div className="flex flex-col gap-8">
      {/* Visualizer Frame */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-b from-black/5 to-transparent relative border border-black/10 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              fill
              src={currentImage}
              alt={activeColor?.name || "Car"}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Interface Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-black/5 p-6 rounded-2xl border border-black/5">
        <div>
          <h3 className="text-black font-bold text-lg mb-1">Pilihan Warna Eksklusif</h3>
          <p className="text-gray-600 text-sm">
            Warna saat ini: <span className="text-black font-medium">{activeColor?.name}</span>
          </p>
        </div>

        <div className="flex gap-4">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setActiveColor(c)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all outline-none ${
                activeColor?.name === c.name 
                  ? "ring-2 ring-primary ring-offset-4 ring-offset-[#050505] scale-110" 
                  : "hover:scale-105"
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
              aria-label={`Pilih warna ${c.name}`}
            >
              {activeColor?.name === c.name && (
                <Check className={`w-5 h-5 ${['#f0f0f0', '#ffffff', '#e0e0e0', '#fafafa'].includes(c.hex.toLowerCase()) ? 'text-black' : 'text-white'}`} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
