import { aboutStory, aboutMilestones } from "@/lib/constants";

const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/Xs3JhtwBFSE?start=267";

export function AboutHero() {
  return (
    <section>
      <p
        className="text-[#5A5A5A] mb-10 max-w-[640px]"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.9,
          fontWeight: 300,
        }}
      >
        Community of Hope Inc. was founded over 15 years ago with one belief:
        every woman — no matter how broken, how lost, how far gone — deserves a
        real chance at a new life. Under the leadership of Executive Director
        Annette Eldridge, we&apos;ve grown from a single home into a
        comprehensive recovery and community outreach organization.
      </p>

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
        <div
          className="relative w-full rounded-[8px] overflow-hidden bg-black"
          style={{ paddingBottom: "56.25%" }}
        >
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
