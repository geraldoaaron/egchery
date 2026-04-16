"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cars, Car } from "@/data/cars";

const POWERTRAINS = ["BEV", "CSH", "ICE"] as const;
type Powertrain = typeof POWERTRAINS[number];

const CORE_FEATURES = [
  {
    id: "01",
    title: "INTELLIGENT CABIN",
    desc: "A curved 24.6-inch dual screen powered by the Qualcomm Snapdragon 8155, creating a seamless digital cockpit.",
    position: {
      desktop: { top: "10%", left: "0%", dotX: "30px", dotY: "0px" },
      mobile: { top: "5%", left: "5%", dotX: "30px", dotY: "0px" }
    },
  },
  {
    id: "02",
    title: "SOPHISTICATED COMFORT",
    desc: "Premium Nappa leather seating with 6-way power adjustment and integrated ventilation systems.",
    position: {
      desktop: { top: "75%", left: "75%", dotX: "-10px", dotY: "-10px" },
      mobile: { top: "78%", left: "45%", dotX: "0px", dotY: "0px" }
    },
  },
  {
    id: "03",
    title: "PURE ELECTRIC DRIVE",
    desc: "Eco-conscious performance with 430km range (WLTP) and exhilarating silent acceleration.",
    position: {
      desktop: { top: "5%", left: "88%", dotX: "-10px", dotY: "20px" },
      mobile: { top: "-8%", left: "60%", dotX: "0px", dotY: "0px" }
    },
  }
];

