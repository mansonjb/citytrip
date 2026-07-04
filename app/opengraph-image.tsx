import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CityTrip Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf6ee",
          padding: 64,
          border: "16px solid #1a1a2e",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontFamily: "monospace",
            letterSpacing: 4,
            color: "#1a1a2e",
          }}
        >
          CITYTRIP GUIDES · CITY BREAK PASS
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.1,
          }}
        >
          <span>The right days.</span>
          <span style={{ color: "#2743d8" }}>The right neighborhood.</span>
          <span style={{ color: "#ff5a5f" }}>The right month.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            fontFamily: "monospace",
            color: "#1a1a2e",
            borderTop: "4px dashed #1a1a2e",
            paddingTop: 24,
          }}
        >
          <span>LIS · PRG · SVQ</span>
          <span>BOARDING NOW</span>
        </div>
      </div>
    ),
    size
  );
}
