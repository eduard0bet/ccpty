import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Routes } from "@/components/sections/routes";
import { WhyUs } from "@/components/sections/why-us";
import { FAQ } from "@/components/sections/faq";
import { ContactForm } from "@/components/sections/contact-form";
import { LoadingScreen } from "@/components/shared/loading-screen";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getServicesSchema,
  getFAQSchema,
} from "@/lib/seo/jsonld";

export default function Home() {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const servicesSchema = getServicesSchema();
  const faqSchema = getFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {servicesSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LoadingScreen>
        <Navbar />
        <main>
          <Hero />
          <ServicesGrid />
          <HowItWorks />
          <Routes />
          <WhyUs />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </LoadingScreen>
    </>
  );
}
