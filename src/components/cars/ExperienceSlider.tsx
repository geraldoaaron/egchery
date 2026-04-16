"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { FeatureGroup } from "@/data/cars";

interface ExperienceSlide {
  title: string;
  image: string;
}

interface ExperienceSliderProps {
  title?: string;
  subtitle?: string;
  slides?: ExperienceSlide[];
  experienceGroups?: FeatureGroup[];
  bgColor?: string;
}

export function ExperienceSlider({
  title = "SUPER EXPERIENCE",
  subtitle,
  slides: initialSlides,
  experienceGroups,
  bgColor = "bg-white",
}: ExperienceSliderProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [active, setActive] = useState(0);
  
  // Determine which groups and slides to use
  const groupsToUse = experienceGroups && experienceGroups.length > 0 ? experienceGroups : null;
  const hasTabs = groupsToUse && groupsToUse.length > 1;
  const currentSlides = groupsToUse ? groupsToUse[activeTabIdx].slides : (initialSlides || []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNext = useCallback(
    () => setActive((p) => (p + 1) % currentSlides.length),
    [currentSlides.length]
  );
  const handlePrev = useCallback(
    () => setActive((p) => (p - 1 + currentSlides.length) % currentSlides.length),
    [currentSlides.length]
  );

  const handleTabChange = (idx: number) => {
    setActiveTabIdx(idx);
    setActive(0);
  };

  if (!currentSlides || currentSlides.length === 0) return null;

  const prevIdx = (active - 1 + currentSlides.length) % currentSlides.length;
  const nextIdx = (active + 1) % currentSlides.length;

  return (
    <section className={`py-14 md:py-20 ${bgColor}`}>
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-black mb-2 md:mb-3">
            {title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-base leading-relaxed">
            {subtitle ||
              "Discover unparalleled luxury within the futuristic interior, where innovative design seamlessly blends with maximum comfort."}
          </p>
        </div>

        {/* Dynamic Model Tabs */}
        {hasTabs && (
          <div className="flex items-center gap-8 mb-10 border-b border-gray-200">
            {groupsToUse.map((group, idx) => (
              <button
                key={group.name}
                onClick={() => handleTabChange(idx)}
                className={`pb-4 text-sm font-bold tracking-[0.2em] transition-all relative ${
                  activeTabIdx === idx ? "text-black" : "text-gray-400 hover:text-black"
                }`}
              >
                {group.name}
                {activeTabIdx === idx && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2.5px] bg-primary" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* COVERFLOW STAGE */}
      <div className="relative overflow-hidden">
        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-300/80 hover:bg-gray-400 flex items-center justify-center transition-colors shadow backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>

        {/* Cards Row */}
        <div
          className="flex items-center justify-center"
          style={{ width: "138%", marginLeft: "-19%" }}
        >
          {/* LEFT CARD */}
          <div
            onClick={handlePrev}
            className="cursor-pointer flex-shrink-0"
            style={{
              flex: "0 0 37%",
              height: "clamp(140px, 28vw, 380px)",
              zIndex: 10,
              marginRight: "-1.5%",
              transform: "perspective(clamp(300px, 60vw, 700px)) rotateY(22deg) scale(0.93)",
              transformOrigin: "right center",
            }}
          >
            <div className="relative w-full h-full" style={{ clipPath: "inset(0 round 1rem)" }}>
              <Image
                src={currentSlides[prevIdx].image}
                alt={currentSlides[prevIdx].title}
                fill
                className="object-cover brightness-[0.45]"
                sizes="(max-width: 768px) 40vw, 500px"
              />
              <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 z-10">
                <span className="text-white text-xs md:text-lg font-medium leading-snug drop-shadow">
                  {currentSlides[prevIdx].title}
                </span>
              </div>
            </div>
          </div>

          {/* CENTER CARD */}
          <div
            className="flex-shrink-0 group"
            style={{
              flex: isMobile ? "0 0 45%" : "0 0 35%",
              height: "clamp(250px, 36vw, 540px)",
              zIndex: 20,
              position: "relative",
            }}
          >
            <div
              className="relative w-full h-full shadow-2xl"
              style={{ clipPath: "inset(0 round 1rem)" }}
            >
              <Image
                src={currentSlides[active].image}
                alt={currentSlides[active].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 60vw, 600px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-10">
                <span className="text-white text-sm md:text-2xl font-bold uppercase tracking-tight leading-none drop-shadow-xl inline-block mb-1">
                  {currentSlides[active].title}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            onClick={handleNext}
            className="cursor-pointer flex-shrink-0"
            style={{
              flex: "0 0 37%",
              height: "clamp(140px, 28vw, 380px)",
              zIndex: 10,
              marginLeft: "-1.5%",
              transform: "perspective(clamp(300px, 60vw, 700px)) rotateY(-22deg) scale(0.93)",
              transformOrigin: "left center",
            }}
          >
            <div className="relative w-full h-full" style={{ clipPath: "inset(0 round 1rem)" }}>
              <Image
                src={currentSlides[nextIdx].image}
                alt={currentSlides[nextIdx].title}
                fill
                className="object-cover brightness-[0.45]"
                sizes="(max-width: 768px) 40vw, 500px"
              />
              <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 z-10">
                <span className="text-white text-xs md:text-lg font-medium leading-snug drop-shadow">
                  {currentSlides[nextIdx].title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-300/80 hover:bg-gray-400 flex items-center justify-center transition-colors shadow backdrop-blur-sm"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>
      </div>

      {/* PILL INDICATORS */}
      <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-5 md:mt-7">
        {currentSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === active ? "2.5rem" : "0.75rem",
              height: "4px",
              borderRadius: "9999px",
              background: i === active ? "#cc0000" : "#d1d5db",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
