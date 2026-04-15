"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ExperienceSlide {
  title: string;
  image: string;
}

interface ExperienceSliderProps {
  title?: string;
  subtitle?: string;
  slides: ExperienceSlide[];
  bgColor?: string;
}

export function ExperienceSlider({
  title = "SUPER EXPERIENCE",
  subtitle,
  slides,
  bgColor = "bg-white",
}: ExperienceSliderProps) {
  const [active, setActive] = useState(0);
  // Detect mobile only to control center card width
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNext = useCallback(
    () => setActive((p) => (p + 1) % slides.length),
    [slides.length]
  );
  const handlePrev = useCallback(
    () => setActive((p) => (p - 1 + slides.length) % slides.length),
    [slides.length]
  );

  if (!slides || slides.length === 0) return null;

  const prevIdx = (active - 1 + slides.length) % slides.length;
  const nextIdx = (active + 1) % slides.length;

  return (
    <section className={`py-14 md:py-20 ${bgColor}`}>
      {/* Header */}
      <div className="text-center px-4 mb-8 md:mb-10">
        <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-black mb-2 md:mb-3">
          {title}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-base leading-relaxed">
          {subtitle ||
            "Discover unparalleled luxury within the futuristic interior, where innovative design seamlessly blends with maximum comfort."}
        </p>
      </div>

      {/* COVERFLOW STAGE — same layout mobile & desktop */}
      <div className="relative overflow-hidden">

        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-300/80 hover:bg-gray-400 flex items-center justify-center transition-colors shadow backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>

        {/* Cards Row — container wider than viewport so sides bleed to edges */}
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
              /* Mobile shorter, desktop taller */
              height: "clamp(140px, 28vw, 380px)",
              zIndex: 10,
              marginRight: "-1.5%",
              /* Mobile: less perspective (wider cards), desktop: deeper 3D */
              transform: "perspective(clamp(300px, 60vw, 700px)) rotateY(22deg) scale(0.93)",
              transformOrigin: "right center",
            }}
          >
            <div
              className="relative w-full h-full"
              style={{ clipPath: "inset(0 round 0.75rem)" }}
            >
              <Image
                src={slides[prevIdx].image}
                alt={slides[prevIdx].title}
                fill
                className="object-cover brightness-[0.45]"
                sizes="(max-width: 768px) 40vw, 500px"
              />
              <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 z-10">
                <span className="text-white text-xs md:text-lg font-medium leading-snug drop-shadow">
                  {slides[prevIdx].title}
                </span>
              </div>
            </div>
          </div>

          {/* CENTER CARD */}
          <div
            className="flex-shrink-0"
            style={{
              // Mobile center card wider so it fills more of the screen
              flex: isMobile ? "0 0 45%" : "0 0 35%",
              height: "clamp(250px, 36vw, 540px)",
              zIndex: 20,
              position: "relative",
            }}
          >
            <div
              className="relative w-full h-full shadow-2xl"
              style={{ clipPath: "inset(0 round 0.75rem)" }}
            >
              <Image
                src={slides[active].image}
                alt={slides[active].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 600px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-10">
                <span className="text-white text-sm md:text-2xl font-medium leading-snug drop-shadow-xl">
                  {slides[active].title}
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
            <div
              className="relative w-full h-full"
              style={{ clipPath: "inset(0 round 0.75rem)" }}
            >
              <Image
                src={slides[nextIdx].image}
                alt={slides[nextIdx].title}
                fill
                className="object-cover brightness-[0.45]"
                sizes="(max-width: 768px) 40vw, 500px"
              />
              <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 z-10">
                <span className="text-white text-xs md:text-lg font-medium leading-snug drop-shadow">
                  {slides[nextIdx].title}
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
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === active ? "2rem" : "1.2rem",
              height: "3px",
              borderRadius: "9999px",
              background: i === active ? "#111" : "#ccc",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
