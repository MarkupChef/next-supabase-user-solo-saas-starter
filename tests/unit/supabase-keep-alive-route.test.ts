import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { GET } from "../../app/api/cron/supabase-keep-alive/route";

const fetchMock = vi.fn<typeof fetch>();

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
  vi.stubEnv("CRON_SECRET", "test-secret");
  vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
  vi.stubEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY", "test-key");
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

function cronRequest(authorization?: string) {
  return new Request("https://example.vercel.app/api/cron/supabase-keep-alive", {
    headers: authorization ? { authorization } : {},
  });
}

it.each([undefined, "Bearer invalid"])("rejects authorization %s", async (authorization) => {
  expect((await GET(cronRequest(authorization))).status).toBe(401);
  expect(fetchMock).not.toHaveBeenCalled();
});

it("rejects requests when CRON_SECRET is missing", async () => {
  vi.stubEnv("CRON_SECRET", undefined);
  expect((await GET(cronRequest("Bearer undefined"))).status).toBe(401);
  expect(fetchMock).not.toHaveBeenCalled();
});

it("runs a read-only database query without returning profile data", async () => {
  fetchMock.mockResolvedValue(new Response(null, { status: 200 }));

  const response = await GET(cronRequest("Bearer test-secret"));

  expect(response.status).toBe(204);
  expect(await response.text()).toBe("");
  expect(fetchMock).toHaveBeenCalledExactlyOnceWith(
    "https://example.supabase.co/rest/v1/profiles?select=id&limit=1",
    expect.objectContaining({ method: "HEAD", cache: "no-store" }),
  );
});

it("reports a Supabase failure to the scheduler", async () => {
  fetchMock.mockResolvedValue(new Response(null, { status: 503 }));

  expect((await GET(cronRequest("Bearer test-secret"))).status).toBe(503);
});
