"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [navbarTheme, setNavbarTheme] = useState<"dark" | "light">("dark");

  const [selectedPowertrain, setSelectedPowertrain] = useState<"BEV" | "CSH" | "ICE">("CSH");

  // Update theme based on pathname and scroll
  useEffect(() => {
    // Set initial theme based on path
    setNavbarTheme(pathname === "/" ? "dark" : "light");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Observer to detect background theme of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-nav-theme") as "dark" | "light";
            if (theme) setNavbarTheme(theme);
          }
        });
      },
      { 
        // Focus on the top part of the viewport
        rootMargin: "0px 0px -90% 0px",
        threshold: 0 
      }
    );

    // Give a small delay to ensure DOM is ready for observation
    const timer = setTimeout(() => {
      document.querySelectorAll("[data-nav-theme]").forEach((el) => observer.observe(el));
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // Handle models dropdown body scroll
  useEffect(() => {
    if (isModelsDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
    }
  }, [isModelsDropdownOpen, isMobileMenuOpen]);

  const isLightMode = isScrolled || isModelsDropdownOpen || isMobileMenuOpen || navbarTheme === "light";
  const filteredCars = cars.filter((c) => c.powertrain === selectedPowertrain);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 border-b ${isMobileMenuOpen
        ? "bottom-0 bg-background border-foreground/5 py-6"
        : isLightMode
          ? `glass-nav border-foreground/[0.03] py-2 md:py-3 lg:py-4`
          : "bg-transparent border-transparent py-3 md:py-4 lg:py-6"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO (Luxury Clean Style) */}
        <Link href="/" className="flex items-center z-[1020] relative">
          <div className="relative w-64 md:w-96 h-8 md:h-10">
            <Image
              src={isLightMode ? "/images/logo/cherylogohitam.png" : "/images/logo/cherylogoputih.png"}
              alt="Chery Wonder Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isLightMode ? "text-foreground/60 hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Home
          </Link>

          {/* MODELS MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setIsModelsDropdownOpen(true)}
            onMouseLeave={() => setIsModelsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors py-4 ${isModelsDropdownOpen ? "text-primary" : (isLightMode ? "text-foreground/60 hover:text-primary" : "text-white/90 hover:text-white")}`}>
              Fleet <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isModelsDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isModelsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="fixed top-[82px] left-0 right-0 w-full bg-background text-foreground overflow-hidden shadow-2xl border-t border-foreground/[0.03]"
                >
                  <div className="container mx-auto px-8 py-16 flex flex-col relative z-10">
                    <div className="flex items-center justify-center mb-16">
                      <div className="flex items-center gap-16 border-b border-foreground/[0.05] pb-4">
                        {(["BEV", "CSH", "ICE"] as const).map((type) => (
                          <button
                            key={type}
                            onMouseEnter={() => setSelectedPowertrain(type)}
                            className="relative group px-4 py-2"
                          >
                            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${selectedPowertrain === type ? "text-primary" : "text-foreground/30 group-hover:text-foreground"}`}>
                              {type}
                            </span>
                            {selectedPowertrain === type && (
                              <motion.div
                                layoutId="navCategoryUnderline"
                                className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedPowertrain}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap justify-center gap-x-16 gap-y-12"
                      >
                        {filteredCars.map((car) => (
                          <Link
                            key={car.id}
                            href={`/model-mobil/${car.id}`}
                            onClick={() => setIsModelsDropdownOpen(false)}
                            className="flex flex-col items-center w-[220px] group"
                          >
                            <div className="relative w-full aspect-[16/10] mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                              <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                sizes="220px"
                                className="object-contain"
                              />
                            </div>
                            <h3 className="text-[10px] font-bold tracking-widest text-foreground/60 group-hover:text-primary transition-colors uppercase">
                              {car.name}
                            </h3>
                            <div className="w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-500 mt-2" />
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.01] pointer-events-none select-none z-0">
                    <span className="text-[20vw] font-black uppercase tracking-tighter text-foreground">{selectedPowertrain}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/harga"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isLightMode ? "text-foreground/60 hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Pricing
          </Link>
          <Link
            href="/info-promo"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isLightMode ? "text-foreground/60 hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Insights
          </Link>
          <Link
            href="/hubungi-kami"
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isLightMode ? "text-foreground/60 hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Contact
          </Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-6">
          <button className={`transition-colors ${isLightMode ? "text-foreground/40 hover:text-foreground" : "text-white/40 hover:text-white"}`}>
            <Search className="w-4 h-4" />
          </button>
          <Button asChild className="rounded-none h-11 px-8 text-[10px] font-bold tracking-[0.2em] bg-primary text-white hover:bg-primary/90 transition-all duration-500 luxury-shadow">
            <Link href="/hubungi-kami">DRIVE NOW</Link>
          </Button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className={`lg:hidden p-2 z-[1020] relative transition-colors ${isLightMode ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 top-0 h-screen bg-background z-[1010] flex flex-col px-8 pt-24"
          >
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-foreground py-6 border-b border-foreground/[0.05] uppercase tracking-tighter"
              >
                Home
              </Link>
              <Link
                href="/model-mobil"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-foreground py-6 border-b border-foreground/[0.05] uppercase tracking-tighter"
              >
                Portfolio
              </Link>
              <Link
                href="/harga"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-foreground py-6 border-b border-foreground/[0.05] uppercase tracking-tighter"
              >
                Pricing
              </Link>
              <Link
                href="/hubungi-kami"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black text-foreground py-6 uppercase tracking-tighter"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-auto mb-12">
              <Button asChild size="lg" className="w-full h-16 rounded-none bg-primary text-white font-bold tracking-widest uppercase luxury-shadow">
                <Link href="/hubungi-kami">Request Experience</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
