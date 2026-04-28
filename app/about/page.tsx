import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MapPin, Users, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Customs Clearance",
  description: "Learn about Customs Clearance — your trusted partner for freight forwarding and customs brokerage from China to Panama and Central America.",
};

const values = [
  {
    icon: Globe,
    title: "End-to-end service",
    description: "From your supplier in China to your door in Panama, we handle every step of the journey.",
  },
  {
    icon: Shield,
    title: "Licensed & compliant",
    description: "Our customs brokers are fully licensed with Panama's National Customs Authority (ANA).",
  },
  {
    icon: Users,
    title: "Bilingual support",
    description: "Our team speaks English and Spanish, operating in your time zone for seamless communication.",
  },
  {
    icon: MapPin,
    title: "Local presence",
    description: "Offices in Panama City and operations in Shenzhen to serve you on both ends.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="bg-primary py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Your bridge between China and Central America.
              </h1>
              <p className="text-lg text-white/80">
                We simplify international logistics for businesses and individuals importing from Chinese marketplaces into Panama and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold">Our story</h2>
              <div className="space-y-6 text-lg text-foreground">
                <p>
                  Customs Clearance was founded with a simple mission: make importing from China as easy as ordering from a local supplier.
                </p>
                <p>
                  We saw businesses and individuals struggling with the complexity of international shipping — coordinating between freight forwarders, customs brokers, and delivery services, often in different languages and time zones.
                </p>
                <p>
                  So we built a complete solution. One partner. One tracking number. From factory to front door.
                </p>
                <p>
                  Today, we serve importers across Panama, Costa Rica, Guatemala, and El Salvador, handling everything from small ecommerce parcels to full container loads.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold">What we stand for</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
