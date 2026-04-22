import type { MetadataRoute } from "next";
import { programs } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4coh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Build timestamp — refreshes on every deploy, gives Google a real
  // freshness signal. (Google ignores priority/changefreq entirely, so
  // those are omitted.)
  const lastModified = new Date();

  const staticPaths = [
    "",
    "/programs",
    "/about",
    "/stories",
    "/events",
    "/supporters",
    "/donate",
    "/contact",
    "/apply-hope-house",
  ];

  const programPaths = programs.map((p) => `/programs/${p.slug}`);

  return [...staticPaths, ...programPaths].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
  }));
}
