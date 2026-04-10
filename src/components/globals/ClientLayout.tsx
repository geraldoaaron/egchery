"use client";

import { useState } from "react";
import { Navbar } from "@/components/globals/Navbar";
import { PageTransition } from "@/components/globals/PageTransition";
import SmoothScroll from "@/components/globals/SmoothScroll";
import { Footer } from "@/components/globals/Footer";
import { WhatsAppButton } from "@/components/globals/WhatsAppButton";
import { CookieConsent } from "@/components/globals/CookieConsent";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  // Loading screen removed as per user request
  const [isLoaded] = useState(true);

  return (
    <body className="flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <SmoothScroll>
        <main className="flex-1 flex flex-col min-h-screen">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </SmoothScroll>
      <WhatsAppButton />
      <CookieConsent />
    </body>
  );
}
