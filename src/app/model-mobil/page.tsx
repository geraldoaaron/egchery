"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cars } from "@/data/cars";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ModelMobilPage() {
  const [filter, setFilter] = useState<"All" | "BEV" | "CSH" | "ICE">("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredCars = filter === "All" ? cars : cars.filter(c => c.powertrain === filter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
    
  // Separate effect if needed for other logic, but kept stable now

  return (
    <div data-nav-theme="dark" className="pt-40 pb-32 min-h-screen bg-[#050505] relative overflow-hidden">
      
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-[20%] translate-y-[-20%]" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-[-20%] translate-y-[20%]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Elegant Header */}
        <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">Explore The Gallery</span>
            <div className="h-[1px] w-8 bg-primary/30" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none mb-8">
            THE CHERY <br /> <span className="luxury-text-stroke !-webkit-text-stroke-white/20">COLLECTION.</span>
          </h1>
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 leading-relaxed uppercase max-w-xl">
            Jelajahi inovasi terkini dan kemewahan dalam setiap koleksi mobil Chery kami yang dirancang untuk performa tanpa batas.
          </p>
        </div>

        {/* Premium Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {["All", "BEV", "CSH", "ICE"].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`px-10 py-4 rounded-full text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 border ${
                filter === tab 
                  ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(204,0,0,0.3)]" 
                  : "bg-white/[0.03] border-white/10 text-white/40 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab === "All" ? "Semua Model" : tab === "CSH" ? "CSH (PHEV)" : tab}
            </button>
          ))}
        </div>

        {/* Showroom Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="showroom-card-grid group perspective-1000"
              >
                <Link href={`/model-mobil/${car.id}`} className="block w-full h-full">
                  <div className="relative bg-[#1c1c1c] border border-white/5 rounded-2xl overflow-hidden transition-all duration-700 h-full flex flex-col group-hover:border-primary/20 group-hover:rotate-x-1 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                    {/* ADVANCED NEON FIXTURE */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 z-30 pointer-events-none">
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-black/60 blur-[1px]" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white opacity-40 blur-[0.5px]" />
                      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-20 h-[3px]">
                         <div className="absolute inset-0 bg-white rounded-full z-10 shadow-[0_0_8px_#fff]" />
                         <div className="absolute -inset-1 bg-yellow-50/40 rounded-full blur-[2px]" />
                         <div className="absolute -inset-4 bg-yellow-50/10 rounded-full blur-[10px]" />
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col h-full relative z-20">
                      
                      {/* Showroom Gallery Display */}
                      <div className="relative w-full aspect-[16/11] mb-12 group shrink-0">
                        {/* Realistic Spotlight */}
                        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[140%] h-[140%] pointer-events-none z-0">
                          <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[95%] bg-gradient-to-b from-yellow-50/25 via-yellow-50/5 to-transparent blur-[1px] overflow-hidden"
                            style={{ clipPath: "polygon(48% 0%, 52% 0%, 95% 100%, 5% 100%)" }}
                          />
                          {/* Rolling Dust Particles */}
                          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-64 overflow-hidden pointer-events-none">
                            {[0.08, 0.12, 0.07, 0.1, 0.09].map((op, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 bg-yellow-50 rounded-full animate-float-dust blur-[0.5px]"
                                style={{
                                  left: `${20 + i * 15}%`,
                                  top: `${15 + i * 12}%`,
                                  animationDelay: `${i * 1.5}s`,
                                  opacity: op
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-80 h-20 bg-yellow-100/10 rounded-full blur-[50px] z-0" />

                        {/* Image Display */}
                        <div className="relative w-full h-full transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-1000 ease-out z-10">
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-contain"
                          />
                        </div>

                        {/* Grounded Reflection */}
                        <div className="absolute bottom-[-10%] left-0 w-full h-[40%] opacity-[0.25] group-hover:opacity-[0.4] transition-opacity duration-1000 scale-y-[-1] pointer-events-none">
                          <Image src={car.image} alt="" fill className="object-contain blur-[5px] mask-gradient-to-t" />
                        </div>
                      </div>

                      {/* Technical Readout */}
                      <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono text-primary uppercase tracking-[0.5em] mb-2 leading-none">
                            STALL // {car.powertrain}
                          </span>
                          <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                            {car.name}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest block mb-1">STALL REF</span>
                          <span className="text-[10px] font-mono text-white/60 font-bold uppercase">G-{car.id.slice(0, 3).toUpperCase()}</span>
                        </div>
                      </div>

                      {/* Data Panel Foot */}
                      <div className="mt-auto grid grid-cols-2 gap-8 items-end">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-[4px] h-[4px] bg-primary rounded-full animate-pulse" />
                            <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.3em]">UNIT STATUS: ON DISPLAY</span>
                          </div>
                          <span className="text-xl font-black text-white">{car.price}</span>
                        </div>
                        <div className="flex justify-end">
                          <div className="w-12 h-12 border border-white/10 rounded-lg flex items-center justify-center bg-white/[0.03] group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-0 right-0 text-[30vw] font-black text-white/[0.01] leading-none uppercase tracking-tighter select-none pointer-events-none">
        SHOWROOM
      </div>
    </div>
  );
}
