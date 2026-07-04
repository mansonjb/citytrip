export const SITE_NAME = "Perfect City Break";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const STAY22_AID = process.env.NEXT_PUBLIC_STAY22_AID ?? "";
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";

export const SITE_DESCRIPTION =
  "The right number of days, the right neighborhood, the right month. Day-by-day city break itineraries built on real data, not filler.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
