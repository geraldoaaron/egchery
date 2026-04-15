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

    </div>
  );
}
