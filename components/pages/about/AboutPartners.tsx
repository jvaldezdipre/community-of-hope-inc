import { communityPartners } from "@/lib/constants";

export function AboutPartners() {
  return (
    <section className="pt-16 border-t border-[#EBEBEB]" style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}>
      <h2
        className="text-[#1A1A1A] mb-2"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        Community Partners
      </h2>
      <p
        className="text-[#5A5A5A] mb-10 max-w-[640px]"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        Groups we work closely with and would recommend.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {communityPartners.map((partner) => (
          <div
            key={partner.name}
            className="p-6 rounded-[8px] border border-[#EBEBEB] bg-[#FAFAFA]/50"
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#458CFE] hover:underline block mb-3"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              {partner.name}
            </a>
            <p
              className="text-[#5A5A5A] m-0"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
