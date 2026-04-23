import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HopeHouseBottomCTA({
  heading,
  description,
  buttonLabel,
  buttonHref,
  phoneNumber,
}: {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
}) {
  const telHref = phoneNumber ? `tel:${phoneNumber.replace(/[^0-9]/g, "")}` : "";

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
          <div className="flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
