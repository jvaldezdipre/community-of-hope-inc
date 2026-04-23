import { Button } from "@/components/ui/Button";

export function StoriesShareYourStory({
  eyebrow,
  heading,
  description,
  buttonLabel,
  buttonHref,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  const isExternal = buttonHref?.startsWith("http");

  return (
    <section
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[680px] mx-auto text-center">
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
          {heading && (
            <h2
              className="text-[#1A1A1A] mb-4"
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
              className="text-[#3D3D3D] mb-8"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              {description}
            </p>
          )}
          {buttonLabel && buttonHref && (
            <Button
              variant="primary"
              as="a"
              href={buttonHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
