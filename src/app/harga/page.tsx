"use client";

import { useState, useEffect } from "react";
import { sendGAEvent } from "@/components/globals/GoogleAnalytics";

export default function HargaPage() {
  const [activeTab, setActiveTab] = useState<"cash" | "kredit">("cash");

  useEffect(() => {
    // Track GA event on first render or tab change
    sendGAEvent("view_pricelist", {
      pricelist_type: activeTab
    });
  }, [activeTab]);

  return (
    <div data-nav-theme="light" className="pt-32 pb-24 min-h-screen bg-background flex flex-col items-center">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-black">
            Daftar <span className="text-primary">Harga</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Harga On The Road (OTR) wilayah Bogor & Jabodetabek. Perbarui April 2024.
          </p>
        </div>

        {/* Toggle Option */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/5 p-2 rounded-full border border-black/10 flex relative w-max">
            <button
              onClick={() => setActiveTab("cash")}
              className={`relative z-10 px-8 lg:px-16 py-3 font-medium transition-all rounded-full ${
                activeTab === "cash" ? "bg-primary text-white shadow-lg" : "text-gray-600 hover:text-black"
              }`}
            >
              Harga Tunai
            </button>
            <button
              onClick={() => setActiveTab("kredit")}
              className={`relative z-10 px-8 lg:px-16 py-3 font-medium transition-all rounded-full ${
                activeTab === "kredit" ? "bg-primary text-white shadow-lg" : "text-gray-600 hover:text-black"
              }`}
            >
              Simulasi Kredit
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="bg-white border border-black/10 rounded-3xl p-6 md:p-10 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/10">
                <th className="py-4 px-4 text-sm font-bold uppercase tracking-widest text-gray-500">Model & Varian</th>
                <th className="py-4 px-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                  {activeTab === "cash" ? "Harga OTR" : "DP Mulai"}
                </th>
                <th className="py-4 px-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                  {activeTab === "cash" ? "Kategori" : "Angsuran / Bln"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {/* Omoda E5 Section */}
              <tr className="bg-black/2">
                <td colSpan={3} className="py-4 px-4 font-bold text-primary tracking-widest uppercase text-xs">Electric Series</td>
              </tr>
              <PricingRow model="Omoda E5" variant="Pure" price="419.800.000" info="EV SUV" activeTab={activeTab} dp="80jt" install="6jt" />
              <PricingRow model="Omoda E5" variant="Performance" price="498.800.000" info="EV SUV" activeTab={activeTab} dp="100jt" install="7.5jt" />

              {/* Tiggo Section */}
              <tr className="bg-black/2 border-t border-black/5">
                <td colSpan={3} className="py-4 px-4 font-bold text-primary tracking-widest uppercase text-xs">Tiggo Family</td>
              </tr>
              <PricingRow model="Tiggo 8" variant="Premium" price="349.500.000" info="7-Seater" activeTab={activeTab} dp="50jt" install="5.2jt" />
              <PricingRow model="Tiggo 8 Pro" variant="Luxury" price="528.500.000" info="7-Seater Deluxe" activeTab={activeTab} dp="110jt" install="8.1jt" />
              <PricingRow model="Tiggo 7 Pro" variant="Premium" price="399.500.000" info="C-SUV" activeTab={activeTab} dp="65jt" install="6.3jt" />
              <PricingRow model="Tiggo Cross" variant="Executive" price="315.000.000" info="Compact SUV" activeTab={activeTab} dp="45jt" install="4.8jt" />

              {/* Omoda Ice Section */}
              <tr className="bg-black/2 border-t border-black/5">
                <td colSpan={3} className="py-4 px-4 font-bold text-primary tracking-widest uppercase text-xs">Omoda Series (ICE)</td>
              </tr>
              <PricingRow model="Omoda 5" variant="Z" price="334.800.000" info="Lifestyle SUV" activeTab={activeTab} dp="55jt" install="5.1jt" />
              <PricingRow model="Omoda 5" variant="RZ" price="404.800.000" info="Tech SUV" activeTab={activeTab} dp="75jt" install="6.5jt" />
              <PricingRow model="Omoda 5" variant="GT AWD" price="493.800.000" info="Performance" activeTab={activeTab} dp="95jt" install="7.8jt" />
            </tbody>
          </table>
          
          <div className="mt-10 p-6 bg-black/5 rounded-2xl border border-black/5 text-center">
            <p className="text-gray-600 mb-2">* Harga sewaktu-waktu dapat berubah tanpa pemberitahuan sebelumnya.</p>
            <p className="text-gray-600 mb-6">* Harga sudah termasuk biaya STNK & Plat Nomor wilayah Bogor/Depok.</p>
            <button 
              onClick={() => window.open('https://wa.me/+6281234567890', '_blank')}
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
            >
              Dapatkan Promo Khusus Bulan Ini &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingRow({ model, variant, price, info, activeTab, dp, install }: any) {
  return (
    <tr className="hover:bg-black/2 transition-colors">
      <td className="py-6 px-4">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-black">{model}</span>
          <span className="text-sm text-gray-500">{variant}</span>
        </div>
      </td>
      <td className="py-6 px-4 font-bold text-black text-xl tracking-tighter">
        Rp {activeTab === "cash" ? price : dp}
      </td>
      <td className="py-6 px-4">
        <span className="inline-flex px-3 py-1 bg-black/5 rounded-full text-xs font-bold text-gray-600">
          {activeTab === "cash" ? info : `Mulai ${install}`}
        </span>
      </td>
    </tr>
  );
}
