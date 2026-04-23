import { SocialIcons, type SocialLinksShape } from "@/components/ui/SocialIcons";

export type ContactPhone = {
  label: string;
  number: string;
};

/**
 * Converts "860-912-4356" → "8609124356" for the tel: URL.
 */
function telHref(number: string) {
  return `tel:${number.replace(/[^0-9]/g, "")}`;
}

export function ContactSidebar({
  eyebrow,
  phones,
  followUsLabel,
  socialLinks,
}: {
  eyebrow: string;
  phones: ContactPhone[];
  followUsLabel: string;
  socialLinks?: SocialLinksShape;
}) {
  return (
    <aside className="bg-white rounded-[8px] border border-[#EBEBEB] p-6 md:p-8 md:sticky md:top-[140px]">
      {eyebrow && (
        <span
          className="block text-[#458CFE] uppercase mb-6"
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

      <div className="flex flex-col gap-6">
        {phones.map((p, i) => (
          <div key={`phone-${i}`}>
            <span
              className="block text-[#1A1A1A] mb-1"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.88rem",
                fontWeight: 500,
              }}
            >
              {p.label}
            </span>
            {p.number && (
              <a
                href={telHref(p.number)}
                className="text-[#458CFE] hover:underline transition-colors"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                }}
              >
                {p.number}
              </a>
            )}
          </div>
        ))}

        {followUsLabel && (
          <div className="pt-6 mt-2 border-t border-[#EBEBEB]">
            <span
              className="block text-[#1A1A1A] mb-3"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.88rem",
                fontWeight: 500,
              }}
            >
              {followUsLabel}
            </span>
            <SocialIcons variant="light" links={socialLinks} />
          </div>
        )}
      </div>
    </aside>
  );
}
