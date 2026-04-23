export function LogoSlot({
  name,
  logo,
  size = "md",
}: {
  name: string;
  logo?: string | null;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
  };
  if (logo) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={logo}
        alt={`${name} logo`}
        className={`${sizes[size]} w-auto object-contain mx-auto`}
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
