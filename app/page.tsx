import { Hero } from "@/components/Hero";
import { TrustBarMarquee } from "@/components/TrustBarMarquee";
import { ServicesOverview } from "@/components/ServicesOverview";
import { FamilySection } from "@/components/FamilySection";
import { Industries } from "@/components/Industries";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBarMarquee />
      <ServicesOverview />
      <FamilySection />
      <Industries />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
