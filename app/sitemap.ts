import type { MetadataRoute } from "next";
import { programs } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4coh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${siteUrl}`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${siteUrl}/programs`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteUrl}/stories`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteUrl}/events`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${siteUrl}/supporters`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${siteUrl}/donate`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const programPages = programs.map((p) => ({
    url: `${siteUrl}/programs/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...programPages];
}
