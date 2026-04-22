import Link from "next/link";
import { requireEditor } from "@/lib/auth";
import { SignOutButton } from "@/components/admin/SignOutButton";

const EDITABLE_PAGES = [
  {
    slug: "events",
    label: "Events page header",
    description: "The H1 and intro paragraph shown above the events list.",
  },
];

export default async function AdminPagesIndex() {
  const { user, metadata } = await requireEditor();

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1
              className="text-[#1A1A1A] mb-1"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
              }}
            >
              Website content
            </h1>
            <p
              className="text-[#3D3D3D]"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", fontWeight: 300 }}
            >
              Signed in as {metadata.name ?? user.email}
            </p>
          </div>
          <SignOutButton />
        </div>

        <ul className="space-y-3">
          {EDITABLE_PAGES.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/admin/pages/${page.slug}`}
                className="block bg-white border border-[#EBEBEB] rounded-[8px] p-5 hover:border-[#458CFE] transition-colors"
              >
                <p
                  className="text-[#1A1A1A] mb-1"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                  }}
                >
                  {page.label}
                </p>
                <p
                  className="text-[#3D3D3D]"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", fontWeight: 300 }}
                >
                  {page.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
