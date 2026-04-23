import { Button } from "@/components/ui/Button";

export function SupportersBottomCTA({
  eyebrow,
  heading,
  description,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  backgroundImage,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
  backgroundImage: string;
}) {
  return (
    <section
      className="relative bg-[#0F1D33] overflow-hidden"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      {backgroundImage && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,29,51,0.78) 0%, rgba(15,29,51,0.86) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto">
          {eyebrow && (
            <span
              className="block text-[#8FB8FF] uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              className="text-white/70 mb-10"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              {description}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryButtonLabel && primaryButtonHref && (
              <Button variant="primaryOnWhite" as="a" href={primaryButtonHref}>
                {primaryButtonLabel}
              </Button>
            )}
            {secondaryButtonLabel && secondaryButtonHref && (
              <Button variant="outlineOnBlue" as="a" href={secondaryButtonHref}>
                {secondaryButtonLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
