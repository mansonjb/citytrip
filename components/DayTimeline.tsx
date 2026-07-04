import type { DayPlan, Poi, Step } from "@/data/types";

const SLOTS: { key: "morning" | "afternoon" | "evening"; label: string }[] = [
  { key: "morning", label: "Morning" },
  { key: "afternoon", label: "Afternoon" },
  { key: "evening", label: "Evening" },
];

function formatDuration(min?: number) {
  if (!min) return null;
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${m.toString().padStart(2, "0")}` : `${h}h`;
}

function StepItem({ step, pois }: { step: Step; pois: Map<string, Poi> }) {
  const poi = step.poiSlug ? pois.get(step.poiSlug) : undefined;
  const duration = formatDuration(step.durationMin);
  return (
    <li className="relative pl-10">
      <span
        className="absolute left-[7px] top-1.5 size-5 rounded-full border-[3px] border-ink bg-paper"
        aria-hidden
      />
      <div className="flex flex-wrap items-baseline gap-x-2">
        {poi ? <span className="font-semibold">{poi.name}</span> : null}
        {duration ? (
          <span className="label-mono text-ink/45">{duration}</span>
        ) : null}
      </div>
      <p className="mt-1 leading-relaxed text-ink/85">{step.text}</p>
      {poi?.tip ? (
        <p className="mt-2 rounded-lg border border-ink/15 bg-cream px-3 py-2 text-sm leading-relaxed">
          <span
            className="label-mono mr-2"
            style={{ color: "var(--city)" }}
          >
            Tip
          </span>
          {poi.tip}
        </p>
      ) : null}
    </li>
  );
}

// The metro-line day-by-day view: one colored line per city (via --city),
// day headers as big stations, steps as stops.
export function DayTimeline({
  dayPlans,
  pois,
}: {
  dayPlans: DayPlan[];
  pois: Poi[];
}) {
  const poiMap = new Map(pois.map((p) => [p.slug, p]));
  return (
    <div className="space-y-12">
      {dayPlans.map((day) => (
        <section
          key={day.dayNumber}
          id={`day-${day.dayNumber}`}
          className="scroll-mt-28"
        >
          <div className="mb-6 flex items-center gap-4">
            <span
              className="flex size-12 items-center justify-center rounded-full border-2 border-ink font-mono text-sm font-bold text-white"
              style={{ background: "var(--city)" }}
            >
              D{day.dayNumber}
            </span>
            <div>
              <p className="label-mono text-ink/50">Day {day.dayNumber}</p>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {day.theme}
              </h3>
            </div>
          </div>
          <div className="metro-line space-y-8 pb-2">
            {SLOTS.map(({ key, label }) =>
              day[key].length ? (
                <div key={key}>
                  <p className="label-mono relative mb-3 pl-10">
                    <span
                      className="absolute left-[9px] top-0 size-4 rounded-full border-2 border-ink"
                      style={{ background: "var(--city-to)" }}
                      aria-hidden
                    />
                    {label}
                  </p>
                  <ul className="space-y-5">
                    {day[key].map((step, i) => (
                      <StepItem key={i} step={step} pois={poiMap} />
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
