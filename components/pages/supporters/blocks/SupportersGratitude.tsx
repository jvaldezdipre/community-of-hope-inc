export function SupportersGratitude({
  quote,
  backgroundImage,
}: {
  quote: string;
  backgroundImage: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5]">
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
            "linear-gradient(90deg, rgba(250,248,245,0.92) 0%, rgba(250,248,245,0.82) 35%, rgba(250,248,245,0.45) 65%, rgba(250,248,245,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="relative max-w-[1200px] mx-auto px-6 flex items-center"
        style={{
          minHeight: "clamp(340px, 40vw, 460px)",
          paddingTop: "clamp(56px, 7vw, 88px)",
          paddingBottom: "clamp(56px, 7vw, 88px)",
        }}
      >
        {quote && (
          <blockquote
            className="max-w-[460px] text-[#1A1A1A]"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
              fontWeight: 400,
              lineHeight: 1.35,
              fontStyle: "italic",
            }}
          >
            <span
              className="block mb-4 text-[#458CFE]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "2.5rem",
                lineHeight: 1,
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            {quote}
          </blockquote>
        )}
      </div>
    </section>
  );
}
