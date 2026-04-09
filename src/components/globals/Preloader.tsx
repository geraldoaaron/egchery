"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ isLoaded }: { isLoaded: boolean }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 100) {
      const timer = setTimeout(() => {
        setCounter((prev) => Math.min(prev + Math.floor(Math.random() * 15) + 1, 100));
      }, 50 + Math.random() * 100);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          {/* Logo Section */}
          <div className="relative overflow-hidden mb-8">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <span className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                Chery <span className="text-red-600">Wonder</span>
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 origin-left"
            />
          </div>

          {/* Progress Section */}
          <div className="w-64 md:w-80">
            <div className="flex justify-between items-end mb-2">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500"
              >
                Initializing Experience
              </motion.span>
              <span className="text-xl font-light tabular-nums">
                {counter}%
              </span>
            </div>
            
            <div className="h-[1px] w-full bg-gray-800 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${counter}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[150%] h-[150%] border-t border-white rounded-full animate-spin-slow" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-10 md:left-20 text-[10vw] font-black text-white leading-none tracking-tighter select-none pointer-events-none uppercase opacity-5"
          >
            WONDER
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
