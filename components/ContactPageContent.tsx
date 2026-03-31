"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary dark:bg-[#0a1220] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Professional office with phone and communication equipment"
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Get in Touch"
            heading="Contact Us"
            subtext="Have a question or need a traffic control quote? We're here to help. Reach out and we'll get back to you fast."
            light
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
            <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2
                className="text-2xl font-bold text-primary dark:text-white uppercase tracking-wide mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Contact Information
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full mb-8" />

              <div className="space-y-6">
                <a
                  href={formsConfig.contact.phoneHref}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center shrink-0 group-hover:bg-accent-20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary dark:text-white">Phone</p>
                    <p className="text-text-muted group-hover:text-accent transition-colors">
                      {formsConfig.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${formsConfig.contact.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center shrink-0 group-hover:bg-accent-20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary dark:text-white">Email</p>
                    <p className="text-text-muted group-hover:text-accent transition-colors">
                      {formsConfig.contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary dark:text-white">Address</p>
                    <p className="text-text-muted">{formsConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary dark:text-white">Hours</p>
                    <p className="text-text-muted">{formsConfig.contact.hours}</p>
                    <p className="text-accent text-sm mt-1">{formsConfig.contact.emergencyNote}</p>
                  </div>
                </div>
              </div>

              {/* Trust image */}
              <div className="mt-8 relative h-48 rounded-xl overflow-hidden border border-border hidden lg:block">
                <Image
                  src="/images/services/services-hero.jpg"
                  alt="Traffic control safety equipment on a job site"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2d4a]/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                  ATSSA CERTIFIED | CALTRANS COMPLIANT
                </div>
              </div>
            </motion.div>

            {/* Form - Right */}
            <div className="lg:col-span-3">
              <div className="card-industrial p-8">
                <h2
                  className="text-xl font-bold text-primary dark:text-white uppercase tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {formsConfig.forms.contact.heading}
                </h2>
                <p className="text-text-muted text-sm mb-6">
                  {formsConfig.forms.contact.subtext}
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
