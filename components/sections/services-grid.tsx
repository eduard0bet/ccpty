"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileCheck2,
  Ship,
  Plane,
  PackageCheck,
  Thermometer,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  Truck
} from "lucide-react";

const services = [
  {
    icon: FileCheck2,
    title: "Customs Clearance",
    description: "Full import and export documentation, tariff classification, and regulatory compliance.",
  },
  {
    icon: PackageCheck,
    title: "Nationalizations",
    description: "Complete nationalization process for goods entering Panama's customs territory.",
  },
  {
    icon: RefreshCw,
    title: "Re-exports & Transit",
    description: "Temporary imports, re-export procedures, and in-transit cargo management.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "FCL and LCL ocean freight from any port worldwide to Panama.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express and standard air cargo services with full customs handling.",
  },
  {
    icon: Thermometer,
    title: "Cold Chain",
    description: "Temperature-controlled logistics for perishables and pharmaceuticals.",
  },
  {
    icon: ShieldCheck,
    title: "Custody of Valuables",
    description: "Secure handling and storage for high-value and sensitive cargo.",
  },
  {
    icon: Truck,
    title: "Live Animals",
    description: "Specialized permits and logistics for live animal imports and exports.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative bg-white py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mb-4">Complete customs & logistics solutions.</h2>
          <p className="text-lg text-foreground">
            From documentation to delivery, we handle every step of your international trade operations.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                </div>

                <h3 className="mb-2 text-base font-semibold">{service.title}</h3>

                <p className="text-sm leading-relaxed text-foreground/70">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
