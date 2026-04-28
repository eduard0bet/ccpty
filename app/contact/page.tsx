import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Customs Clearance",
  description: "Get in touch with Customs Clearance for quotes, questions, or support. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
