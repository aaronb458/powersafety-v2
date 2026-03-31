"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formsConfig } from "@/lib/forms.config";

const credBadges: Record<string, string> = {
  "ATSSA": "/images/certifications/atssa.png",
  "SBE": "/images/certifications/sbe.png",
};

export function TrustBarMarquee() {
  const items = formsConfig.credentials;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-5 bg-[#1b2d4a] border-y border-[#2ea3f2]/20 overflow-hidden"
    >
      <div
        className="flex overflow-hidden [--gap:2rem] [gap:var(--gap)] [--duration:30s]"
      >
        {Array(4)
          .fill(0)
          .map((_, repeatIdx) => (
            <div
              key={repeatIdx}
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee"
            >
              {items.map((cred) => {
                const badgeSrc = credBadges[cred.name];
                return (
                  <div
                    key={`${repeatIdx}-${cred.name}`}
                    className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm whitespace-nowrap"
                  >
                    {badgeSrc ? (
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                        <Image
                          src={badgeSrc}
                          alt={cred.label}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#2ea3f2]/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#2ea3f2]">{cred.name.slice(0, 2)}</span>
                      </div>
                    )}
                    <span
                      className="text-sm font-bold text-white/90 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cred.label}
                    </span>
                  </div>
                );
              })}
              {/* Separator dot between sets */}
              <div className="flex items-center px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f26725]" />
              </div>
            </div>
          ))}
      </div>
    </motion.section>
  );
}
