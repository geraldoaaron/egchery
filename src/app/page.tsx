import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductGridSection } from "@/components/home/ProductGridSection";
import { PricingHighlightSection } from "@/components/home/PricingHighlightSection";
import { DeliverySection } from "@/components/home/DeliverySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductGridSection />
      <PricingHighlightSection />
      <DeliverySection />
    </>
  );
}
