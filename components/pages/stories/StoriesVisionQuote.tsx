export function StoriesVisionQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  if (!quote && !attribution) return null;

  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[700px] mx-auto text-center">
          {quote && (
            <p
              className="text-[#1A1A1A] italic"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                lineHeight: 1.7,
              }}
            >
              &ldquo;{quote}&rdquo;
            </p>
          )}
          {attribution && (
            <span
              className="block mt-6 text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.93rem",
                fontWeight: 300,
              }}
            >
              &mdash; {attribution}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
