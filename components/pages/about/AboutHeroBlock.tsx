export type AboutMilestone = {
  value: string;
  label: string;
};

export type AboutHeroMediaType = "video" | "image" | "none";

/**
 * Converts any YouTube URL (watch, youtu.be, embed) into the embed URL format
 * the <iframe> expects, preserving a ?t= or ?start= timestamp if present.
 * Returns null if the URL isn't a recognizable YouTube link.
 */
export function youtubeEmbedUrl(rawUrl: string): string | null {
  if (!rawUrl) return null;
  const idMatch = rawUrl.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  if (!idMatch) return null;

  const videoId = idMatch[1];
  const timeMatch = rawUrl.match(/[?&](?:t|start)=(\d+)/);
  const startParam = timeMatch ? `?start=${timeMatch[1]}` : "";
  return `https://www.youtube.com/embed/${videoId}${startParam}`;
}

function resolveMedia(
  mediaType: AboutHeroMediaType,
  videoUrl: string,
  image: string,
) {
  if (mediaType === "video") {
    const embed = youtubeEmbedUrl(videoUrl);
    if (embed) return { kind: "video" as const, embed };
  }
  if (mediaType === "image" && image) {
    return { kind: "image" as const, src: image };
  }
  return { kind: "none" as const };
}

export function AboutHeroBlock({
  storyText,
  milestones,
  mediaType,
  videoUrl,
  image,
}: {
  storyText: string;
  milestones: AboutMilestone[];
  mediaType: AboutHeroMediaType;
  videoUrl: string;
  image: string;
}) {
  const media = resolveMedia(mediaType, videoUrl, image);

  const storyAndMilestones = (
    <div>
      <p
        className="text-[#3D3D3D] mb-8"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1rem",
          lineHeight: 1.9,
          fontWeight: 300,
        }}
      >
        {storyText}
      </p>
      <div className="flex flex-wrap gap-8">
        {milestones.map((m, i) => (
          <div key={`milestone-${i}`}>
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
              className="text-[#3D3D3D]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
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
  );

  if (media.kind === "none") {
    return <section>{storyAndMilestones}</section>;
  }

  return (
    <section>
      <div className="grid md:grid-cols-[1fr_400px] gap-12 md:gap-16 items-start">
        {storyAndMilestones}
        <div
          className="relative w-full rounded-[8px] overflow-hidden bg-black"
          style={{ paddingBottom: "56.25%" }}
        >
          {media.kind === "video" && (
            <iframe
              src={media.embed}
              title="Community of Hope video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
          {media.kind === "image" && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={media.src}
              alt="About Community of Hope"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
