import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cityBundles, getCityData, getNeighborhood } from "@/data";
import { getHotels } from "@/data/hotels";
import { HotelsRail } from "@/components/HotelsRail";
import type { CityData, Month } from "@/data/types";
import { cityVars } from "@/lib/style";
import { MONTHS, monthByNum, parseSub } from "@/lib/months";
import { articleSchema, breadcrumbSchema, faqSchema, type Faq } from "@/lib/seo";
import { BoardingPass } from "@/components/BoardingPass";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DayTimeline } from "@/components/DayTimeline";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MonthGrid } from "@/components/MonthGrid";
import { Stamp } from "@/components/Stamp";
import { Stay22Map } from "@/components/Stay22Map";
import { TripToolbar } from "@/components/TripToolbar";

export const revalidate = 86400;
export const dynamicParams = false;

// One dynamic segment serves the two long-tail page types:
// "/lisbon/3-days" (itineraries) and "/lisbon/in-february" (months).
export function generateStaticParams() {
  const params: { city: string; sub: string }[] = [];
  for (const { city } of cityBundles) {
    for (const d of city.durations) {
      params.push({ city: city.slug, sub: `${d}-days` });
    }
    for (const m of MONTHS) {
      params.push({ city: city.slug, sub: m.slug });
    }
  }
  return params;
}

type Props = { params: Promise<{ city: string; sub: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, sub } = await params;
  const data = getCityData(citySlug);
  const route = parseSub(sub);
  if (!data || !route) return {};
  const { city } = data;
  if (route.type === "days") {
    return {
      title: `${city.name} in ${route.days} days: the itinerary that fits`,
      description: `A realistic day-by-day plan for ${route.days} days in ${city.name}: what to see each morning, afternoon and evening, where to sleep, and the tips that save you queues.`,
      alternates: { canonical: `/${city.slug}/${sub}` },
    };
  }
  const month = monthByNum(route.month)!;
  return {
    title: `${city.name} in ${month.name}: weather, crowds and is it worth it`,
    description: `${city.name} in ${month.name}: real temperatures, rain days, crowd levels, what to pack and whether it is the right month for your city break.`,
    alternates: { canonical: `/${city.slug}/${sub}` },
  };
}

export default async function SubPage({ params }: Props) {
  const { city: citySlug, sub } = await params;
  const data = getCityData(citySlug);
  const route = parseSub(sub);
  if (!data || !route) notFound();
  if (route.type === "days") {
    if (!data.city.durations.includes(route.days)) notFound();
    return <ItineraryPage data={data} days={route.days} />;
  }
  return <MonthPage data={data} month={route.month} />;
}

/* ---------------- Itinerary template ---------------- */

