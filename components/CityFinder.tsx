"use client";

import { useMemo, useState } from "react";
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

// Home search + photo grid. Filters the photo cards live by city or country.
export function CityFinder({
  cities,
  labels,
}: {
  cities: CityCardData[];
  labels: {
    placeholder: string;
    noResult: string;
    days: string;
    best: string;
    budget: string;
  };
}) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return cities;
    return cities.filter((c) => c.keywords.includes(needle));
  }, [q, cities]);

  return (
    <div>
      <div className="relative mb-8 max-w-xl">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={labels.placeholder}
          aria-label={labels.placeholder}
          className="w-full rounded-full border-2 border-ink bg-paper py-3.5 pl-12 pr-4 text-lg font-medium outline-none transition-shadow focus:shadow-[4px_4px_0_var(--color-ink)]"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border-2 border-dashed border-ink/30 bg-paper/50 px-5 py-8 text-center text-ink/60">
          {labels.noResult}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
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
                  <span className="stamp bg-paper/90 text-ink">
                    {c.country}
                  </span>
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
      )}
    </div>
  );
}
