import { ImageResponse } from "next/og";
import { cities, getPublishedCity } from "@/data";

export const runtime = "nodejs";
export const alt = "City break guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return cities("en").map((c) => ({ city: c.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getPublishedCity(slug);
  const name = city?.name ?? "City break";
  const from = city?.accent.from ?? "#ff5a5f";
  const to = city?.accent.to ?? "#ffb100";
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
          <span>{city ? `${city.idealDays} DAYS IDEAL` : ""}</span>
          <span>WHERE TO STAY · WHEN TO GO</span>
        </div>
      </div>
    ),
    size
  );
}
