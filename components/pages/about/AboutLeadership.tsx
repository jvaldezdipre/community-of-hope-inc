export type LeadershipPerson = {
  name: string;
  role: string;
  image: string;
};

export type ExecutiveDirectorInfo = {
  name: string;
  title: string;
  image: string;
};

function InitialsPlaceholder({
  name,
  size = "lg",
}: {
  name: string;
  size?: "lg" | "sm";
}) {
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

function PersonPhoto({
  name,
  image,
  size = "lg",
}: {
  name: string;
  image?: string;
  size?: "lg" | "sm";
}) {
  const dimensions = size === "lg" ? "w-36 h-36" : "w-24 h-24";

  if (image) {
    return (
      <div className={`${dimensions} rounded-[8px] overflow-hidden mx-auto`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }
  return <InitialsPlaceholder name={name} size={size} />;
}

export function AboutLeadership({
  heading,
  executiveDirector,
  staffLabel,
  staff,
  boardLabel,
  board,
}: {
  heading: string;
  executiveDirector: ExecutiveDirectorInfo;
  staffLabel: string;
  staff: LeadershipPerson[];
  boardLabel: string;
  board: LeadershipPerson[];
}) {
  return (
    <section
      className="pt-16 pb-16"
      style={{
        paddingTop: "clamp(48px, 8vw, 80px)",
        paddingBottom: "clamp(48px, 8vw, 80px)",
      }}
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
        {heading}
      </h2>

      {/* Executive Director — featured, large photo */}
      {executiveDirector.name && (
        <div className="text-center mb-16">
          <PersonPhoto
            name={executiveDirector.name}
            image={executiveDirector.image}
            size="lg"
          />
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
            className="text-[#3D3D3D]"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
            }}
          >
            {executiveDirector.title}
          </span>
        </div>
      )}

      {/* Staff */}
      {staff.length > 0 && (
        <div className="mb-14">
          {staffLabel && (
            <span
              className="block text-[#458CFE] uppercase mb-8"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              {staffLabel}
            </span>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {staff.map((person, i) => (
              <div key={`staff-${i}`} className="text-center">
                <PersonPhoto name={person.name} image={person.image} size="lg" />
                <p
                  className="text-[#1A1A1A] mt-5 mb-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {person.name}
                </p>
                <span
                  className="text-[#3D3D3D]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                  }}
                >
                  {person.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Board of Directors */}
      {board.length > 0 && (
        <div>
          {boardLabel && (
            <span
              className="block text-[#458CFE] uppercase mb-8"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              {boardLabel}
            </span>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {board.map((person, i) => (
              <div key={`board-${i}`} className="text-center">
                <PersonPhoto name={person.name} image={person.image} size="sm" />
                <p
                  className="text-[#1A1A1A] mt-4 mb-1"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {person.name}
                </p>
                <span
                  className="text-[#3D3D3D]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                  }}
                >
                  {person.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
