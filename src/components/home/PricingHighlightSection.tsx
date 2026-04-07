"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHasMounted } from "@/hooks/useHasMounted";

export function PricingHighlightSection() {
  return (
    <section className="py-24 bg-white border-y border-black/5 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <div
          className="text-center max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-black">
            Penawaran <span className="text-primary">Terbaik</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Dapatkan kemudahan memiliki Chery impian Anda dengan berbagai pilihan program pembiayaan yang fleksibel dan menguntungkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
          <PricingCard
            title="Kredit Ringan"
            price="Mulai 3 Jt-an"
            period="/ bulan"
            features={["DP Rendah 15%", "Tenor hingga 7 Tahun", "Proses Cepat 1x24 Jam"]}
            delay={0.1}
          />
          <PricingCard
            title="Bunga Spesial"
            price="0%"
            period="bunga"
            features={["Tenor 1 Tahun", "Tanpa Biaya Admin", "Asuransi All Risk"]}
            featured
            delay={0.2}
          />
          <PricingCard
            title="Trade In"
            price="Subsidi"
            period="+ Cashback"
            features={["Harga Beli Tinggi", "Semua Merk Mobil", "Pajak Diurus"]}
            delay={0.3}
          />
        </div>

        <div>
          <Button asChild size="lg" className="h-14 px-8 text-lg">
            <Link href="/harga" className="flex items-center gap-2">
              Lihat Pricelist Lengkap <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, price, period, features, featured = false, delay }: any) {
  return (
    <div
      className={`rounded-2xl p-8 border ${
        featured 
          ? "bg-white shadow-xl shadow-primary/10 border-primary relative overflow-hidden" 
          : "bg-black/5 border-black/10"
      }`}
    >
      {featured && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}
      <h3 className="text-xl font-medium text-black mb-4">{title}</h3>
      <div className="flex items-end gap-2 mb-8">
        <span className="text-4xl lg:text-5xl font-bold text-black tracking-tighter">{price}</span>
        <span className="text-gray-600 mb-1">{period}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex gap-3 text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
