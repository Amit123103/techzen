"use client";

import { motion } from "framer-motion";

export function AnimatedLine() {
  return (
    <div className="w-full h-px relative bg-[var(--color-border)] overflow-hidden">
      <motion.div 
        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"
        animate={{
          x: ["-100%", "300%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
        animate={{
          x: ["300%", "-100%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5
        }}
      />
    </div>
  );
}
