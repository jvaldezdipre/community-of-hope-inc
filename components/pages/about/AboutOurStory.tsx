import { aboutStory, aboutMilestones } from "@/lib/constants";

const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/Xs3JhtwBFSE?start=267";

export function AboutOurStory() {
  return (
    <section className="pt-16 border-t border-[#EBEBEB]" style={{ paddingTop: "clamp(48px, 8vw, 80px)" }}>
      <h2
        className="text-[#1A1A1A] mb-6"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        Our Story
      </h2>
      <div className="grid md:grid-cols-[1fr_400px] gap-12 md:gap-16 items-start">
        <div>
          <p
            className="text-[#5A5A5A] mb-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            {aboutStory}
          </p>
          <div className="flex flex-wrap gap-8">
            {aboutMilestones.map((m) => (
              <div key={m.label}>
                <span
                  className="block text-[#458CFE] mb-1"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="text-[#5A5A5A]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full rounded-[8px] overflow-hidden bg-black" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Community of Hope video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
