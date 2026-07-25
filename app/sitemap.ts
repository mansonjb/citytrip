import type { MetadataRoute } from "next";
import { cityBundles, countries, publishedLocales } from "@/data";
import { MONTHS } from "@/lib/months";
import { listGuides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";

// One entry per published locale per page, with hreflang alternates linking
// siblings. `locales` defaults to all six; pass a subset for pages that only
// exist in some languages (EN-first cities) so we never list 404 URLs.
function localized(
  path: string,
  priority: number,
  now: Date,
  locales: readonly Locale[] = LOCALES
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = absoluteUrl(localePath(l, path));
  if (locales.includes("en")) {
    languages["x-default"] = absoluteUrl(localePath("en", path));
  }
  return locales.map((l) => ({
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
    { url: absoluteUrl("/guides/cheapest-city-breaks"), lastModified: now, priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: now, priority: 0.3 },
  ];

  for (const g of countries("en")) {
    entries.push(...localized(`/destinations/${g.slug}`, 0.6, now));
  }

  for (const { city } of cityBundles("en")) {
    const locs = publishedLocales(city.slug);
    entries.push(...localized(`/${city.slug}`, 0.9, now, locs));
    entries.push(...localized(`/${city.slug}/where-to-stay`, 0.9, now, locs));
    entries.push(...localized(`/${city.slug}/on-a-budget`, 0.7, now, locs));
    for (const d of city.durations) {
      entries.push(...localized(`/${city.slug}/${d}-days`, 0.9, now, locs));
    }
    for (const m of MONTHS) {
      entries.push(...localized(`/${city.slug}/${m.slug}`, 0.6, now, locs));
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
