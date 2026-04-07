"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useHasMounted } from "@/hooks/useHasMounted";

const images = [
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800"
];

export function DeliverySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-black max-w-sm leading-tight">
              Kisah Bahagia <span className="text-primary italic">Keluarga Chery</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Ratusan unit telah kami kirimkan dengan aman dan penuh senyum. Jadilah bagian dari keluarga besar Chery Wonder Indonesia.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-bold text-black mb-2">1500+</p>
                <p className="text-sm text-gray-600 uppercase tracking-widest">Unit Delivery</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">100%</p>
                <p className="text-sm text-gray-600 uppercase tracking-widest">Kepuasan</p>
              </div>
            </div>
          </div>

          {/* Parallax Image Grid */}
          <div className="relative h-[600px] flex gap-4 rotate-[-5deg] scale-110">
            <motion.div style={{ y: y1 }} className="w-1/2 flex flex-col gap-4">
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                <Image fill src={images[0]} alt="Delivery 1" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
              <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                <Image fill src={images[1]} alt="Delivery 2" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="w-1/2 flex flex-col gap-4">
              <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                <Image fill src={images[2]} alt="Delivery 3" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                <Image fill src={images[3]} alt="Delivery 4" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
