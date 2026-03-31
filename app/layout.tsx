import type { Metadata } from "next";
import { barlowCondensed, inter } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { PostHogProvider } from "@/components/PostHogProvider";
import { formsConfig } from "@/lib/forms.config";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: formsConfig.seo.home.title,
  description: formsConfig.seo.home.description,
  metadataBase: new URL(formsConfig.brand.url),
  openGraph: {
    title: formsConfig.seo.home.title,
    description: formsConfig.seo.home.description,
    url: formsConfig.brand.url,
    siteName: formsConfig.brand.companyName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
        {formsConfig.analytics.ga4 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${formsConfig.analytics.ga4}`}
              strategy="afterInteractive"
            />
            <Script id="gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${formsConfig.analytics.ga4}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-body antialiased`}
      >
        <Suspense fallback={null}>
          <PostHogProvider>
            <SmoothScroll>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </SmoothScroll>
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
