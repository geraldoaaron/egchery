"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Shield, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function DeliverySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".delivery-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-background relative overflow-hidden border-t border-foreground/[0.03]">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-32">
          <div className="lg:col-span-8">
             <div className="delivery-reveal flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary/30" />
                <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase">Global Presence</span>
             </div>
             <h2 className="delivery-reveal text-7xl md:text-[8vw] font-black uppercase tracking-tighter text-foreground leading-none">
                OUR <br /> <span className="luxury-text-stroke">NETWORK.</span>
             </h2>
          </div>
          <div className="lg:col-span-4 delivery-reveal">
             <p className="text-[10px] font-bold tracking-[0.3em] text-foreground/40 leading-relaxed uppercase">
                A coordinated network of elite service centers providing real-time support for the modern driver.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="delivery-reveal mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
               <ContactLuxuryItem 
                  title="Main Gallery"
                  desc="Jl. Raya Utama No. 88, South Jakarta"
                  icon={<MapPin className="w-4 h-4 text-primary/60" />}
                />
                <ContactLuxuryItem 
                  title="Direct Line"
                  desc="+62 21 1234 5678"
                  icon={<Phone className="w-4 h-4 text-primary/60" />}
                />
                <ContactLuxuryItem 
                  title="Availability"
                  desc="Mon - Sun | 08:00 - 20:00"
                  icon={<Clock className="w-4 h-4 text-primary/60" />}
                />
                <ContactLuxuryItem 
                  title="WhatsApp"
                  desc="+62 812 3456 7890"
                  icon={<ArrowRight className="w-4 h-4 text-primary/60" />}
                />
            </div>

            <div className="delivery-reveal">
               <Button className="h-16 px-12 bg-primary text-white rounded-none hover:bg-primary/90 transition-all duration-300 text-[10px] font-bold tracking-[0.4em] uppercase luxury-shadow">
                  <Link href="/hubungi-kami" className="flex items-center gap-2">
                     Connect With Us <ChevronRight className="w-4 h-4" />
                  </Link>
               </Button>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 relative">
            <div className="delivery-reveal relative aspect-video w-full rounded-none overflow-hidden border border-foreground/[0.03] group luxury-shadow">
              <Image 
                src="https://images.unsplash.com/photo-1517524206127-48bb03fd8fec?q=80&w=2574&auto=format&fit=crop"
                alt="Chery Showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 p-6 bg-white/80 backdrop-blur-md border border-foreground/[0.03] text-[9px] font-bold text-foreground tracking-[0.4em] uppercase">
                 Chery Central Lounge
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Background Text */}
      <div className="absolute bottom-0 right-0 opacity-[0.01] pointer-events-none select-none z-0">
          <span className="text-[30vw] font-black text-foreground leading-none uppercase tracking-tighter">LOCATIONS</span>
      </div>
    </section>
  );
}

function ContactLuxuryItem({ title, desc, icon }: any) {
  return (
    <div className="delivery-reveal p-8 border border-foreground/[0.03] group bg-white luxury-shadow transition-all duration-500 hover:border-primary/20">
      <div className="flex items-center gap-3 mb-6">
         {icon}
         <h4 className="text-[10px] font-bold text-foreground opacity-30 uppercase tracking-[0.3em]">{title}</h4>
      </div>
      <p className="text-xs font-bold text-foreground tracking-widest leading-relaxed uppercase">{desc}</p>
    </div>
  );
}
