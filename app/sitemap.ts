import type { MetadataRoute } from "next";
import { cityBundles, countries } from "@/data";
import { MONTHS } from "@/lib/months";
import { listGuides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";
import { LOCALES, localePath } from "@/lib/i18n";

// One entry per locale per page, with hreflang alternates linking siblings.
function localized(
  path: string,
  priority: number,
  now: Date
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = absoluteUrl(localePath(l, path));
  return LOCALES.map((l) => ({
    url: absoluteUrl(localePath(l, path)),
    lastModified: now,
    priority: l === "en" ? priority : Math.max(0.1, priority - 0.1),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    ...localized("/", 1, now),
    ...localized("/destinations", 0.8, now),
    // EN-only editorial section
    { url: absoluteUrl("/guides"), lastModified: now, priority: 0.7 },
    { url: absoluteUrl("/guides/how-many-days"), lastModified: now, priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: now, priority: 0.3 },
  ];

  for (const g of countries("en")) {
    entries.push(...localized(`/destinations/${g.slug}`, 0.6, now));
  }

  for (const { city } of cityBundles("en")) {
    entries.push(...localized(`/${city.slug}`, 0.9, now));
    entries.push(...localized(`/${city.slug}/where-to-stay`, 0.9, now));
    entries.push(...localized(`/${city.slug}/on-a-budget`, 0.7, now));
    for (const d of city.durations) {
      entries.push(...localized(`/${city.slug}/${d}-days`, 0.9, now));
    }
    for (const m of MONTHS) {
      entries.push(...localized(`/${city.slug}/${m.slug}`, 0.6, now));
    }
  }

  for (const g of listGuides()) {
    entries.push({
      url: absoluteUrl(`/guides/${g.slug}`),
      lastModified: now,
      priority: 0.7,
    });
  }

  return entries;
}
