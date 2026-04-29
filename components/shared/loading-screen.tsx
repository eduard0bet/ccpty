"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  children: React.ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem("ccpty-loaded");

    if (hasSeenLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("ccpty-loaded", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading === null) {
    return null;
  }

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
              <div className="flex flex-col items-center gap-6">
                {/* Shield with pulse animation */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/shield.svg"
                      alt="Customs Clearance PTY"
                      width={120}
                      height={57}
                      className="h-20 w-auto"
                      priority
                    />
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 -z-10 blur-2xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/shield.svg"
                      alt=""
                      width={120}
                      height={57}
                      className="h-20 w-auto opacity-50"
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.div>

                {/* Loading bar */}
                <div className="h-1 w-32 overflow-hidden rounded-full bg-gray-200">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
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
        transition={{ duration: 0.5, delay: isLoading ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
