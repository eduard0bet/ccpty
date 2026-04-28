"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Ship, Plane, Package, Truck, Clock, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackingStep {
  status: "completed" | "current" | "pending";
  label: string;
  location: string;
  date: string;
  icon: "package" | "ship" | "plane" | "customs" | "truck" | "check";
}

const iconMap = {
  package: Package,
  ship: Ship,
  plane: Plane,
  customs: Clock,
  truck: Truck,
  check: Check,
};

const exampleTimeline: TrackingStep[] = [
  { status: "completed", label: "Received at China warehouse", location: "Shenzhen", date: "Apr 12", icon: "package" },
  { status: "completed", label: "Consolidated & exported", location: "Yantian Port", date: "Apr 14", icon: "package" },
  { status: "current", label: "In transit (Sea)", location: "Pacific Ocean", date: "Apr 14 - Apr 28", icon: "ship" },
  { status: "pending", label: "Customs clearance", location: "Panama City", date: "Est. Apr 29", icon: "customs" },
  { status: "pending", label: "Out for delivery", location: "Panama", date: "Est. Apr 30", icon: "truck" },
  { status: "pending", label: "Delivered", location: "Your door", date: "Est. May 1", icon: "check" },
];

export function TrackingWidget() {
  const [trackingCode, setTrackingCode] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [timeline, setTimeline] = useState<TrackingStep[]>(exampleTimeline);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;

    setIsTracking(true);
    setHasSearched(true);
    try {
      const res = await fetch(`/api/track/${encodeURIComponent(trackingCode)}`);
      if (res.ok) {
        const data = await res.json();
        setTimeline(data.timeline || exampleTimeline);
      }
    } catch {
      // Keep example timeline on error
    } finally {
      setIsTracking(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/20"
    >
      {/* Header */}
      <div className="bg-primary px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/20">
            <Search className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Track your shipment</h3>
            <p className="text-sm text-white/70">Real-time updates</p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="border-b border-border p-4">
        <form onSubmit={handleTrack} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="e.g. CC-2026-04827"
              className="h-11 w-full rounded-md border border-border bg-muted/50 px-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            disabled={isTracking}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white transition-all hover:bg-primary/90 disabled:opacity-50"
          >
            {isTracking ? (
              <span className="animate-pulse">...</span>
            ) : (
              <>
                Track
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Timeline */}
      <div className="max-h-[360px] overflow-y-auto p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={hasSearched ? "searched" : "default"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-0"
          >
            {timeline.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isLast = index === timeline.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative flex gap-4"
                >
                  {!isLast && (
                    <div
                      className={cn(
                        "absolute left-[15px] top-8 h-[calc(100%-8px)] w-0.5",
                        step.status === "completed" ? "bg-primary/40" : "bg-border"
                      )}
                    />
                  )}

                  <div
                    className={cn(
                      "relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md transition-all",
                      step.status === "completed" && "bg-primary text-white",
                      step.status === "current" && "bg-primary/20 text-primary ring-2 ring-primary",
                      step.status === "pending" && "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="flex-1 pb-5">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        step.status === "completed" && "text-foreground",
                        step.status === "current" && "text-primary",
                        step.status === "pending" && "text-muted-foreground"
                      )}
                    >
                      {step.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {step.location} · {step.date}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-muted/30 px-4 py-3">
        <p className="text-center text-xs text-muted-foreground">
          Powered by Customs Clearance tracking system
        </p>
      </div>
    </motion.div>
  );
}
