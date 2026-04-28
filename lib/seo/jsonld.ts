import { faqItems } from "@/content/faq";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Customs Clearance",
    url: "https://customsclearance.com",
    logo: "https://customsclearance.com/logo.png",
    description: "End-to-end logistics from China to Panama and Central America. Freight forwarding, customs brokerage, and door-to-door delivery.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Panama City",
      addressCountry: "PA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+507-XXXX-XXXX",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    sameAs: [
      "https://linkedin.com/company/customsclearance",
      "https://instagram.com/customsclearance",
      "https://facebook.com/customsclearance",
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    name: "Customs Clearance",
    description: "Freight forwarding and customs brokerage services from China to Panama and Central America.",
    url: "https://customsclearance.com",
    telephone: "+507-XXXX-XXXX",
    email: "hello@customsclearance.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Panama City",
      addressLocality: "Panama City",
      addressCountry: "PA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.0579,
      longitude: -79.5208,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Panama" },
      { "@type": "Country", name: "Costa Rica" },
      { "@type": "Country", name: "Guatemala" },
      { "@type": "Country", name: "El Salvador" },
    ],
  };
}

export function getServicesSchema() {
  const services = [
    {
      name: "Air Freight",
      description: "Express air freight from China to Central America. 5-7 days delivery with full tracking.",
    },
    {
      name: "Sea Freight",
      description: "Cost-effective sea freight (LCL/FCL) from China to Panama and Central America. 25-35 days.",
    },
    {
      name: "Customs Brokerage",
      description: "Licensed customs brokers handling declarations, duties, and clearance with Panama's ANA.",
    },
  ];

  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Customs Clearance",
    },
    name: service.name,
    description: service.description,
    areaServed: {
      "@type": "Country",
      name: "Panama",
    },
  }));
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
