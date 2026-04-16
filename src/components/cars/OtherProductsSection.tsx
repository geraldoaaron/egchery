"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface CarCard {
  id: string;
  name: string;
  image: string;
  price: string;
  specs?: string[];
}

interface OtherProductsSectionProps {
  currentCarId: string;
  cars: CarCard[];
}

export function OtherProductsSection({ currentCarId, cars }: OtherProductsSectionProps) {
  const others = cars.filter((c) => c.id !== currentCarId);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  // ── Mouse Drag-to-scroll ──────────────────────────
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

  const handleOverdrag = (walk: number, originalScrollLeft: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    // walk is negative if dragged left, positive if dragged right
    if (walk < -50 && originalScrollLeft >= maxScroll - 5) {
      // At the end, dragged left -> jump to start
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (walk > 50 && originalScrollLeft <= 5) {
      // At the start, dragged right -> jump to end
      el.scrollTo({ left: maxScroll, behavior: "smooth" });
    }
  };

  const onMouseUp = useCallback((e: React.MouseEvent) => {
    setIsDragging(false);
    const el = scrollRef.current;
    if (el) {
      el.style.cursor = "grab";
      el.style.userSelect = "";
    }
    const walk = e.pageX - dragStartX.current;
    handleOverdrag(walk, dragScrollLeft.current);
  }, []);

  // ── Touch swipe handling (Mobile loop) ──────────────
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    touchStartX.current = e.touches[0].clientX;
    touchScrollLeft.current = el.scrollLeft;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const walk = e.changedTouches[0].clientX - touchStartX.current;
    handleOverdrag(walk, touchScrollLeft.current);
  }, []);


  const [totalDots, setTotalDots] = useState(others.length);

  // ── Track active dot & total dots via scroll ──────
  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el || others.length === 0) return;

    // Width of a single card
    const cardWidth = el.scrollWidth / others.length;
    // How many cards are fully visible currently
    const visibleCards = Math.round(el.clientWidth / cardWidth);

    // Maximum distinct snap positions we can reach
    const reachableSnaps = Math.max(1, others.length - visibleCards + 1);
    setTotalDots(reachableSnaps);

    // Current active card based on scroll position
    const index = Math.round(el.scrollLeft / cardWidth);

    // When dragged hard to the right, bound the dot index
    if (Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 5) {
      setActiveDot(reachableSnaps - 1);
    } else {
      setActiveDot(Math.min(index, reachableSnaps - 1));
    }
  }, [others.length]);

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

  // ── Arrow navigation ────────────────────────────────
  const scrollTo = useCallback((dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;

    // Scroll 1 card width precisely so dots map linearly
    const cardWidth = el.scrollWidth / others.length;
    const scrollAmount = cardWidth;

    if (dir === "next") {
      if (Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (el.scrollLeft <= 10) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  }, [others.length]);

  // ── Dot click navigation ────────────────────────────
  const scrollToDot = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / others.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  }, [others.length]);

  if (others.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-10 text-center relative z-10">
          Other <span className="text-primary">Chery</span> Models
        </h2>

        {/* Scrollable Cards Container */}
        <div className="relative z-10">
          {/* Left Arrow */}
          <button
            onClick={() => scrollTo("prev")}
            aria-label="Previous"
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur shadow-[0_0_15px_rgba(0,0,0,0.5)] items-center justify-center text-white/50 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll Row */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 pt-2 select-none"
            style={{
              cursor: "grab",
              scrollSnapType: "x mandatory",
              /* hide scrollbar */
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Hide browser scrollbar for webkit */}
            <style>{`.other-products-scroll::-webkit-scrollbar{display:none}`}</style>

            {others.map((car) => (
              <div
                key={car.id}
                className="flex-shrink-0 flex flex-col bg-[#1c1c1c] border border-white/5 rounded-2xl w-[calc(50%-0.625rem)] md:w-[calc(25%-0.9375rem)] group transition-all duration-500 hover:border-primary/30 overflow-hidden relative"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* ADVANCED NEON FIXTURE & SPOTLIGHT (ALWAYS VISIBLE) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] z-0 pointer-events-none opacity-100 transition-opacity duration-500">
                  {/* Neon Tube */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 z-30">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-black/60 blur-[1px]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-white opacity-40 blur-[0.5px]" />
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-12 h-[2px]">
                      <div className="absolute inset-0 bg-white rounded-full z-10 shadow-[0_0_8px_#fff]" />
                      <div className="absolute -inset-1 bg-primary/40 rounded-full blur-[2px]" />
                      <div className="absolute -inset-4 bg-primary/10 rounded-full blur-[10px]" />
                    </div>
                  </div>

                  {/* Spotlight Cone matching Neon width */}
                  <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[160%] h-full">
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[4px] overflow-hidden"
                      style={{ clipPath: "polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%)" }}
                    />
                  </div>
                </div>

                <div className="p-5 flex flex-col h-full flex-1 relative z-20">
                  {/* Car Image */}
                  <div className="relative w-full aspect-[4/3] mb-6 mt-4 group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-contain object-center drop-shadow-2xl pointer-events-none"
                      draggable={false}
                      sizes="300px"
                    />
                    {/* Grounded Reflection */}
                    <div className="absolute bottom-[-10%] left-0 w-full h-[40%] opacity=[0.15] group-hover:opacity-[0.25] transition-opacity duration-1000 scale-y-[-1] pointer-events-none">
                      <Image src={car.image} alt="" fill className="object-contain blur-[5px] opacity-[0.3] mask-gradient-to-t" />
                    </div>
                  </div>

                  {/* Name & Price */}
                  <div className="mb-4">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-1 leading-none">
                      {car.name}
                    </h3>
                    <p className="text-[9px] font-mono text-primary uppercase tracking-[0.3em] mb-1.5">STALL REF // {car.id.slice(0, 3)}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Starts From</p>
                    <p className="text-lg font-black text-white leading-none">
                      {car.price}
                    </p>
                  </div>

                  {/* Highlight Specs */}
                  {car.specs && car.specs.length > 0 && (
                    <div className="mb-5 flex-1">
                      <ul className="space-y-1.5 border-t border-white/5 pt-4">
                        {car.specs.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0 shadow-[0_0_5px_#cc0000]" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="mt-auto space-y-2 pointer-events-auto">
                    <div className="flex gap-2">
                      <Link
                        href="/hubungi-kami"
                        onClick={(e) => isDragging && e.preventDefault()}
                        className="flex-1 text-center text-[10px] font-bold tracking-widest py-2.5 px-3 rounded-none border border-white/20 text-white hover:bg-white hover:text-black transition-colors uppercase"
                      >
                        Test Drive
                      </Link>
                      <Link
                        href={`/model-mobil/${car.id}`}
                        onClick={(e) => isDragging && e.preventDefault()}
                        className="flex-1 text-center text-[10px] font-bold tracking-widest py-2.5 px-3 rounded-none bg-primary text-white hover:opacity-90 transition-opacity uppercase"
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollTo("next")}
            aria-label="Next"
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur shadow-[0_0_15px_rgba(0,0,0,0.5)] items-center justify-center text-white/50 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pill / Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(totalDots)].map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              aria-label={`Go to ${i + 1}`}
              style={{
                width: i === activeDot ? "2.5rem" : "1.4rem",
                height: "3px",
                borderRadius: "9999px",
                background: i === activeDot ? "var(--primary)" : "rgba(255,255,255,0.15)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
