import { LogoSlot } from "./LogoSlot";

export type SupportersCategoryItem = {
  name: string;
  logo: string;
  notes: string;
  /** Optional pixel height override set via the CMS slider; 0/undefined → preset. */
  logoHeight?: number;
};

export type SupportersCategory = {
  label: string;
  items: SupportersCategoryItem[];
};

export function SupportersByCategory({
  heading,
  categories,
}: {
  heading: string;
  categories: SupportersCategory[];
}) {
  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[820px] mx-auto px-6">
        {heading && (
          <div className="text-center mb-14">
            <h2
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              {heading}
            </h2>
          </div>
        )}
        <div className="flex flex-col gap-14 md:gap-16">
          {categories
            .filter((c) => c.items.length > 0 || c.label)
            .map((category, ci) => (
              <div key={`cat-${ci}`} className="text-center">
                {category.label && (
                  <span
                    className="block text-[#458CFE] uppercase mb-4"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      fontWeight: 500,
                    }}
                  >
                    {category.label}
                  </span>
                )}
                <div className="relative pt-6">
                  <span
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-20 bg-[#458CFE]/30"
                    aria-hidden="true"
                  />
                  <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[620px] mx-auto">
                    {category.items.map((item, i) => (
                      <li
                        key={`cat-${ci}-${i}`}
                        className="flex flex-col items-center justify-center text-center min-h-[64px]"
                      >
                        {item.logo ? (
                          <LogoSlot
                            name={item.name}
                            logo={item.logo}
                            size="md"
                            customHeight={item.logoHeight}
                          />
                        ) : (
                          <span
                            className="text-[#1A1A1A]"
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.96rem",
                              fontWeight: 400,
                              lineHeight: 1.6,
                            }}
                          >
                            {item.name}
                            {item.notes && (
                              <span
                                className="text-[#3D3D3D] ml-1"
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: "0.85rem",
                                  fontWeight: 300,
                                }}
                              >
                                &mdash; {item.notes}
                              </span>
                            )}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
