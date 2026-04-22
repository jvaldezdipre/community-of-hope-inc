import { redirect } from "next/navigation";
import { DEFAULT_ADMIN_SLUG } from "@/lib/editable-pages";

export default function AdminIndex() {
  redirect(`/admin/pages/${DEFAULT_ADMIN_SLUG}`);
}
