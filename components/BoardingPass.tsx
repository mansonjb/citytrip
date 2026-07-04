import type { City } from "@/data/types";

// The signature quick-answer block, styled as a boarding pass.
// Top half: the direct answer (the part AI engines and snippets extract).
// Bottom half: mono data fields + a decorative barcode.
export function BoardingPass({
  city,
  kicker,
  answer,
  fields,
}: {
  city: City;
  kicker: string;
  answer: string;
  fields: { label: string; value: string }[];
}) {
  return (
    <section className="rounded-2xl bg-paper hard-shadow">
      <div className="flex items-center justify-between gap-3 rounded-t-2xl border-b-2 border-ink bg-ink px-5 py-3">
        <span className="label-mono text-cream">{kicker}</span>
        <span className="label-mono text-cream/70">
          {city.airportCode ?? city.name.slice(0, 3).toUpperCase()} ·{" "}
          {city.country.toUpperCase()}
        </span>
      </div>
      <div className="px-5 py-5 sm:px-7">
        <p className="text-[1.05rem] leading-relaxed text-ink/90">{answer}</p>
      </div>
      <div className="ticket-divider mx-0" />
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 px-5 py-5 sm:grid-cols-4 sm:px-7">
        {fields.map((f) => (
          <div key={f.label}>
            <p className="label-mono text-ink/50">{f.label}</p>
            <p className="mt-1 font-mono text-sm font-semibold">{f.value}</p>
          </div>
        ))}
        <div
          className="col-span-2 hidden items-end sm:col-span-4 sm:flex"
          aria-hidden
        >
          <svg width="180" height="28" className="text-ink">
            {[2, 8, 12, 20, 26, 30, 38, 44, 50, 58, 62, 70, 78, 82, 90, 96, 104, 110, 116, 124, 130, 138, 144, 152, 158, 166, 172].map(
              (x, i) => (
                <rect
                  key={x}
                  x={x}
                  y={0}
                  width={i % 3 === 0 ? 4 : 2}
                  height={28}
                  fill="currentColor"
                />
              )
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}
