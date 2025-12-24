"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [showGibran, setShowGibran] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowGibran(true), 1500); // switch to Gibran
    const timer2 = setTimeout(() => onComplete(), 3000); // hide intro

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <AnimatePresence>
        {!showGibran ? (
          <motion.h1
            key="muhammad"
            className="text-5xl md:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 1 }}
          >
            Muhammad
          </motion.h1>
        ) : (
          <motion.h1
            key="gibran"
            className="text-5xl md:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 1 }}
          >
            Gibran
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
