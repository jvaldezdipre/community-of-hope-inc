export type HopeHouseGrowthCard = {
  number: string;
  title: string;
  description: string;
};

export function HopeHouseGrowth({
  eyebrow,
  heading,
  description,
  backgroundImage,
  cards,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  backgroundImage: string;
  cards: HopeHouseGrowthCard[];
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      {backgroundImage && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* Heavy cream overlay so the white cards stay legible on top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,248,245,0.82) 0%, rgba(250,248,245,0.88) 50%, rgba(250,248,245,0.84) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {(eyebrow || heading || description) && (
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
                className="text-[#1A1A1A] max-w-[500px] mx-auto"
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
                className="text-[#3D3D3D] max-w-[640px] mx-auto mt-4"
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
          </div>
        )}

        {cards.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={`growth-${i}`}
                className="bg-white border border-[#EBEBEB] rounded-[8px] px-6 py-8 shadow-sm"
              >
                {card.number && (
                  <span
                    className="block text-[#458CFE]/30 mb-4"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                    }}
                  >
                    {card.number}
                  </span>
                )}
                {card.title && (
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>
                )}
                {card.description && (
                  <p
                    className="text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {card.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
