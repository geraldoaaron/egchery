import Image from "next/image";
import { cars } from "@/data/cars";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { CarColorPicker } from "@/components/cars/CarColorPicker";
import { FeatureSlider } from "@/components/cars/FeatureSlider";
import { ExperienceSlider } from "@/components/cars/ExperienceSlider";
import { ColorOptionsSection } from "@/components/cars/ColorOptionsSection";
import { SafetyAccordionSection } from "@/components/cars/SafetyAccordionSection";
import { VariantPricingSection } from "@/components/cars/VariantPricingSection";
import { OtherProductsSection } from "@/components/cars/OtherProductsSection";

// For static generation if needed
export function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.id,
  }));
}

export default async function ModelDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const car = cars.find((c) => c.id === params.slug);

  if (!car) {
    notFound();
  }

  // Use model-specific specs or fallback to dummy specs
  const specs = car.specs || [
    "Mesin Inovatif & Bertenaga",
    "Sistem Keselamatan Aktif 360",
    "Layar Sentuh HD Pintar Terintegrasi",
    "Kenyamanan Kabin Tingkat Lanjut",
    "Desain Aerodinamis Terbaru",
  ];

  return (
    <div data-nav-theme="light" className="min-h-screen bg-background">
      {/* Cinematic Performance Hub (Now functioning as the primary hero) */}
      <section className="pt-24 pb-8 w-full h-screen bg-background relative z-20 overflow-hidden flex flex-col">
        {/* Full-width Background behind the hub */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/images/banners/bg-cars.png"
            alt="Cinematic Background"
            fill
            className="object-cover object-center "
            priority
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col h-full">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shrink-0">
            <Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
            <span className="text-gray-300 mt-[1px]">&gt;</span>
            <Link href="/model-mobil" className="text-gray-400 hover:text-primary transition-colors">Models</Link>
            <span className="text-gray-300 mt-[1px]">&gt;</span>
            <span className="text-gray-400">{car.powertrain}</span>
            <span className="text-gray-300 mt-[1px]">&gt;</span>
            <span className="text-primary">{car.name}</span>
          </nav>
          <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col">
            {/* The Image Container with Rounded Corners (100% Height) */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden flex items-center justify-center">

              {/* Floating Car Name Overlay */}
              <div className="absolute top-[10%] w-full text-center flex flex-col items-center select-none pointer-events-none animate-title-enter z-20 opacity-0">
                <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-2xl">
                  {car.name}
                </h2>
              </div>

              {/* Animated Car Image Wrapper */}
              <div className="absolute w-full h-full flex items-center justify-center animate-car-enter opacity-0">
                <Image
                  src={car.image}
                  alt={`${car.name} Showcase`}
                  fill
                  className="object-contain object-center scale-90 md:scale-100 transition-all duration-700"
                  priority
                />
              </div>

              {/* Inline Styles for Animations */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes popupRight {
                  0% { transform: translateX(40vw) scale(0.6); opacity: 0; filter: blur(10px); }
                  60% { transform: translateX(-3vw) scale(1.03); opacity: 1; filter: blur(0); }
                  100% { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); }
                }
                @keyframes fadeDownTitle {
                  0% { transform: translateY(-30px); opacity: 0; letter-spacing: 0.1em; }
                  100% { transform: translateY(0); opacity: 1; letter-spacing: normal; }
                }
                .animate-car-enter {
                  animation: popupRight 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.1s forwards;
                }
                .animate-title-enter {
                  animation: fadeDownTitle 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
              `}} />

              <div className="absolute inset-0 z-10 pointer-events-none" />
            </div>

            {/* Overlapping Glassmorphism Specs Bar */}
            <div className="absolute bottom-18 md:bottom-12 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-wrap md:flex-nowrap justify-around items-center gap-6 z-30">
              {[
                { label: "ACCELERATION", value: car.performance?.acceleration?.split(' ')[0] || "N/A", unit: car.performance?.acceleration?.split(' ')[1] || "Sec" },
                { label: "TOP SPEED", value: car.performance?.topSpeed?.split(' ')[0] || "N/A", unit: car.performance?.topSpeed?.split(' ')[1] || "Km/h" },
                { label: "WHEELBASE", value: car.dimensions?.wheelbase || "N/A", unit: car.dimensions?.wheelbaseUnit || "mm" },
                { label: "TORQUE", value: car.performance?.torque?.split(' ')[0] || "N/A", unit: car.performance?.torque?.split(' ')[1] || "Nm" }
              ].map((spec, i) => (
                <div key={i} className="flex flex-col items-center text-center flex-1 px-2 relative last:before:hidden before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-8 before:bg-white/20 hidden md:flex">
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-2 leading-none opacity-80">{spec.label}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-medium text-white tracking-tighter leading-none">{spec.value}</span>
                    <span className="text-xl font-light text-white opacity-80 leading-none">{spec.unit}</span>
                  </div>
                </div>
              ))}

              {/* Mobile View layout (2x2 grid) */}
              <div className="grid grid-cols-2 gap-y-8 w-full md:hidden">
                {[
                  { label: "ACCELERATION", value: car.performance?.acceleration?.split(' ')[0] || "N/A", unit: car.performance?.acceleration?.split(' ')[1] || "Sec" },
                  { label: "TOP SPEED", value: car.performance?.topSpeed?.split(' ')[0] || "N/A", unit: car.performance?.topSpeed?.split(' ')[1] || "Km/h" },
                  { label: "WHEELBASE", value: car.dimensions?.wheelbase || "N/A", unit: car.dimensions?.wheelbaseUnit || "mm" },
                  { label: "TORQUE", value: car.performance?.torque?.split(' ')[0] || "N/A", unit: car.performance?.torque?.split(' ')[1] || "Nm" }
                ].map((spec, i) => (
                  <div key={`mob-${i}`} className="flex flex-col items-center text-center px-2">
                    <span className="text-[9px] font-bold text-white tracking-[0.2em] uppercase mb-1 leading-none opacity-80">{spec.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-medium text-white tracking-tighter leading-none">{spec.value}</span>
                      <span className="text-sm font-light text-white opacity-80 leading-none">{spec.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Info & Color Picker Section (Moved below hero) */}
      <section className="pt-24 pb-16 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Title & Actions */}
            <div className="lg:w-1/3">
              <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block animate-fade-in-up">
                {car.powertrain}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-black uppercase tracking-tighter mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {car.name}
              </h2>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {car.tagline}. {car.description || "Rasakan kombinasi sempurna antara performa tangguh, teknologi mutakhir, dan desain elegan."}
              </p>

              <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Button asChild size="lg" className="h-14 w-full justify-between px-6 text-lg">
                  <Link href="/hubungi-kami">
                    <span>Booking Test Drive</span>
                    <ChevronRight className="w-5 h-5 opacity-50" />
                  </Link>
                </Button>
                <div className="p-4 bg-black/5 border border-black/10 rounded-xl">
                  <span className="text-sm text-gray-600 block mb-1">Harga Mulai Dari</span>
                  <span className="text-2xl font-bold text-black">{car.price}</span>
                </div>
              </div>
            </div>

            {/* Interactive Color Visualizer */}
            <div className="lg:w-2/3 w-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CarColorPicker colors={car.colors || []} defaultImage={car.image} />
            </div>
          </div>
        </div>
      </section>


      {/* Feature Slider Gallery Section(s) */}
      {car.featureSliders && car.featureSliders.length > 0 ? (
        // Multiple independent slider sections
        car.featureSliders.map((section, sectionIdx) => (
          <FeatureSlider
            key={sectionIdx}
            carId={car.id}
            carImage={car.image}
            featureGroups={section.groups}
            featureTitle={section.title}
            featureSubtitle={section.subtitle}
            sectionIndex={sectionIdx}
          />
        ))
      ) : (
        // Single slider (legacy / default)
        <FeatureSlider
          carId={car.id}
          carImage={car.image}
          featureGroups={car.featureGroups}
          featureTitle={car.featureTitle}
          featureSubtitle={car.featureSubtitle}
        />
      )}

      {/* SUPER EXPERIENCE — Coverflow Slider */}
      {(car.experienceSlides || car.experienceGroups) && (
        <ExperienceSlider
          title={car.experienceTitle}
          subtitle={car.experienceSubtitle}
          slides={car.experienceSlides}
          experienceGroups={car.experienceGroups}
          bgColor="bg-gray-50"
        />
      )}

      {/* DYNAMICS AND SAFETY — Accordion with image */}
      {car.safetyFeatures && car.safetyFeatures.items.length > 0 && (
        <SafetyAccordionSection
          carName={car.name}
          sectionTitle={car.safetyFeatures.sectionTitle}
          sectionSubtitle={car.safetyFeatures.sectionSubtitle}
          items={car.safetyFeatures.items}
        />
      )}

      {/* COLOR OPTIONS — Interactive color picker section */}
      <ColorOptionsSection
        carName={car.name}
        colors={car.colors || []}
        colorGroups={car.colorGroups}
        defaultImage={car.image}
      />

      {/* VARIANT PRICING — Price info with city/dealer picker & CTAs */}
      <VariantPricingSection
        carName={car.name}
        carImage={car.image}
        price={car.price}
        highlightSpecs={car.specs}
        variants={car.variants}
      />

      {/* OTHER PRODUCTS — Show other Chery models */}
      <OtherProductsSection
        currentCarId={car.id}
        cars={cars.map((c) => ({
          id: c.id,
          name: c.name,
          image: c.image,
          price: c.price,
          specs: c.specs,
        }))}
      />
    </div>
  );
}
