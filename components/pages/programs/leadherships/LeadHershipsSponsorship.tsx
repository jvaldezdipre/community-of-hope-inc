export type LeadHershipsSponsorshipTier = {
  name: string;
  price: string;
  available: string;
  benefits: { text: string }[];
};

export function LeadHershipsSponsorship({
  eyebrow,
  heading,
  tiers,
  footnote,
}: {
  eyebrow: string;
  heading: string;
  tiers: LeadHershipsSponsorshipTier[];
  footnote: string;
}) {
  return (
    <section
      className="bg-[#0F1D33]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {(eyebrow || heading) && (
          <div className="text-center mb-12 md:mb-16">
            {eyebrow && (
              <span
                className="block text-[#8FB8FF] uppercase mb-4"
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
            {heading && (
              <h2
                className="text-white max-w-[550px] mx-auto"
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
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={`tier-${i}`}
              className="rounded-[8px] border border-[#8FB8FF]/15 px-6 py-8"
            >
              {tier.price && (
                <span
                  className="block text-[#8FB8FF] mb-1"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    fontWeight: 400,
                  }}
                >
                  {tier.price}
                </span>
              )}
              {tier.name && (
                <h3
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {tier.name}
                </h3>
              )}
              {tier.available && (
                <span
                  className="block text-white/40 mb-4"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.84rem",
                    fontWeight: 300,
                  }}
                >
                  {tier.available}
                </span>
              )}
              {tier.benefits.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {tier.benefits.map((benefit, bi) => (
                    <li key={`benefit-${bi}`} className="flex gap-2 items-start">
                      <span className="shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-[#8FB8FF]/50" />
                      <span
                        className="text-white/70"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {benefit.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {footnote && (
          <p
            className="text-center text-white/50 mt-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
            }}
          >
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
