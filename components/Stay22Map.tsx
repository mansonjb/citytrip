"use client";

import { useEffect, useRef, useState } from "react";
import { AffiliateLink, stay22SearchUrl } from "./AffiliateLink";

// Lazy-loaded Stay22 embed: the iframe only mounts once the block scrolls
// near the viewport, so it never competes with the LCP.
export function Stay22Map({
  lat,
  lng,
  title,
  accent,
}: {
  lat: number;
  lng: number;
  title: string;
  accent?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const color = (accent ?? "#ff5a5f").replace("#", "");
  const src = `https://www.stay22.com/embed/gm?aid=${encodeURIComponent(
    aid
  )}&lat=${lat}&lng=${lng}&markerlat=${lat}&markerlng=${lng}&maincolor=${color}&hidebrandlogo=true`;

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl hard-shadow bg-paper">
      <div className="flex items-center justify-between gap-2 border-b-2 border-ink bg-ink px-4 py-2.5">
        <span className="label-mono text-cream">{title}</span>
        <span
          className="size-2.5 rounded-full"
          style={{ background: accent ?? "#ff5a5f" }}
        />
      </div>
      {visible ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="h-[420px] w-full border-0"
        />
      ) : (
        <div className="flex h-[420px] items-center justify-center bg-cream">
          <span className="label-mono text-ink/50">Loading hotel map…</span>
        </div>
      )}
      <div className="border-t border-ink/10 px-4 py-2 text-xs text-ink/60">
        Map shows live hotel prices.{" "}
        <AffiliateLink
          href={stay22SearchUrl({ lat, lng, aid })}
          className="underline underline-offset-2"
        >
          Open the full hotel search
        </AffiliateLink>
        . Booking through it supports the site at no extra cost.
      </div>
    </div>
  );
}
