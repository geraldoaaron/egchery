"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { cars } from "@/data/cars";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useHasMounted } from "@/hooks/useHasMounted";

export function ProductGridSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const featuredCars = cars.slice(0, 6);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-black">
              Koleksi <span className="text-primary">Eksklusif</span>
            </h2>
            <p className="text-gray-600 max-w-md">Temukan deretan kendaraan inovatif kami, dirancang untuk masa depan.</p>
          </div>
          <Link href="/model-mobil" className="group flex items-center gap-2 text-black font-medium hover:text-primary transition-colors">
            Lihat Semua Model
            <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-primary transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, i) => (
            <div
              key={car.id}
            >
              <Link href={`/model-mobil/${car.id}`} className="group block relative rounded-2xl overflow-hidden bg-white border border-black/10 aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent z-10" />
                <Image 
                  fill
                  src={car.image} 
                  alt={car.name} 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">{car.category}</span>
                  <h3 className="text-3xl font-bold text-black mb-2">{car.name}</h3>
                  <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{car.tagline}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
