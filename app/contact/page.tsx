import type { Metadata } from "next";
import { formsConfig } from "@/lib/forms.config";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: formsConfig.seo.contact.title,
  description: formsConfig.seo.contact.description,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
