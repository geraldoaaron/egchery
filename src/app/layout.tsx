import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import GoogleAnalytics from "@/components/globals/GoogleAnalytics";
import { ClientLayout } from "@/components/globals/ClientLayout";
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
      <ClientLayout>
        <GoogleAnalytics ga_id="AW-YOUR_CONVERSION_ID" />
        {children}
      </ClientLayout>
    </html>
  );
}
