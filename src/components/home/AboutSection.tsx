"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MessageCircle, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dealerInfoRef = useRef<HTMLDivElement>(null);
  const expertCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal Dealer Info
      gsap.from(".dealer-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      });

      // Reveal Expert Card
      gsap.from(expertCardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    "Warranty 7 Tahun",
    "Bunga 0% & Angsuran Ringan",
    "Free Service (Mobil Baru)",
    "Tukar Tambah (Trade-in)",
    "Free Test Drive Semua Tipe",
    "Suku Cadang Asli Berkualitas"
  ];

  return (
    <section ref={sectionRef} className="py-2 md:py-33 px-6 md:px-12 bg-background border-t border-foreground/5 relative overflow-hidden">

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-[-20%] translate-y-[-20%]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* LEFT: Dealer Information */}
          <div ref={dealerInfoRef} className="lg:col-span-7 flex flex-col mt-10">
            <header className="dealer-reveal mb-10">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">
                PT AVANTE EKSA MOBILINDO
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-[0.9] mb-8">
                Dealer Resmi <br /> <span className="text-primary">Chery Bogor</span>
              </h2>
              <div className="flex items-start gap-3 p-4 bg-foreground/[0.03] rounded-2xl border border-foreground/5 max-w-xl">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-sm md:text-base font-medium text-foreground/70 leading-relaxed">
                  Jl. Sholeh Iskandar No. 16, Tanah Sareal Bogor 16164. <br />
                  <span className="text-xs opacity-50 font-bold uppercase tracking-widest mt-2 block">Pusat Layanan Terpadu Chery</span>
                </p>
              </div>
            </header>

            <div className="dealer-reveal space-y-6 mb-16 max-w-2xl">
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium">
                Kami melayani penjualan mobil Chery secara Cash dan Kredit untuk semua tipe. Pengajuan kredit tersedia dengan DP rendah dan angsuran terjangkau. Kami juga membantu proses trade-in (tukar tambah) dengan penawaran terbaik untuk mobil lama Anda.
              </p>
              <p className="text-sm text-foreground/40 font-medium">
                Dapatkan informasi harga terbaru Chery Omoda 5, Tiggo Cross, Tiggo 5x, Tiggo 7 Pro, Tiggo 8 Pro, dan Chery J6 di area Bogor dan sekitarnya.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="dealer-reveal">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 mb-8">
                Miliki Segera Mobil Chery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-foreground/[0.02] border border-foreground/5 rounded-2xl group hover:border-primary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm md:text-base font-black text-foreground/80 tracking-tight uppercase group-hover:text-foreground transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Expert Profile Card */}
          <div ref={expertCardRef} className="lg:col-span-5 relative lg:sticky lg:top-32">
            <div className="bg-foreground/[0.02] dark:bg-foreground/[0.03] border border-foreground/10 rounded-[3rem] p-8 md:p-12 luxury-shadow overflow-hidden group">

              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 border-4 border-background luxury-shadow">
                <Image
                  src="/images/cars/chery-j6.png"
                  alt="Noufal Dzakir"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="text-center">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 block">
                  Brand Expert
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase mb-6 leading-none">
                  DZAKIR
                </h3>
                <p className="text-base font-medium text-foreground/50 leading-relaxed mb-10 italic max-w-[280px] mx-auto">
                  &ldquo;Membantu Anda menemukan unit Chery terbaik dengan layanan digital transparan.&rdquo;
                </p>

                <Button
                  asChild
                  className="w-full h-16 bg-primary text-white hover:bg-foreground hover:text-background rounded-full text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-500 luxury-shadow flex items-center justify-center gap-3"
                >
                  <Link href="https://wa.me/your-number" target="_blank">
                    <MessageCircle className="w-5 h-5" /> Hubungi NOUFAL
                  </Link>
                </Button>
              </div>

              {/* Decorative background text */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.03] pointer-events-none select-none">
                <span className="text-9xl font-black text-foreground uppercase tracking-tighter">EXPERT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
