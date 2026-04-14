"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const galleryImages = [
  {
    id: 1,
    url: "/images/cars/ice/Tiggo8.png",
    name: "Keluarga Bpk. Santoso",
    desc: "Tiggo 8 Series - Kebahagiaan baru untuk keluarga.",
    date: "Mars 2024"
  },
  {
    id: 2,
    url: "/images/cars/ice/Omoda-5-GT-AWD.png",
    name: "Ibu Maya & Omoda 5 GT",
    desc: "Gaya hidup modern dengan performa AWD yang tangguh.",
    date: "April 2024"
  },
  {
    id: 3,
    url: "/images/cars/csh/Tiggo-Cross-CSH.png",
    name: "Bpk. Andi - Tiggo Cross",
    desc: "Petualangan baru dimulai dengan kenyamanan maksimal.",
    date: "Mei 2024"
  },
  {
    id: 4,
    url: "/images/cars/bev/CheryE5.png",
    name: "Keluarga Dr. Linda",
    desc: "Melangkah ke masa depan dengan Omoda E5 yang cerdas.",
    date: "Juni 2024"
  },
  {
    id: 5,
    url: "/images/cars/ice/Tiggo-8-Pro-Max.png",
    name: "Bpk. Hendra & Tiggo 8 Pro Max",
    desc: "Kemewahan dan tenaga dalam satu genggaman.",
    date: "Juli 2024"
  }
];

export function DeliverySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const [baseWidth, setBaseWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Triple the set to ensure massive headroom for dragging
  const tripledImages = [...galleryImages, ...galleryImages, ...galleryImages];

  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.target.scrollWidth;
        if (width > 0) {
          setBaseWidth(width / 3);
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Auto-scroll loop
  useAnimationFrame((t, delta) => {
    if (isPaused || !baseWidth) return;
    
    // Smooth deterministic movement
    const moveBy = (delta / 1000) * -30;
    let newX = x.get() + moveBy;

    // Robust wrapping: keep x within [-baseWidth, 0]
    if (newX <= -baseWidth) {
      newX += baseWidth;
    }
    
    x.set(newX);
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".gallery-header-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-40 bg-[#050505] relative overflow-hidden border-t border-white/[0.03]"
    >
      <div className="relative z-10 w-full">

        {/* Header Section */}
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center mb-20 max-w-4xl">
          <div className="gallery-header-reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary/30" />
            <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase">Chery Family Memories</span>
            <div className="w-8 h-[1px] bg-primary/30" />
          </div>
          <h2 className="gallery-header-reveal text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
            THANK YOU CHERY FAMILY.
          </h2>
        </div>

        {/* INTERACTIVE INFINITE PHOTO TICKER */}
        <div className="relative w-full overflow-hidden py-10 cursor-grab active:cursor-grabbing">
          {/* Side Fading Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

          <motion.div
            ref={containerRef}
            drag="x"
            style={{ x }}
            onDragStart={() => {
              setIsPaused(true);
              if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
            }}
            onDragEnd={() => {
              resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 2000);
            }}
            // Constraint check: Reset position if dragged too far
            onUpdate={(latest: any) => {
              if (typeof latest.x !== 'number' || !baseWidth) return;
              if (latest.x <= -baseWidth * 2) x.set(latest.x + baseWidth);
              if (latest.x >= 0) x.set(latest.x - baseWidth);
            }}
            className="flex gap-6 w-max"
          >
            {tripledImages.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="relative group w-[300px] md:w-[400px] flex flex-col gap-5 select-none"
              >
                {/* Photo Strip Item */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/5 grayscale group-hover:grayscale-0 group-hover:border-primary/30 transition-all duration-700 bg-white/[0.02] pointer-events-none">
                  <Image
                    src={item.url}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-contain p-6 md:p-8 transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Glass Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                {/* Faint Label - Responsive sizing */}
                <div className="px-1 flex flex-col gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-mono text-primary uppercase tracking-[0.2em]">{item.name}</span>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em]">{item.date}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 group-hover:bg-primary/30 transition-colors" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Aesthetic Background Text */}
      <div className="absolute bottom-5 left-10 opacity-[0.03] pointer-events-none select-none z-0">
        <span className="text-[12vw] font-black text-white leading-none uppercase tracking-tighter">MOMENTS</span>
      </div>
    </section>
  );
}
