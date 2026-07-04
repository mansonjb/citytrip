import type { City } from "@/data/types";
import type { CSSProperties } from "react";

// Injects the per-city accent into the CSS cascade. Wrap each city page in
// <div style={cityVars(city)}> and every component below recolors itself.
export function cityVars(city: City): CSSProperties {
  return {
    ["--city" as string]: city.accent.from,
    ["--city-to" as string]: city.accent.to,
    ["--city-ink" as string]: city.accent.ink,
  };
}
