"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export type CarouselPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

type PhotoCarouselProps = {
  photos: CarouselPhoto[];
  eyebrow?: string;
  heading?: string;
  description?: string;
  background?: "white" | "beige" | "dark";
  autoplay?: boolean;
  autoplayIntervalMs?: number;
};

const ease = [0.25, 0.1, 0.25, 1] as const;

const sectionPaddingLg = "clamp(80px, 10vw, 160px)";

const backgroundStyles = {
  white: {
    bg: "bg-white",
    heading: "text-[#1A1A1A]",
    body: "text-[#3D3D3D]",
    eyebrow: "text-[#458CFE]",
    arrowBg: "bg-white hover:bg-[#FAF8F5] border-[#EBEBEB]",
    arrowIcon: "text-[#1A1A1A]",
    dotActive: "bg-[#458CFE]",
    dotIdle: "bg-[#1A1A1A]/15 hover:bg-[#1A1A1A]/30",
    peekOverlay: "bg-white/55",
    captionBg: "bg-white border-[#EBEBEB]",
    captionText: "text-[#3D3D3D]",
  },
  beige: {
    bg: "bg-[#FAF8F5]",
    heading: "text-[#1A1A1A]",
    body: "text-[#3D3D3D]",
    eyebrow: "text-[#458CFE]",
    arrowBg: "bg-white hover:bg-white/90 border-[#EBEBEB]",
    arrowIcon: "text-[#1A1A1A]",
    dotActive: "bg-[#458CFE]",
    dotIdle: "bg-[#1A1A1A]/15 hover:bg-[#1A1A1A]/30",
    peekOverlay: "bg-[#FAF8F5]/60",
    captionBg: "bg-white border-[#EBEBEB]",
    captionText: "text-[#3D3D3D]",
  },
  dark: {
    bg: "bg-[#0F1D33]",
    heading: "text-white",
    body: "text-white/70",
    eyebrow: "text-[#8FB8FF]",
    arrowBg: "bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur",
    arrowIcon: "text-white",
    dotActive: "bg-[#8FB8FF]",
    dotIdle: "bg-white/25 hover:bg-white/50",
    peekOverlay: "bg-[#0F1D33]/60",
    captionBg: "bg-white/5 border-white/10",
    captionText: "text-white/75",
  },
} as const;

export function PhotoCarousel({
  photos,
  eyebrow,
  heading,
  description,
  background = "beige",
  autoplay = false,
  autoplayIntervalMs = 5500,
}: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);
  const total = photos.length;
  const styles = backgroundStyles[background];

  const go = useCallback(
    (next: number) => {
      if (total === 0) return;
      setDirection(next > index ? 1 : -1);
      setIndex(((next % total) + total) % total);
    },
    [index, total]
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  useEffect(() => {
    if (!autoplay || total <= 1) return;
    const id = window.setInterval(next, autoplayIntervalMs);
    return () => window.clearInterval(id);
  }, [autoplay, autoplayIntervalMs, next, total]);

  if (total === 0) return null;

  const prevIdx = (index - 1 + total) % total;
  const nextIdx = (index + 1) % total;
  const current = photos[index];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section className={styles.bg} style={{ padding: `${sectionPaddingLg} 0` }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {(eyebrow || heading || description) && (
          <motion.div
            className="text-center mb-12 md:mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease }}
          >
            {eyebrow && (
              <span
                className={`block ${styles.eyebrow} uppercase mb-4`}
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
            {heading && (
              <h2
                className={`${styles.heading} max-w-[560px] mx-auto`}
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
            {description && (
              <p
                className={`${styles.body} max-w-[640px] mx-auto mt-4`}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.96rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="region"
          aria-label="Photo gallery"
          aria-roledescription="carousel"
        >
          {/* Stage */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
            {/* Left peek */}
            {total > 1 && (
              <div
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[22%] h-[72%] rounded-[8px] overflow-hidden cursor-pointer"
                onClick={prev}
                aria-hidden="true"
              >
                <ImageWithFallback
                  src={photos[prevIdx].src}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${styles.peekOverlay}`} />
              </div>
            )}

            {/* Right peek */}
            {total > 1 && (
              <div
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[22%] h-[72%] rounded-[8px] overflow-hidden cursor-pointer"
                onClick={next}
                aria-hidden="true"
              >
                <ImageWithFallback
                  src={photos[nextIdx].src}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${styles.peekOverlay}`} />
              </div>
            )}

            {/* Focal */}
            <div className="relative w-full md:w-[62%] h-full rounded-[8px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(15,29,51,0.35)]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
                  transition={{ duration: 0.7, ease }}
                  className="absolute inset-0"
                  aria-live="polite"
                >
                  <ImageWithFallback
                    src={current.src}
                    alt={current.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls row */}
          {total > 1 && (
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${styles.arrowBg}`}
              >
                <ChevronLeft size={18} strokeWidth={1.75} className={styles.arrowIcon} />
              </button>

              <div className="flex items-center gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    aria-current={i === index}
                    className={`h-[6px] rounded-full transition-all ${
                      i === index ? `w-6 ${styles.dotActive}` : `w-[6px] ${styles.dotIdle}`
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${styles.arrowBg}`}
              >
                <ChevronRight size={18} strokeWidth={1.75} className={styles.arrowIcon} />
              </button>
            </div>
          )}

          {/* Caption */}
          {current.caption && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`caption-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
                className={`max-w-[560px] mx-auto mt-6 border rounded-[8px] px-6 py-4 text-center ${styles.captionBg}`}
              >
                <p
                  className={styles.captionText}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {current.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export const hopeHousePlaceholderPhotos: CarouselPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    alt: "A warm, sunlit family-style living room",
    caption: "Our family-style living room, where residents gather, share meals, and support one another.",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    alt: "Bright kitchen with morning light",
    caption: "Mornings at Hope House — coffee, conversation, and a fresh start to every day.",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    alt: "Cozy bedroom with natural light",
    caption: "Private, peaceful spaces where residents can rest, reflect, and dream again.",
  },
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    alt: "Hands joined in support",
    caption: "Women supporting women — the heart of everything we do at Hope House.",
  },
  {
    src: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1400&q=80",
    alt: "Garden path outside a country home",
    caption: "The grounds around our barn and gardens — a quiet place to walk, think, and heal.",
  },
];

export const leadHershipPlaceholderPhotos: CarouselPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    alt: "Elegant event hall with tables and stage",
    caption: "Past LeadHerships events have brought together community leaders from across Connecticut.",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80",
    alt: "Group of women celebrating at an event",
    caption: "Honorees and guests celebrating the women who lead, serve, and inspire.",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
    alt: "Woman speaking at a podium",
    caption: "Honoree remarks — stories of courage, leadership, and quiet impact.",
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
    alt: "Table setting at a formal event",
    caption: "Thoughtful details throughout the evening — every table tells a story.",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80",
    alt: "Audience applauding at event",
    caption: "A room full of supporters standing behind Community of Hope's mission.",
  },
];
