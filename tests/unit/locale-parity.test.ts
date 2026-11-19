import { describe, expect, it } from "vitest";
import en from "@/shared/i18n/messages/en";
import uk from "@/shared/i18n/messages/uk";

type Catalog = { readonly [key: string]: string | Catalog };

function messageKeys(catalog: Catalog): string[] {
  return Object.entries(catalog).flatMap(([key, value]) =>
    typeof value === "string"
      ? [key]
      : messageKeys(value).map((childKey) => `${key}.${childKey}`),
  );
}

describe("locale catalogs", () => {
  it("use the same message keys in English and Ukrainian", () => {
    expect(messageKeys(uk).sort()).toEqual(messageKeys(en).sort());
  });
});
