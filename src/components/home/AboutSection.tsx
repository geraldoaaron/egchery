export function AboutSection() {
  const text = "Kami mendefinisikan ulang kemewahan otomotif dengan perpaduan desain futuristik, teknologi cerdas, dan performa luar biasa.";

  return (
    <section className="py-32 px-4 md:px-8 bg-background relative z-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] text-primary uppercase font-bold mb-8">Chery Wonder Indonesia</h2>
        <h3 
          className="text-3xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight text-black mb-8"
        >
          {text}
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl">
          Sebagai dealer resmi terkemuka, kami berkomitmen untuk memberikan layanan terbaik. Mulai dari konsultasi, test drive, hingga layanan purna jual yang terjamin.
        </p>
      </div>
    </section>
  );
}
