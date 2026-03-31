"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, DollarSign, Heart } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { CareersForm } from "@/components/forms/CareersForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CareersPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary dark:bg-[#0a1220] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/services-hero.jpg"
            alt="Construction workers on a job site with safety equipment"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[#1b2d4a]/82 dark:bg-[#0a1220]/88" />
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
            label="Join Our Crew"
            heading="Careers at Power Safety"
            subtext="We're always looking for experienced traffic control professionals who take pride in their work. ATSSA-certified positions available."
            light
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
            <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Shield, title: "ATSSA Certified", desc: "Industry standard" },
              { icon: DollarSign, title: "Competitive Pay", desc: "Top rates in NorCal" },
              { icon: Heart, title: "Full Benefits", desc: "Health & retirement" },
              { icon: Users, title: "Family Culture", desc: "Crew that has your back" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-industrial p-5 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3
                  className="text-sm font-bold text-primary dark:text-white uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-text-muted text-xs mt-1">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 lg:py-28 bg-bg-alt dark:bg-[#111d30]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-industrial p-8 lg:p-10">
            <h2
              className="text-xl font-bold text-primary dark:text-white uppercase tracking-wide mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {formsConfig.forms.careers.heading}
            </h2>
            <p className="text-text-muted text-sm mb-6">
              {formsConfig.forms.careers.subtext}
            </p>
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
