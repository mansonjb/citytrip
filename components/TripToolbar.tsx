import Link from "next/link";

// Slim sticky in-page nav + persistent hotel CTA. Pure CSS sticky, no JS.
export function TripToolbar({
  items,
  cta,
}: {
  items: { href: string; label: string }[];
  cta?: { href: string; label: string };
}) {
  return (
    <div className="sticky top-[54px] z-40 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="label-mono whitespace-nowrap rounded-full px-3 py-1.5 text-ink/70 hover:bg-cream hover:text-ink"
          >
            {item.label}
          </a>
        ))}
        {cta ? (
          <Link
            href={cta.href}
            className="label-mono ml-auto whitespace-nowrap rounded-full border-2 border-ink px-4 py-1.5 font-semibold text-white"
            style={{ background: "var(--city)" }}
          >
            {cta.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
