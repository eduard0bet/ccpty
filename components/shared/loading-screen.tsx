"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  children: React.ReactNode;
}

const services = [
  "Nationalizations",
  "Re-exports & Transit",
  "Sea Freight",
  "Air Freight",
  "Cold Chain",
  "Custody of Valuables",
  "Live Animals",
];

let hasShownLoadingThisSession = false;

export function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    if (!hasShownLoadingThisSession) {
      hasShownLoadingThisSession = true;
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <>
            {/* Left curtain */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="fixed inset-y-0 left-0 z-100 w-1/2 bg-white"
            />

            {/* Right curtain */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="fixed inset-y-0 right-0 z-100 w-1/2 bg-white"
            />

            {/* Center content with logo */}
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-101 flex items-center justify-center bg-transparent pointer-events-none"
            >
              <div className="flex flex-col items-center gap-8">
                {/* Big logo with pulse animation */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/logo-big.svg"
                      alt="Customs Clearance PTY"
                      width={400}
                      height={140}
                      className="h-32 w-auto sm:h-40"
                      priority
                    />
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 -z-10 blur-3xl"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/logo-big.svg"
                      alt=""
                      width={400}
                      height={140}
                      className="h-32 w-auto sm:h-40 opacity-50"
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.div>

                {/* Rotating services text */}
                <div className="h-12 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentServiceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-xl font-bold text-primary/70 tracking-wide"
                    >
                      {services[currentServiceIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 0 : 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
