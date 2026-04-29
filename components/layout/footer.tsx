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
    <footer className="bg-white text-foreground/70 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="dark" className="mb-4" />
            <p className="mb-6 text-sm">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("contact")}
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-foreground">Customs Clearance, S.A.</p>
                <p>Panama City, Panama</p>
              </div>
              <div>
                <p>
                  <span className="text-foreground">Phone:</span> +507 XXXX-XXXX
                </p>
                <p>
                  <span className="text-foreground">WhatsApp:</span> +507 XXXX-XXXX
                </p>
                <p>
                  <span className="text-foreground">Email:</span>{" "}
                  hello@customsclearance.com
                </p>
              </div>
              <p className="text-foreground/50">Mon–Fri, 8:00–18:00 (GMT-5)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              © 2026 Customs Clearance, S.A. {t("rights")}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="hover:text-primary">
                {t("terms")}
              </Link>
              <Link href="/privacy" className="hover:text-primary">
                {t("privacy")}
              </Link>
              <span className="text-foreground/50">Built in Panama</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
