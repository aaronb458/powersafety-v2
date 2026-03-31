"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formsConfig } from "@/lib/forms.config";

export function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/services/services-hero.jpg"
          alt="Professional safety team working together"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-[#1b2d4a]/85 dark:bg-[#0a1220]/90" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 20px, #f26725 20px, #f26725 22px)",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {formsConfig.about.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {formsConfig.about.heroSubtext}
          </p>
        </motion.div>
      </div>

      {/* Bottom chevron */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
          <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
