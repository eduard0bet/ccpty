"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Ship, Globe } from "lucide-react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
  MapArc,
} from "@/components/ui/map";

const origins = [
  { code: "USA", city: "Miami", lng: -80.1918, lat: 25.7617 },
  { code: "CHN", city: "Shanghai", lng: 121.4737, lat: 31.2304 },
  { code: "EUR", city: "Rotterdam", lng: 4.4777, lat: 51.9244 },
  { code: "SAM", city: "São Paulo", lng: -46.6333, lat: -23.5505 },
];

const panama = { code: "PTY", name: "Panama", city: "Panama City", lng: -79.5188, lat: 8.9824 };

const serviceKeys = ["imports", "exports", "reexports", "transit"] as const;

export function Routes() {
  const t = useTranslations("routes");

  const arcData = origins.map((origin, idx) => ({
    id: `arc-${idx}`,
    from: [origin.lng, origin.lat] as [number, number],
    to: [panama.lng, panama.lat] as [number, number],
  }));

  const originNames: Record<string, string> = {
    USA: t("origins.usa"),
    CHN: t("origins.china"),
    EUR: t("origins.europe"),
    SAM: t("origins.southAmerica"),
  };

  const services = serviceKeys.map((key) => ({
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
  }));

  return (
    <section id="routes" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {t("badge")}
          </span>
          <h2 className="mb-4">{t("title")}</h2>
          <p className="text-lg text-foreground">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-16 h-80 overflow-hidden rounded-lg border border-border/50 shadow-xl sm:h-96 md:h-[450px]"
        >
          <Map
            center={[-30, 10]}
            zoom={1.1}
            theme="light"
            scrollZoom={false}
            dragPan={false}
            doubleClickZoom={false}
            touchZoomRotate={false}
          >
            <MapArc
              data={arcData}
              curvature={0.25}
              paint={{
                "line-color": "#041532",
                "line-width": 2,
                "line-opacity": 0.5,
              }}
              hoverPaint={{
                "line-color": "#041532",
                "line-width": 3,
                "line-opacity": 1,
              }}
              interactive={false}
            />

            {origins.map((origin) => (
              <MapMarker
                key={origin.code}
                longitude={origin.lng}
                latitude={origin.lat}
              >
                <MarkerContent>
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-foreground shadow-lg">
                    <Globe className="h-3 w-3 text-white" />
                  </div>
                </MarkerContent>
                <MarkerTooltip>
                  <div className="text-center">
                    <p className="font-semibold">{originNames[origin.code]}</p>
                    <p className="text-xs opacity-80">{origin.city}</p>
                  </div>
                </MarkerTooltip>
              </MapMarker>
            ))}

            <MapMarker
              longitude={panama.lng}
              latitude={panama.lat}
            >
              <MarkerContent>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg">
                  <Ship className="h-4 w-4 text-white" />
                </div>
              </MarkerContent>
              <MarkerTooltip>
                <div className="text-center">
                  <p className="font-semibold">{panama.name}</p>
                  <p className="text-xs opacity-80">{panama.city}</p>
                </div>
              </MarkerTooltip>
            </MapMarker>
          </Map>

          <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-md bg-white/90 px-4 py-2 text-xs backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground">
                <Globe className="h-2.5 w-2.5 text-white" />
              </div>
              <span>{t("legend.origin")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                <Ship className="h-2.5 w-2.5 text-white" />
              </div>
              <span>{t("legend.panama")}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-border/50 bg-white p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold text-primary">{service.title}</h3>
              <p className="text-sm text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
