export type HopeHouseFaqLink = {
  label: string;
  url: string;
};

export type HopeHouseFaqItem = {
  question: string;
  answer: string;
  helpfulLinks: HopeHouseFaqLink[];
};

export function HopeHouseFAQ({
  heading,
  faqs,
}: {
  heading: string;
  faqs: HopeHouseFaqItem[];
}) {
  if (faqs.length === 0 && !heading) return null;

  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(80px, 10vw, 160px) 0" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {heading && (
          <h2
            className="text-[#1A1A1A] mb-8"
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
        <div className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <details key={`faq-${i}`} className="border-t border-[#EBEBEB] group">
              <summary
                className="flex items-center justify-between cursor-pointer py-5 text-[#1A1A1A] select-none list-none [&::-webkit-details-marker]:hidden"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                {faq.question}
                <span className="text-[#458CFE]/50 text-xl ml-4 shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              {faq.answer && (
                <p
                  className="text-[#3D3D3D] pb-4 pr-8"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {faq.answer}
                </p>
              )}
              {faq.helpfulLinks.length > 0 && (
                <div className="flex flex-wrap gap-x-5 gap-y-2 pb-6 pr-8">
                  {faq.helpfulLinks.map((link, li) => (
                    <a
                      key={`link-${li}`}
                      href={link.url || "#"}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-[#458CFE] hover:underline"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                      }}
                    >
                      {link.label} &rarr;
                    </a>
                  ))}
                </div>
              )}
            </details>
          ))}
          {faqs.length > 0 && <div className="border-t border-[#EBEBEB]" />}
        </div>
      </div>
    </section>
  );
}
