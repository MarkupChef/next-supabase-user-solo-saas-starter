import { useTranslations } from "next-intl";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

const pageKeys = [
  "home",
  "pricing",
  "privacy",
  "terms",
  "signIn",
  "signUp",
  "forgotPassword",
  "resetPassword",
  "profile",
  "settings",
  "plan",
  "billing",
] as const;

export function StarterPagesSection() {
  const t = useTranslations("home.pages");

  return (
    <section
      aria-labelledby="starter-pages-title"
      className="border-t"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6">
        <h2 id="starter-pages-title" className="text-2xl font-semibold tracking-normal">
          {t("title")}
        </h2>
        <ul role="list" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pageKeys.map((page) => (
            <li key={page}>
              <Card className="h-full">
                <CardHeader className="gap-2 p-4">
                  <CardTitle className="text-base font-medium leading-normal">
                    {t(`items.${page}.title`)}
                  </CardTitle>
                  <CardDescription>{t(`items.${page}.description`)}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
