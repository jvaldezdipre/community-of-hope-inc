export type KindnessConnectionReceiveItem = {
  title: string;
  detail: string;
};

export function KindnessConnectionReceive({
  eyebrow,
  heading,
  pitch,
  items,
}: {
  eyebrow: string;
  heading: string;
  pitch: string;
  items: KindnessConnectionReceiveItem[];
}) {
  return (
    <section
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          {/* Left — heading + short pitch */}
          <div>
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
                className="text-[#1A1A1A] mb-4"
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
            {pitch && (
              <p
                className="text-[#3D3D3D] max-w-[380px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {pitch}
              </p>
            )}
          </div>

          {/* Right — two-column checklist */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {items.map((item, i) => (
              <div key={`receive-${i}`} className="flex gap-3">
                <span className="shrink-0 mt-[3px] w-5 h-5 rounded-full bg-[#458CFE]/10 flex items-center justify-center">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#458CFE"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  {item.title && (
                    <p
                      className="text-[#1A1A1A] mb-0.5"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </p>
                  )}
                  {item.detail && (
                    <p
                      className="text-[#3D3D3D]"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
