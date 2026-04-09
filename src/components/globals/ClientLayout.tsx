"use client";

import { useEffect, useState } from "react";
import { Preloader } from "@/components/globals/Preloader";
import { CustomCursor } from "@/components/globals/CustomCursor";
import { Navbar } from "@/components/globals/Navbar";
import { PageTransition } from "@/components/globals/PageTransition";
import SmoothScroll from "@/components/globals/SmoothScroll";
import { Footer } from "@/components/globals/Footer";
import { WhatsAppButton } from "@/components/globals/WhatsAppButton";
import { CookieConsent } from "@/components/globals/CookieConsent";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setIsLoaded(true);
    } else {
      // Set timeout to ensure preloader is visible for at least some time
      const timer = setTimeout(() => {
        setIsLoaded(true);
        sessionStorage.setItem("hasVisited", "true");
      }, 3500); // 3.5 seconds for a cinematic feel
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoaded]);

  return (
    <body className="flex flex-col bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Preloader isLoaded={isLoaded} />
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
