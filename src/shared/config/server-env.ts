import "server-only";

import { z } from "zod";

const accountDeletionEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
});

export type AccountDeletionEnv = z.infer<typeof accountDeletionEnvSchema>;

function readAccountDeletionEnv() {
  return {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  };
}

export function getAccountDeletionEnv(): AccountDeletionEnv {
  const parsed = accountDeletionEnvSchema.safeParse(readAccountDeletionEnv());

  if (!parsed.success) {
    throw new Error(
      `Invalid account deletion environment variables: ${parsed.error.issues
        .map((issue) => issue.path.join("."))
        .join(", ")}`,
    );
  }

  return parsed.data;
}

export function hasAccountDeletionEnv() {
  return accountDeletionEnvSchema.safeParse(readAccountDeletionEnv()).success;
}
