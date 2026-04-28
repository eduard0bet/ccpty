"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, DollarSign, Eye, MessageCircle, CheckCircle } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Single point of contact",
    description: "No bouncing between brokers, freight forwarders, and couriers.",
    features: ["Dedicated account manager", "WhatsApp support", "24/7 tracking"],
  },
  {
    icon: DollarSign,
    title: "Transparent pricing",
    description: "Per-CBM and per-kg rates published upfront. No surprise duties.",
    features: ["No hidden fees", "Duty estimates upfront", "Competitive rates"],
  },
  {
    icon: Eye,
    title: "Real-time visibility",
    description: "One tracking number covers China pickup → your door.",
    features: ["Live tracking", "Photo verification", "SMS/Email alerts"],
  },
  {
    icon: MessageCircle,
    title: "Local support",
    description: "Bilingual team (English/Spanish) operating in Panama time zone.",
    features: ["Panama-based team", "Same-day response", "En español"],
  },
];

export function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
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
            Why Choose Us
          </span>
          <h2 className="mb-4">Why importers choose us.</h2>
          <p className="text-lg text-foreground/80">
            The complete logistics partner for China to Panama imports.
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring" }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30"
                >
                  <item.icon className="h-7 w-7 text-white" />
                </motion.div>

                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-foreground/70">{item.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-foreground/60"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
