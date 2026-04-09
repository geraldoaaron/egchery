"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cars, Car } from "@/data/cars";

const POWERTRAINS = ["BEV", "CSH", "ICE"] as const;
type Powertrain = typeof POWERTRAINS[number];

export function ModelSelectorSection() {
  const [selectedType, setSelectedType] = useState<Powertrain>("BEV");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter cars based on selected powertrain
  const filteredCars = useMemo(() => {
    return cars.filter((car) => car.powertrain === selectedType);
  }, [selectedType]);

  // Reset index when powertrain changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedType]);

  const currentCar = filteredCars[activeIndex] || filteredCars[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredCars.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredCars.length) % filteredCars.length);
  };

  if (!currentCar) return null;

  return (
    <section className="relative py-24 bg-background overflow-hidden border-t border-foreground/[0.03]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* 1. Powertrain Tabs */}
        <div className="flex items-center gap-8 mb-12">
          {POWERTRAINS.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className="relative px-4 py-2 group"
            >
              <span className={`text-xs font-bold tracking-[0.4em] uppercase transition-colors duration-300 ${selectedType === type ? "text-primary" : "text-foreground/30 group-hover:text-foreground"}`}>
                {type}
              </span>
              {selectedType === type && (
                <motion.div
                  layoutId="powertrainUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 2. Model Dropdown */}
        <div className="relative mb-16 z-50">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-[320px] px-6 py-4 bg-white border border-foreground/[0.05] rounded-none luxury-shadow group transition-all duration-300 hover:border-primary/20"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground">
              {currentCar.name}
            </span>
            <ChevronDown className={`w-4 h-4 text-foreground/40 transition-transform duration-500 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-foreground/[0.05] shadow-2xl z-[60]"
              >
                {filteredCars.map((car, idx) => (
                  <button
                    key={car.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsDropdownOpen(false);
                    }}
                    className={`flex items-center w-full px-6 py-4 text-[10px] font-bold tracking-widest uppercase transition-colors ${idx === activeIndex ? "bg-primary/5 text-primary" : "text-foreground/60 hover:bg-foreground/[0.02] hover:text-foreground"}`}
                  >
                    {car.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. Interactive Slider */}
        <div className="relative w-full max-w-6xl aspect-[16/8] md:aspect-[16/6] flex items-center justify-center mb-12">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-12 z-10 w-12 h-12 rounded-full border border-foreground/[0.05] flex items-center justify-center bg-white/50 backdrop-blur-md hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-12 z-10 w-12 h-12 rounded-full border border-foreground/[0.05] flex items-center justify-center bg-white/50 backdrop-blur-md hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Car Visualization */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCar.id}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full max-w-4xl drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                  <Image
                    src={currentCar.image}
                    alt={currentCar.name}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floor Shadow Reflection Overlay */}
          <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        {/* 4. Details & Action */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            key={`price-${currentCar.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.4em] mb-2 block">
              Starts from
            </span>
            <span className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight">
              {currentCar.price}
            </span>
          </motion.div>

          <Button
            asChild
            className="h-16 px-12 bg-primary text-white hover:bg-primary/90 rounded-none text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 luxury-shadow"
          >
            <Link href={`/model-mobil/${currentCar.id}`} className="flex items-center gap-3">
              See Car Details <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] pointer-events-none select-none z-0">
        <span className="text-[40vw] font-black text-foreground leading-none uppercase tracking-tighter">
          {selectedType}
        </span>
      </div>
    </section>
  );
}
