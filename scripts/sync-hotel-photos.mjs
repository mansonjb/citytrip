#!/usr/bin/env node
/**
 * Apify (compass~crawler-google-places) -> real photo per curated hotel.
 *
 *   APIFY_TOKEN=... node scripts/sync-hotel-photos.mjs
 *   FORCE=1 APIFY_TOKEN=... node scripts/sync-hotel-photos.mjs   # refetch all
 *
 * Parses data/hotels.en.ts for {slug, citySlug, name}, runs ONE Apify search
 * over all hotels (one place each, with images), downloads the first image to
 * public/hotels/<citySlug>/<slug>.jpg and writes data/hotel-photos.json
 * (slug -> public path). Real places only. Key never shipped.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TOKEN = process.env.APIFY_TOKEN || process.env.APIFY_API_KEY;
if (!TOKEN) {
  console.error("[hotels] APIFY_TOKEN missing");
  process.exit(1);
}
const FORCE = Boolean(process.env.FORCE);
const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const MANIFEST = join(ROOT, "data", "hotel-photos.json");

// Per-hotel query overrides where the plain "name + city" search hits the
// wrong place on Google (generic hotel names, franchises, etc.).
const QUERY_OVERRIDE = {
  "the-balmoral": "The Balmoral Hotel Princes Street Edinburgh Rocco Forte",
  "the-morgan": "The Morgan Hotel Fleet Street Temple Bar Dublin",
  "reykjavik-city-hostel":
    "Reykjavik City HI Hostel Sundlaugavegur Laugardalur Iceland",
  "fabrika-hostel-tallinn": "Fabrika Telliskivi Tallinn",
};

// Hotels whose Google Places match is unreliable and always resolves to the
// wrong property (checked manually). We deliberately keep NO real photo for
// these so they fall back to the stock px() image; never re-fetch them.
// la-maison-hotel-munich: Google keeps returning "Vi Vadi Hotel", a different
// property, so it stays on the stock fallback.
const SKIP = new Set(["la-maison-hotel-munich"]);

const CITY_NAME = {
  lisbon: "Lisbon",
  prague: "Prague",
  seville: "Seville Spain",
  porto: "Porto Portugal",
  budapest: "Budapest",
  vienna: "Vienna",
  granada: "Granada Spain",
  rome: "Rome Italy",
  amsterdam: "Amsterdam",
  florence: "Florence Italy",
  bruges: "Bruges Belgium",
  barcelona: "Barcelona",
  berlin: "Berlin",
  nice: "Nice France",
  dubrovnik: "Dubrovnik Croatia",
  reykjavik: "Reykjavik Iceland",
  munich: "Munich Germany",
  tallinn: "Tallinn Estonia",
  oslo: "Oslo Norway",
  helsinki: "Helsinki Finland",
  naples: "Naples Italy",
};

// --- parse hotels.en.ts for slug / citySlug / name ---
function parseHotels() {
  const src = readFileSync(join(ROOT, "data", "hotels.en.ts"), "utf8");
  const lines = src.split("\n");
  const out = [];
  let cur = {};
  for (const line of lines) {
    const s = line.match(/^\s{4}slug:\s*"([^"]+)"/);
    const c = line.match(/^\s{4}citySlug:\s*"([^"]+)"/);
    const n = line.match(/^\s{4}name:\s*"([^"]+)"/);
    if (s) cur = { slug: s[1] };
    else if (c && cur.slug) cur.citySlug = c[1];
    else if (n && cur.slug && cur.citySlug) {
      cur.name = n[1];
      out.push(cur);
      cur = {};
    }
  }
  return out;
}

async function runApify(queries) {
  const url = `https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items?token=${encodeURIComponent(
    TOKEN
  )}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      searchStringsArray: queries,
      maxCrawledPlacesPerSearch: 1,
      language: "en",
      includeImages: true,
      maxImages: 1,
      scrapeReviewsPersonalData: false,
      skipClosedPlaces: false,
    }),
  });
  if (!res.ok) {
    throw new Error(`Apify ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  return (await res.json());
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

const norm = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

async function main() {
  const hotels = parseHotels();
  console.log(`[hotels] ${hotels.length} hotels parsed`);

  const manifest = existsSync(MANIFEST)
    ? JSON.parse(readFileSync(MANIFEST, "utf8"))
    : {};

  const candidates = hotels.filter((h) => !SKIP.has(h.slug));
  const todo = FORCE
    ? candidates
    : candidates.filter((h) => {
        const p = join(PUBLIC, "hotels", h.citySlug, `${h.slug}.jpg`);
        return !existsSync(p);
      });
  if (!todo.length) {
    console.log("[hotels] nothing to do (all cached)");
    return;
  }
  console.log(`[hotels] fetching ${todo.length}`);

  const queries = todo.map(
    (h) =>
      QUERY_OVERRIDE[h.slug] ?? `${h.name} ${CITY_NAME[h.citySlug] ?? ""}`.trim()
  );
  // map normalized query -> hotel for result matching
  const byQuery = new Map(todo.map((h, i) => [norm(queries[i]), h]));

  // Chunk to stay under the sync endpoint time limit.
  const CHUNK = 10;
  const items = [];
  for (let i = 0; i < queries.length; i += CHUNK) {
    const batch = queries.slice(i, i + CHUNK);
    console.log(`[hotels] batch ${i / CHUNK + 1} (${batch.length} queries)...`);
    const part = await runApify(batch);
    items.push(...part);
  }
  console.log(`[hotels] Apify returned ${items.length} places`);

  // index results by searchString and by title for fuzzy fallback
  const usedSlugs = new Set();
  for (const it of items) {
    const imgs = Array.isArray(it.imageUrls) ? it.imageUrls : [];
    if (!imgs.length) continue;
    // find the hotel this result belongs to
    let hotel = it.searchString ? byQuery.get(norm(it.searchString)) : null;
    if (!hotel && it.title) {
      const t = norm(it.title);
      hotel =
        todo.find(
          (h) => !usedSlugs.has(h.slug) && (norm(h.name).includes(t) || t.includes(norm(h.name)))
        ) || null;
    }
    if (!hotel || usedSlugs.has(hotel.slug)) continue;
    usedSlugs.add(hotel.slug);
    const dir = join(PUBLIC, "hotels", hotel.citySlug);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const dest = join(dir, `${hotel.slug}.jpg`);
    try {
      await download(imgs[0], dest);
      manifest[hotel.slug] = `/hotels/${hotel.citySlug}/${hotel.slug}.jpg`;
      console.log(`  ${hotel.slug.padEnd(32)} OK (${it.title ?? "?"})`);
    } catch (err) {
      console.warn(`  ${hotel.slug.padEnd(32)} ! ${err.message}`);
    }
  }

  const missing = todo.filter((h) => !manifest[h.slug]).map((h) => h.slug);
  if (missing.length) console.log(`[hotels] no photo for: ${missing.join(", ")}`);

  writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `[hotels] manifest: ${Object.keys(manifest).length}/${hotels.length} hotels have a real photo`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
