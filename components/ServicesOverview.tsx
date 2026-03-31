"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileCheck, Construction, CalendarCheck, ClipboardCheck, Truck, Flame, Flag, Moon, Siren, Film, ArrowRight } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Construction,
  CalendarCheck,
  ClipboardCheck,
  Truck,
  Flame,
  Flag,
  Moon,
  Siren,
  Film,
};

const serviceImages: Record<string, string> = {
  "traffic-control": "/images/services/flagging-crew.jpg",
  "flagging-services": "/images/services/services-hero.jpg",
  "traffic-plans": "/images/services/traffic-plan.jpg",
  "permit-services": "/images/services/traffic-plan.jpg",
  "equipment-rentals": "/images/services/flagging-crew.jpg",
  "fire-watch": "/images/services/services-hero.jpg",
  "event-management": "/images/services/event-management.jpg",
  "night-work": "/images/services/services-hero.jpg",
  "emergency-traffic-control": "/images/services/flagging-crew.jpg",
  "film-production": "/images/services/event-management.jpg",
};

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Do"
          heading="Our Services"
          subtext="Traffic control, flagging, traffic control plans, permits, equipment rentals, fire watch, and special event traffic management. Power Safety Service handles it all."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {formsConfig.services.slice(0, 4).map((service, i) => {
            const Icon = iconMap[service.icon] || FileCheck;
            const imgSrc = serviceImages[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group block h-full card-industrial overflow-hidden"
                >
                  {/* Image */}
                  {imgSrc && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-accent-10 flex items-center justify-center mb-6 group-hover:bg-accent-20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3
                      className="text-lg font-bold text-primary dark:text-white mb-3 uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02] group"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            View All {formsConfig.services.length} Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
