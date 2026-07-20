import { ImageResponse } from "next/og";
import { cities, getPublishedCity } from "@/data";
import { STR, fmt, type Locale } from "@/lib/i18n";

// Shared per-city OG image. Rendered by each locale's [city]/opengraph-image
// route so the card shows the localized city name, country and labels (it used
// to render only English, and only existed for the (en) group).
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function ogStaticParams() {
  // URL slugs are identical across locales, so the EN slug set covers all.
  return cities("en").map((c) => ({ city: c.slug }));
}

export async function renderCityOg(slug: string, locale: Locale) {
  const city = getPublishedCity(slug, locale);
  const t = STR[locale];
  const name = city?.name ?? "City break";
  const from = city?.accent.from ?? "#ff5a5f";
  const to = city?.accent.to ?? "#ffb100";
  const daysLabel = city
    ? fmt(t.home.daysIdealShort, { days: city.idealDays }).toUpperCase()
    : "";
  const bottomLabel = `${t.toolbar.whereToStay} · ${t.toolbar.whenToGo}`.toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${from}, ${to})`,
          padding: 64,
          border: "16px solid #1a1a2e",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            fontFamily: "monospace",
            letterSpacing: 4,
            color: "#ffffff",
          }}
        >
          <span>PERFECTCITYBREAK.COM</span>
          <span>
            {city?.airportCode ?? ""} · {city?.country.toUpperCase() ?? ""}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            fontFamily: "monospace",
            color: "#ffffff",
            borderTop: "4px dashed rgba(255,255,255,0.6)",
            paddingTop: 24,
          }}
        >
          <span>{daysLabel}</span>
          <span>{bottomLabel}</span>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
