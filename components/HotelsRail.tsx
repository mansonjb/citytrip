import Image from "next/image";
import type { City, Hotel } from "@/data/types";
import { getNeighborhood } from "@/data";
import { STR, fmt, type Locale } from "@/lib/i18n";
import { AffiliateLink, stay22HotelUrl, stay22SearchUrl } from "./AffiliateLink";
import hotelPhotos from "@/data/hotel-photos.json";

// Real per-hotel photo (Apify / Google place) if we have one, else the
// illustrative stock fallback. Real photos are the same across locales.
const REAL_PHOTOS = hotelPhotos as Record<string, string>;

function HotelCard({
  hotel,
  city,
  locale,
}: {
  hotel: Hotel;
  city: City;
  locale: Locale;
}) {
  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "";
  const hood = getNeighborhood(city.slug, hotel.neighborhoodSlug, locale);
  const t = STR[locale].common;
  const realPhoto = REAL_PHOTOS[hotel.slug];
  const imgSrc = realPhoto ?? hotel.image;
  const imgAlt = realPhoto ? `${hotel.name}, ${city.name}` : hotel.imageAlt;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-paper hard-shadow">
      <div className="relative h-44">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <span className="stamp absolute left-3 top-3 bg-paper/95 text-ink">
          {hotel.bestFor}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 font-mono text-xs font-bold">
          {hotel.band}
        </span>
      </div>
      <div className="flex flex-1 flex-col border-t-2 border-ink p-4">
        <p className="label-mono" style={{ color: "var(--city)" }}>
          {hotel.style}
          {hood ? ` · ${hood.name}` : ""}
        </p>
        <h3 className="font-display mt-1 text-lg font-semibold leading-snug tracking-tight">
          {hotel.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">
          {hotel.blurb}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="font-mono text-xs text-ink/60">
            {t.from}{" "}
            <span className="text-sm font-bold text-ink">
              ~{hotel.priceFrom} EUR
            </span>
            {t.perNight}
          </p>
          <AffiliateLink
            href={stay22HotelUrl({
              hotelName: hotel.name,
              cityName: city.name,
              country: city.country,
              lat: hood?.lat ?? city.lat,
              lng: hood?.lng ?? city.lng,
              aid,
            })}
            className="label-mono whitespace-nowrap rounded-full border-2 border-ink bg-ink px-3.5 py-1.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {t.checkPrices}
          </AffiliateLink>
        </div>
      </div>
    </article>
  );
}

// The above-the-fold hotel selection (HotelsWithPets pattern): curated picks
// with photos, one splurge to one budget, each linking to Stay22.
export function HotelsRail({
  city,
  hotels,
  title,
  intro,
  columns = 4,
  locale = "en",
}: {
  city: City;
  hotels: Hotel[];
  title?: string;
  intro?: string;
  columns?: 2 | 4;
  locale?: Locale;
}) {
  if (!hotels.length) return null;
  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "";
  const t = STR[locale].hotels;
  return (
    <section id="hotels" className="scroll-mt-28">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title ?? fmt(t.defaultTitle, { city: city.name })}
          </h2>
          <p className="mt-2 max-w-2xl text-ink/75">
            {intro ?? t.defaultIntro}
          </p>
        </div>
        <AffiliateLink
          href={stay22SearchUrl({ lat: city.lat, lng: city.lng, aid })}
          className="label-mono whitespace-nowrap underline underline-offset-4"
        >
          {fmt(t.seeAll, { city: city.name })}
        </AffiliateLink>
      </div>
      <div
        className={`grid gap-5 sm:grid-cols-2 ${
          columns === 4 ? "lg:grid-cols-4" : ""
        }`}
      >
        {hotels.map((h) => (
          <HotelCard key={h.slug} hotel={h} city={city} locale={locale} />
        ))}
      </div>
      <p className="label-mono mt-3 text-ink/40">{t.photosNote}</p>
    </section>
  );
}
