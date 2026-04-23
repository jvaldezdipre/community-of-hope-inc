export type KindnessConnectionDetail = {
  label: string;
  value: string;
};

export function KindnessConnectionDetails({
  heading,
  details,
}: {
  heading: string;
  details: KindnessConnectionDetail[];
}) {
  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {heading && (
          <h2
            className="text-[#1A1A1A] mb-8"
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {details.map((d, i) => (
            <div
              key={`detail-${i}`}
              className="border-l-2 border-[#458CFE]/20 pl-5 py-1"
            >
              <span
                className="block text-[#3D3D3D] mb-1"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.84rem",
                  fontWeight: 300,
                }}
              >
                {d.label}
              </span>
              <span
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1.05rem",
                  fontWeight: 400,
                }}
              >
                {d.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
