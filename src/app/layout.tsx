import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import GoogleAnalytics from "@/components/globals/GoogleAnalytics";
import SmoothScroll from "@/components/globals/SmoothScroll";
import { Navbar } from "@/components/globals/Navbar";
import { Footer } from "@/components/globals/Footer";
import { WhatsAppButton } from "@/components/globals/WhatsAppButton";
import { CookieConsent } from "@/components/globals/CookieConsent";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chery Wonder Indonesia | Premium Dealer",
  description: "Chery Wonder Indonesia - Premium Automotive Dealer for Tiggo and Omoda models. Book your test drive today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} antialiased`}
    >
      <body className="flex flex-col bg-background text-foreground overflow-x-hidden">
        <GoogleAnalytics ga_id="AW-YOUR_CONVERSION_ID" />
        <Navbar />
        <SmoothScroll>
          <main className="flex-1 flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
