import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export type PaymentCardProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  badge?: string;
  featured?: boolean;
};

export function PaymentCard({
  heading,
  description,
  buttonLabel,
  buttonUrl,
  badge,
  featured = false,
}: PaymentCardProps) {
  const outerClass = featured
    ? "bg-white border-2 border-[#458CFE]/30 rounded-[8px] p-8 shadow-[0_4px_24px_rgba(69,140,254,0.08)] flex flex-col"
    : "bg-white border border-[#EBEBEB] rounded-[8px] p-8 flex flex-col";

  return (
    <div className={outerClass}>
      {badge && (
        <span
          className="inline-block text-[#458CFE] uppercase mb-4"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            fontWeight: 500,
          }}
        >
          {badge}
        </span>
      )}
      <h2
        className="text-[#1A1A1A] mb-4"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.35rem, 2.2vw, 1.65rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        {heading}
      </h2>
      <p
        className="text-[#3D3D3D] mb-8 flex-1"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.96rem",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        {description}
      </p>
      {buttonLabel && buttonUrl && (
        <Button
          variant={featured ? "primary" : "outlineLight"}
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-auto"
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}

export type ImpactTier = { amount: string; description: string };

export function ImpactSection({
  heading,
  tiers,
}: {
  heading: string;
  tiers: ImpactTier[];
}) {
  return (
    <section className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-12 md:py-16 mb-16 md:mb-24">
      <h2
        className="text-[#1A1A1A] text-center mb-12"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        {heading}
      </h2>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {tiers.map((tier, i) => (
          <div key={`tier-${i}`} className="text-center">
            <span
              className="block text-[#458CFE] mb-3"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
              }}
            >
              {tier.amount}
            </span>
            <p
              className="text-[#3D3D3D] max-w-[260px] mx-auto"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              {tier.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustFooter() {
  return (
    <div className="text-center pb-8">
      <Heart
        size={28}
        className="text-[#458CFE]/70 mx-auto mb-6"
        strokeWidth={1.5}
        aria-hidden
      />
      <p
        className="text-[#3D3D3D] max-w-[640px] mx-auto"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1rem",
          lineHeight: 1.8,
          fontWeight: 300,
        }}
      >
        Community of Hope Inc. is a registered 501(c)(3) public charity. All
        donations are tax-deductible to the fullest extent of the law.
      </p>
    </div>
  );
}
