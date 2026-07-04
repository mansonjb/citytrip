import { LocaleChrome } from "@/app/_shared/chrome";

export default function LocaleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleChrome locale="fr">{children}</LocaleChrome>;
}
