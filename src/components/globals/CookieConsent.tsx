"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShow(false);
    
    // Add logic here to store UTM parameters if needed
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {
      source: urlParams.get("utm_source"),
      medium: urlParams.get("utm_medium"),
      campaign: urlParams.get("utm_campaign"),
    };
    if (utms.source || utms.medium || utms.campaign) {
      localStorage.setItem("utm_data", JSON.stringify(utms));
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-6"
        >
          <div className="bg-background/95 backdrop-blur-xl border border-black/10 rounded-2xl max-w-4xl mx-auto p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex-1">
              <h3 className="text-black font-semibold text-lg mb-2">Privasi & Cookie</h3>
              <p className="text-sm text-gray-600">
                Kami menggunakan cookie untuk meningkatkan pengalaman Anda di situs web kami, melacak analitik, dan mempersonalisasi konten. Dengan mengklik "Setuju", Anda menyetujui penggunaan cookie kami.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Button variant="outline" onClick={() => setShow(false)}>Tolak</Button>
              <Button onClick={handleAccept}>Setuju & Lanjutkan</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
