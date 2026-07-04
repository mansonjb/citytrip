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

// Deep link to the hotel search centered on a named property.
export function stay22HotelUrl(opts: {
  hotelName: string;
  cityName: string;
  aid: string;
}): string {
  const params = new URLSearchParams({
    aid: opts.aid || "perfectcitybreak",
    address: `${opts.hotelName}, ${opts.cityName}`,
  });
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
