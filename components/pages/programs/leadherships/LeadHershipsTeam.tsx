/**
 * LeadHerships team roster — a flat list of equally-weighted groups.
 *
 * Deliberately NOT the About page's layout. About features the Executive
 * Director alone at the top, renders staff large and board small: a visual
 * hierarchy. Annette asked for this page to have none of that — no one
 * featured alone, board and directors treated as peers. So every person here
 * renders at the same size, and each group gets identical treatment.
 *
 * Groups are data, not code: staff add, rename, reorder, and remove groups
 * from the editor, so the org chart can change without a deploy.
 *
 * The caller owns the surrounding width container and background; this
 * component only owns its vertical rhythm.
 */

export type LeadHershipsTeamPerson = {
  name: string;
  role: string;
  image: string;
};

export type LeadHershipsTeamGroup = {
  label: string;
  people: LeadHershipsTeamPerson[];
};

function InitialsPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-[140px] h-[140px] sm:w-36 sm:h-36 rounded-[8px] bg-[#458CFE]/8 flex items-center justify-center mx-auto">
      <span
        className="text-[#458CFE]"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "1.6rem",
          fontWeight: 400,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

function PersonPhoto({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <div className="w-[140px] h-[140px] sm:w-36 sm:h-36 rounded-[8px] overflow-hidden mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }
  return <InitialsPlaceholder name={name} />;
}

export function LeadHershipsTeam({
  heading,
  groups = [],
}: {
  heading: string;
  groups?: LeadHershipsTeamGroup[];
}) {
  const populated = groups.filter((g) => g?.people?.length);

  // Nothing to show yet — render nothing rather than a heading over empty space.
  if (populated.length === 0) return null;

  return (
    <section
      style={{
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 160px)",
      }}
    >
      {heading && (
        <h2
          className="text-[#1A1A1A] mb-14 text-center"
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

      <div className="flex flex-col gap-14">
        {populated.map((group, gi) => (
          <div key={`group-${gi}`}>
            {group.label && (
              <span
                className="block text-[#458CFE] uppercase mb-8 text-center"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  fontWeight: 500,
                }}
              >
                {group.label}
              </span>
            )}

            {/* Centred wrap. Widths and gaps are sized so two fit per row on a
                phone and three on a wide screen: three keeps the common group
                sizes balanced (6 -> 3+3) and avoids leaving one person alone on
                a final row, which would read as "featured" — the exact thing
                this layout is meant to avoid. */}
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-12 max-w-[660px] mx-auto">
              {group.people.map((person, pi) => (
                <div
                  key={`p-${gi}-${pi}`}
                  className="w-[140px] sm:w-[160px] text-center"
                >
                  <PersonPhoto name={person.name} image={person.image} />
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
        ))}
      </div>
    </section>
  );
}
