import { aboutLeadership } from "@/lib/constants";

function InitialsPlaceholder({ name, size = "lg" }: { name: string; size?: "lg" | "sm" }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const dimensions = size === "lg" ? "w-36 h-36" : "w-24 h-24";
  const fontSize = size === "lg" ? "1.6rem" : "1.1rem";

  return (
    <div
      className={`${dimensions} rounded-[8px] bg-[#458CFE]/8 flex items-center justify-center mx-auto`}
    >
      <span
        className="text-[#458CFE]"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize,
          fontWeight: 400,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

function PersonPhoto({ name, photo, size = "lg" }: { name: string; photo?: string | null; size?: "lg" | "sm" }) {
  const dimensions = size === "lg" ? "w-36 h-36" : "w-24 h-24";

  if (photo) {
    return (
      <div className={`${dimensions} rounded-[8px] overflow-hidden mx-auto`}>
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }
  return <InitialsPlaceholder name={name} size={size} />;
}

export function AboutLeadership() {
  const { executiveDirector, staff, board } = aboutLeadership;

  return (
    <section
      className="pt-16 pb-16 border-t border-[#EBEBEB]"
      style={{ paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}
    >
      <h2
        className="text-[#1A1A1A] mb-14"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
          fontWeight: 400,
          lineHeight: 1.3,
        }}
      >
        Leadership & Staff
      </h2>

      {/* Executive Director — featured, large photo */}
      <div className="text-center mb-16">
        <PersonPhoto name={executiveDirector.name} photo={executiveDirector.photo} size="lg" />
        <p
          className="text-[#1A1A1A] mt-5 mb-1"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
          }}
        >
          {executiveDirector.name}
        </p>
        <span
          className="text-[#5A5A5A]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
          }}
        >
          {executiveDirector.title}
        </span>
      </div>

      {/* Staff */}
      <div className="mb-14">
        <span
          className="block text-[#458CFE] uppercase mb-8"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            fontWeight: 500,
          }}
        >
          Staff
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          {staff.map((person) => (
            <div key={person.name} className="text-center">
              <PersonPhoto name={person.name} photo={person.photo} size="lg" />
              <p
                className="text-[#1A1A1A] mt-5 mb-1"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                {person.name}
              </p>
              <span
                className="text-[#5A5A5A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                }}
              >
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Board of Directors */}
      <div>
        <span
          className="block text-[#458CFE] uppercase mb-8"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            fontWeight: 500,
          }}
        >
          Board of Directors
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {board.map((person) => (
            <div key={person.name} className="text-center">
              <InitialsPlaceholder name={person.name} size="sm" />
              <p
                className="text-[#1A1A1A] mt-4 mb-1"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                {person.name}
              </p>
              <span
                className="text-[#5A5A5A]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                }}
              >
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
