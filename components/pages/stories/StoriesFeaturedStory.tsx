export function StoriesFeaturedStory({
  eyebrow,
  quote,
  photo,
  initials,
  name,
  context,
}: {
  eyebrow: string;
  quote: string;
  photo: string;
  initials: string;
  name: string;
  context: string;
}) {
  return (
    <section
      className="bg-[#FAF8F5]"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[800px] mx-auto text-center">
          {eyebrow && (
            <span
              className="block text-[#458CFE] uppercase mb-6"
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
          <span
            className="block text-[#458CFE]/15 leading-none mb-4"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "5rem",
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          {quote && (
            <p
              className="text-[#1A1A1A] italic mb-8"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                lineHeight: 1.8,
              }}
            >
              {quote}
            </p>
          )}
          <div className="flex items-center justify-center gap-4">
            {photo ? (
              <div className="w-12 h-12 rounded-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt={name || "Featured speaker"}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : initials ? (
              <div className="w-12 h-12 rounded-full bg-[#458CFE]/10 flex items-center justify-center">
                <span
                  className="text-[#458CFE]"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                  }}
                >
                  {initials}
                </span>
              </div>
            ) : null}
            {(name || context) && (
              <div className="text-left">
                {name && (
                  <span
                    className="block text-[#1A1A1A]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.96rem",
                      fontWeight: 500,
                    }}
                  >
                    {name}
                  </span>
                )}
                {context && (
                  <span
                    className="block text-[#3D3D3D]"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 300,
                    }}
                  >
                    {context}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
