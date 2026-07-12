export const SITE_NAME = "Perfect City Break";
// Fall back to the production domain, NOT localhost: if NEXT_PUBLIC_SITE_URL
// is ever missing on the host (e.g. not set on Vercel), the sitemap, robots,
// canonicals, hreflang and OG tags must still emit real perfectcitybreak.com
// URLs rather than http://localhost:3000.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://perfectcitybreak.com";
export const STAY22_AID = process.env.NEXT_PUBLIC_STAY22_AID ?? "";
// Stay22 "Let Me Allez" campaign id: auto-monetizes outbound booking links.
export const STAY22_LMA_ID =
  process.env.NEXT_PUBLIC_STAY22_LMA_ID ?? "6a48d53e72afe45e1b3300b0";
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";
// Google Analytics 4 measurement id. Empty string disables the tag.
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-X8NQ9PS06W";
// Microsoft Clarity project id. Empty string disables the tag.
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "xi3gvbv5ln";

export const SITE_DESCRIPTION =
  "The right number of days, the right neighborhood, the right month. Day-by-day city break itineraries built on real data, not filler.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
