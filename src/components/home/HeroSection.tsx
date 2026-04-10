"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Zap, Star } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      tl.from(".hero-tagline", { y: -20, opacity: 0, delay: 0.5 })
        .from(".hero-title", { y: 40, opacity: 0 }, "-=1")
        .from(".vehicle-cluster", { scale: 0.9, opacity: 0, y: 50 }, "-=1.2")
        .from(".hero-details", { y: 20, opacity: 0, stagger: 0.1 }, "-=1")
        .from(".hero-btns", { y: 20, opacity: 0 }, "-=1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center pt-24 pb-20"
    >
      {/* Two-Tone Studio Background */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-1/2 bg-[#000000]" />
        <div className="h-1/2 bg-white" />
      </div>

      {/* Decorative Radial Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center h-full min-h-screen">

        {/* Top Tier: Tagline & Title (Floating in Black area) */}
        <div className="flex-1 flex flex-col justify-end items-center pb-8 w-full">
          <div className="hero-tagline flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-primary/20" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">
              The Pure Experience
            </span>
            <span className="w-10 h-[1px] bg-primary/20" />
          </div>

          <h1 className=" hero-title text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] text-white/90 uppercase tracking-tighter">
            REDEFINING <br />
            <span className="luxury-text-stroke">PERFECTION.</span>
          </h1>
        </div>

        {/* Middle Tier: Triple Vehicle Cluster (Centered on Boundary) */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="vehicle-cluster -translate-y-12 relative w-full items-center justify-center max-w-5xl aspect-video flex z-20"
          style={{
            // Mobile Default Config
            "--mobile-shift": "140px",
            "--mobile-scale": "0.6",
            "--desktop-shift": "780px",
            "--desktop-scale": "0.75",
          } as any}
        >
          {/* Side Car Left */}
          <div
            className="absolute z-0 transition-all duration-500"
            style={{
              transform: "translateX(calc(var(--mobile-shift) * -1)) scale(var(--mobile-scale))",
            } as any}
          >
            <div className="md:hidden"> {/* Mobile View */}
              <Image src="/images/cars/tiggo-8-pro.png" alt="Left" width={400} height={150} className="object-contain blur-[1px] " />
            </div>
            <div className="hidden md:block" style={{ transform: "translateX(calc((var(--desktop-shift) - var(--mobile-shift)) * -1)) scale(calc(var(--desktop-scale) / var(--mobile-scale)))" } as any}>
              <Image src="/images/cars/tiggo-8-pro.png" alt="Left" width={700} height={400} className="object-contain blur-[1px] " />
            </div>
          </div>

          {/* Side Car Right */}
          <div
            className="absolute z-0 transition-all duration-500"
            style={{
              transform: "translateX(var(--mobile-shift)) scale(var(--mobile-scale))",
            } as any}
          >
            <div className="md:hidden"> {/* Mobile View */}
              <Image src="/images/cars/chery-j6.png" alt="Right" width={400} height={150} className="object-contain blur-[1px]  " />
            </div>
            <div className="hidden md:block" style={{ transform: "translateX(calc(var(--desktop-shift) - var(--mobile-shift))) scale(calc(var(--desktop-scale) / var(--mobile-scale)))" } as any}>
              <Image src="/images/cars/chery-j6.png" alt="Right" width={700} height={400} className="object-contain blur-[1px]  " />
            </div>
          </div>

          {/* Main Car Center */}
          <div className="relative z-10 transition-all duration-500 transform md:scale-100 scale-[0.85] drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            {/* mobile */}
            <div className="md:hidden">
              <Image src="/images/cars/omoda-e5.png" alt="Center" width={330} height={160} priority className="object-contain" />
            </div>
            {/* desktop */}
            <div className="hidden md:block">
              <Image src="/images/cars/omoda-e5.png" alt="Center" width={650} height={380} priority className="object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Tier: Details & Buttons (Floating in White area) */}
        <div className="flex-1 flex flex-col justify-start items-center pt-8 w-full">
          {/* Luxury Detail Chips */}
          <div className="hero-details flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary/40" />
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">5-Star Safety</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-5 h-5 text-primary/40" />
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Electric Soul</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="w-5 h-5 text-primary/40" />
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Premium Tier</span>
            </div>
          </div>

          <div className="hero-btns flex flex-wrap justify-center gap-6">
            <Button
              asChild
              className="h-16 px-12 bg-primary text-white hover:bg-primary/90 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 luxury-shadow"
            >
              <Link href="/model-mobil" className="flex items-center gap-2">
                Explore Fleet <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-16 px-12 border-foreground/5 bg-white text-foreground hover:bg-foreground hover:text-white rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500"
            >
              Request Brochure
            </Button>
          </div>
        </div>
      </div>
      {/* Aesthetic Background Typography */}
      <div className="absolute bottom-50 left-0 w-full h-[30vh] flex items-end justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.03]">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter leading-none">
          Chery
        </h2>
      </div>
    </section>
  );
}
