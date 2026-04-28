"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, PackageCheck, Boxes, Plane, FileCheck2, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Your address in China",
    description: "We assign you a verified forwarding address in Shenzhen. Use it on Alibaba, 1688, Temu — anywhere.",
  },
  {
    icon: PackageCheck,
    title: "Reception & verification",
    description: "Every package is received, weighed, photographed, and matched to your account.",
  },
  {
    icon: Boxes,
    title: "Consolidation",
    description: "Multiple suppliers? We combine your orders into one shipment to cut freight costs.",
  },
  {
    icon: Plane,
    title: "Air or sea freight",
    description: "Choose air (4–7 days) or sea (25–35 days) based on urgency and budget.",
  },
  {
    icon: FileCheck2,
    title: "Customs clearance",
    description: "Our licensed brokers handle declaration, duties, and ANA paperwork in Panama.",
  },
  {
    icon: Truck,
    title: "Door delivery",
    description: "Last-mile delivery anywhere in Panama.",
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
            Complete Follow-up
          </span>
          <h2 className="mb-4">Everything handled, start to finish.</h2>
          <p className="text-lg text-foreground">
            Six steps. One partner. From China to your door in Panama.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
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
            Let us handle it!
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
