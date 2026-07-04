import { LocaleChrome } from "@/app/_shared/chrome";

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocaleChrome locale="en">{children}</LocaleChrome>;
}
