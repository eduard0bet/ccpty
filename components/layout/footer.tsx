import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { ExternalLink, MessageCircle } from "lucide-react";

const services = [
  { label: "Air Freight", href: "#services" },
  { label: "Sea Freight (LCL/FCL)", href: "#services" },
  { label: "Customs Clearance", href: "#services" },
  { label: "Door-to-door Delivery", href: "#services" },
  { label: "Consolidation", href: "#services" },
  { label: "Tracking", href: "#tracking" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Routes", href: "#routes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Get a quote", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "#", icon: ExternalLink },
  { label: "Instagram", href: "#", icon: ExternalLink },
  { label: "Facebook", href: "#", icon: ExternalLink },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="mb-6 text-sm">
              End-to-end logistics from China to Central America.
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
              Services
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
              Company
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
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Headquarters (Panama)</p>
                <p>Customs Clearance, S.A.</p>
                <p>Panama City, Panama</p>
                <p>RUC: [placeholder]</p>
              </div>
              <div>
                <p className="font-medium text-white">China Operations</p>
                <p>Shenzhen, Guangdong, China</p>
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
              © 2026 Customs Clearance, S.A. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <span className="text-white/50">Built in Panama</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
