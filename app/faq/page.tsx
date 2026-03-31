import type { Metadata } from "next";
import { formsConfig } from "@/lib/forms.config";
import { FAQContent } from "@/components/FAQContent";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: formsConfig.seo.faq.title,
  description: formsConfig.seo.faq.description,
};

export default function FAQPage() {
  return (
    <>
      <FAQContent />
      <CTABanner />
    </>
  );
}
