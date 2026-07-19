import Image from "next/image";
import Link from "next/link";

export type CityCardData = {
  slug: string;
  href: string;
  name: string;
  country: string;
  image: string;
  imageAlt: string;
  idealDays: number;
  bestShort: string;
  budget: string;
  tagline: string;
  accentFrom: string;
  accentTo: string;
  keywords: string;
};

// Server-rendered city card grid. The cards ship as static HTML (no per-city
// data serialized to the client); the CityFinder client wrapper filters them
// live by toggling `hidden` on each [data-keywords] card.
export function CityGrid({
  cities,
  labels,
}: {
  cities: CityCardData[];
  labels: { days: string; best: string; budget: string };
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((c) => (
        <Link
          key={c.slug}
          href={c.href}
          data-keywords={c.keywords}
          className="group block overflow-hidden rounded-2xl bg-paper hard-shadow transition-transform hover:-translate-y-1"
          style={{
            ["--city" as string]: c.accentFrom,
            ["--city-to" as string]: c.accentTo,
          }}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={c.image}
              alt={c.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, var(--city), transparent 60%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/75 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
              <p className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-[2px_2px_0_rgba(26,26,46,0.4)]">
                {c.name}
              </p>
              <span className="stamp bg-paper/90 text-ink">{c.country}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 divide-x-2 divide-ink border-t-2 border-ink text-center">
            <div className="px-2 py-3">
              <p className="label-mono text-ink/45">{labels.days}</p>
              <p className="font-mono text-sm font-bold">{c.idealDays}</p>
            </div>
            <div className="px-2 py-3">
              <p className="label-mono text-ink/45">{labels.best}</p>
              <p className="font-mono text-sm font-bold">{c.bestShort}</p>
            </div>
            <div className="px-2 py-3">
              <p className="label-mono text-ink/45">{labels.budget}</p>
              <p className="font-mono text-sm font-bold">{c.budget}</p>
            </div>
          </div>
          <p className="border-t border-ink/10 px-5 py-3 text-sm text-ink/75">
            {c.tagline}
          </p>
        </Link>
      ))}
    </div>
  );
}
