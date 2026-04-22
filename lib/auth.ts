import { redirect } from "next/navigation";
import { getSupabaseServer } from "./supabase/server";

/**
 * Permission keys stored in the user's JWT user_metadata.permissions.
 * Mirrors the Permissions interface in coh-dashboard/src/lib/team-data.ts.
 */
export type PermissionKey =
  | "viewDashboard"
  | "viewInquiries"
  | "editInquiries"
  | "viewApplicants"
  | "viewApplicantPhi"
  | "approveTestimonials"
  | "editWebsiteContent"
  | "manageTeam";

type UserMetadata = {
  role?: "Admin" | "Staff" | "Volunteer";
  permissions?: Partial<Record<PermissionKey, boolean>>;
  name?: string;
};

export async function getCurrentUser() {
  const supabase = await getSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/**
 * Matches the dashboard's bootstrap rule: users with NO role/permissions
 * metadata are treated as Admin so the first manually-created Supabase user
 * can always edit without a chicken-and-egg setup problem.
 */
export function hasPermission(
  metadata: UserMetadata | null | undefined,
  key: PermissionKey,
): boolean {
  if (!metadata) return false;
  const hasAnyMetadata =
    metadata.role !== undefined || metadata.permissions !== undefined;
  if (!hasAnyMetadata) return true;
  if (metadata.role === "Admin") return true;
  return metadata.permissions?.[key] === true;
}

export async function requireEditor() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/admin/login");
  }
  const metadata = user.user_metadata as UserMetadata;
  if (!hasPermission(metadata, "editWebsiteContent")) {
    redirect("/admin/login?error=forbidden");
  }
  return { user, metadata };
}
