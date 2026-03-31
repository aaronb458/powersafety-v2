"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_POWER_SAFETY_KEY";
const POSTHOG_HOST = "https://us.i.posthog.com";

let initialized = false;

function initPostHog() {
  if (initialized || typeof window === "undefined") return;
  if (POSTHOG_KEY === "phc_POWER_SAFETY_KEY") return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    persistence: "localStorage+cookie",
  });
  initialized = true;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();

    if (!initialized) return;

    // Scroll depth tracking
    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          posthog.capture("scroll_depth", {
            depth_percent: t,
            page: window.location.pathname,
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    // CTA click tracking
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a, button");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const text = link.textContent?.trim() || "";

      const isCTA =
        link.classList.contains("cta-glow") ||
        href === "/quote" ||
        href === "/contact" ||
        href === "/careers" ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        link.getAttribute("type") === "submit";

      if (isCTA) {
        posthog.capture("cta_click", {
          cta_text: text,
          cta_href: href,
          page: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <>{children}</>;
}

// Helper to track form submissions from any component
export function trackFormSubmission(formName: string, data?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture("form_submission", {
    form_name: formName,
    ...data,
  });
}
