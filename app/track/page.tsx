import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TrackingWidget } from "@/components/sections/tracking-widget";

export const metadata: Metadata = {
  title: "Track Your Shipment | Customs Clearance",
  description: "Track your shipment from China to Panama in real-time. Enter your tracking number to see the current status and estimated delivery date.",
};

export default function TrackPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted pt-20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Track your shipment</h1>
            <p className="text-lg text-foreground">
              Enter your tracking number to see real-time updates on your shipment from China to Panama.
            </p>
          </div>

          <TrackingWidget />

          <div className="mt-12 rounded-2xl border border-border/50 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">Need help?</h2>
            <p className="mb-4 text-foreground">
              If you can&apos;t find your tracking number or need assistance, contact our support team:
            </p>
            <ul className="space-y-2 text-sm text-foreground">
              <li>Email: hello@customsclearance.com</li>
              <li>WhatsApp: +507 XXXX-XXXX</li>
              <li>Hours: Mon–Fri, 8:00–18:00 (GMT-5)</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
