"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Package, Ship, Home, UserPlus, ChevronRight } from "lucide-react";

const stepIcons = [ShoppingCart, Package, Ship, Home, UserPlus];
const stepKeys = ["quote", "logistics", "arrival", "clearance", "distribution"] as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = stepKeys.map((key, index) => ({
    number: String(index + 1).padStart(2, "0"),
    icon: stepIcons[index],
    title: t(`steps.${key}.title`),
    description: t(`steps.${key}.description`),
  }));

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
            {t("badge")}
          </span>
          <h2 className="mb-4 text-white">{t("title")}</h2>
          <p className="text-lg text-white/70">
            {t("subtitle")}
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute left-[10%] right-[10%] top-[60px] hidden h-1 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full origin-left rounded-full bg-white/20"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15, type: "spring" }}
                  className="mx-auto mb-6"
                >
                  <div className="relative mx-auto h-16 w-16">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-primary shadow-lg shadow-black/20">
                      {step.number}
                    </div>
                    {/* Pulse Ring */}
                    <div
                      className="absolute inset-0 animate-ping rounded-2xl bg-white/30"
                      style={{ animationDuration: "3s", animationDelay: `${index * 0.5}s` }}
                    />
                  </div>
                </motion.div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{step.description}</p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="mx-auto mt-6 flex items-center justify-center lg:hidden">
                    <ChevronRight className="h-6 w-6 rotate-90 text-white/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {t("cta")}
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
