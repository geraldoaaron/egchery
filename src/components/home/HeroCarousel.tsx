"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Phone, MessageSquare, MapPin, MessageCircle } from "lucide-react";

interface HeroSlide {
  id: string;
  name: string;
  price: string;
  powertrain: string;
  image: string;
  bgImage: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "c5-csh",
    name: "C5 CSH",
    powertrain: "Super Hybrid",
    price: "IDR 399.900.000",
    image: "/images/cars/csh/chery-c5-csh-fix.webp",
    bgImage: "/images/banners/bg_city.png",
  },
  {
    id: "e5-bev",
    name: "OMODA E5",
    powertrain: "Pure Electric",
    price: "IDR 488.800.000",
    image: "/images/cars/bev/CheryE5.png",
    bgImage: "/images/banners/bg_studio.png",
  },
  {
    id: "tiggo-8-pm",
    name: "TIGGO 8 PRO MAX",
    powertrain: "Luxury ICE",
    price: "IDR 628.500.000",
    image: "/images/cars/ice/Tiggo-8-Pro-Max.png",
    bgImage: "/images/banners/bg_mountain.png",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const DURATION = 5000; // 5 seconds per slide

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + (100 / (DURATION / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section data-nav-theme="dark" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${HERO_SLIDES[currentIndex].id}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={HERO_SLIDES[currentIndex].bgImage}
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Car Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`car-${HERO_SLIDES[currentIndex].id}`}
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-[15%] md:bottom-[10%] h-[50vh] md:h-[70vh] z-10 flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-7xl">
            <Image
              src={HERO_SLIDES[currentIndex].image}
              alt={HERO_SLIDES[currentIndex].name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay (Bottom-Left) */}
      <div className="absolute bottom-24 left-6 md:bottom-24 md:left-24 z-20 max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${HERO_SLIDES[currentIndex].id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-4">
              <h2 className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-2">
                {HERO_SLIDES[currentIndex].powertrain}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                {HERO_SLIDES[currentIndex].name}
              </h1>
              <p className="text-sm md:text-xl font-medium tracking-widest text-white/80 uppercase">
                Starts From <span className="text-white font-black">{HERO_SLIDES[currentIndex].price}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="h-14 px-10 bg-white text-black hover:bg-white/90 rounded-none text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300">
                Test Drive
              </Button>
              <Button variant="outline" className="h-14 px-10 border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-black rounded-none text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300">
                See Detail
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation & Progress (Bottom Center for Mobile, Bottom Right for Desktop) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:bottom-24 md:right-24 z-30 flex flex-col items-center md:items-end gap-6 w-full md:w-auto px-6 md:px-0">
        <div className="flex items-center gap-3 md:gap-4 justify-center md:justify-end w-full">
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
          </button>

          <div className="flex gap-1.5 md:gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <div key={idx} className="relative w-10 md:w-12 h-[2px] bg-white/10 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-primary transition-all duration-100 ease-linear"
                  style={{
                    width: idx === currentIndex ? `${progress}%` : idx < currentIndex ? "100%" : "0%"
                  }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator (Shifted up on mobile to avoid overlap) */}
      <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-[22px] h-[36px] rounded-full border-2 border-white/20 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </div>

      {/* Floating Contact Icons (Far Right) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        {[
          { icon: <MapPin className="w-5 h-5" />, label: "Dealer" },
          { icon: <MessageSquare className="w-5 h-5" />, label: "Chat" },
          { icon: <Phone className="w-5 h-5" />, label: "Call" },
          { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp" },
        ].map((item, idx) => (
          <button
            key={idx}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300 group relative"
          >
            {item.icon}
            <span className="absolute right-full mr-4 px-3 py-1 bg-primary text-white text-[9px] font-bold uppercase tracking-widest rounded-none opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
