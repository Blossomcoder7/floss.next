"use client";
import { motion } from "motion/react";
import React from "react";

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        amount: 0.5,
        once: true,
      }}
      transition={{
        type: "spring",
        duration: 1.2,
        ease: "easeInOut",
        stiffness: 120,
        damping: 25,
      }}
      className="w-full h-fit"
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
