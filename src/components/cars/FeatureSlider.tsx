"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FeatureGroup } from "@/data/cars";

interface FeatureSliderProps {
  carId: string;
  carImage?: string;
  featureTitle?: string;
  featureSubtitle?: string;
  featureGroups?: FeatureGroup[];
  sectionIndex?: number; // For alternating backgrounds when multiple sliders exist
}

export function FeatureSlider({ carId, carImage, featureTitle, featureSubtitle, featureGroups, sectionIndex = 0 }: FeatureSliderProps) {
  // Use the specific car image as fallback, or a studio background
  const fallbackImg = carImage || "/images/banners/bg_studio.png";

  const j6Fallback: FeatureGroup[] = [
    {
      name: "J6",
      slides: [
        { id: 1, title: "New Fog Lamp", image: fallbackImg },
        { id: 2, title: "Aerodynamic Grille", image: fallbackImg },
        { id: 3, title: "LED Headlights", image: fallbackImg },
      ]
    },
    {
      name: "J6T",
      slides: [
        { id: 1, title: "Premium Wheels", image: fallbackImg },
        { id: 2, title: "Sport Bumper", image: fallbackImg },
        { id: 3, title: "Panoramic Sunroof", image: fallbackImg },
      ]
    }
  ];

  const genericFallback: FeatureGroup[] = [
    {
      name: "Standard",
      slides: [
        { id: 1, title: "Modern Aesthetic", image: fallbackImg },
        { id: 2, title: "Premium Interior", image: fallbackImg },
        { id: 3, title: "Advanced Dashboard", image: fallbackImg },
      ]
    }
  ];

  // Determine which groups to use
  const groupsToUse = featureGroups && featureGroups.length > 0
    ? featureGroups
    : (carId === "j6" ? j6Fallback : genericFallback);

  const hasTabs = groupsToUse.length > 1;
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // Sync state if groups change
  useEffect(() => {
    setActiveTabIdx(0);
    setActiveSlide(0);
  }, [carId, groupsToUse]);

  const activeGroup = groupsToUse[activeTabIdx];
  const features = activeGroup.slides;
  const currentFeature = features[activeSlide];

  const handleNext = () => setActiveSlide((prev) => (prev + 1) % features.length);
  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + features.length) % features.length);

  const handleTabChange = (idx: number) => {
    setActiveTabIdx(idx);
    setActiveSlide(0); // Reset slide index when changing tabs
  };

  if (!features || features.length === 0) return null;

  return (
    <section className={`py-24 ${sectionIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 md:px-8 text-center flex flex-col items-center">

        {/* Header Texts */}
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">
          {featureTitle || "EMBRACE A NEW LEVEL OF REFINEMENT"}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          {featureSubtitle || "Every detail meticulously designed for a sporty, modern aesthetic, exuding style and sophistication."}
        </p>

        {/* Dynamic Model Tabs */}
        {hasTabs && (
          <div className="flex items-center gap-8 mb-8 border-b border-gray-200">
            {groupsToUse.map((group, idx) => (
              <button
                key={group.name}
                onClick={() => handleTabChange(idx)}
                className={`pb-4 text-sm font-bold tracking-[0.2em] transition-all relative ${activeTabIdx === idx ? "text-black" : "text-gray-400 hover:text-black"
                  }`}
              >
                {group.name}
                {activeTabIdx === idx && <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-red-600" />}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Carousel Area */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center mt-6">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-16 w-10 h-10 rounded-full bg-gray-300 hover:bg-primary items-center justify-center text-white transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Image Container */}
          <div className="relative w-full aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden bg-black luxury-shadow">
            <Image
              src={currentFeature.image}
              alt={currentFeature.title}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover transition-opacity duration-500 opacity-90"
              priority
            />
            {/* Dark gradients to ensure text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none md:hidden" />

            {/* Feature Title inside image: Top-Left on Mobile, Bottom-Left on Desktop */}
            <div className="absolute top-6 left-6 md:top-auto md:bottom-12 md:left-12 z-20 max-w-[80%] md:max-w-[50%] text-left">
              <h3 className="text-2xl md:text-4xl font-medium text-white drop-shadow-lg leading-tight">{currentFeature.title}</h3>
            </div>

            {/* Thumbnails row overlapping inside (Bottom Right) - Max 3 visible */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
              {features.length > 0 && [-1, 0, 1].map((offset) => {
                // Calculate wrapped index
                const idx = (activeSlide + offset + features.length) % features.length;
                const feature = features[idx];

                // Safety checks for small arrays
                if (features.length < 3 && offset !== 0 && features.length === 1) return null;
                if (features.length === 2 && offset === -1) return null;

                return (
                  <button
                    key={`${feature.id || feature.title}-${offset}`}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative w-14 h-10 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ease-out ${offset === 0 ? "border-white scale-110 shadow-xl z-10" : "border-transparent opacity-50 hover:opacity-80 scale-95"
                      }`}
                  >
                    <Image src={feature.image} alt={feature.title} fill sizes="(max-width: 768px) 100px, 200px" className="object-cover" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-16 w-10 h-10 rounded-full bg-gray-300 hover:bg-primary items-center justify-center text-white transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Mobile controls (below image) */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-6">
          <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-xs font-bold text-gray-400 tracking-widest">{activeSlide + 1} / {features.length}</span>
          <button onClick={handleNext} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
