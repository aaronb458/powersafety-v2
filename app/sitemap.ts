import type { MetadataRoute } from "next";
import { formsConfig } from "@/lib/forms.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://powersafety.com";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/locations`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/quote`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const cityPages: MetadataRoute.Sitemap = formsConfig.locations.cityPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages];
}