function ItineraryPage({ data, days }: { data: CityData; days: number }) {
  const { city, pois, neighborhoods, itineraries } = data;
  const itinerary = itineraries.find((i) => i.days === days)!;
  const stay = getNeighborhood(city.slug, itinerary.stayNeighborhoodSlug);
  const otherDurations = city.durations.filter((d) => d !== days);
  const path = `/${city.slug}/${days}-days`;

  const faqs: Faq[] = [
    {
      q: `Is ${days} days enough for ${city.name}?`,
      a: itinerary.summary.split(". ").slice(0, 3).join(". ") + ".",
    },
    {
      q: `Where should I stay for ${days} days in ${city.name}?`,
      a: stay
        ? `Base yourself in ${stay.name} for this itinerary. ${stay.vibe}`
        : `Stay central: see our where-to-stay guide for ${city.name}.`,
    },
    {
      q: `When is the best time for this ${city.name} itinerary?`,
      a: `The plan works year round, but ${city.bestMonths
        .slice(0, 3)
        .map((m) => monthByNum(m)?.name)
        .join(", ")} give you the best weather-to-crowds ratio.`,
    },
  ];

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({
            title: `${city.name} in ${days} days`,
            description: itinerary.summary.slice(0, 160),
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: city.name, path: `/${city.slug}` },
            { name: `${days} days`, path },
          ]),
        ]}
      />

      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          <Breadcrumbs
            items={[
              { name: city.name, path: `/${city.slug}` },
              { name: `${days} days`, path },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Stamp color={city.accent.from}>Day-by-day plan</Stamp>
            <Stamp color={city.accent.to}>{city.country}</Stamp>
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="highlight-city">{city.name}</span> in{" "}
            <span style={{ color: "var(--city)" }}>{days} days</span>
          </h1>
        </div>
      </section>

      <TripToolbar
        items={[
          { href: "#hotels", label: "Hotels" },
          ...itinerary.dayPlans.map((d) => ({
            href: `#day-${d.dayNumber}`,
            label: `Day ${d.dayNumber}`,
          })),
          { href: "#stay", label: "Where to sleep" },
          { href: "#faq", label: "FAQ" },
        ]}
        cta={{ href: "#hotels", label: "Find hotels" }}
      />

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-12">
        <BoardingPass
          city={city}
          kicker={`${days}-day itinerary`}
          answer={itinerary.summary}
          fields={[
            { label: "Duration", value: `${days} days` },
            { label: "Base", value: stay?.name ?? "Center" },
            { label: "Mid budget", value: `${city.budgetPerDay.mid * days} EUR` },
            {
              label: "Best months",
              value: city.bestMonths
                .slice(0, 3)
                .map((m) => monthByNum(m)?.short)
                .join(" · "),
            },
          ]}
        />

        <HotelsRail
          city={city}
          hotels={[...getHotels(city.slug)].sort((a, b) =>
            (b.neighborhoodSlug === itinerary.stayNeighborhoodSlug ? 1 : 0) -
            (a.neighborhoodSlug === itinerary.stayNeighborhoodSlug ? 1 : 0)
          )}
          columns={2}
          title={`Sleep well for these ${days} days`}
          intro={
            stay
              ? `Picks sorted with our recommended base, ${stay.name}, first. Book early: the good-value rooms go weeks ahead.`
              : undefined
          }
        />

        <DayTimeline dayPlans={itinerary.dayPlans} pois={pois} />

        <section id="stay" className="scroll-mt-28 space-y-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Where to sleep for this itinerary
          </h2>
          {stay ? (
            <p className="leading-relaxed text-ink/85">
              For {days} days, base yourself in <strong>{stay.name}</strong>.{" "}
              {stay.vibe} Compare all neighborhoods in the{" "}
              <Link
                href={`/${city.slug}/where-to-stay`}
                className="underline underline-offset-2"
              >
                full where-to-stay guide
              </Link>
              .
            </p>
          ) : null}
          <Stay22Map
            lat={stay?.lat ?? city.lat}
            lng={stay?.lng ?? city.lng}
            title={`Hotels in ${stay?.name ?? city.name}`}
            accent={city.accent.from}
          />
        </section>

        {otherDurations.length ? (
          <section className="grid gap-4 sm:grid-cols-2">
            {otherDurations.map((d) => (
              <Link
                key={d}
                href={`/${city.slug}/${d}-days`}
                className="rounded-2xl border-2 border-ink bg-paper p-5 transition-all hover:-translate-y-0.5 hover:hard-shadow"
              >
                <p className="label-mono text-ink/50">
                  {d < days ? "Short on time?" : "Got longer?"}
                </p>
                <p className="font-display mt-1 text-xl font-semibold">
                  {city.name} in {d} days →
                </p>
              </Link>
            ))}
          </section>
        ) : null}

        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}

/* ---------------- Month template ---------------- */

function packingList(highC: number, lowC: number, rainyDays: number): string[] {
  const items: string[] = ["Comfortable walking shoes: you will do 15k+ steps a day"];
  if (highC >= 28) items.push("Sun protection and a refillable water bottle: afternoons get hot");
  if (highC >= 20 && highC < 28) items.push("Light layers: warm afternoons, cooler evenings");
  if (lowC < 10) items.push("A real jacket and a warm layer for evenings");
  if (lowC < 3) items.push("Gloves and a hat: mornings sit near freezing");
  if (rainyDays >= 9) items.push("A compact umbrella or rain shell: rain is a real possibility");
  else if (rainyDays >= 6) items.push("A packable rain layer, just in case");
  return items;
}

function MonthPage({ data, month }: { data: CityData; month: Month }) {
  const { city, pois } = data;
  const m = monthByNum(month)!;
  const climate = city.climate[month];
  const note = city.monthlyNotes[month];
  const isBest = city.bestMonths.includes(month);
  const isAvoid = city.avoidMonths?.includes(month) ?? false;
  const path = `/${city.slug}/${m.slug}`;

  const verdict = isBest
    ? `${m.name} is one of the best months to visit ${city.name}.`
    : isAvoid
      ? `${m.name} is the month we would avoid in ${city.name} if you have flexible dates.`
      : `${m.name} is a decent shoulder option for ${city.name}: fewer crowds, some trade-offs.`;
  const answer = `${verdict} Expect daytime highs around ${climate.highC}°C, nights near ${climate.lowC}°C and roughly ${climate.rainyDays} rainy days across the month. ${note}`;

  const coldOrWet = climate.highC < 15 || climate.rainyDays >= 9;
  const picks = pois
    .filter((p) =>
      coldOrWet
        ? p.kind === "museum" || p.kind === "food" || p.kind === "experience"
        : p.kind === "viewpoint" || p.kind === "park" || p.kind === "sight"
    )
    .slice(0, 4);

  const faqs: Faq[] = [
    { q: `Is ${m.name} a good time to visit ${city.name}?`, a: answer },
    {
      q: `How warm is ${city.name} in ${m.name}?`,
      a: `Typical ${m.name} days in ${city.name} reach about ${climate.highC}°C, dropping to around ${climate.lowC}°C at night. Pack accordingly: ${packingList(climate.highC, climate.lowC, climate.rainyDays)[1] ?? "layers work best"}.`,
    },
    {
      q: `Does it rain in ${city.name} in ${m.name}?`,
      a: `Count on roughly ${climate.rainyDays} days with rain in ${m.name}. ${climate.rainyDays >= 9 ? "Plan one indoor block per day and keep museum tickets as your fallback." : "Rain rarely lasts all day, so plans hold up well."}`,
    },
  ];

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({ title: `${city.name} in ${m.name}`, description: answer.slice(0, 160), path }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: city.name, path: `/${city.slug}` },
            { name: m.name, path },
          ]),
        ]}
      />

      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          <Breadcrumbs
            items={[
              { name: city.name, path: `/${city.slug}` },
              { name: m.name, path },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {isBest ? (
              <Stamp color="#0e9b76">Great pick</Stamp>
            ) : isAvoid ? (
              <Stamp color="#ff5a5f">Think twice</Stamp>
            ) : (
              <Stamp color={city.accent.from}>Shoulder season</Stamp>
            )}
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="highlight-city">{city.name}</span> in{" "}
            <span style={{ color: "var(--city)" }}>{m.name}</span>
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-12">
        <BoardingPass
          city={city}
          kicker={`${m.name} forecast`}
          answer={answer}
          fields={[
            { label: "Day high", value: `${climate.highC}°C` },
            { label: "Night low", value: `${climate.lowC}°C` },
            { label: "Rainy days", value: `≈ ${climate.rainyDays}` },
            {
              label: "Verdict",
              value: isBest ? "Go" : isAvoid ? "Avoid" : "Fair",
            },
          ]}
        />

        <HotelsRail
          city={city}
          hotels={getHotels(city.slug)}
          columns={2}
          title={`Where to sleep in ${city.name} in ${m.name}`}
          intro={
            isBest
              ? `${m.name} is high demand: book 4 to 6 weeks out to keep these prices realistic.`
              : `${m.name} is quieter, which makes it the right month to afford the splurge picks.`
          }
        />

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            What to pack for {city.name} in {m.name}
          </h2>
          <ul className="space-y-2">
            {packingList(climate.highC, climate.lowC, climate.rainyDays).map(
              (item) => (
                <li
                  key={item}
                  className="rounded-xl border-2 border-ink/15 bg-paper px-4 py-3 leading-relaxed"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            What works well in {m.name}
          </h2>
          <p className="mb-5 leading-relaxed text-ink/80">
            {coldOrWet
              ? `With ${climate.rainyDays} rainy days and highs of ${climate.highC}°C, build your ${m.name} days around indoor anchors and treat sunny windows as a bonus.`
              : `With highs around ${climate.highC}°C, ${m.name} is outdoor weather: prioritize viewpoints, parks and long walks.`}
          </p>
          <ul className="space-y-4">
            {picks.map((p) => (
              <li key={p.slug} className="rounded-2xl bg-paper p-5 hard-shadow">
                <p className="font-semibold">{p.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">
                  <span className="label-mono mr-2" style={{ color: "var(--city)" }}>
                    Tip
                  </span>
                  {p.tip}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-ink/80">
            Ready to plan the full trip? Start from the{" "}
            <Link
              href={`/${city.slug}/${city.idealDays}-days`}
              className="underline underline-offset-2"
            >
              {city.idealDays}-day {city.name} itinerary
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            Hotels in {city.name} for {m.name}
          </h2>
          <Stay22Map
            lat={city.lat}
            lng={city.lng}
            title={`Hotels in ${city.name}`}
            accent={city.accent.from}
          />
        </section>

        <section>
          <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight">
            Or pick another month
          </h2>
          <MonthGrid city={city} current={month} />
        </section>

        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
