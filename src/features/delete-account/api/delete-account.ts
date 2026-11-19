import { createSupabaseAdminClient } from "@/shared/api/supabase/admin";

export async function deleteCurrentAccount(userId: string) {
  const client = createSupabaseAdminClient();
  const { error } = await client.auth.admin.deleteUser(userId, false);

  if (error) {
    throw error;
  }
}
