"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";

export function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Road construction site at sunset"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#1b2d4a]/90 dark:bg-[#0a1220]/92" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 20px, #f26725 20px, #f26725 22px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2ea3f2]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {formsConfig.ctaBanner.headline}
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            {formsConfig.ctaBanner.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={formsConfig.ctaBanner.ctaHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white text-lg font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02] group"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {formsConfig.ctaBanner.cta}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={formsConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 text-gray-200 hover:text-accent transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              {formsConfig.ctaBanner.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
