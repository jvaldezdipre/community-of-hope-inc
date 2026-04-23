import { Button } from "@/components/ui/Button";

export function LeadHershipsUpcomingEvent({
  eyebrow,
  title,
  dateISO,
  dateDisplay,
  location,
  description,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: {
  eyebrow: string;
  title: string;
  dateISO: string;
  dateDisplay: string;
  location: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}) {
  const isPrimaryExternal = primaryButtonHref?.startsWith("http");
  const isSecondaryExternal = secondaryButtonHref?.startsWith("http");

  const hasMeta = dateDisplay || location;

  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[720px] mx-auto text-center">
          {eyebrow && (
            <span
              className="block text-[#458CFE] uppercase mb-4"
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
          {title && (
            <h2
              className="text-[#1A1A1A] mb-3"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              {title}
            </h2>
          )}
          {hasMeta && (
            <p
              className="text-[#3D3D3D] mb-2"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              {dateDisplay && (
                <time dateTime={dateISO || undefined}>{dateDisplay}</time>
              )}
              {dateDisplay && location && <>&nbsp;·&nbsp;</>}
              {location}
            </p>
          )}
          {description && (
            <p
              className="text-[#3D3D3D] mb-8"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.96rem",
                lineHeight: 1.8,
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
