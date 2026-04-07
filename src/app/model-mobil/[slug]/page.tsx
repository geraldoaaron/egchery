import { cars } from "@/data/cars";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { CarColorPicker } from "@/components/cars/CarColorPicker";

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
    <div className="min-h-screen bg-background">
      {/* Dynamic Hero with Color Picker */}
      <section className="pt-32 pb-16 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/model-mobil" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Title & Actions */}
            <div className="lg:w-1/3">
              <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block animate-fade-in-up">
                {car.category} Series
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-black uppercase tracking-tighter mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {car.name}
              </h1>
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

      {/* Pricing / Variants Table */}
      {car.variants && car.variants.length > 0 && (
        <section className="py-20 bg-gray-50 border-y border-black/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 text-black text-center">
                Varian & <span className="text-primary">Harga</span>
              </h2>
              <div className="bg-black/5 rounded-2xl overflow-hidden border border-black/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-black/5">
                      <th className="p-5 font-medium text-gray-600 border-b border-black/10 w-2/3">Type Varian</th>
                      <th className="p-5 font-medium text-gray-600 border-b border-black/10 text-right">Harga OTR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {car.variants.map((v, idx) => (
                      <tr key={idx} className="transition-colors hover:bg-black/5">
                        <td className="p-5 font-bold text-black border-b border-black/5">{v.name}</td>
                        <td className="p-5 font-bold text-primary border-b border-black/5 text-right">{v.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                *Harga berstatus On The Road (OTR) dan tidak mengikat, dapat berubah sewaktu-waktu.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Specs Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6 text-black border-l-4 border-primary pl-6">
                Spesifikasi <br/><span className="text-gray-500">Unggulan</span>
              </h2>
              <p className="text-gray-600">
                Fitur-fitur terbaik di kelasnya untuk memastikan keselamatan, kenyamanan, dan pengalaman berkendara yang tak terlupakan bersama keluarga Anda.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-black/5 border border-black/5 hover:border-primary/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-700 font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
