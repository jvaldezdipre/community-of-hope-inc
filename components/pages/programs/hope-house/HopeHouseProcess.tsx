export type HopeHouseProcessStep = {
  number: string;
  title: string;
  description: string;
};

export function HopeHouseProcess({
  eyebrow,
  heading,
  backgroundImage,
  steps,
}: {
  eyebrow: string;
  heading: string;
  backgroundImage: string;
  steps: HopeHouseProcessStep[];
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
      {/* Navy overlay — darker top/bottom for text anchors, lighter mid-band
          so the warm doorway glow breathes through. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,29,51,0.88) 0%, rgba(15,29,51,0.68) 45%, rgba(15,29,51,0.72) 60%, rgba(15,29,51,0.9) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-6">
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
        {steps.length > 0 && (
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={`step-${i}`} className="relative text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#8FB8FF]/30 text-[#8FB8FF] mb-4 mx-auto">
                  <span
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.1rem",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                {step.title && (
                  <h3
                    className="text-white mb-2"
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                )}
                {step.description && (
                  <p
                    className="text-white/70 max-w-[260px] mx-auto"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {step.description}
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
