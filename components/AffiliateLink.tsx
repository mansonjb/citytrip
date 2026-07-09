import type { ReactNode } from "react";

// Every outbound monetized link goes through this component: one place for
// rel attributes, tracking params and a future partner swap.
export function AffiliateLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={className}
    >
      {children}
    </a>
  );
}

// Deep link to a specific property: the full address string names the exact
// hotel, and the coordinates (neighborhood-level) center the map tightly on it
// so Stay22 surfaces that hotel rather than a loose city search.
export function stay22HotelUrl(opts: {
  hotelName: string;
  cityName: string;
  country?: string;
  lat?: number;
  lng?: number;
  aid: string;
}): string {
  const address = [opts.hotelName, opts.cityName, opts.country]
    .filter(Boolean)
    .join(", ");
  const params = new URLSearchParams({
    aid: opts.aid || "perfectcitybreak",
    address,
  });
  if (opts.lat !== undefined && opts.lng !== undefined) {
    params.set("lat", String(opts.lat));
    params.set("lng", String(opts.lng));
  }
  return `https://www.stay22.com/allez/booking?${params.toString()}`;
}

export function stay22SearchUrl(opts: {
  lat: number;
  lng: number;
  aid: string;
  checkin?: string;
}): string {
  const params = new URLSearchParams({
    aid: opts.aid || "perfectcitybreak",
    lat: String(opts.lat),
    lng: String(opts.lng),
  });
  if (opts.checkin) params.set("checkin", opts.checkin);
  return `https://www.stay22.com/allez/booking?${params.toString()}`;
}
