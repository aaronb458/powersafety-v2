"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, ArrowRight, ChevronRight } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { ConstructionZone3D } from "@/components/ConstructionZone3D";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0d1b2e]">
      {/* Real photo underlay for depth */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          unoptimized
          priority
        />
      </div>

      {/* Road 3D visual as background */}
      <div className="absolute inset-0">
        <ConstructionZone3D />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2e]/60 via-[#0d1b2e]/30 to-transparent" />
        {/* Diagonal stripe pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 20px, #f26725 20px, #f26725 22px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 flex-1 flex items-center">
        <div className="max-w-3xl">
          {/* Credential badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ea3f2]/15 border border-[#2ea3f2]/30 text-white text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
              <Shield className="w-4 h-4 text-[#2ea3f2]" />
              {formsConfig.hero.badge}
            </span>
          </motion.div>

          {/* Main tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block">Traffic Control</span>
            <span className="block">Done Right.</span>
            <span className="block text-[#2ea3f2]">Every Lane.</span>
            <span className="block text-[#f26725]">Every Time.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
          >
            {formsConfig.hero.subtext}
          </motion.p>

          {/* Badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 flex items-center gap-2"
          >
            <Shield className="w-4 h-4 text-[#2ea3f2]" />
            <span className="text-sm text-gray-300 uppercase tracking-wider">
              ATSSA Certified | Licensed PE & TE Engineers | SBE Certified | Caltrans Compliant
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f26725] hover:bg-[#d9551a] text-white text-lg font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02] group"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg font-bold uppercase tracking-wide rounded-lg transition-all duration-300 group"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Services
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "50+", label: "Years Combined Experience" },
              { value: "24hr", label: "Plan Delivery" },
              { value: "24/7", label: "Emergency Line" },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div
                  className="text-2xl md:text-3xl font-black text-[#f26725]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom chevron pattern */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L720 0L1440 60H0Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>
    </section>
  );
}
