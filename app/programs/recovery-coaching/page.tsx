import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { RecoveryCoachingPageContent } from "@/components/pages/programs/RecoveryCoachingPageContent";

const description =
  "Earn your CCAR Recovery Coach certification through Community of Hope Inc. Free for Hope House residents — turn your lived experience into a professional credential that helps others in recovery.";

export const metadata: Metadata = {
  title: "Recovery Coaching | Programs",
  description,
};

export default function RecoveryCoachingPage() {
  return (
    <>
      <WebPageJsonLd
        name="Recovery Coaching | Programs | Community of Hope Inc."
        description={description}
        path="/programs/recovery-coaching"
      />
      <RecoveryCoachingPageContent />
    </>
  );
}
