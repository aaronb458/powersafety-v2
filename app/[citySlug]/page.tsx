import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, Shield, CheckCircle } from "lucide-react";
import { formsConfig } from "@/lib/forms.config";
import { CTABanner } from "@/components/CTABanner";
import { TrustBar } from "@/components/TrustBar";

const cityPages = formsConfig.locations.cityPages;

export function generateStaticParams() {
  return cityPages.map((page) => ({
    citySlug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ citySlug: string }> }): Promise<Metadata> {
  const { citySlug } = await params;
  const page = cityPages.find((p) => p.slug === citySlug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function CityPage({ params }: { params: Promise<{ citySlug: string }> }) {
  const { citySlug } = await params;
  const page = cityPages.find((p) => p.slug === citySlug);
  if (!page) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary dark:bg-[#0a1220] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt={`Traffic control services in ${page.city}, California`}
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ea3f2]/15 border border-[#2ea3f2]/30 text-white text-sm font-bold uppercase tracking-wider backdrop-blur-sm mb-6"
          >
            <MapPin className="w-4 h-4 text-[#2ea3f2]" />
            {page.region}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Traffic Control Services in {page.city}, CA
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {page.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[60px] text-bg" preserveAspectRatio="none">
            <path d="M0 60L720 0L1440 60H0Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      <TrustBar />

      {/* Content */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-primary dark:text-white uppercase tracking-wide mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Full-Service Traffic Control in {page.city}
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full mb-8" />
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                {page.content}
              </p>

              <h3
                className="text-xl font-bold text-primary dark:text-white uppercase tracking-wide mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Services Available in {page.city}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {formsConfig.services.slice(0, 7).map((service) => (
                  <div key={service.id} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-text-muted text-sm">{service.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wide rounded-lg cta-glow transition-all duration-300 hover:scale-[1.02] group"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={formsConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {formsConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Credentials sidebar */}
            <div className="space-y-6">
              <div className="card-industrial p-8">
                <h3
                  className="text-lg font-bold text-primary dark:text-white uppercase tracking-wide mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Why Choose Power Safety in {page.city}
                </h3>
                <div className="space-y-4">
                  {formsConfig.whyChooseUs.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm text-primary dark:text-white">{item.title}</div>
                        <p className="text-text-muted text-xs leading-relaxed mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-industrial p-8">
                <h3
                  className="text-lg font-bold text-primary dark:text-white uppercase tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {formsConfig.credentials.map((cred) => (
                    <span
                      key={cred.name}
                      className="px-3 py-1.5 bg-primary-10 dark:bg-primary-20 rounded-lg text-xs font-medium text-primary dark:text-white border border-primary-20 dark:border-primary-30"
                    >
                      {cred.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
