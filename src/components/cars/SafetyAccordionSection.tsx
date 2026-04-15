"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface SafetyItem {
  title: string;
  description?: string;
  image: string;
}

interface SafetyAccordionSectionProps {
  carName?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  items: SafetyItem[];
}

export function SafetyAccordionSection({
  carName,
  sectionTitle = "DYNAMICS AND SAFETY",
  sectionSubtitle,
  items,
}: SafetyAccordionSectionProps) {
  const [active, setActive] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      {/* ── Header ── */}
      <div className="text-center px-4 mb-14">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase">
            Safety First
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-4">
          {sectionTitle}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          {sectionSubtitle ||
            `The synergy of efficient engineering and advanced safety systems ensures excellent dynamics of the ${carName || "vehicle"} and a comfortable ride.`}
        </p>
      </div>

      {/* ── Content: Accordion + Image ── */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">

          {/* ── LEFT: Accordion List ── */}
          <div className="w-full md:w-[38%] flex-shrink-0 pt-2">
            {items.map((item, i) => {
              const isActive = active === i;
              return (
                <div key={i} className="flex gap-5">
                  {/* Dot + Connecting Line */}
                  <div className="flex flex-col items-center">
                    {/* Dot */}
                    <button
                      onClick={() => setActive(i)}
                      className="flex-shrink-0 focus:outline-none mt-1"
                      aria-label={`Select ${item.title}`}
                    >
                      <motion.div
                        animate={{
                          backgroundColor: isActive ? "#B8964E" : "#d1d5db",
                          scale: isActive ? 1.2 : 1,
                          boxShadow: isActive
                            ? "0 0 0 2px white, 0 0 0 4px #B8964E"
                            : "none",
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-4 h-4 rounded-full"
                      />
                    </button>
                    {/* Line */}
                    {i < items.length - 1 && (
                      <div className="w-0.5 flex-1 mt-1" style={{ minHeight: "36px" }}>
                        <div
                          className="w-full h-full transition-colors duration-500"
                          style={{
                            backgroundColor: isActive ? "#B8964E" : "#d1d5db",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div
                    className="pb-6 cursor-pointer flex-1"
                    onClick={() => setActive(i)}
                  >
                    <motion.p
                      animate={{
                        color: isActive ? "#0a0a0a" : "#9ca3af",
                        fontWeight: isActive ? 700 : 400,
                      }}
                      transition={{ duration: 0.25 }}
                      className="text-base md:text-lg leading-snug mb-1"
                    >
                      {item.title}
                    </motion.p>

                    {/* Expanding description */}
                    <AnimatePresence>
                      {isActive && item.description && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-500 text-sm leading-relaxed overflow-hidden"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── RIGHT: Image ── */}
          <div className="w-full md:w-[62%] relative">
            {/* Background gradient blob */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 50%, #e5e7eb 0%, #f3f4f6 60%, transparent 100%)",
              }}
            />

            {/* Image frame */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={items[active].image}
                    alt={items[active].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                  {/* Subtle inner vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.08)] pointer-events-none rounded-3xl" />
                </motion.div>
              </AnimatePresence>

              {/* Active item label overlay */}
              <div className="absolute bottom-5 left-5 z-10">
                <motion.div
                  key={`label-${active}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.85)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#B8964E" }}
                  />
                  <span className="text-black text-xs font-semibold tracking-wide">
                    {items[active].title}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Step counter */}
            <div className="absolute top-4 right-4 z-10">
              <div
                className="px-3 py-1 rounded-full text-xs font-bold text-white tracking-widest"
                style={{ background: "rgba(0,0,0,0.4)" }}
              >
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
