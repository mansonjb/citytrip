# Perfect City Break — perfectcitybreak.com

Programmatic SEO + affiliate site for city breaks. The right number of days,
the right neighborhood, the right month, for each city.

## Stack

- Next.js 15 (App Router, SSG/ISR) + TypeScript strict + Tailwind CSS v4
- Programmatic content as typed TS in `/data`, editorial content as MDX in `/content`
- Monetization: Stay22 (map embeds + links), Tiqets/GetYourGuide/Viator for tickets
- Analytics: Plausible. Hosting: Vercel.

## Page matrix (per city)

| Route | Target query |
|---|---|
| `/[city]` | "lisbon city break" |
| `/[city]/[n]-days` | "lisbon in 3 days itinerary" |
| `/[city]/where-to-stay` | "where to stay in lisbon" |
| `/[city]/in-[month]` | "prague in february" |
| `/[city]/on-a-budget` | "lisbon on a budget" |

3 pilot cities (Lisbon, Prague, Seville) = 66 pages at launch.

## Develop

```bash
cp .env.example .env.local   # fill NEXT_PUBLIC_* vars
npm install
npm run dev
```

## Add a city

1. Create `data/cities/<slug>.ts` following the pattern in `lisbon.ts`
   (City + Neighborhoods + Pois + one Itinerary per duration).
2. Register it in `data/index.ts` (`import` + `cityBundles` array).
3. `npm run build`. Every page type generates automatically, including
   sitemap, llms context and internal links.

See `CLAUDE.md` for content rules and `BRIEF.md` for the full project brief.
