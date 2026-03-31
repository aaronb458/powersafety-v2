import type { Metadata } from "next";
import { formsConfig } from "@/lib/forms.config";
import { LocationsContent } from "@/components/LocationsContent";
import { CTABanner } from "@/components/CTABanner";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: formsConfig.seo.locations.title,
  description: formsConfig.seo.locations.description,
};

export default function LocationsPage() {
  return (
    <>
      <LocationsContent />
      <TrustBar />
      <CTABanner />
    </>
  );
}
