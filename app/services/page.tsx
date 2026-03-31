import type { Metadata } from "next";
import Image from "next/image";
import { FileCheck, Construction, CalendarCheck, ClipboardCheck, Truck, Flame, Flag, Moon, Siren, Film } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { ServiceDetail } from "@/components/ServiceDetail";
import { CTABanner } from "@/components/CTABanner";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: formsConfig.seo.services.title,
  description: formsConfig.seo.services.description,
};

const iconMap: Record<string, React.ReactNode> = {
  FileCheck: <FileCheck className="w-6 h-6 text-accent" />,
  Construction: <Construction className="w-6 h-6 text-accent" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-accent" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6 text-accent" />,
  Truck: <Truck className="w-6 h-6 text-accent" />,
  Flame: <Flame className="w-6 h-6 text-accent" />,
  Flag: <Flag className="w-6 h-6 text-accent" />,
  Moon: <Moon className="w-6 h-6 text-accent" />,
  Siren: <Siren className="w-6 h-6 text-accent" />,
  Film: <Film className="w-6 h-6 text-accent" />,
};

const serviceImages: Record<string, { src: string; alt: string }> = {
  "traffic-control": {
    src: "/images/services/flagging-crew.jpg",
    alt: "Traffic control crew managing a construction zone",
  },
  "flagging-services": {
    src: "/images/services/services-hero.jpg",
    alt: "ATSSA-certified flagger directing traffic at a work zone",
  },
  "traffic-plans": {
    src: "/images/services/traffic-plan.jpg",
    alt: "Engineer reviewing traffic control plans at a desk with blueprints",
  },
  "permit-services": {
    src: "/images/services/traffic-plan.jpg",
    alt: "Permit documents and traffic control plan paperwork",
  },
  "equipment-rentals": {
    src: "/images/services/flagging-crew.jpg",
    alt: "Traffic control equipment including arrow boards and barricades",
  },
  "fire-watch": {
    src: "/images/services/services-hero.jpg",
    alt: "Fire watch personnel monitoring a construction site",
  },
  "event-management": {
    src: "/images/services/event-management.jpg",
    alt: "Large outdoor event with professional traffic and crowd management",
  },
  "night-work": {
    src: "/images/services/services-hero.jpg",
    alt: "Night work traffic control with high-visibility equipment",
  },
  "emergency-traffic-control": {
    src: "/images/services/flagging-crew.jpg",
    alt: "Emergency traffic control response team on scene",
  },
  "film-production": {
    src: "/images/services/event-management.jpg",
    alt: "Film production traffic control and road closure management",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary dark:bg-[#0a1220] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/services-hero.jpg"
            alt="Traffic control equipment and safety cones on a roadway"
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="What We Do"
            heading="Our Services"
            subtext="Full-service traffic control for Northern California. Traffic control, flagging, traffic control plans, permits, equipment rentals, fire watch, and special event traffic management."
            light
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
            <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      <TrustBar />

      {formsConfig.services.map((service, i) => {
        const img = serviceImages[service.id];
        return (
          <ServiceDetail
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.fullDescription}
            features={service.features as unknown as string[]}
            cta={service.cta}
            icon={iconMap[service.icon]}
            reversed={i % 2 === 1}
            imageSrc={img?.src}
            imageAlt={img?.alt}
          />
        );
      })}

      <CTABanner />
    </>
  );
}
