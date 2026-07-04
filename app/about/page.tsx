import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { Stamp } from "@/components/Stamp";

export const metadata: Metadata = {
  title: "About CityTrip: how these guides are built",
  description:
    "The methodology behind CityTrip Guides: how we decide how many days a city needs, how neighborhoods are compared, and how the site makes money.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <Stamp color="#0e9b76">Methodology</Stamp>
      <h1 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        How these guides are built
      </h1>
      <div className="prose-guide mt-8">
        <h2>One decision per page</h2>
        <p>
          Every page on this site exists to settle one question: how many days,
          which neighborhood, which month, what budget. If a sentence does not
          help you decide, it gets cut. You will not find &quot;hidden
          gems&quot; here, and no intro paragraphs about cities being a blend
          of old and new.
        </p>
        <h2>How we decide how many days a city needs</h2>
        <p>
          We map each city&apos;s sights into geographic clusters and time
          them: visit duration, queue reality, transit between clusters, and
          meal stops. A city&apos;s ideal length is the number of days that
          covers its main clusters at a humane pace, with one unplanned block
          left over. That number drives everything else on the site, including
          the day-by-day itineraries.
        </p>
        <h2>How neighborhoods are compared</h2>
        <p>
          Each neighborhood is scored on what it is genuinely best for
          (first visit, nightlife, family, budget, romance, local life), and we
          state the cons as plainly as the pros. Noise at 2am is mentioned. So
          are cruise crowds and stag parties.
        </p>
        <h2>Every tip must be actionable</h2>
        <p>
          A tip earns its place if you can act on it: a booking window, a time
          of day, a free entry slot, a price, a mistake to skip. &quot;Worth a
          visit&quot; is banned by our own style guide.
        </p>
        <h2>How the site makes money</h2>
        <p>
          Hotel maps and booking links are affiliate links (Stay22 and ticket
          partners like Tiqets and GetYourGuide). If you book through them, we
          earn a commission at no extra cost to you. Recommendations are never
          reordered for commission: the same neighborhood advice would stand if
          the links paid nothing.
        </p>
        <h2>Freshness</h2>
        <p>
          Month pages are reviewed yearly, prices are indicative and rounded,
          and every page shows its last update. Found something outdated?{" "}
          <Link href="/destinations">Tell us via the city page</Link> and we
          will fix it.
        </p>
      </div>
    </div>
  );
}
