"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ColorOption, ColorGroup } from "@/data/cars";
import { Check, ChevronDown } from "lucide-react";

interface ColorOptionsSectionProps {
  carName: string;
  colors?: ColorOption[];
  colorGroups?: ColorGroup[];
  defaultImage: string;
}

// Custom steering wheel SVG icon
function SteeringWheelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="9" x2="12" y2="2" />
      <line x1="9.18" y1="10.5" x2="3" y2="6.9" />
      <line x1="14.82" y1="10.5" x2="21" y2="6.9" />
    </svg>
  );
}

export function ColorOptionsSection({ carName, colors: initialColors, colorGroups, defaultImage }: ColorOptionsSectionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Determine which groups and colors to use
  const groupsToUse = colorGroups && colorGroups.length > 0 ? colorGroups : null;
  const hasMultipleGroups = groupsToUse && groupsToUse.length > 1;
  const currentColors = groupsToUse ? groupsToUse[activeTabIdx].colors : (initialColors || []);
  
  const [active, setActive] = useState(currentColors[0] || { name: "Standard", hex: "#cccccc", image: defaultImage });

  // Sync active color when tab changes
  useEffect(() => {
    if (currentColors.length > 0) {
      setActive(currentColors[0]);
    }
  }, [activeTabIdx, currentColors]);

  // Handle clicks outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentImage = active.image || defaultImage;

  // Determine if swatch is light (needs dark text/border contrast)
  const isLight = (hex: string) => {
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 180;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">

          {/* ── LEFT: Text & Controls ── */}
          <div className="w-full md:w-[38%] flex-shrink-0 z-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black mb-3">
              COLOR OPTIONS
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-xs">
              Explore your style with {groupsToUse ? groupsToUse[activeTabIdx].name : carName}. Choose a hue that reflects your personality.
            </p>

            {/* Model Selector Tool — Custom Dropdown (Moved here) */}
            <div className="mb-10 relative z-50 group/select max-w-xs">
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 mb-3 ml-0.5">Select Specification</p>
              
              {hasMultipleGroups ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between gap-6 px-6 py-3.5 bg-white border border-gray-200 rounded-none shadow-sm hover:border-primary transition-all w-full"
                  >
                    <span className="text-sm font-black uppercase tracking-widest text-black">
                      {groupsToUse[activeTabIdx].name}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-2xl z-50"
                      >
                        {groupsToUse.map((group, idx) => (
                          <button
                            key={group.name}
                            onClick={() => {
                              setActiveTabIdx(idx);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-gray-50 ${
                              activeTabIdx === idx ? "text-primary bg-gray-50/50" : "text-gray-500"
                            }`}
                          >
                            {group.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="px-6 py-3.5 bg-gray-100/50 border border-gray-200 text-xs font-black uppercase tracking-widest text-black w-full">
                  {carName}
                </div>
              )}
            </div>

            {/* Color Swatches */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              {currentColors.map((c) => {
                const selected = active.name === c.name;
                const light = isLight(c.hex);
                return (
                  <button
                    key={c.name}
                    onClick={() => setActive(c)}
                    title={c.name}
                    aria-label={`Pilih warna ${c.name}`}
                    className="relative w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-200 focus:outline-none"
                    style={{
                      background: c.hex,
                      boxShadow: selected
                        ? `0 0 0 3px white, 0 0 0 5px ${light ? "#888" : c.hex}`
                        : "0 4px 12px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.3)",
                      transform: selected ? "scale(1.12)" : "scale(1)",
                      border: light ? "1px solid rgba(0,0,0,0.15)" : "none",
                    }}
                  />
                );
              })}
            </div>

            {/* Selected Color Name */}
            <p className="text-black font-bold text-sm tracking-widest uppercase mb-6">
              {active.name}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hubungi-kami"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white text-sm font-semibold tracking-wider transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #B8964E, #C8A560, #A07838)" }}
              >
                <SteeringWheelIcon />
                Test Drive
              </Link>
              
              <Link
                href={`/hubungi-kami?model=${groupsToUse ? groupsToUse[activeTabIdx].name : carName}&color=${active.name}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black text-white text-sm font-semibold tracking-wider transition-all hover:scale-105 hover:shadow-lg"
              >
                <Check className="w-5 h-5" />
                Select Product
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Car + Background Card ── */}
          <div className="w-full md:w-[62%] relative" style={{ height: "clamp(280px, 45vw, 560px)" }}>

            {/* Sky / Mountain background card */}
            <div
              className="absolute rounded-3xl overflow-hidden shadow-xl"
              style={{
                top: "5%",
                right: 0,
                bottom: "5%",
                left: "18%",
              }}
            >
              <Image
                src="/images/banners/bg_mountain.png"
                alt="Background"
                fill
                className="object-cover"
                sizes="60vw"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
            </div>

            {/* Car image — overflows the background card left and bottom */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentImage}-${activeTabIdx}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute"
                style={{
                  bottom: "-6%",
                  left: 0,
                  right: "-2%",
                  top: 0,
                }}
              >
                <Image
                  src={currentImage}
                  alt={active.name}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
