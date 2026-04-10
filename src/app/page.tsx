import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroSection } from "@/components/home/HeroSection";
import { ScrollStorytelling } from "@/components/home/ScrollStorytelling";
import { ModelSelectorSection } from "@/components/home/ModelSelectorSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductGridSection } from "@/components/home/ProductGridSection";
import { PricingHighlightSection } from "@/components/home/PricingHighlightSection";
import { DeliverySection } from "@/components/home/DeliverySection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HeroSection />
      <AboutSection />
      <ProductGridSection />
      <PricingHighlightSection />
      <DeliverySection />
    </>
  );
}
