"use client";

import { useRef, useState, type ReactNode } from "react";

// Thin client wrapper: owns only the search box and filters the
// server-rendered CityGrid children (each an element with data-keywords) by
// toggling `hidden`. No city data is serialized into the client bundle.
export function CityFinder({
  labels,
  children,
}: {
  labels: { placeholder: string; noResult: string };
  children: ReactNode;
}) {
  const [q, setQ] = useState("");
  const [empty, setEmpty] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQ(value);
    const needle = value.trim().toLowerCase();
    const nodes = gridRef.current?.querySelectorAll<HTMLElement>(
      "[data-keywords]"
    );
    if (!nodes) return;
    let visible = 0;
    nodes.forEach((n) => {
      const match =
        !needle || (n.dataset.keywords ?? "").includes(needle);
      n.hidden = !match;
      if (match) visible += 1;
    });
    setEmpty(visible === 0);
  }

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
          onChange={onChange}
          placeholder={labels.placeholder}
          aria-label={labels.placeholder}
          className="w-full rounded-full border-2 border-ink bg-paper py-3.5 pl-12 pr-4 text-lg font-medium outline-none transition-shadow focus:shadow-[4px_4px_0_var(--color-ink)]"
        />
      </div>

      <p
        hidden={!empty}
        className="rounded-2xl border-2 border-dashed border-ink/30 bg-paper/50 px-5 py-8 text-center text-ink/60"
      >
        {labels.noResult}
      </p>

      <div ref={gridRef}>{children}</div>
    </div>
  );
}
