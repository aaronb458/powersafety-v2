"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Clock, Shield } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function QuotePageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary dark:bg-[#0a1220] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/flagging-crew.jpg"
            alt="Construction workers reviewing plans on a job site"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-[#1b2d4a]/85 dark:bg-[#0a1220]/90" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 20px, #f26725 20px, #f26725 22px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Start Your Project"
            heading="Request a Quote"
            subtext="Tell us about your project and we will have a quote back to you within 24 hours. Complex projects may require a site visit."
            light
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
            <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick info bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          >
            {[
              { icon: Clock, text: "24-hour quote turnaround" },
              { icon: Phone, text: `Call: ${formsConfig.contact.phone}` },
              { icon: Shield, text: "ATSSA Certified & Insured" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 bg-accent-10 rounded-lg border border-accent-20"
              >
                <Icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-primary dark:text-white">{text}</span>
              </div>
            ))}
          </motion.div>

          <div className="card-industrial p-8 lg:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
