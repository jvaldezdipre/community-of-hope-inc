import { notFound } from "next/navigation";
import { requireEditor } from "@/lib/auth";
import { getPageContent } from "@/lib/cms";
import { isEditableSlug } from "@/lib/editable-pages";
import { PageEditor } from "@/components/admin/PageEditor";

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireEditor();
  const { slug } = await params;
  if (!isEditableSlug(slug)) notFound();

  const data = await getPageContent(slug);

  return <PageEditor slug={slug} initialData={data} />;
}
