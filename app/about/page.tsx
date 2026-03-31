import type { Metadata } from "next";
import { formsConfig } from "@/lib/forms.config";
import { AboutHero } from "@/components/AboutHero";
import { Values } from "@/components/Values";
import { Certifications } from "@/components/Certifications";
import { CTABanner } from "@/components/CTABanner";
import { AboutStory } from "@/components/AboutStory";

export const metadata: Metadata = {
  title: formsConfig.seo.about.title,
  description: formsConfig.seo.about.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <Values />
      <Certifications />
      <CTABanner />
    </>
  );
}
