export type KindnessConnectionAudienceItem = {
  text: string;
};

export function KindnessConnectionAudience({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: KindnessConnectionAudienceItem[];
}) {
  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-10 md:px-10 md:py-12 shadow-sm">
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
              className="text-[#1A1A1A] mb-6"
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
          {items.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {items.map((item, i) => (
                <div key={`audience-${i}`} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-[#458CFE]" />
                  <p
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
