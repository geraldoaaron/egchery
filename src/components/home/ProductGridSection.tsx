"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cars } from "@/data/cars";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function ProductGridSection() {
  const containerRef = useRef<HTMLElement>(null);
  const featuredCars = cars.slice(0, 6);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".showroom-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-background py-40 px-4 md:px-8 overflow-hidden border-t border-foreground/[0.03]"
    >
      <div className="container mx-auto relative z-10">
        
        {/* Elegant Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-[1px] w-8 bg-primary/30" />
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">The Collection</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground leading-none">
              THE <span className="luxury-text-stroke">LINEUP.</span>
            </h2>
          </div>
          <div className="text-right">
             <p className="text-[10px] font-bold tracking-[0.2em] text-foreground/40 mb-2 uppercase">Curated Excellence</p>
             <div className="h-[1px] w-full bg-foreground/[0.05]" />
          </div>
        </div>

        {/* Showroom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {featuredCars.map((car) => (
            <motion.div
              key={car.id}
              className="showroom-card relative group"
            >
              <Link href={`/model-mobil/${car.id}`} className="block w-full">
                
                {/* Powertrain Tag */}
                <span className="text-[10px] font-bold text-primary tracking-[0.3em] mb-4 block uppercase transition-all duration-500 group-hover:translate-x-2">
                   {car.powertrain}
                </span>

                <h3 className="text-4xl font-black text-foreground uppercase tracking-tighter mb-8 transition-colors">
                  {car.name}
                </h3>

                <div className="relative aspect-[16/10] w-full mb-12 transform group-hover:scale-105 transition-transform duration-1000 ease-out">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                  />
                  
                  {/* Glass Card Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="flex items-center justify-between border-t border-foreground/[0.05] pt-8 group-hover:border-primary/20 transition-colors">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-bold tracking-[0.2em] text-foreground/30 uppercase mb-2">Ref Performance</span>
                      <span className="text-xl font-black text-foreground">Top Tier Excellence</span>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-foreground/[0.05] flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Global Catalog Link */}
        <div className="mt-32 flex justify-center">
            <Link href="/model-mobil" className="group relative px-12 py-6 overflow-hidden bg-white border border-foreground/[0.05] luxury-shadow">
              <span className="relative z-10 text-[10px] font-bold tracking-[0.4em] text-foreground uppercase group-hover:text-white transition-colors">
                View All Models
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
        </div>
      </div>

      {/* Aesthetic Background Typography */}
      <div className="absolute bottom-0 right-0 text-[30vw] font-black text-foreground/[0.01] leading-none uppercase tracking-tighter select-none pointer-events-none">
        SHOWROOM
      </div>
    </section>
  );
}