export function ScrollStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);

  // Model Selector State
  const [selectedType, setSelectedType] = useState<Powertrain>("BEV");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pinning the Main Container - Increased end distance for "sticky" feel
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Show selector earlier to allow for interaction time
            setIsSelectorVisible(self.progress > 0.6);
          }
        }
      });

      // 1. Initial Car Scale & Soft Rotation
      pinTl.to(carWrapperRef.current, {
        scale: 1.1,
        y: -20,
        rotate: 1,
        duration: 2,
        ease: "power2.inOut"
      }, 0);

      // Wind Lines Fade In
      pinTl.to(".speed-lines", { opacity: 1, duration: 1 }, 0);

      // 2. Feature Dot Reveals
      CORE_FEATURES.forEach((_, i) => {
        pinTl.fromTo(`.luxury-dot-${i}`,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3 },
          i === 0 ? "+=0.2" : "<0.15" // Faster gap between texts
        );

        pinTl.fromTo(`.luxury-text-${i}`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3 },
          "<"
        );
      });

      // 3. Feature Fade Out (Before Selector Appears)
      pinTl.to(".storytelling-feature", {
        opacity: 0,
        y: -10,
        stagger: 0.1,
        duration: 1,
        ease: "power2.inOut",
        display: "none"
      }, "+=1");

      // Wind Lines Fade Out
      pinTl.to(".speed-lines", { opacity: 0, duration: 1 }, "<");

      // 4. Selector UI Fade In (Centered Elements)
      pinTl.fromTo([".selector-ui-tabs", ".selector-ui-dropdown", ".selector-ui-footer"],
        { opacity: 0, y: 20, xPercent: -50, x: 0 },
        {
          opacity: 1,
          y: 0,
          xPercent: -50,
          duration: 1.5,
          ease: "power3.out",
          display: "flex",
          stagger: 0.1
        },
        "-=0.2"
      );

      // 5. Navigation Arrows Fade In (Full Width)
      pinTl.fromTo(".selector-ui-nav",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut", display: "flex" },
        "<"
      );

      // Add a small "hold" at the end of the timeline
      pinTl.to({}, { duration: 2 });

      // Background Fade
      gsap.to(".bg-silver", {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
        opacity: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background overflow-hidden relative border-t border-foreground/[0.03]">
      {/* Background Silver Gradient Layer */}
      <div className="bg-silver absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.05)_0%,transparent_70%)] opacity-0 pointer-events-none" />

      <div ref={triggerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Subtle Decorative Typography - Dynamic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.02] select-none pointer-events-none transition-all duration-1000">
          <h2 className="text-[55vw] md:text-[35vw] font-black uppercase tracking-tighter text-foreground leading-none">
            {isSelectorVisible ? selectedType : "PURE"}
          </h2>
        </div>

        {/* 1. Powertrain Tabs (Part of Selector) */}
        <div className="selector-ui-tabs absolute top-24 left-1/2 -translate-x-1/2 z-50 hidden flex-row items-center justify-center gap-8 opacity-0">
          {POWERTRAINS.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className="relative px-2 py-2 group flex items-center justify-center"
            >
              <span className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-300 mr-[-0.4em] ${selectedType === type ? "text-primary" : "text-foreground/30 group-hover:text-foreground"}`}>
                {type}
              </span>
              {selectedType === type && (
                <motion.div
                  className="absolute bottom-0 left-[20%] right-[20%] h-[2px] bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 2. Model Dropdown (Part of Selector) */}
        <div className="selector-ui-dropdown absolute top-40 left-1/2 -translate-x-1/2 z-[60] hidden opacity-0">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-[280px] px-6 py-3 bg-white border border-foreground/[0.05] rounded-none luxury-shadow group transition-all duration-300 hover:border-primary/20"
            >
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-foreground">
                {currentCar.name}
              </span>
              <ChevronDown className={`w-3 h-3 text-foreground/40 transition-transform duration-500 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-foreground/[0.05] shadow-2xl z-[70]"
                >
                  {filteredCars.map((car, idx) => (
                    <button
                      key={car.id}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsDropdownOpen(false);
                      }}
                      className={`flex items-center w-full px-6 py-3 text-[9px] font-bold tracking-widest uppercase transition-colors ${idx === activeIndex ? "bg-primary/5 text-primary" : "text-foreground/60 hover:bg-foreground/[0.02] hover:text-foreground"}`}
                    >
                      {car.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Central Display Area - Stepped max-width for notebooks vs 1080p+ */}
        <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl aspect-video px-4 md:px-8 flex items-center justify-center">

          {/* Navigation Arrows (Part of Selector) */}
          <div className={`selector-ui-nav absolute inset-0 hidden flex-row items-center justify-between px-4 md:px-12 z-20 pointer-events-none opacity-0 ${isSelectorVisible ? "pointer-events-auto" : ""}`}>
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-foreground/[0.05] flex items-center justify-center bg-white/50 backdrop-blur-md hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group pointer-events-auto"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-foreground/[0.05] flex items-center justify-center bg-white/50 backdrop-blur-md hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group pointer-events-auto"
            >
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Speed Lines / Wind Effect (BEHIND CAR) */}
          <div className="speed-lines absolute inset-[-20%] md:inset-[-50%] z-0 pointer-events-none opacity-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={`wind-white-${i}`}
                className="absolute h-[1px] md:h-[2px] rounded-full bg-gradient-to-l from-transparent via-white to-transparent animate-wind"
                style={{
                  top: `${10 + (i * 10)}%`,
                  left: "50%",
                  width: `${30 + (i % 3) * 15}%`,
                  opacity: 0.3 + (i % 3) * 0.2,
                  animationDelay: `${(i % 4) * 0.25}s`,
                  animationDuration: `${0.8 + (i % 3) * 0.3}s`,
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={`wind-primary-${i}`}
                className="absolute h-[4px] md:h-[8px] blur-[2px] rounded-full bg-gradient-to-l from-transparent via-primary to-transparent animate-wind"
                style={{
                  top: `${20 + (i * 20)}%`,
                  left: "50%",
                  width: `${40 + (i % 2) * 20}%`,
                  opacity: 0.15 + (i % 2) * 0.1,
                  animationDelay: `${0.4 + (i % 3) * 0.3}s`,
                  animationDuration: `${1.1 + (i % 2) * 0.4}s`,
                }}
              />
            ))}
          </div>

          {/* Car wrapper - GSAP targets this for scale animation */}
          <div ref={carWrapperRef} className="relative w-full h-full z-10">

            {/* Car Image - plain CSS, no Framer Motion inside GSAP-pinned area */}
            <div className="relative w-full h-full">
              <Image
                key={`${selectedType}-${currentCar.id}`}
                src={currentCar.image}
                alt={currentCar.name}
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>

            {/* Storytelling Floating Descriptors - Controlled by GSAP display and opacity */}
            {CORE_FEATURES.map((feature, i) => (
              <div
                key={feature.id}
                className="storytelling-feature absolute z-20 w-[120px] md:w-[150px] lg:w-[190px] xl:w-[260px] pointer-events-none transition-all duration-500"
                style={{
                  "--tm": feature.position.mobile.top,
                  "--lm": feature.position.mobile.left,
                  "--td": feature.position.desktop.top,
                  "--ld": feature.position.desktop.left,
                  "--dmx": feature.position.desktop.dotX || "0px",
                  "--dmy": feature.position.desktop.dotY || "0px",
                  "--mmx": feature.position.mobile.dotX || "0px",
                  "--mmy": feature.position.mobile.dotY || "0px",
                  top: "var(--t)",
                  left: "var(--l)"
                } as any}
              >
                <div className={`flex ${feature.id === "02" ? "flex-col-reverse" : "flex-col"} gap-3 md:gap-4`}>
                  <div className={`luxury-text-${i} space-y-1 md:space-y-1.5 xl:space-y-2 opacity-0`}>
                    <h4 className="text-[8px] md:text-[9px] lg:text-[11px] xl:text-[13px] font-black tracking-[0.3em] text-foreground uppercase">
                      {feature.title}
                    </h4>
                    <p className="text-[9px] md:text-[10px] lg:text-[12px] xl:text-[15px] text-foreground/50 leading-tight md:leading-snug xl:leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>

                  <div
                    className={`luxury-dot-${i} w-3 h-3 rounded-full border border-primary/20 flex items-center justify-center bg-primary shadow-xl opacity-0 transition-transform duration-500`}
                    style={{ transform: "translate(var(--dx), var(--dy))" } as any}
                  >
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS for Responsive Positions */}
        <style>{`
          .storytelling-feature {
            --t: var(--tm);
            --l: var(--lm);
            --dx: var(--mmx);
            --dy: var(--mmy);
          }
          @media (min-width: 768px) {
            .storytelling-feature {
              --t: var(--td);
              --l: var(--ld);
              --dx: var(--dmx);
              --dy: var(--dmy);
            }
          }
          
          @keyframes wind-streak {
            0% { transform: translateX(100vw); opacity: 0; }
            5% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(-200vw); opacity: 0; }
          }
          .animate-wind {
            animation: wind-streak linear infinite;
          }
        `}</style>

        {/* 4. Details & Action (Part of Selector) */}
        <div className="selector-ui-footer absolute bottom-24 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center opacity-0 hidden">
          <div key={`price-${currentCar.id}`} className="mb-6 flex flex-col items-center">
            <span className="text-[9px] font-bold text-foreground/30 uppercase tracking-[0.4em] mb-1 block">
              Starts from
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl font-black text-foreground uppercase tracking-tight">
              {currentCar.price}
            </span>
          </div>

          <Button
            asChild
            className="h-12 px-10 bg-gray-500 text-white hover:bg-primary/90 rounded-none text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-500 luxury-shadow"
          >
            <Link href={`/model-mobil/${currentCar.id}`} className="flex items-center gap-3">
              See Car Details <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Cinematic Progress Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-foreground/5 overflow-hidden">
          <div className="luxury-progress-bar h-full bg-primary origin-left w-0" />
        </div>
      </div>
    </div>
  );
}
