export function StoriesHero({
  backgroundImage,
  eyebrow,
  title,
  description,
}: {
  backgroundImage: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section
      className="relative bg-white overflow-hidden"
      // Pull the hero up under the fixed nav so the background image fills
      // the top of the page. Matches main's top padding exactly.
      style={{ marginTop: "calc(-1 * clamp(100px, 12vw, 160px))" }}
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
            "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 35%, rgba(255,255,255,0.5) 65%, rgba(255,255,255,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="relative max-w-[1200px] mx-auto px-6"
        style={{
          paddingTop: "clamp(140px, 16vw, 208px)",
          paddingBottom: "clamp(80px, 10vw, 160px)",
          minHeight: "clamp(560px, 68vw, 820px)",
        }}
      >
        <div className="max-w-[500px]">
          {eyebrow && (
            <span
              className="block text-[#458CFE] uppercase mb-4"
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
          {title && (
            <h1
              className="text-[#1A1A1A] mb-5"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
          )}
          {description && (
            <p
              className="text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
