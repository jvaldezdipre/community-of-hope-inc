import { notFound } from "next/navigation";
import { requireEditor } from "@/lib/auth";
import { getPageContent } from "@/lib/cms";
import { PageEditor } from "@/components/admin/PageEditor";

const EDITABLE_SLUGS = ["events"] as const;

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireEditor();
  const { slug } = await params;
  if (!EDITABLE_SLUGS.includes(slug as (typeof EDITABLE_SLUGS)[number])) {
    notFound();
  }

  const data = await getPageContent(slug);

  return <PageEditor slug={slug} initialData={data} />;
}
