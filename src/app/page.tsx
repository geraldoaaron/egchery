import dynamic from "next/dynamic";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroSection } from "@/components/home/HeroSection";
import { ModelSelectorSection } from "@/components/home/ModelSelectorSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductGridSection } from "@/components/home/ProductGridSection";
import { PricingHighlightSection } from "@/components/home/PricingHighlightSection";
import { DeliverySection } from "@/components/home/DeliverySection";

// Lazy load ScrollStorytelling to prevent it from blocking the initial render.
// This is the root fix for the 'stuck' navigation issue.
const ScrollStorytelling = dynamic(
  () => import("@/components/home/ScrollStorytelling").then((m) => ({ default: m.ScrollStorytelling })),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HeroSection />
      <ScrollStorytelling />
      <AboutSection />
      <ProductGridSection />
      <PricingHighlightSection />
      <DeliverySection />
    </>
  );
}
