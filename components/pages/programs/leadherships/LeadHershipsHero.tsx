import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function LeadHershipsHero({
  backgroundImage,
  eyebrow,
  logoImage,
  logoAlt,
  quote,
  description,
  buttonLabel,
  buttonHref,
  phoneNumber,
}: {
  backgroundImage: string;
  eyebrow: string;
  logoImage: string;
  logoAlt: string;
  quote: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
}) {
  const telHref = phoneNumber ? `tel:${phoneNumber.replace(/[^0-9]/g, "")}` : "";
  const isExternal = buttonHref?.startsWith("http");

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "clamp(420px, 50vw, 580px)" }}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      <div
        className="relative max-w-[1200px] mx-auto px-6 flex items-center"
        style={{
          paddingTop: "clamp(48px, 6vw, 80px)",
          paddingBottom: "clamp(48px, 6vw, 80px)",
          minHeight: "clamp(420px, 50vw, 580px)",
        }}
      >
        <div className="max-w-[560px]">
          {eyebrow && (
            <span
              className="block text-[#458CFE] uppercase mb-4"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                fontWeight: 500,
              }}
            >
              {eyebrow}
            </span>
          )}
          {logoImage && (
            <h1 className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoImage}
                alt={logoAlt || "LeadHerships"}
                className="h-[150px] md:h-[200px] w-auto object-contain mix-blend-multiply"
              />
            </h1>
          )}
          {quote && (
            <p
              className="text-[#3A3A3A] mb-4 italic"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                lineHeight: 1.7,
              }}
            >
              &ldquo;{quote}&rdquo;
            </p>
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
          <div className="flex flex-wrap items-center gap-4">
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
            {phoneNumber && (
              <a
                href={telHref}
                className="flex items-center gap-2 text-[#458CFE] hover:underline"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                }}
              >
                <Phone size={15} strokeWidth={1.5} />
                {phoneNumber}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
