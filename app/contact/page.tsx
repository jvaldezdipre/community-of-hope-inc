import type { Metadata } from "next";
import { Render } from "@measured/puck/rsc";
import { PageLayout } from "@/components/layout/PageLayout";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/pages/home/ContactForm";
import { getPageContent, getSocialLinks } from "@/lib/cms";
import { puckConfig } from "@/puck.config";

const description =
  "Contact Community of Hope Inc. in Groton, CT. Reach us by phone, form, or visit. Main line 860-912-4356, Kindness Connection 860-856-5655. We're here to help.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const [pageData, socialLinks] = await Promise.all([
    getPageContent("contact"),
    getSocialLinks(),
  ]);

  const headerItems = pageData.content.filter(
    (c) => c.type === "Heading" || c.type === "Paragraph",
  );
  const sidebarItems = pageData.content.filter(
    (c) => c.type === "ContactSidebar",
  );

  return (
    <>
      <WebPageJsonLd
        name="Contact | Community of Hope Inc."
        description={description}
        path="/contact"
      />
      <PageLayout>
        {headerItems.length > 0 && (
          <Render
            config={puckConfig}
            data={{ content: headerItems, root: pageData.root } as typeof pageData}
          />
        )}

        <div className="grid md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-start">
          <div className="min-w-0">
            <ContactForm variant="standalone" />
          </div>
          <div>
            {sidebarItems.length > 0 && (
              <Render
                config={puckConfig}
                data={
                  { content: sidebarItems, root: pageData.root } as typeof pageData
                }
                metadata={{ socialLinks }}
              />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
