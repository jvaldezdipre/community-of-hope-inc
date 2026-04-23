import Link from "next/link";
import { Button } from "@/components/ui/Button";

export type ProgramCardData = {
  slug: string;
  number: string;
  subtitle: string;
  title: string;
  image: string;
  goodFor: string;
  highlights: { text: string }[];
};

export function ProgramsList({
  introText,
  programs,
}: {
  introText: string;
  programs: ProgramCardData[];
}) {
  return (
    <>
      {introText && (
        <p
          className="text-[#3D3D3D] -mt-8 mb-12 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.96rem",
            lineHeight: 1.85,
            fontWeight: 300,
          }}
        >
          {introText}
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program, i) => (
          <div
            key={`program-${i}`}
            className="rounded-[8px] border border-[#EBEBEB] overflow-hidden flex flex-col bg-white"
          >
            <div className="relative h-[200px] bg-[#FAF8F5]">
              {program.image && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                {program.number && (
                  <span
                    className="text-[#458CFE]/30"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "0.9rem",
                    }}
                  >
                    {program.number}
                  </span>
                )}
                {program.subtitle && (
                  <span
                    className="text-[#458CFE] uppercase"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      fontWeight: 500,
                    }}
                  >
                    {program.subtitle}
                  </span>
                )}
              </div>

              <h2
                className="text-[#1A1A1A] mb-3"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {program.title}
              </h2>

              {program.goodFor && (
                <p
                  className="text-[#3D3D3D] mb-5"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.93rem",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {program.goodFor}
                </p>
              )}

              {program.highlights.length > 0 && (
                <ul className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {program.highlights.map((h, hi) => (
                    <li
                      key={`hl-${hi}`}
                      className="text-[#3D3D3D] pl-4 relative"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        fontWeight: 300,
                      }}
                    >
                      <span className="absolute left-0 text-[#458CFE]">
                        &bull;
                      </span>
                      {h.text}
                    </li>
                  ))}
                </ul>
              )}

              {program.slug && (
                <Link
                  href={`/programs/${program.slug}`}
                  className="text-[#458CFE] hover:underline mt-auto"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  Learn more &rarr;
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function ProgramsHelpCTA({
  heading,
  description,
  buttonLabel,
  buttonHref,
  phonePrefix,
  phoneNumber,
}: {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  phonePrefix: string;
  phoneNumber: string;
}) {
  const telHref = phoneNumber ? `tel:${phoneNumber.replace(/[^0-9]/g, "")}` : "";

  return (
    <section
      className="mt-16 pt-16 border-t border-[#EBEBEB]"
      style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}
    >
      <div className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:py-12 md:px-10 text-center">
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
              className="text-[#458CFE] hover:underline"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 400,
              }}
            >
              {phonePrefix}
              {phoneNumber}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
