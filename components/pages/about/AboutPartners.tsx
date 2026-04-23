export type CommunityPartner = {
  name: string;
  url: string;
  description: string;
};

export function AboutPartners({
  heading,
  subtitle,
  partners,
}: {
  heading: string;
  subtitle: string;
  partners: CommunityPartner[];
}) {
  if (partners.length === 0 && !heading && !subtitle) return null;

  return (
    <section style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}>
      {heading && (
        <h2
          className="text-[#1A1A1A] mb-2"
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
      {subtitle && (
        <p
          className="text-[#3D3D3D] mb-10 max-w-[640px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      )}
      {partners.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-2">
          {partners.map((partner, i) => (
            <div
              key={`partner-${i}`}
              className="p-6 rounded-[8px] border border-[#EBEBEB] bg-white"
            >
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#458CFE] hover:underline block mb-3"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {partner.name}
                </a>
              ) : (
                <p
                  className="text-[#1A1A1A] mb-3"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {partner.name}
                </p>
              )}
              <p
                className="text-[#3D3D3D] m-0"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.93rem",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
