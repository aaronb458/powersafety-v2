import type { Metadata } from "next";
import { formsConfig } from "@/lib/forms.config";
import { CareersPageContent } from "@/components/CareersPageContent";

export const metadata: Metadata = {
  title: formsConfig.seo.careers.title,
  description: formsConfig.seo.careers.description,
};

export default function CareersPage() {
  return <CareersPageContent />;
}
