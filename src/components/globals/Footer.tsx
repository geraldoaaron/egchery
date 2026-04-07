import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 pt-20 pb-10 border-t border-black/5 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter uppercase text-black">
                Chery <span className="text-primary">Wonder</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Dealer resmi Chery Wonder Indonesia, menghadirkan rangkaian kendaraan premium seri Tiggo dan Omoda untuk pengalaman berkendara masa depan Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">YT</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link href="/model-mobil" className="hover:text-primary transition-colors">Model Mobil</Link></li>
              <li><Link href="/harga" className="hover:text-primary transition-colors">Daftar Harga</Link></li>
              <li><Link href="/info-promo" className="hover:text-primary transition-colors">Info & Promo</Link></li>
              <li><Link href="/hubungi-kami" className="hover:text-primary transition-colors">Test Drive</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">Jl. Raya Pajajaran No.9, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">sales@chery-wonder.com</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-black font-bold mb-6">Statistik Kami</h4>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span>Pengalaman</span>
                <span className="text-black font-bold">10+ Tahun</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span>Total Delivery</span>
                <span className="text-black font-bold">1500+ Unit</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span>Pelanggan Puas</span>
                <span className="text-black font-bold">1000+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm pt-8 border-t border-black/10">
          <p>&copy; {new Date().getFullYear()} Chery Wonder Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
