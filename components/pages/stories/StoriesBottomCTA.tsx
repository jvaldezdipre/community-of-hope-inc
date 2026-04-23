import { Button } from "@/components/ui/Button";

export function StoriesBottomCTA({
  heading,
  description,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: {
  heading: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}) {
  const isPrimaryExternal = primaryButtonHref?.startsWith("http");
  const isSecondaryExternal = secondaryButtonHref?.startsWith("http");

  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:py-12 md:px-10 text-center shadow-sm">
          {heading && (
            <h2
              className="text-[#1A1A1A] mb-3"
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
              className="text-[#3D3D3D] mb-8 max-w-[520px] mx-auto"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              {description}
            </p>
          )}
          {(primaryButtonLabel || secondaryButtonLabel) && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {primaryButtonLabel && primaryButtonHref && (
                <Button
                  variant="primary"
                  as="a"
                  href={primaryButtonHref}
                  target={isPrimaryExternal ? "_blank" : undefined}
                  rel={isPrimaryExternal ? "noopener noreferrer" : undefined}
                >
                  {primaryButtonLabel}
                </Button>
              )}
              {secondaryButtonLabel && secondaryButtonHref && (
                <Button
                  variant="outlineLight"
                  as="a"
                  href={secondaryButtonHref}
                  target={isSecondaryExternal ? "_blank" : undefined}
                  rel={isSecondaryExternal ? "noopener noreferrer" : undefined}
                >
                  {secondaryButtonLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
