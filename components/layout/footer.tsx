"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/shared/logo";
import { ExternalLink, MessageCircle } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "#", icon: ExternalLink },
  { label: "Instagram", href: "#", icon: ExternalLink },
  { label: "Facebook", href: "#", icon: ExternalLink },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tServices = useTranslations("services.items");

  const services = [
    { label: tServices("airFreight.title"), href: "#services" },
    { label: tServices("seaFreight.title"), href: "#services" },
    { label: tServices("customsClearance.title"), href: "#services" },
    { label: tServices("coldChain.title"), href: "#services" },
    { label: tServices("nationalizations.title"), href: "#services" },
    { label: tServices("custody.title"), href: "#services" },
  ];

  const company = [
    { label: t("about"), href: "/about" },
    { label: tNav("howItWorks"), href: "#how-it-works" },
    { label: tNav("routes"), href: "#routes" },
    { label: tNav("contact"), href: "#contact" },
    { label: tNav("getQuote"), href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="mb-6 text-sm">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("contact")}
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Customs Clearance, S.A.</p>
                <p>Panama City, Panama</p>
              </div>
              <div>
                <p>
                  <span className="text-white">Phone:</span> +507 XXXX-XXXX
                </p>
                <p>
                  <span className="text-white">WhatsApp:</span> +507 XXXX-XXXX
                </p>
                <p>
                  <span className="text-white">Email:</span>{" "}
                  hello@customsclearance.com
                </p>
              </div>
              <p className="text-white/50">Mon–Fri, 8:00–18:00 (GMT-5)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              © 2026 Customs Clearance, S.A. {t("rights")}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="hover:text-white">
                {t("terms")}
              </Link>
              <Link href="/privacy" className="hover:text-white">
                {t("privacy")}
              </Link>
              <span className="text-white/50">Built in Panama</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
