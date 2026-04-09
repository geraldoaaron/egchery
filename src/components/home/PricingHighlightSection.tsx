"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calculator, ShieldCheck, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function PricingHighlightSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".pricing-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-background relative overflow-hidden border-t border-foreground/[0.03]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 luxury-grid-overlay opacity-[0.2]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 items-end">
          <div className="lg:col-span-8">
             <div className="pricing-reveal flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary/40" />
                <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase">Ownership Select</span>
             </div>
             <h2 className="pricing-reveal text-6xl md:text-[7vw] font-black uppercase tracking-tighter text-foreground leading-[0.85] flex flex-col">
                <span className="font-light luxury-text-stroke opacity-60">OWN THE</span>
                <span className="text-primary mt-2">EXCEPTION.</span>
             </h2>
          </div>
          
          <div className="lg:col-span-4 pricing-reveal">
             <p className="text-[11px] font-bold tracking-[0.3em] text-foreground/40 leading-relaxed uppercase border-l border-primary/20 pl-6">
                Sophisticated financial architecture designed for seamless acquisition. Transparent pathways tailored to your elite profile.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <PricingLuxuryCard
            title="SMART_FINANCE"
            tier="Silver"
            price="3.5M"
            period="IDR / per month"
            features={["15% MINIMUM DOWN PAYMENT", "UP TO 84 MONTH TENOR", "FLEXIBLE ADAPTATION"]}
            icon={<Calculator className="w-5 h-5" />}
            index="I"
          />
          <PricingLuxuryCard
            title="PURE_ACCUMULATION"
            tier="Platinum"
            price="0%"
            period="ANNUAL INTEREST"
            features={["12-MONTH FIXED RATE", "ZERO ADMIN OVERHEAD", "PRIORITY PROCESSING"]}
            featured
            icon={<Sparkles className="w-5 h-5" />}
            index="II"
          />
          <PricingLuxuryCard
            title="LEGACY_VALUE"
            tier="Elite"
            price="MAX"
            period="TRADE-IN VALUATION"
            features={["GUARANTEED QUOTATIONS", "RAPID TITLE TRANSFER", "ON-SITE APPRAISAL"]}
            icon={<LineChart className="w-5 h-5" />}
            index="III"
          />
        </div>

        <div className="mt-32 flex justify-center pricing-reveal">
          <Button asChild className="h-16 px-16 bg-primary text-white rounded-none hover:bg-primary/95 transition-all duration-500 text-[10px] font-bold tracking-[0.5em] luxury-shadow-deep uppercase group">
            <Link href="/harga" className="flex items-center gap-4">
              Explore Full Tiers <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-20 -right-20 text-[35vw] font-black text-foreground/[0.01] leading-none uppercase tracking-tighter select-none pointer-events-none">
        PORTFOLIO
      </div>
    </section>
  );
}

function PricingLuxuryCard({ title, tier, price, period, features, icon, featured = false, index }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`pricing-reveal group p-10 md:p-12 transition-all duration-700 bg-white border border-foreground/[0.03] ${featured ? "luxury-shadow-deep border-primary/10" : "luxury-shadow"} relative overflow-hidden`}
    >
      {/* Featured Accent */}
      {featured && (
        <div className="absolute top-0 left-0 w-full h-[3px] bg-primary animate-pulse" />
      )}
      {!featured && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5 group-hover:bg-primary/20 transition-colors" />
      )}

      {/* Subtle Grid for Featured */}
      {featured && (
        <div className="absolute inset-0 luxury-grid-overlay opacity-[0.05] pointer-events-none" />
      )}

      <div className="flex justify-between items-start mb-16 relative z-10">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-foreground/20 uppercase tracking-widest mb-1">{index} // {tier}</span>
          <h4 className="text-[11px] font-black text-foreground/60 uppercase tracking-[0.2em]">{title}</h4>
        </div>
        <div className={`p-3 rounded-none border border-foreground/5 ${featured ? "bg-primary/5 text-primary" : "bg-foreground/[0.02] text-foreground/30"} transition-all duration-500 group-hover:rotate-12`}>
          {icon}
        </div>
      </div>
      
      <div className="mb-16 relative z-10">
        <h4 className={`text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-4 ${featured ? "text-primary" : "text-foreground"}`}>
           {price}
        </h4>
        <span className="text-[9px] font-bold text-foreground/30 tracking-[.4em] uppercase">
           {period}
        </span>
      </div>
      
      <ul className="space-y-6 relative z-10 mb-8">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-4 items-center">
            <div className={`w-1.5 h-1.5 rounded-full ${featured ? "bg-primary/40" : "bg-foreground/10"}`} />
            <span className="text-[10px] font-bold text-foreground/40 tracking-widest leading-none uppercase">{f}</span>
          </li>
        ))}
      </ul>

      {/* Footer accent */}
      <div className="mt-12 flex items-center justify-between relative z-10">
         <div className="flex gap-1">
            <div className="w-6 h-[2px] bg-primary/20" />
            <div className="w-2 h-[2px] bg-primary/20" />
         </div>
         <span className="text-[8px] font-bold text-foreground/10 tracking-widest uppercase">Verified Tier</span>
      </div>
    </motion.div>
  );
}
