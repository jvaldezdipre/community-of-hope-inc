export type StoriesImpactStat = {
  number: string;
  label: string;
};

export function StoriesImpact({
  backgroundImage,
  eyebrow,
  heading,
  stats,
}: {
  backgroundImage: string;
  eyebrow: string;
  heading: string;
  stats: StoriesImpactStat[];
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#0F1D33]"
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,29,51,0.88) 0%, rgba(15,29,51,0.68) 45%, rgba(15,29,51,0.72) 60%, rgba(15,29,51,0.9) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-6">
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
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat, i) => (
              <div key={`stat-${i}`} className="text-center">
                {stat.number && (
                  <span
                    className="block text-[#8FB8FF] mb-2"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                      fontWeight: 400,
                    }}
                  >
                    {stat.number}
                  </span>
                )}
                {stat.label && (
                  <span
                    className="text-white/60 whitespace-pre-line"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.5,
                      fontWeight: 300,
                    }}
                  >
                    {stat.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
