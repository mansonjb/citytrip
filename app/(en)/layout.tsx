import { LocaleChrome } from "@/app/_shared/chrome";
import {
  RootDocument,
  baseMetadata,
  baseViewport,
} from "@/app/_shared/root-document";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument locale="en">
      <LocaleChrome locale="en">{children}</LocaleChrome>
    </RootDocument>
  );
}
