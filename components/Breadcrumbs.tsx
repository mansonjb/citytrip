import Link from "next/link";
import { STR, localePath, type Locale } from "@/lib/i18n";

export function Breadcrumbs({
  items,
  locale = "en",
}: {
  items: { name: string; path: string }[];
  locale?: Locale;
}) {
  return (
    <nav aria-label="Breadcrumb" className="label-mono text-ink/50">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href={localePath(locale, "/")} className="hover:text-ink">
            {STR[locale].common.home}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <span aria-hidden>/</span>
            {i === items.length - 1 ? (
              <span className="text-ink/80">{item.name}</span>
            ) : (
              <Link
                href={localePath(locale, item.path)}
                className="hover:text-ink"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
