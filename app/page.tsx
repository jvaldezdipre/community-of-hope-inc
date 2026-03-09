import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home/HomePage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Community of Hope Inc. — Faith-based recovery and community outreach in Groton, CT. Hope House, The Kindness Connection, and CCAR Recovery Coach training. 15+ years of transformed lives.",
};

export default function Page() {
  return <HomePage />;
}
