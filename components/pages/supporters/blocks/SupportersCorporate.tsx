import { LogoSlot } from "./LogoSlot";

export type SupportersCorporateItem = {
  name: string;
  logo: string;
  notes: string;
  /** Optional pixel height override set via the CMS slider; undefined → preset size. */
  logoHeight?: number;
};

export function SupportersCorporate({
  eyebrow,
  heading,
  supporters,
}: {
  eyebrow: string;
  heading: string;
  supporters: SupportersCorporateItem[];
}) {
  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-14">
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
              className="text-[#1A1A1A] max-w-[560px] mx-auto"
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
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supporters.map((s, i) => (
            <div
              key={`corporate-${i}`}
              className="flex flex-col items-center justify-center text-center p-6 min-h-[160px]"
            >
              <div className={s.logo ? "" : "mb-4"}>
                <LogoSlot
                  name={s.name}
                  logo={s.logo || null}
                  size="lg"
                  customHeight={s.logoHeight}
                />
              </div>
              {!s.logo && s.name && (
                <p
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {s.name}
                </p>
              )}
              {s.notes && !s.logo && (
                <span
                  className="text-[#3D3D3D] mt-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                  }}
                >
                  {s.notes}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
