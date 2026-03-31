"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LocationsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary dark:bg-[#0a1220] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Northern California highway through rolling hills"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[#1b2d4a]/80 dark:bg-[#0a1220]/85" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 20px, #f26725 20px, #f26725 22px)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Coverage Area"
            heading={formsConfig.locations.headline}
            subtext={formsConfig.locations.subtext}
            light
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
            <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Map & Coverage */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-primary dark:text-white uppercase tracking-wide mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Northern California Coverage
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full mb-6" />
              <p className="text-text-muted leading-relaxed mb-6">
                {formsConfig.locations.description}
              </p>
              <p className="text-text-muted text-sm mb-8 italic">
                {formsConfig.locations.note}
              </p>

              {/* Region tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {formsConfig.locations.regions.map((region, i) => (
                  <motion.span
                    key={region}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-10 dark:bg-primary-20 rounded-lg text-sm font-medium text-primary dark:text-white border border-primary-20 dark:border-primary-30"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {region}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02] group"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={formsConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {formsConfig.contact.phone}
                </a>
              </div>
            </motion.div>

            {/* Map Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-lg">
                  <Image
                    src="/images/services/services-hero.jpg"
                    alt="Northern California landscape with rolling hills"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-[#1b2d4a]/60" />
                  {/* Grid dots overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Center marker */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                        <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center">
                          <MapPin className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <p
                        className="text-center mt-4 text-sm font-bold text-white uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Northern California
                      </p>
                      <p className="text-center text-xs text-gray-200">
                        Headquartered in Lodi, CA
                      </p>
                    </div>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-lg z-10" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-lg z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
