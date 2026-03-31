import type { Metadata } from "next";
import { formsConfig } from "@/lib/forms.config";
import { QuotePageContent } from "@/components/QuotePageContent";

export const metadata: Metadata = {
  title: formsConfig.seo.quote.title,
  description: formsConfig.seo.quote.description,
};

export default function QuotePage() {
  return <QuotePageContent />;
}
