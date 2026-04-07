"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-white"
    >
      {/* Background Image Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white z-10" />
        <Image
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop"
          alt="Chery Luxury"
          fill
          priority
          className="object-cover scale-105 opacity-60"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-4 mt-20 md:mt-0 flex flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/20 bg-black/5 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase">
            The Next Level of Driving
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl flex flex-col font-bold tracking-tighter uppercase leading-[0.9] mb-6"
        >
          <span className="text-black">Future is</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
            Already Here.
          </span>
        </h1>

        <p
          className="text-gray-600 max-w-2xl text-lg md:text-xl font-light mb-10"
        >
          Rasakan pengalaman berkendara mewah dan futuristik bersama Chery.
          Temukan model Tiggo dan Omoda impian Anda hari ini.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-full"
          >
            <Link href="/hubungi-kami">Test Drive Sekarang</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-8 text-lg border-black/20 hover:bg-black/5 text-black rounded-full"
          >
            <Link href="/model-mobil">Eksplorasi Model</Link>
          </Button>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-black/50 tracking-widest uppercase">
          Gulir untuk Eksplorasi
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </div>
    </section>
  );
}
