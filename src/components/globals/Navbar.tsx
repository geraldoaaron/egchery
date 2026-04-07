"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);

  const [isMobileModelsOpen, setIsMobileModelsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tiggoCars = cars.filter((c) => c.category === "Tiggo");
  const omodaCars = cars.filter((c) => c.category === "Omoda");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 z-[1020] relative">
          <span className="text-2xl font-bold tracking-tighter uppercase text-black">
            Chery <span className="text-primary">Wonder</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-black hover:text-primary transition-colors"
          >
            Home
          </Link>

          {/* MODELS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsModelsDropdownOpen(true)}
            onMouseLeave={() => setIsModelsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-black hover:text-primary transition-colors py-2">
              Model Mobil <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {isModelsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white border border-black/10 shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-8"
                >
                  {/* Tiggo Column */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4 border-b border-black/10 pb-2">
                      Tiggo Series
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {tiggoCars.slice(0, 8).map((car) => (
                        <Link
                          key={car.id}
                          href={`/model-mobil/${car.id}`}
                          className="text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          {car.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Omoda Column */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4 border-b border-black/10 pb-2">
                      Omoda & J6
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {omodaCars.map((car) => (
                        <Link
                          key={car.id}
                          href={`/model-mobil/${car.id}`}
                          className="text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          {car.name}
                        </Link>
                      ))}
                      <Link
                        href="/model-mobil/j6"
                        className="text-sm hover:text-primary transition-colors mt-2 text-black font-semibold"
                      >
                        Chery J6
                      </Link>
                    </div>
                    <div className="mt-8">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/model-mobil">Lihat Semua Model</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/harga"
            className="text-sm font-medium text-black hover:text-primary transition-colors"
          >
            Harga
          </Link>
          <Link
            href="/info-promo"
            className="text-sm font-medium text-black hover:text-primary transition-colors"
          >
            Info & Promo
          </Link>
          <Link
            href="/hubungi-kami"
            className="text-sm font-medium text-black hover:text-primary transition-colors"
          >
            Hubungi Kami
          </Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            aria-label="Search"
            className="w-10 h-10 flex items-center justify-center rounded-full text-black hover:bg-black/10 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <Button asChild>
            <Link href="/hubungi-kami">Test Drive</Link>
          </Button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="lg:hidden p-2 z-[1020] text-black relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 pt-[88px] bg-white z-[1010] flex flex-col px-6 overflow-y-auto pb-10 border-t border-black/10">
          <nav className="flex flex-col mt-6 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light text-black py-4 border-b border-black/5 hover:text-primary transition-colors"
            >
              Home
            </Link>

            <div className="flex flex-col border-b border-black/5">
              <button
                onClick={() => setIsMobileModelsOpen(!isMobileModelsOpen)}
                className="flex items-center justify-between text-3xl font-light text-black py-4 transition-colors"
              >
                Model Mobil
                <span
                  className={`w-8 h-8 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-500 ${isMobileModelsOpen ? "rotate-180 bg-primary/20" : ""}`}
                >
                  <ChevronDown
                    className={`w-4 h-4 ${isMobileModelsOpen ? "text-primary" : "text-black"}`}
                  />
                </span>
              </button>

              {isMobileModelsOpen && (
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-6 pt-2 pb-8">
                    <Link
                      href="/model-mobil"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 rounded-xl p-4 flex justify-between items-center text-black"
                    >
                      <span className="font-semibold text-sm tracking-wide text-black">
                        LIHAT SEMUA MODEL &rarr;
                      </span>
                    </Link>

                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                        Tiggo Family
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {tiggoCars.map((car) => (
                          <Link
                            key={car.id}
                            href={`/model-mobil/${car.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-medium text-gray-700 bg-black/5 border border-black/5 px-3 py-3 rounded-lg hover:bg-black/10 hover:text-black transition-all whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {car.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                        Omoda & J6
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {omodaCars.map((car) => (
                          <Link
                            key={car.id}
                            href={`/model-mobil/${car.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-medium text-gray-700 bg-black/5 border border-black/5 px-3 py-3 rounded-lg hover:bg-black/10 hover:text-black transition-all whitespace-nowrap overflow-hidden text-ellipsis"
                          >
                            {car.name}
                          </Link>
                        ))}
                        <Link
                          href="/model-mobil/j6"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-xs font-medium text-gray-700 bg-black/5 border border-black/5 px-3 py-3 rounded-lg hover:bg-black/10 hover:text-black transition-all whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          Chery J6
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/harga"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light text-black py-4 border-b border-black/5 hover:text-primary transition-colors"
            >
              Harga
            </Link>
            <Link
              href="/info-promo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light text-black py-4 border-b border-black/5 hover:text-primary transition-colors"
            >
              Info & Promo
            </Link>
            <Link
              href="/hubungi-kami"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light text-black py-4 hover:text-primary transition-colors"
            >
              Hubungi Kami
            </Link>
          </nav>
          <div className="mt-8 mb-10 w-full pt-6 border-t border-black/10">
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-lg font-medium"
            >
              <Link href="/hubungi-kami">Booking Test Drive</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
