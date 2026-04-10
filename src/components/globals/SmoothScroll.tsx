"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register plugin outside to ensure it's only done once and globally available
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable Lenis on mobile devices for stability
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onUpdate);
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onUpdate);
      lenisRef.current = null;
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    
    // Clear GSAP scroll memory to prevent offset inheritance from previous pages
    ScrollTrigger.clearScrollMemory();

    // Refresh ScrollTrigger at multiple stages to ensure layout is settled
    // especially for late-loading images in production
    const refreshTimes = [100, 500, 2000];
    const timers: NodeJS.Timeout[] = [];

    refreshTimes.forEach((delay) => {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return <>{children}</>;
}
