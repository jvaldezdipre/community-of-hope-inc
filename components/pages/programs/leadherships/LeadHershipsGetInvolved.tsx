export type LeadHershipsGetInvolvedBullet = {
  text: string;
};

export type LeadHershipsGetInvolvedCard = {
  title: string;
  body: string;
  bullets: LeadHershipsGetInvolvedBullet[];
};

export function LeadHershipsGetInvolved({
  cards,
}: {
  cards: LeadHershipsGetInvolvedCard[];
}) {
  if (cards.length === 0) return null;

  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={`involved-${i}`}
              className="bg-[#FAF8F5] border border-[#EBEBEB] rounded-[8px] px-6 py-8"
            >
              {card.title && (
                <h3
                  className="text-[#1A1A1A] mb-3"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
              )}
              {card.body && (
                <p
                  className={`text-[#3D3D3D] ${card.bullets.length > 0 ? "mb-4" : ""}`}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {card.body}
                </p>
              )}
              {card.bullets.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {card.bullets.map((bullet, bi) => (
                    <li
                      key={`bullet-${bi}`}
                      className="flex gap-2 items-start"
                    >
                      <span className="shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-[#458CFE]" />
                      <span
                        className="text-[#3D3D3D]"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {bullet.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
