import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

const i18nRouter = {
  replace: vi.fn(),
  refresh: vi.fn(),
};

vi.stubGlobal("__i18nRouter", i18nRouter);

vi.mock("@/shared/i18n", async () => ({
  ...(await import("@/shared/i18n/routing")),
  Link: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }) => React.createElement("a", { href, ...props }, children),
  getPathname: vi.fn(),
  redirect: vi.fn(),
  usePathname: () => "/dashboard",
  useRouter: () => i18nRouter,
}));
