"use client";

import { motion } from "framer-motion";
import { Shield, Award } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-bg-alt dark:bg-[#111d30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Credentials"
          heading="Certified & Licensed"
          subtext="Every certification we hold is proof that we meet the highest standards in traffic control safety and compliance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {formsConfig.about.certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-industrial p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary dark:bg-primary-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                {i % 2 === 0 ? (
                  <Shield className="w-7 h-7 text-white dark:text-accent group-hover:text-white" />
                ) : (
                  <Award className="w-7 h-7 text-white dark:text-accent group-hover:text-white" />
                )}
              </div>
              <h3
                className="text-sm font-bold text-primary dark:text-white uppercase tracking-wider mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {cert.name}
              </h3>
              <p className="text-text-muted text-xs">
                {cert.fullName}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
