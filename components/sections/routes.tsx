"use client";

import { motion } from "framer-motion";
import { Plane, Ship } from "lucide-react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
  MapArc,
} from "@/components/ui/map";

const origins = [
  { code: "SZX", name: "Shenzhen", types: "Air & Sea", lng: 114.0579, lat: 22.5431 },
  { code: "CAN", name: "Guangzhou", types: "Air", lng: 113.2644, lat: 23.1291 },
  { code: "YTN", name: "Yantian", types: "Sea (FCL/LCL)", lng: 114.2858, lat: 22.5647 },
  { code: "PVG", name: "Shanghai", types: "Air & Sea", lng: 121.4737, lat: 31.2304 },
  { code: "NGB", name: "Ningbo", types: "Sea", lng: 121.5440, lat: 29.8683 },
  { code: "YIW", name: "Yiwu", types: "Consolidation hub", lng: 120.0753, lat: 29.3065 },
];

const destinations = [
  { code: "PTY", name: "Panama City", ports: "Tocumen Airport (PTY)", lng: -79.5188, lat: 8.9824 },
  { code: "CLN", name: "Colón", ports: "MIT, Manzanillo, Cristóbal", lng: -79.8766, lat: 9.3547 },
  { code: "BLB", name: "Balboa", ports: "Port of Balboa, PSA Panama", lng: -79.5656, lat: 8.9550 },
];

const transitTimes = [
  { route: "Shenzhen → Panama City", air: "5–7 days", seaLcl: "28–35 days", seaFcl: "25–30 days" },
  { route: "Shanghai → Panama City", air: "6–8 days", seaLcl: "30–35 days", seaFcl: "26–32 days" },
  { route: "Ningbo → Colón", air: "—", seaLcl: "28–35 days", seaFcl: "25–30 days" },
  { route: "Yiwu → Panama City", air: "7–9 days", seaLcl: "32–38 days", seaFcl: "28–34 days" },
];

const arcData = origins.map((origin, idx) => ({
  id: `arc-${idx}`,
  from: [origin.lng, origin.lat] as [number, number],
  to: [-79.5188, 8.9824] as [number, number],
}));

export function Routes() {
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
            Global Reach
          </span>
          <h2 className="mb-4">Routes we operate.</h2>
          <p className="text-lg text-foreground">
            Shipping from China&apos;s main hubs directly to Panama&apos;s ports and airports.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-16 h-[400px] overflow-hidden rounded-lg border border-border/50 shadow-xl md:h-[500px]"
        >
          <Map
            center={[20, 15]}
            zoom={1.3}
            theme="light"
            scrollZoom={false}
            dragPan={false}
            doubleClickZoom={false}
            touchZoomRotate={false}
          >
            <MapArc
              data={arcData}
              curvature={0.3}
              paint={{
                "line-color": "#041532",
                "line-width": 2,
                "line-opacity": 0.6,
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
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg">
                    <Ship className="h-3 w-3 text-white" />
                  </div>
                </MarkerContent>
                <MarkerTooltip>
                  <div className="text-center">
                    <p className="font-semibold">{origin.name}</p>
                    <p className="text-xs opacity-80">{origin.types}</p>
                  </div>
                </MarkerTooltip>
              </MapMarker>
            ))}

            {destinations.map((dest) => (
              <MapMarker
                key={dest.code}
                longitude={dest.lng}
                latitude={dest.lat}
              >
                <MarkerContent>
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg">
                    <Plane className="h-4 w-4 text-white" />
                  </div>
                </MarkerContent>
                <MarkerTooltip>
                  <div className="text-center">
                    <p className="font-semibold">{dest.name}</p>
                    <p className="text-xs opacity-80">{dest.ports}</p>
                  </div>
                </MarkerTooltip>
              </MapMarker>
            ))}
          </Map>

          <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-md bg-white/90 px-4 py-2 text-xs backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                <Ship className="h-2.5 w-2.5 text-white" />
              </div>
              <span>Origin (China)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                <Plane className="h-2.5 w-2.5 text-white" />
              </div>
              <span>Destination (Panama)</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-lg font-semibold">Origin (China)</h3>
            <div className="space-y-3">
              {origins.map((origin) => (
                <div
                  key={origin.code}
                  className="flex items-center justify-between rounded-md border border-border/50 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <div>
                    <span className="font-medium text-primary">{origin.name}</span>
                    <span className="ml-2 text-sm text-foreground/60">({origin.code})</span>
                  </div>
                  <span className="text-sm text-foreground/70">{origin.types}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-semibold">Destination (Panama)</h3>
            <div className="space-y-3">
              {destinations.map((dest) => (
                <div
                  key={dest.code}
                  className="flex items-center justify-between rounded-md border border-border/50 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇵🇦</span>
                    <span className="font-medium text-primary">{dest.name}</span>
                  </div>
                  <span className="text-right text-sm text-foreground/70">{dest.ports}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center text-lg font-semibold">Transit Times</h3>
          <div className="overflow-x-auto rounded-md border border-border/50">
            <table className="w-full min-w-[500px] text-sm">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-primary">Route</th>
                  <th className="px-4 py-3 text-center font-semibold text-primary">Air</th>
                  <th className="px-4 py-3 text-center font-semibold text-primary">Sea (LCL)</th>
                  <th className="px-4 py-3 text-center font-semibold text-primary">Sea (FCL)</th>
                </tr>
              </thead>
              <tbody>
                {transitTimes.map((row, idx) => (
                  <tr
                    key={row.route}
                    className={idx < transitTimes.length - 1 ? "border-b border-border/50" : ""}
                  >
                    <td className="px-4 py-3 font-medium">{row.route}</td>
                    <td className="px-4 py-3 text-center text-foreground/80">{row.air}</td>
                    <td className="px-4 py-3 text-center text-foreground/80">{row.seaLcl}</td>
                    <td className="px-4 py-3 text-center text-foreground/80">{row.seaFcl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

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
            Let us handle it!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
