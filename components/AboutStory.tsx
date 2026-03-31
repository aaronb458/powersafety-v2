"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formsConfig } from "@/lib/forms.config";

export function AboutStory() {
  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              Our Story
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full mb-8" />
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              {formsConfig.about.story}
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-black text-accent" style={{ fontFamily: "var(--font-heading)" }}>
                  50+
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">Years Combined Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-black text-accent" style={{ fontFamily: "var(--font-heading)" }}>
                  NorCal
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">Full Coverage Area</div>
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
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/images/services/services-hero.jpg"
                alt="Construction site with professional safety equipment and traffic control"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50 rounded-tl-lg z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50 rounded-br-lg z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
