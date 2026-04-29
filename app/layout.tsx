import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
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
  title: "Customs Clearance PTY | E-Commerce Customs & Logistics in Panama",
  description: "E-Commerce customs and logistics solutions in Panama. Import, export, transit, nationalization, cold chain, and more. From anywhere in the world to Panama.",
  keywords: ["e-commerce customs Panama", "customs clearance Panama", "customs broker Panama", "freight forwarder Panama", "import Panama", "export Panama", "logistics Panama", "e-commerce logistics Panama"],
  openGraph: {
    title: "E-Commerce Customs & Logistics Solutions in Panama — Customs Clearance PTY",
    description: "E-Commerce customs and logistics services. Import, export, transit, and nationalization handled end-to-end.",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://customsclearancepty.com" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
