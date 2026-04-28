"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Ship,
  Plane,
  Package,
  Truck,
  Clock,
  Check,
  Box,
  X,
  MapPin,
  Shield,
  Zap,
} from "lucide-react";

const trustBadges = ["Alibaba", "1688", "Temu", "Shein", "AliExpress"];

const features = [
  { icon: MapPin, text: "Your address in China" },
  { icon: Shield, text: "Licensed customs broker" },
  { icon: Zap, text: "Air 5-7 days / Sea 25-35 days" },
];

const DEMO_TRACKING = {
  trackingNumber: "CC-2026-04827",
  status: "in_transit",
  estimatedDelivery: "May 1, 2026",
  origin: "Shenzhen, China",
  destination: "Panama City, Panama",
  weight: "12.5 kg",
  steps: [
    { id: 1, status: "completed", title: "Received at China warehouse", location: "Shenzhen", date: "Apr 12", time: "09:45 AM", icon: Box },
    { id: 2, status: "completed", title: "Consolidated & exported", location: "Yantian Port", date: "Apr 14", time: "02:30 PM", icon: Package },
    { id: 3, status: "current", title: "In transit (Sea)", location: "Pacific Ocean", date: "Apr 14", time: "08:15 PM", icon: Ship },
    { id: 4, status: "pending", title: "Customs clearance", location: "Panama City", date: "Est. Apr 29", time: "", icon: Clock },
    { id: 5, status: "pending", title: "Out for delivery", location: "Panama", date: "Est. Apr 30", time: "", icon: Truck },
    { id: 6, status: "pending", title: "Delivered", location: "Your door", date: "Est. May 1", time: "", icon: Check },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

type TabType = "cta" | "tracking";

export function Hero() {
  const [activeTab, setActiveTab] = useState<TabType>("cta");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!trackingNumber.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClose = () => {
    setShowResult(false);
    setTrackingNumber("");
  };

  const handleDemo = () => {
    setTrackingNumber("CC-2026-04827");
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Floating Animated Elements - Hidden on mobile/tablet */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] hidden xl:block"
        >
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/10">
            <Plane className="h-10 w-10 text-white/70" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[5%] hidden xl:block"
        >
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/10">
            <Ship className="h-10 w-10 text-white/70" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] right-[3%] hidden xl:block"
        >
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/10">
            <Package className="h-8 w-8 text-white/70" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[15%] hidden xl:block"
        >
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/10">
            <Truck className="h-8 w-8 text-white/70" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="main"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="flex min-h-screen flex-col items-center justify-center py-20 pt-24 md:pt-28"
            >
              <div className="mx-auto w-full max-w-4xl text-center">
                {/* Badge */}
                <motion.div
                  variants={itemVariants}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2"
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-white/90">China → Panama | Full service</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  variants={itemVariants}
                  className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  Import from China.
                  <br />
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    We handle the rest.
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={itemVariants}
                  className="mx-auto mb-8 max-w-xl text-base text-white/70 sm:text-lg md:mb-10 md:text-xl"
                >
                  From your supplier&apos;s door in China to your warehouse in Panama. Consolidation, freight, customs clearance, and delivery.
                </motion.p>

                {/* Tabs */}
                <motion.div variants={itemVariants} className="mx-auto mb-6 w-full max-w-md">
                  <div className="inline-flex w-full rounded-xl border border-white/20 bg-white/10 p-1 backdrop-blur-sm sm:w-auto">
                    <button
                      onClick={() => setActiveTab("cta")}
                      className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all sm:flex-none sm:px-6 ${
                        activeTab === "cta"
                          ? "bg-white text-primary shadow-lg"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Get Started
                    </button>
                    <button
                      onClick={() => setActiveTab("tracking")}
                      className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all sm:flex-none sm:px-6 ${
                        activeTab === "tracking"
                          ? "bg-white text-primary shadow-lg"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Search className="h-4 w-4" />
                        Track Cargo
                      </span>
                    </button>
                  </div>
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "cta" ? (
                    <motion.div
                      key="cta-content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Features */}
                      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
                        {features.map((feature) => (
                          <div
                            key={feature.text}
                            className="flex items-center gap-2 text-sm text-white/80"
                          >
                            <feature.icon className="h-4 w-4 text-white/60" />
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <Link
                          href="#contact"
                          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-primary shadow-lg shadow-black/20 transition-all hover:bg-white/90 hover:shadow-xl sm:w-auto sm:text-lg"
                        >
                          Let us handle it!
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link
                          href="#services"
                          className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-8 text-base font-medium text-white transition-all hover:bg-white/10 sm:w-auto"
                        >
                          See how it works
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="tracking-content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mx-auto w-full max-w-xl"
                    >
                      {/* Search Box */}
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                          <input
                            type="text"
                            placeholder="e.g. CC-2026-04827"
                            value={trackingNumber}
                            onChange={(e) => setTrackingNumber(e.target.value)}
                            onKeyDown={handleKeyPress}
                            className="h-14 w-full rounded-xl border border-white/20 bg-white/10 pl-12 pr-4 font-mono text-base text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:text-lg"
                          />
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleSearch}
                          disabled={isSearching}
                          className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 text-base font-semibold text-primary shadow-lg shadow-black/20 transition-all hover:bg-white/90 disabled:opacity-70 sm:px-8 sm:text-lg"
                        >
                          {isSearching ? (
                            <>
                              <motion.div
                                className="h-5 w-5 rounded-full border-2 border-primary/30 border-t-primary"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              <span className="hidden sm:inline">Searching...</span>
                            </>
                          ) : (
                            <>
                              Track
                              <ArrowRight className="h-5 w-5" />
                            </>
                          )}
                        </motion.button>
                      </div>

                      {/* Demo link */}
                      <button
                        onClick={handleDemo}
                        className="mt-4 text-sm text-white/50 transition-colors hover:text-white"
                      >
                        No tracking number? <span className="underline">Try a demo</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Trust badges */}
                <motion.div
                  variants={itemVariants}
                  className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:mt-16 sm:gap-3"
                >
                  <span className="w-full text-xs text-white/50 sm:w-auto sm:text-sm">Trusted by importers from</span>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {trustBadges.map((badge, index) => (
                      <motion.span
                        key={badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white/80 backdrop-blur-sm sm:rounded-lg sm:px-3 sm:py-1.5"
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* ===== RESULTS VIEW ===== */
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen pb-12 pt-24 md:pt-28"
              id="tracking"
            >
              {/* Sticky Header */}
              <div className="sticky top-16 z-30 -mx-4 mb-4 border-b border-white/10 bg-transparent px-4 py-3 backdrop-blur-sm rounded-2xl sm:top-20 sm:-mx-6 sm:mb-6 sm:px-6 sm:py-4">
                <div className="mx-auto flex max-w-4xl items-center gap-3 sm:gap-4">
                  <div className="flex flex-1 items-center gap-2 sm:gap-3">
                    <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-white sm:flex sm:h-12 sm:w-12 sm:rounded-xl">
                      <Package className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-white/60 sm:text-xs">Tracking</p>
                      <p className="truncate font-mono text-xs font-bold text-white sm:text-base">
                        {DEMO_TRACKING.trackingNumber}
                      </p>
                    </div>
                  </div>

                  <div className="hidden max-w-xs flex-1 md:block">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                      <input
                        type="text"
                        placeholder="Search another..."
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="h-10 w-full rounded-lg border border-white/20 bg-white/10 pl-9 pr-4 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="shrink-0 rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Results Content */}
              <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
                {/* Package Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:rounded-xl sm:p-5"
                >
                  <div className="grid grid-cols-2 gap-4 text-sm sm:flex sm:flex-wrap sm:gap-6">
                    <div>
                      <p className="mb-0.5 text-[10px] text-white/50 sm:text-xs">Origin</p>
                      <p className="text-xs font-medium text-white sm:text-sm">{DEMO_TRACKING.origin}</p>
                    </div>
                    <div>
                      <p className="mb-0.5 text-[10px] text-white/50 sm:text-xs">Destination</p>
                      <p className="text-xs font-medium text-white sm:text-sm">{DEMO_TRACKING.destination}</p>
                    </div>
                    <div>
                      <p className="mb-0.5 text-[10px] text-white/50 sm:text-xs">Weight</p>
                      <p className="text-xs font-medium text-white sm:text-sm">{DEMO_TRACKING.weight}</p>
                    </div>
                    <div className="sm:ml-auto">
                      <p className="mb-0.5 text-[10px] text-white/50 sm:text-xs">Estimated Delivery</p>
                      <p className="text-xs font-bold text-white sm:text-sm">{DEMO_TRACKING.estimatedDelivery}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:rounded-xl sm:p-5"
                >
                  <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold text-white sm:mb-4 sm:text-sm">
                    <Clock className="h-3.5 w-3.5 text-white/70 sm:h-4 sm:w-4" />
                    Tracking History
                    <span className="text-[10px] font-normal text-white/50 sm:text-xs">
                      ({DEMO_TRACKING.steps.length} events)
                    </span>
                  </h3>

                  <div className="space-y-0">
                    {DEMO_TRACKING.steps.map((step, index) => {
                      const isLast = index === DEMO_TRACKING.steps.length - 1;
                      const IconComponent = step.icon;

                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="relative flex gap-2.5 pb-3 last:pb-0 sm:gap-3 sm:pb-4"
                        >
                          {!isLast && (
                            <div
                              className={`absolute left-[14px] top-8 h-[calc(100%-20px)] w-0.5 sm:left-[18px] sm:top-10 sm:h-[calc(100%-24px)] ${
                                step.status === "completed" ? "bg-white/50" : "bg-white/20"
                              }`}
                            />
                          )}

                          <div className="relative z-10 shrink-0">
                            <div
                              className={`flex h-7 w-7 items-center justify-center rounded-full sm:h-9 sm:w-9 ${
                                step.status === "completed"
                                  ? "bg-white"
                                  : step.status === "current"
                                  ? "border-2 border-white bg-white/20"
                                  : "border border-white/30 bg-white/10"
                              }`}
                            >
                              <IconComponent
                                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                  step.status === "completed"
                                    ? "text-primary"
                                    : step.status === "current"
                                    ? "text-white"
                                    : "text-white/50"
                                }`}
                              />
                            </div>
                            {step.status === "current" && (
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-white"
                                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                          </div>

                          <div className="flex-1 pt-0.5 sm:pt-1">
                            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                <h4
                                  className={`text-xs font-medium sm:text-sm ${
                                    step.status === "pending" ? "text-white/50" : "text-white"
                                  }`}
                                >
                                  {step.title}
                                </h4>
                                {step.status === "current" && (
                                  <span className="rounded border border-white/30 bg-white/10 px-1 py-0.5 text-[8px] text-white sm:px-1.5 sm:text-[10px]">
                                    Current
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-white/50 sm:text-xs">
                                {step.date} {step.time && `• ${step.time}`}
                              </div>
                            </div>
                            <p className="mt-0.5 text-[10px] text-white/40 sm:text-xs">{step.location}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Mobile: New search button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="md:hidden"
                >
                  <button
                    onClick={handleClose}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <Search className="h-4 w-4" />
                    Search another shipment
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
