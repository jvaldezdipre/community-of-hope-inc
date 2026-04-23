import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function KindnessConnectionHero({
  eyebrow,
  title,
  mainText,
  eligibilityText,
  buttonLabel,
  buttonHref,
  phoneNumber,
  image,
}: {
  eyebrow: string;
  title: string;
  mainText: string;
  eligibilityText: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
  image: string;
}) {
  const telHref = phoneNumber ? `tel:${phoneNumber.replace(/[^0-9]/g, "")}` : "";

  return (
    <section className="bg-white">
      <div
        className="max-w-[1200px] mx-auto px-6"
        style={{
          paddingTop: "clamp(32px, 4vw, 48px)",
          paddingBottom: "clamp(80px, 10vw, 160px)",
        }}
      >
        <div className="grid md:grid-cols-[1fr_440px] gap-10 md:gap-16 items-center">
          <div>
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
            {title && (
              <h1
                className="text-[#1A1A1A] mb-4"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h1>
            )}
            {mainText && (
              <p
                className="text-[#3D3D3D] mb-4 max-w-[520px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {mainText}
              </p>
            )}
            {eligibilityText && (
              <p
                className="text-[#3D3D3D] mb-8"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.93rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {eligibilityText}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4">
              {buttonLabel && buttonHref && (
                <Button variant="primary" href={buttonHref}>
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

          <div>
            {image && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={image}
                alt={title || "Kindness Connection"}
                className="w-full h-[320px] md:h-[400px] object-cover rounded-[8px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
