"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { formsConfig } from "@/lib/forms.config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b2d4a] dark:bg-[#0a1220] text-white">
      {/* Safety stripe divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/images/logo/power-safety-logo.png"
                alt="Power Safety"
                width={140}
                height={42}
                className="h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105"
                unoptimized
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {formsConfig.brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-accent mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {formsConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  className="text-accent hover:text-white text-sm font-semibold transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-accent mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={formsConfig.contact.phoneHref}
                  className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {formsConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${formsConfig.contact.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {formsConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {formsConfig.contact.address}
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-accent mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Certified & Licensed
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { src: "/images/certifications/atssa.png", alt: "ATSSA Certified" },
                { src: "/images/certifications/sbe.png", alt: "SBE Certified" },
                { src: "/images/certifications/winner.png", alt: "Award Winner" },
              ].map((badge) => (
                <div key={badge.alt} className="w-14 h-14 rounded-lg bg-white/10 p-1.5 flex items-center justify-center">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {formsConfig.brand.companyName}. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs">
            {formsConfig.contact.hours} | {formsConfig.contact.emergencyNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
