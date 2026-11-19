import { NextResponse } from "next/server";
import { createDeleteAccountSchema } from "@/features/delete-account";
import { deleteCurrentAccount } from "@/features/delete-account/server";
import { createSupabaseServerClient } from "@/shared/api/supabase/server";
import { hasPublicEnv } from "@/shared/config/env";
import { hasAccountDeletionEnv } from "@/shared/config/server-env";

const messages = {
  emailRequired: "Enter your current email to confirm account deletion.",
  emailMismatch: "The email does not match the signed-in account.",
};

async function readJson(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function DELETE(request: Request) {
  if (!hasPublicEnv()) {
    return NextResponse.json(
      { message: "Authentication is not configured." },
      { status: 503 },
    );
  }

  if (!hasAccountDeletionEnv()) {
    return NextResponse.json(
      { message: "Account deletion is not configured." },
      { status: 503 },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user?.email) {
    return NextResponse.json(
      { message: "You must be signed in to delete your account." },
      { status: 401 },
    );
  }

  const parsed = createDeleteAccountSchema(user.email, messages).safeParse(
    await readJson(request),
  );

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues.at(0)?.message ?? messages.emailMismatch },
      { status: 400 },
    );
  }

  try {
    await deleteCurrentAccount(user.id);
    await supabase.auth.signOut();

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Unable to delete account." },
      { status: 500 },
    );
  }
}
