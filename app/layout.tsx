import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Customs Clearance | China to Panama Freight Forwarding & Customs Brokerage",
  description: "End-to-end logistics from China to Panama and Central America. Get an address in China, ship to your door, with full customs clearance handled. Air & sea freight, real-time tracking.",
  keywords: ["customs clearance Panama", "china to panama shipping", "freight forwarder Panama", "casillero China Panama", "alibaba shipping Panama", "1688 Panama", "central america freight forwarder"],
  openGraph: {
    title: "From China to your door in Panama — Customs Clearance",
    description: "Your address in China + customs clearance + door delivery. One partner, one tracking number.",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://customsclearance.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
