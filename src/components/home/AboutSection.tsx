"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const text = "Defining motion through intelligent design and performance-driven luxury.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out"
      });

      gsap.from(".about-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scaleX: 0,
        originX: 0,
        duration: 2,
        ease: "expo.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 md:py-60 px-4 md:px-8 bg-background relative z-10 overflow-hidden border-t border-foreground/[0.03]">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] pointer-events-none select-none z-0">
        <span className="text-[35vw] font-black text-foreground leading-none uppercase tracking-tighter">CHERY</span>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-4 self-start">
           <div className="about-line w-16 h-[1px] bg-primary/40 mb-8" />
           <h2 className="about-reveal text-[10px] font-bold text-primary mb-8 tracking-[0.4em] uppercase">The Ethos</h2>
        </div>
        
        <div className="lg:col-span-8">
          <h3 
            className="about-reveal text-4xl md:text-6xl lg:text-8xl font-black leading-[1] tracking-tighter text-foreground mb-12 uppercase"
          >
            {text}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="about-reveal text-sm md:text-base text-foreground/50 leading-relaxed uppercase tracking-widest font-medium">
              As the premier automotive hub, we are reengineering the ownership lifecycle. Precision service, adaptive support, and a commitment to future-proof innovation.
            </p>
            <div className="about-reveal flex flex-col justify-end">
               <div className="about-line w-full h-[1px] bg-foreground/[0.05] mb-6" />
               <span className="text-[8px] font-bold text-foreground/20 tracking-[0.5em] uppercase">Est. 2026 // Global Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
