"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  icon: React.ReactNode;
  reversed?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function ServiceDetail({
  id,
  title,
  description,
  features,
  cta,
  icon,
  reversed = false,
  imageSrc,
  imageAlt,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${reversed ? "bg-bg-alt dark:bg-[#111d30]" : "bg-bg"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={reversed ? "lg:order-2 lg:direction-ltr" : ""}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center">
                {icon}
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-white uppercase tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed mb-8">{description}</p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-muted text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02] group"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={reversed ? "lg:order-1 lg:direction-ltr" : ""}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-lg">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-primary-10 dark:bg-primary-20" />
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, transparent, transparent 12px, #f26725 12px, #f26725 14px)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <div className="scale-[2.5] text-accent/40">{icon}</div>
                    </div>
                  </div>
                </>
              )}
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-lg z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-lg z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
