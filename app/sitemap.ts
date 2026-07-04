import type { MetadataRoute } from "next";
import { cityBundles, countries } from "@/data";
import { MONTHS } from "@/lib/months";
import { listGuides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, priority: 1 },
    { url: absoluteUrl("/destinations"), lastModified: now, priority: 0.8 },
    { url: absoluteUrl("/guides"), lastModified: now, priority: 0.7 },
    { url: absoluteUrl("/guides/how-many-days"), lastModified: now, priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: now, priority: 0.3 },
  ];

  for (const g of countries()) {
    entries.push({
      url: absoluteUrl(`/destinations/${g.slug}`),
      lastModified: now,
      priority: 0.6,
    });
  }

  for (const { city } of cityBundles) {
    entries.push({
      url: absoluteUrl(`/${city.slug}`),
      lastModified: now,
      priority: 0.9,
    });
    entries.push({
      url: absoluteUrl(`/${city.slug}/where-to-stay`),
      lastModified: now,
      priority: 0.9,
    });
    entries.push({
      url: absoluteUrl(`/${city.slug}/on-a-budget`),
      lastModified: now,
      priority: 0.7,
    });
    for (const d of city.durations) {
      entries.push({
        url: absoluteUrl(`/${city.slug}/${d}-days`),
        lastModified: now,
        priority: 0.9,
      });
    }
    for (const m of MONTHS) {
      entries.push({
        url: absoluteUrl(`/${city.slug}/${m.slug}`),
        lastModified: now,
        priority: 0.6,
      });
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
