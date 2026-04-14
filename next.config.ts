import type { NextConfig } from "next";

// ⚠️ Staging indexing block
// While the site is served from community-of-hope.netlify.app (before 4coh.com
// is connected as the primary domain), we force noindex so it doesn't compete
// with the production domain in search. REMOVE or flip this when launching.
const BLOCK_INDEXING = true;

const securityHeaders: { key: string; value: string }[] = [
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

if (BLOCK_INDEXING) {
  securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
