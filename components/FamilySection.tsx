"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formsConfig } from "@/lib/forms.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FamilySection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-alt dark:bg-[#111d30] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who We Are
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white uppercase tracking-wide mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {formsConfig.about.heroHeadline}
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8" />
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              {formsConfig.about.heroSubtext}
            </p>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              {formsConfig.about.story}
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8">
              <div>
                <div
                  className="text-3xl font-black text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  50+
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                  Years Combined Experience
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div
                  className="text-3xl font-black text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  2025
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                  Founded
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div
                  className="text-3xl font-black text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  NorCal
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                  Full Coverage
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/services/services-hero.jpg"
                alt="Power Safety traffic control crew on a California job site"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-3 border-l-3 border-[#2ea3f2]/60 rounded-tl-lg z-10" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-3 border-r-3 border-[#f26725]/60 rounded-br-lg z-10" />
            </div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2ea3f2]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2ea3f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-primary dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    ATSSA CERTIFIED
                  </div>
                  <div className="text-xs text-text-muted">Traffic Safety Professionals</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
