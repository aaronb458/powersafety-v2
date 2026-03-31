"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  label,
  heading,
  subtext,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${
            light ? "text-accent" : "text-accent"
          }`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide ${
          light ? "text-white" : "text-primary dark:text-white"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-text-muted"
          }`}
        >
          {subtext}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 bg-accent rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
