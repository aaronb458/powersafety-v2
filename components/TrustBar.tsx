"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";

export function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="py-6 bg-bg-alt dark:bg-[#111d30] border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {formsConfig.credentials.map((cred, i) => (
            <motion.div
              key={cred.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-gray-300"
            >
              <Shield className="w-4 h-4 text-accent" />
              <span className="uppercase tracking-wider text-xs" style={{ fontFamily: "var(--font-heading)" }}>
                {cred.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
