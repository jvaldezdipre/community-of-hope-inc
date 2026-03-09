import type { Metadata } from "next";
import { Layout } from "@/components/layout/Layout";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4coh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Community of Hope Inc. | Hope House & Recovery | Groton, CT",
    template: "%s | Community of Hope Inc.",
  },
  description:
    "Faith-based recovery and community outreach in Groton, CT. Hope House offers an 8-bed recovery home for women. The Kindness Connection serves basic needs. 15+ years of transformed lives.",
  keywords: [
    "Community of Hope",
    "Hope House",
    "Groton CT",
    "women's recovery",
    "faith-based recovery",
    "Kindness Connection",
    "recovery home",
    "Annette Eldridge",
  ],
  authors: [{ name: "Community of Hope Inc." }],
  creator: "Community of Hope Inc.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Community of Hope Inc.",
    title: "Community of Hope Inc. | Hope House & Recovery | Groton, CT",
    description:
      "Faith-based recovery and community outreach in Groton, CT. Hope House offers an 8-bed recovery home for women. The Kindness Connection serves basic needs. 15+ years of transformed lives.",
    images: [
      {
        url: "/coh-logo.png",
        width: 512,
        height: 512,
        alt: "Community of Hope Inc. logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community of Hope Inc. | Hope House & Recovery | Groton, CT",
    description:
      "Faith-based recovery and community outreach in Groton, CT. Hope House, The Kindness Connection, and CCAR Recovery Coach training.",
    images: ["/coh-logo.png"],
  },
  icons: {
    icon: "/coh-logo.png",
    apple: "/coh-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationJsonLd />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
