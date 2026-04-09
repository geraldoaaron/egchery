"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendGAEvent } from "@/components/globals/GoogleAnalytics";

export default function HubungiKamiPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Test Drive",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track lead generation event to Google Ads
    sendGAEvent("generate_lead", {
      lead_type: formData.service,
    });

    // Construct WhatsApp message
    const waNumber = "+6281234567890";
    const text = `Halo Chery Wonder, saya ${formData.name}. 
No HP: ${formData.phone}
Layanan: ${formData.service}
Pesan: ${formData.message}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div data-nav-theme="light" className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-black">
            Hubungi <span className="text-primary">Kami</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Tim profesional kami siap membantu Anda. Konsultasikan kebutuhan kendaraan Anda, jadwalkan test drive, atau dapatkan layanan purna jual terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-black/5 border border-black/10 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-black mb-6">Informasi Dealer</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium mb-1">Alamat</h4>
                    <p className="text-gray-600 text-sm">Jl. Raya Pajajaran No.9, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium mb-1">Telepon & WhatsApp</h4>
                    <p className="text-gray-600 text-sm">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">sales@chery-wonder.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium mb-1">Jam Operasional</h4>
                    <p className="text-gray-600 text-sm">Senin - Minggu: 08.00 - 17.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="rounded-2xl overflow-hidden border border-black/10 h-[300px] bg-black/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126830.41846387814!2d106.7262!3d-6.595038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e317056bfb%3A0x9d54e612f0e0dfb!2sBogor%2C%20Bogor%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-black/5 border border-black/10 p-8 md:p-10 rounded-2xl relative overflow-hidden">
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <h3 className="text-2xl font-bold text-black mb-2">Pesan Sekarang</h3>
              <p className="text-gray-600 text-sm mb-8">Isi form di bawah ini dan kami akan segera mengarahkan Anda ke spesialis sales kami melalui WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-primary transition-colors"
                    placeholder="Masukkan nama"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon / WA *</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-primary transition-colors"
                    placeholder="0812xxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Layanan yang Diinginkan</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="Test Drive">Test Drive</option>
                    <option value="Informasi Harga & Promo">Informasi Harga & Promo</option>
                    <option value="Booking Service">Booking Service</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan Tambahan</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-primary transition-colors"
                    placeholder="Sampaikan pertanyaan atau kebutuhan Anda..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg">
                  Kirim Pesan
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp spesialis kami.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
