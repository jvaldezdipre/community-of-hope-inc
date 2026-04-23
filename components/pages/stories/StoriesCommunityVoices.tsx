export type StoriesCommunityVoice = {
  quote: string;
  photo: string;
  initials: string;
  name: string;
  context: string;
};

export function StoriesCommunityVoices({
  heading,
  voices,
}: {
  heading: string;
  voices: StoriesCommunityVoice[];
}) {
  if (voices.length === 0 && !heading) return null;

  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {heading && (
          <div className="text-center mb-12">
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
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {voices.map((t, i) => (
            <div
              key={`voice-${i}`}
              className="bg-[#FAF8F5] rounded-[8px] px-8 py-8 md:py-10 relative"
            >
              <span
                className="block text-[#458CFE]/10 leading-none mb-3"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "3.5rem",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              {t.quote && (
                <p
                  className="text-[#1A1A1A] italic mb-6"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  {t.quote}
                </p>
              )}
              <div className="flex items-center gap-3">
                {t.photo ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.photo}
                      alt={t.name || "Community voice"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : t.initials ? (
                  <div className="w-10 h-10 rounded-full bg-[#458CFE]/10 flex items-center justify-center shrink-0">
                    <span
                      className="text-[#458CFE]"
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                      }}
                    >
                      {t.initials}
                    </span>
                  </div>
                ) : null}
                {(t.name || t.context) && (
                  <div>
                    {t.name && (
                      <span
                        className="block text-[#1A1A1A]"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.93rem",
                          fontWeight: 500,
                        }}
                      >
                        {t.name}
                      </span>
                    )}
                    {t.context && (
                      <span
                        className="block text-[#3D3D3D]"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.84rem",
                          fontWeight: 300,
                        }}
                      >
                        {t.context}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
