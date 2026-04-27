export function LogoSlot({
  name,
  logo,
  size = "md",
  customHeight,
}: {
  name: string;
  logo?: string | null;
  size?: "sm" | "md" | "lg";
  /** Pixel height override from the CMS slider. Falls back to `size` preset when undefined. */
  customHeight?: number;
}) {
  const sizes = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
  };
  if (logo) {
    // `0` is the "no override" sentinel from the CMS slider; anything > 0 wins.
    const useCustom = typeof customHeight === "number" && customHeight > 0;
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={logo}
        alt={`${name} logo`}
        className={`${useCustom ? "" : sizes[size]} w-auto max-w-full object-contain mx-auto`}
        style={useCustom ? { height: `${customHeight}px` } : undefined}
      />
    );
  }
  return (
    <span
      className="text-[#458CFE]/50 block"
      style={{
        fontFamily: "'Libre Baskerville', serif",
        fontSize: size === "lg" ? "1.6rem" : size === "md" ? "1.1rem" : "0.9rem",
        fontWeight: 400,
        letterSpacing: "0.02em",
      }}
      aria-hidden="true"
    >
      {name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 3)
        .toUpperCase()}
    </span>
  );
}
