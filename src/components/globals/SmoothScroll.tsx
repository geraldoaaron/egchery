"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register plugin outside to ensure it's only done once and globally available
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  });
}

// Global lenis instance so we can scroll-to-top from anywhere
let lenisInstance: Lenis | null = null;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Initialize Lenis once
  useEffect(() => {
    // Disable Lenis on mobile devices for stability
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onUpdate);
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      lenisInstance = null;
      gsap.ticker.remove(onUpdate);
    };
  }, []);

  // Reset scroll position and refresh ScrollTrigger on every route change
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);

    // Also tell Lenis to reset if it's active
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }

    // Multi-stage ScrollTrigger refresh
    // First refresh at 350ms - AFTER PageTransition animation (250ms) completes
    // This prevents GSAP from calculating positions while elements are still at opacity:0
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 350);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return <>{children}</>;
}
