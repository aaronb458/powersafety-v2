"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Star } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = [ShieldCheck, HeartHandshake, Star];

export function Values() {
  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Foundation"
          heading="What Drives Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formsConfig.about.values.map((value, i) => {
            const Icon = icons[i] || ShieldCheck;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card-industrial p-8 text-center group relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="w-16 h-16 rounded-2xl bg-accent-10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3
                  className="text-xl font-bold text-primary dark:text-white mb-3 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
