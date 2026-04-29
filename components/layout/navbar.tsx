"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";
import { setLocale } from "@/app/actions/locale";
import { type Locale, localeNames } from "@/i18n/config";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#routes", label: t("routes") },
    { href: "#contact", label: t("contact") },
  ];

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "en" ? "es" : "en";
    startTransition(async () => {
      await setLocale(newLocale);
      window.location.reload();
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "top-0 bg-white/95 backdrop-blur-sm shadow-sm pt-[env(safe-area-inset-top)]"
          : "top-0 bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex-shrink-0">
            <Logo variant="dark" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleLanguage}
              disabled={isPending}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-50"
            >
              <Globe className="h-4 w-4" />
              {t("language")}
            </button>

            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("getQuote")}
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 sm:w-[350px]">
              <div className="flex h-full flex-col">
                <div className="border-b border-border px-6 py-5">
                  <Logo variant="dark" />
                </div>

                <nav className="flex-1 px-4 py-4">
                  <ul className="space-y-1">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t border-border p-4 space-y-3">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {t("getQuote")}
                  </Link>

                  <button
                    onClick={toggleLanguage}
                    disabled={isPending}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-50"
                  >
                    <Globe className="h-4 w-4" />
                    {localeNames[locale]}
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
