import { expect, test } from "@playwright/test";

const locales = [
  { path: "/", title: "Starter pages", stack: "Stack", billing: "Billing" },
  { path: "/uk", title: "Сторінки стартера", stack: "Стек", billing: "Білінг" },
] as const;

for (const { path, title, stack, billing } of locales) {
  test(`starter pages appear before the stack on ${path}`, async ({ page }) => {
    await page.goto(path);

    const section = page.getByRole("region", { name: title });
    const cards = section.getByRole("listitem");

    await expect(cards).toHaveCount(12);
    await expect(section.getByRole("heading", { name: billing, exact: true })).toBeVisible();
    await expect(section.locator("li p")).toHaveCount(12);
    await expect(section.getByRole("link")).toHaveCount(0);
    const nextSection = section.locator("xpath=following-sibling::*[1]");
    await expect(nextSection.getByRole("heading", { name: stack, exact: true })).toBeVisible();
  });
}

test("starter pages grid adapts to viewport width", async ({ page }) => {
  await page.goto("/");

  const grid = page.getByRole("region", { name: "Starter pages" }).getByRole("list");

  for (const [width, columns] of [[390, 1], [768, 2], [1280, 3]]) {
    await page.setViewportSize({ width, height: 900 });
    const tracks = new RegExp(`^\\S+( \\S+){${columns - 1}}$`);
    await expect(grid).toHaveCSS("grid-template-columns", tracks);
  }
});
