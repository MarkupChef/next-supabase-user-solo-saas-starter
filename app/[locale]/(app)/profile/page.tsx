import { redirect } from "next/navigation";
import { canChangePasswordForUser } from "@/features/auth";
import { ProfileView } from "@/views/profile";
import { createSupabaseServerClient } from "@/shared/api/supabase/server";
import { hasPublicEnv } from "@/shared/config/env";
import { hasAccountDeletionEnv } from "@/shared/config/server-env";
import { getLocalizedPath, getSupportedLocale } from "@/shared/i18n";

export const dynamic = "force-dynamic";

type ProfilePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { locale: requestedLocale } = await params;
  const locale = getSupportedLocale(requestedLocale);
  const signInPath = getLocalizedPath(locale, "/sign-in");

  if (!hasPublicEnv()) {
    redirect(signInPath);
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    redirect(signInPath);
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <ProfileView
      canDeleteAccount={hasAccountDeletionEnv()}
      canChangePassword={canChangePasswordForUser(user)}
      email={user.email}
      fullName={profile?.full_name ?? null}
    />
  );
}
