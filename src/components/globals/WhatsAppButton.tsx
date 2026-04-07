"use client";

import { MessageCircle } from "lucide-react";
import { sendGAEvent } from "./GoogleAnalytics";

export function WhatsAppButton() {
  const phoneNumber = "+6281234567890"; // Ganti dengan nomor asli
  const defaultMessage = "Halo Chery Wonder, saya ingin bertanya mengenai mobil Chery.";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Track GA Event before redirect
    sendGAEvent("click_whatsapp", {
      button_location: "floating_button",
    });

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-black p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300 group flex items-center gap-3 overflow-hidden"
      aria-label="Chat via WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
      <MessageCircle size={28} className="relative z-10" />
      <span className="relative z-10 font-medium whitespace-nowrap hidden group-hover:block max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden pr-2">
        Hubungi Kami
      </span>
      {/* Ripple Animation */}
      <div className="absolute -inset-2 rounded-full border border-[#25D366] animate-ping opacity-50 z-0 pointer-events-none"></div>
    </a>
  );
}
