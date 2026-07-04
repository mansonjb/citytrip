import type { Metadata } from "next";
import Link from "next/link";
import { listGuides } from "@/lib/guides";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "City break guides: comparisons, seasons and smart planning",
  description:
    "Editorial guides that answer the questions between cities: which one to pick, when to go, how many days each city really needs.",
  alternates: { canonical: "/guides" },
};

const TAG_COLORS: Record<string, string> = {
  Comparison: "#c0287e",
  Seasonal: "#0e9b76",
  Planning: "#2743d8",
  Guide: "#ff5a5f",
};

export default function GuidesPage() {
  const guides = listGuides();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        data={[
          itemListSchema([
            { name: "How many days in each European city", path: "/guides/how-many-days" },
            ...guides.map((g) => ({ name: g.title, path: `/guides/${g.slug}` })),
          ]),
          breadcrumbSchema([{ name: "Guides", path: "/guides" }]),
        ]}
      />
      <p className="stamp mb-6 text-plum">Editorial</p>
      <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
        The questions between cities
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">
        City pages answer &quot;how&quot;. These guides answer &quot;which
        one&quot; and &quot;when&quot;.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Link
          href="/guides/how-many-days"
          className="rounded-2xl bg-ink p-7 text-cream hard-shadow transition-transform hover:-translate-y-1"
        >
          <span className="label-mono text-marigold">The master table</span>
          <p className="font-display mt-2 text-2xl font-semibold tracking-tight">
            How many days do you need in each European city?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/75">
            Every city on the site, its ideal duration and the reasoning, in
            one sortable answer.
          </p>
        </Link>
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="rounded-2xl bg-paper p-7 hard-shadow transition-transform hover:-translate-y-1"
          >
            <span
              className="label-mono"
              style={{ color: TAG_COLORS[g.tag] ?? TAG_COLORS.Guide }}
            >
              {g.tag}
            </span>
            <p className="font-display mt-2 text-2xl font-semibold tracking-tight">
              {g.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              {g.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
