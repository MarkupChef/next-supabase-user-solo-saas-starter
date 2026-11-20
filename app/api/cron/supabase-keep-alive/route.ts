import { getPublicEnv } from "@/shared/config/env";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response(null, { status: 401 });
  }

  try {
    const env = getPublicEnv();
    const response = await fetch(
      new URL("/rest/v1/profiles?select=id&limit=1", env.NEXT_PUBLIC_SUPABASE_URL).href,
      {
        method: "HEAD",
        headers: { apikey: env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY },
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (response.ok) {
      return new Response(null, { status: 204 });
    }

    console.error("Supabase keep-alive query failed", response.status);
  } catch {
    console.error("Supabase keep-alive query could not complete");
  }

  return new Response(null, { status: 503 });
}
