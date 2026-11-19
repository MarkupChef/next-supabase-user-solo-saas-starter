import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DELETE } from "../../app/api/account/route";
import { createSupabaseAdminClient } from "@/shared/api/supabase/admin";
import { createSupabaseServerClient } from "@/shared/api/supabase/server";
import { hasPublicEnv } from "@/shared/config/env";

vi.mock("@/shared/api/supabase/admin", () => ({
  createSupabaseAdminClient: vi.fn(),
}));

vi.mock("@/shared/api/supabase/server", () => ({
  createSupabaseServerClient: vi.fn(),
}));

vi.mock("@/shared/config/env", () => ({
  hasPublicEnv: vi.fn(),
}));

describe("DELETE /api/account", () => {
  const user = { id: "user-id", email: "jane@example.com" };
  const getUser = vi.fn();
  const signOut = vi.fn();
  const deleteUser = vi.fn();
  const from = vi.fn();
  const rpc = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "service-role-key");
    vi.mocked(hasPublicEnv).mockReturnValue(true);
    getUser.mockResolvedValue({ data: { user }, error: null });
    deleteUser.mockResolvedValue({ error: null });
    vi.mocked(createSupabaseServerClient).mockResolvedValue({
      auth: { getUser, signOut },
      from,
      rpc,
    } as never);
    vi.mocked(createSupabaseAdminClient).mockReturnValue({
      auth: { admin: { deleteUser } },
      from,
      rpc,
    } as never);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  function createDeleteRequest(email = user.email) {
    return new Request("http://localhost/api/account", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
  }

  it("returns unauthorized when there is no signed-in user", async () => {
    getUser.mockResolvedValue({ data: { user: null }, error: null });

    const response = await DELETE(createDeleteRequest());

    expect(response.status).toBe(401);
    expect(createSupabaseAdminClient).not.toHaveBeenCalled();
  });

  it("returns unavailable when the service role key is missing", async () => {
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", undefined);

    const response = await DELETE(createDeleteRequest());

    expect(response.status).toBe(503);
    expect(createSupabaseAdminClient).not.toHaveBeenCalled();
  });

  it("rejects mismatched confirmation email", async () => {
    const response = await DELETE(createDeleteRequest("other@example.com"));

    expect(response.status).toBe(400);
    expect(createSupabaseAdminClient).not.toHaveBeenCalled();
  });

  it("verifies and deletes the current user without querying usage or guard storage", async () => {
    const response = await DELETE(createDeleteRequest());

    expect(response.status).toBe(200);
    expect(getUser).toHaveBeenCalledBefore(deleteUser);
    expect(deleteUser).toHaveBeenCalledExactlyOnceWith(user.id, false);
    expect(from).not.toHaveBeenCalled();
    expect(rpc).not.toHaveBeenCalled();
    expect(deleteUser).toHaveBeenCalledBefore(signOut);
  });
});
