"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, BookOpen, Download, ChevronLeft, ChevronRight } from "lucide-react";

interface Variant {
  name: string;
  price: string;
  image?: string;
  specs?: string[];
}

interface VariantPricingSectionProps {
  carName: string;
  carImage: string;
  price: string;
  highlightSpecs?: string[];
  brochureUrl?: string;
  variants?: Variant[];
}

export function VariantPricingSection({
  carName,
  carImage,
  price,
  highlightSpecs,
  brochureUrl,
  variants = [],
}: VariantPricingSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const defaultSpecs = [
    "Sistem Hybrid Canggih Generasi Terbaru",
    "Teknologi Keselamatan Aktif 360°",
    "Kabin Premium dengan Material Berkualitas",
    "Layar Infotainment HD Terintegrasi",
  ];

  // Combine main car with its variants for the slider data
  const allVariants = variants && variants.length > 0 
    ? variants 
    : [{ name: carName, price: price, image: carImage, specs: highlightSpecs }];

  // ── Mouse Drag Handling ────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStartX.current = e.pageX;
    dragScrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const walk = (e.pageX - dragStartX.current) * 1.5;
    el.scrollLeft = dragScrollLeft.current - walk;
  }, [isDragging]);

  const handleOverdrag = useCallback((walk: number, originalScrollLeft: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    // Threshold to trigger loop
    const threshold = 50;

    if (walk < -threshold && originalScrollLeft >= maxScroll - 5) {
      // At the end, dragged left -> jump to start
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (walk > threshold && originalScrollLeft <= 5) {
      // At the start, dragged right -> jump to end
      el.scrollTo({ left: maxScroll, behavior: "smooth" });
    }
  }, []);

  const onMouseUp = useCallback((e: React.MouseEvent) => {
    setIsDragging(false);
    const el = scrollRef.current;
    if (el) {
      el.style.cursor = "grab";
      el.style.userSelect = "";
      const walk = e.pageX - dragStartX.current;
      handleOverdrag(walk, dragScrollLeft.current);
    }
  }, [handleOverdrag]);

  // ── Touch Handling ─────────────────────────────────
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    touchStartX.current = e.touches[0].clientX;
    touchScrollLeft.current = el.scrollLeft;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    const touch = e.touches[0];
    const walk = (touch.clientX - touchStartX.current) * 1.25;
    el.scrollLeft = touchScrollLeft.current - walk;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const walk = e.changedTouches[0].clientX - touchStartX.current;
    handleOverdrag(walk, touchScrollLeft.current);
  }, [handleOverdrag]);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el || allVariants.length === 0) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveDot(Math.min(index, allVariants.length - 1));
  }, [allVariants.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: index * el.clientWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-10 md:py-20 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      
      {/* GLOBAL FIXED NEON FIXTURE (STAYS AT TOP CENTER) */}
      <div className="absolute top-0 inset-x-0 h-32 md:h-40 pointer-events-none z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-4 md:h-5 z-30 opacity-100">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-black/60 blur-[1px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-[1px] bg-white opacity-40 blur-[0.5px]" />
          <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-20 md:w-24 h-[2px]">
             <div className="absolute inset-0 bg-white rounded-full z-10 shadow-[0_0_8px_#fff]" />
             <div className="absolute -inset-1 bg-primary/50 rounded-full blur-[2px]" />
             <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[10px]" />
          </div>
        </div>

        {/* Cinematic Spotlight following center of view */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[120%] max-w-2xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[8px]"
          style={{ clipPath: "polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-lg md:text-3xl font-black uppercase tracking-tight text-white focus:outline-none">
            <span className="text-primary">{carName}</span>
            <span className="text-white/40 font-light ml-2">Variants</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group/nav">
          {/* Navigation Arrows */}
          {allVariants.length > 1 && (
            <>
              <button 
                onClick={() => scrollTo(activeDot > 0 ? activeDot - 1 : allVariants.length - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 hidden md:flex items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 hover:bg-primary hover:text-white transition-all backdrop-blur-md opacity-0 group-hover/nav:opacity-100 shadow-2xl"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollTo(activeDot < allVariants.length - 1 ? activeDot + 1 : 0)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 hidden md:flex items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 hover:bg-primary hover:text-white transition-all backdrop-blur-md opacity-0 group-hover/nav:opacity-100 shadow-2xl"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Draggable Row */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar"
            style={{ 
              cursor: allVariants.length > 1 ? "grab" : "default", 
              scrollSnapType: "x mandatory",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch"
            }}
            onMouseDown={allVariants.length > 1 ? onMouseDown : undefined}
            onMouseMove={allVariants.length > 1 ? onMouseMove : undefined}
            onMouseUp={allVariants.length > 1 ? onMouseUp : undefined}
            onMouseLeave={allVariants.length > 1 ? onMouseUp : undefined}
            onTouchStart={allVariants.length > 1 ? onTouchStart : undefined}
            onTouchMove={allVariants.length > 1 ? onTouchMove : undefined}
            onTouchEnd={allVariants.length > 1 ? onTouchEnd : undefined}
          >
            {/* Hide scrollbar for Webkit */}
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            
            {allVariants.map((v, i) => {
              const currentSpecs = v.specs || highlightSpecs || defaultSpecs;
              return (
                <div key={i} className="w-full flex-shrink-0 snap-center outline-none py-4">
                  
                  {/* Car Image with cinematic effects */}
                  <div className="relative w-full max-w-xl mx-auto" style={{ height: "clamp(160px, 25vw, 280px)" }}>
                    {/* Shadow Ambient */}
                    <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-64 md:w-80 h-12 md:h-16 bg-primary/10 rounded-full blur-[30px] md:blur-[40px] z-0" />

                    {/* Image */}
                    <div className="relative w-full h-full z-10">
                      <Image
                        src={v.image || carImage}
                        alt={v.name}
                        fill
                        className="object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] pointer-events-none"
                        draggable={false}
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority={i === 0}
                      />
                    </div>
                    
                    {/* Grounded Reflection */}
                    <div className="absolute bottom-[-15%] left-0 w-full h-[40%] opacity-[0.15] scale-y-[-1] pointer-events-none">
                      <Image src={v.image || carImage} alt="" fill className="object-contain blur-[3px] md:blur-[4px] mask-gradient-to-t" />
                    </div>
                  </div>

                  {/* Info Row */}
                  <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 max-w-4xl mx-auto px-4 md:px-0">
                    {/* Left — Name & Price */}
                    <div className="flex-1 w-full md:pr-12 md:border-r border-white/10 flex flex-col md:items-end text-center md:text-right">
                      <span className="text-[8px] md:text-[9px] font-mono text-primary uppercase tracking-[0.4em] mb-2 md:mb-3 leading-none">
                        VARIANT {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter mb-3 md:mb-4 leading-none truncate w-full">
                        {v.name}
                      </h3>
                      <div className="flex flex-col md:items-end">
                        <p className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-widest mb-1 leading-none">Starts From</p>
                        <p className="text-3xl md:text-5xl font-black text-white leading-none mb-1 shadow-primary/20 drop-shadow-sm">
                          {v.price}
                        </p>
                        <p className="text-[8px] md:text-[10px] text-white/40 font-mono tracking-widest uppercase">*OTR Jakarta</p>
                      </div>
                    </div>

                    {/* Right — Highlight Specs */}
                    <div className="flex-1 w-full md:pl-12 text-center md:text-left mt-6 md:mt-0">
                      <p className="text-[9px] md:text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase mb-4 md:mb-6 leading-none">
                        Highlight Specs
                      </p>
                      <ul className="grid grid-cols-1 gap-2 md:gap-4 max-w-sm mx-auto md:mx-0 text-left">
                        {currentSpecs.slice(0, 4).map((spec, si) => (
                          <li key={si} className="flex items-start gap-2.5 text-[11px] md:text-sm text-white/60 leading-relaxed font-light">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_#cc0000]" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-2xl mx-auto px-4">
                    <Link
                      href="/hubungi-kami"
                      onClick={(e) => isDragging && e.preventDefault()}
                      className="flex-1 flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-none border border-white/20 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-all hover:bg-white hover:text-black"
                    >
                      Test Drive
                    </Link>

                    <Link
                      href="/hubungi-kami?intent=prebook"
                      onClick={(e) => isDragging && e.preventDefault()}
                      className="flex-1 flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-none bg-primary text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-all hover:opacity-90 shadow-[0_0_20px_rgba(204,0,0,0.2)]"
                    >
                      <BookOpen className="w-4 h-4" />
                      Pre-book
                    </Link>

                    <a
                      href={brochureUrl || "/hubungi-kami"}
                      target={brochureUrl ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-none border border-white/20 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-all hover:bg-white/5"
                    >
                      <Download className="w-4 h-4" />
                      Brochure
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicators */}
        {allVariants.length > 1 && (
          <div className="flex justify-center gap-2.5 mt-8 md:mt-12">
            {allVariants.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`
                  h-0.5 transition-all duration-500 rounded-full
                  ${activeDot === i ? "w-8 md:w-10 bg-primary" : "w-4 md:w-5 bg-white/10 hover:bg-white/20"}
                `}
                aria-label={`Go to variant ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


