export type SupportersIndividualItem = {
  name: string;
};

export function SupportersIndividual({
  eyebrow,
  heading,
  names,
}: {
  eyebrow: string;
  heading: string;
  names: SupportersIndividualItem[];
}) {
  return (
    <section
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12">
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
              className="text-[#1A1A1A]"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 text-center">
          {names.map((person, i) => (
            <p
              key={`individual-${i}`}
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              {person.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
