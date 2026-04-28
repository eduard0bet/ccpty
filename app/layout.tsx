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
  title: "Customs Clearance | Customs Brokerage & Logistics in Panama",
  description: "Full-service customs brokerage and logistics in Panama. Import, export, transit, nationalization, cold chain, and more. From anywhere in the world to Panama.",
  keywords: ["customs clearance Panama", "customs broker Panama", "freight forwarder Panama", "import Panama", "export Panama", "logistics Panama", "nationalization Panama"],
  openGraph: {
    title: "Customs & Logistics Solutions in Panama — Customs Clearance",
    description: "Full customs brokerage and logistics services. Import, export, transit, and nationalization handled end-to-end.",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://customsclearance.com" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
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
