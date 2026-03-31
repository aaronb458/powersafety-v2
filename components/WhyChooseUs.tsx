"use client";

import { motion } from "framer-motion";
import { formsConfig } from "@/lib/forms.config";

export function WhyChooseUs() {
  const items = formsConfig.whyChooseUs;

  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned header with accent line */}
        <div className="max-w-2xl mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-accent"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Difference
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white uppercase tracking-wide mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Power Safety
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-6" />
          <p className="text-text-muted text-lg leading-relaxed">
            When the project is too important to risk, you call the team
            that&apos;s done this a thousand times.
          </p>
        </div>

        {/* Asymmetric 2-column layout: large feature left, stacked list right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Featured item - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-[#0d1b2e] rounded-xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Diagonal stripe accent */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 12px, #f26725 12px, #f26725 14px)",
              }}
            />
            <div className="relative z-10">
              <div className="text-[#f26725] text-6xl font-black mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                50+
              </div>
              <h3
                className="text-xl font-bold text-white uppercase tracking-wide mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {items[0].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {items[0].description}
              </p>
            </div>
          </motion.div>

          {/* Remaining items - stacked with dividers */}
          <div className="lg:col-span-3 space-y-0 divide-y divide-border">
            {items.slice(1).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-6 first:pt-0 last:pb-0 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-accent font-black text-lg mt-0.5 shrink-0" style={{ fontFamily: "var(--font-heading)" }}>
                    0{i + 2}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-bold text-primary dark:text-white uppercase tracking-wide mb-1 group-hover:text-accent transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
