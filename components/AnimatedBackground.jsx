"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Circle 1 */}
      <motion.div
        animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-[320px] h-[320px]
        bg-black/20 rounded-full blur-3xl"
      />

      {/* Circle 2 */}
      <motion.div
        animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-32 w-[420px] h-[420px]
        bg-black/10 rounded-full blur-3xl"
      />

      {/* Circle 3 */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, 120, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-[260px] h-[260px]
        bg-black/15 rounded-full blur-3xl"
      />
    </div>
  );
}
