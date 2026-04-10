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
              className="showroom-card relative group perspective-1000 h-full"
            >
              <Link href={`/model-mobil/${car.id}`} className="block w-full h-full">
                <div className="relative bg-[#1c1c1c] border border-white/5 rounded-2xl overflow-hidden transition-all duration-700 h-full flex flex-col group-hover:border-primary/20 group-hover:rotate-x-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                  {/* ADVANCED NEON FIXTURE - High Fidelity Detail */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 z-30 pointer-events-none">
                    {/* 1. Recessed Housing Shadow (The frame) */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-black/60 blur-[1px]" />
                    
                    {/* 2. Ceiling Bounce (Light hitting the very top edge) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white opacity-40 blur-[0.5px]" />

                    {/* 3. The Multi-Layer Neon Tube */}
                    <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-20 h-[3px]">
                       {/* Light Core (Brightest) */}
                       <div className="absolute inset-0 bg-white rounded-full z-10 shadow-[0_0_8px_#fff]" />
                       {/* Warm Halo/Glow */}
                       <div className="absolute -inset-1 bg-yellow-50/40 rounded-full blur-[2px]" />
                       {/* Ambient Bloom */}
                       <div className="absolute -inset-4 bg-yellow-50/10 rounded-full blur-[10px]" />
                       
                       {/* Terminal Flares (End intensity) */}
                       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]" />
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]" />
                    </div>
                  </div>

                  {/* GALLERY ACCENTS */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-white/5 blur-[0.5px] z-30" />

                  <div className="p-6 md:p-10 flex flex-col h-full relative z-20">

                    {/* 1. Showroom Gallery Display (Image + Professional Shadows) */}
                    <div className="relative w-full aspect-[16/11] mb-12 group shrink-0">

                      {/* Realistic Volumetric Spotlight System */}
                      <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[140%] h-[140%] pointer-events-none z-0">
                        {/* 1. Core Beam (Brightest) with Noise Texture */}
                        <div
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[95%] bg-gradient-to-b from-yellow-50/25 via-yellow-50/5 to-transparent blur-[1px] overflow-hidden"
                          style={{ clipPath: "polygon(48% 0%, 52% 0%, 95% 100%, 5% 100%)" }}
                        >
                          {/* Volumetric Grain/Noise */}
                          <div className="absolute inset-0 noise-filter opacity-[0.1] mix-blend-overlay" />
                        </div>

                        {/* 2. Soft Outer Beam (Scattering Bloom) */}
                        <div
                          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[130%] h-full bg-gradient-to-b from-yellow-100/10 via-transparent to-transparent blur-[60px]"
                          style={{ clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)" }}
                        />

                        {/* 3. Floating Dust Particles - Static positions to prevent SSR hydration mismatch */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-64 overflow-hidden pointer-events-none">
                          {[
                            { left: "30%", top: "15%", opacity: 0.08 },
                            { left: "60%", top: "45%", opacity: 0.12 },
                            { left: "20%", top: "70%", opacity: 0.07 },
                            { left: "75%", top: "30%", opacity: 0.10 },
                            { left: "50%", top: "60%", opacity: 0.09 },
                          ].map((particle, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-yellow-50 rounded-full animate-float-dust blur-[0.5px]"
                              style={{
                                left: particle.left,
                                top: particle.top,
                                animationDelay: `${i * 1.5}s`,
                                opacity: particle.opacity
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Floor Hotspot Glow (Light hitting the ground) */}
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
                        {/* SURROUND LIGHT: Interaction layer - Soft radial bloom */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none mix-blend-screen opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                      </div>

                      {/* GROUNDED: Ambient Occlusion Shadow System */}
                      <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[90%] h-[10%] bg-black blur-[30px] rounded-full scale-y-[0.3] z-0 opacity-80" />
                      <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-[70%] h-[5%] bg-black blur-[15px] rounded-full scale-y-[0.2] z-0" />

                      {/* Tight Contact point */}
                      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[58%] h-[2%] bg-black blur-[5px] rounded-full scale-y-[0.1] z-0" />

                      {/* Professional Studio Reflection */}
                      <div className="absolute bottom-[-10%] left-0 w-full h-[40%] opacity-[0.25] group-hover:opacity-[0.4] transition-opacity duration-1000 scale-y-[-1] pointer-events-none">
                        <Image
                          src={car.image}
                          alt=""
                          fill
                          className="object-contain blur-[5px] mask-gradient-to-t"
                        />
                      </div>
                    </div>

                    {/* 2. Technical Readout - Silver Modern Font for Dark background */}
                    <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-primary uppercase tracking-[0.5em] mb-2 leading-none">
                          STALL // {car.powertrain}
                        </span>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                          {car.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest block mb-1">STALL REF</span>
                        <span className="text-[10px] font-mono text-white/60 font-bold uppercase">G-{car.id.slice(0, 3).toUpperCase()}</span>
                      </div>
                    </div>

                    {/* 3. Data Panel Foot */}
                    <div className="mt-auto grid grid-cols-2 gap-8 items-end">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-[4px] h-[4px] bg-primary rounded-full animate-pulse" />
                          <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.3em]">UNIT STATUS: ON DISPLAY</span>
                        </div>
                        <span className="text-xs font-mono text-white/40 leading-none mb-2 uppercase tracking-tight">TECH: {car.dimensions?.engine || "BEV-CORE"}</span>
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
