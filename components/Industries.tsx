"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat, Users, Zap, Building2 } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  HardHat,
  Users,
  Zap,
  Building2,
};

const industryImages: Record<string, string> = {
  "Construction Companies": "/images/services/flagging-crew.jpg",
  "Event Organizers": "/images/services/event-management.jpg",
  "Public & Private Utilities": "/images/services/services-hero.jpg",
  "Municipalities": "/images/services/traffic-plan.jpg",
};

export function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-bg-alt dark:bg-[#111d30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Who We Serve"
          heading="Industries"
          subtext="From construction sites to city streets, Power Safety provides traffic control for the industries that keep California running."
          centered={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formsConfig.industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || HardHat;
            const imgSrc = industryImages[industry.title];
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-industrial overflow-hidden group"
              >
                {/* Image */}
                {imgSrc && (
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-[#2ea3f2]/80 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
                <div className="p-6 text-center">
                  <h3
                    className="text-lg font-bold text-primary dark:text-white mb-3 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
