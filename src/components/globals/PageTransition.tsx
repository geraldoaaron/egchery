"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => ScrollTrigger.refresh()}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
