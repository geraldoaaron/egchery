import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroSection } from "@/components/home/HeroSection";
import { ScrollStorytellingLazy } from "@/components/home/ScrollStorytellingLazy";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductGridSection } from "@/components/home/ProductGridSection";
import { PricingHighlightSection } from "@/components/home/PricingHighlightSection";
import { DeliverySection } from "@/components/home/DeliverySection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HeroSection />
      <ScrollStorytellingLazy />
      <AboutSection />
      <ProductGridSection />
      <PricingHighlightSection />
      <DeliverySection />
    </>
  );
}
