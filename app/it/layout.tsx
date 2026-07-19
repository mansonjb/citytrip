import { LocaleChrome } from "@/app/_shared/chrome";
import {
  RootDocument,
  baseMetadata,
  baseViewport,
} from "@/app/_shared/root-document";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function LocaleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument locale="it">
      <LocaleChrome locale="it">{children}</LocaleChrome>
    </RootDocument>
  );
}
