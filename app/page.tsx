import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home/HomePage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";

const description =
  "Community of Hope Inc. Faith-based recovery and community outreach in Groton, CT. Hope House, The Kindness Connection, and CCAR Recovery Coach training. 15+ years of transformed lives.";

export const metadata: Metadata = {
  title: {
    absolute: "Community of Hope Inc. | Hope House & Recovery | Groton, CT",
  },
  description,
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <WebPageJsonLd
        name="Community of Hope Inc. | Hope House & Recovery | Groton, CT"
        description={description}
        path="/"
      />
      <HomePage />
    </>
  );
}
