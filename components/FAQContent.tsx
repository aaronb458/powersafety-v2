"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { SectionHeader } from "@/components/ui/SectionHeader";

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-surface">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-hover transition-colors"
      >
        <h3
          className="text-lg font-bold text-primary dark:text-white uppercase tracking-wide pr-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-border mb-4" />
              <p className="text-text-muted leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary dark:bg-[#0a1220] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Traffic control services across Northern California"
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
            label="Got Questions?"
            heading="Frequently Asked Questions"
            subtext="Answers to common questions about our traffic control services, certifications, and how we work."
            light
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
            <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {formsConfig.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <h3
              className="text-2xl font-bold text-primary dark:text-white uppercase tracking-wide mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Still Have Questions?
            </h3>
            <p className="text-text-muted mb-6">
              Give us a call or send us a message. We are happy to help.
            </p>
            <a
              href={formsConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Phone className="w-4 h-4" />
              {formsConfig.contact.phone}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
