# Instructions d'exécution — CityTrip Guides

## Contexte
Site city breaks programmatique. Stack : Next.js 15 App Router, TS strict,
Tailwind v4, MDX (next-mdx-remote). Hosting Vercel + ISR. Monétisation : Stay22
(pivot) + Tiqets/GetYourGuide/Viator via le composant <AffiliateLink>.

Design system "Transit Editorial" : base crème #FAF6EE + encre #1A1A2E,
Fraunces (display) / Inter (body) / JetBrains Mono (labels), accent couleur
par ville (City.accent, injecté via cityVars() -> variables CSS --city).
Composants signature : BoardingPass (quick answer), DayTimeline (ligne de
métro), NeighborhoodBoard (tableau départ), Stamp, hard-shadow.

## Règles
- Données programmatiques : uniquement dans /data, typées (voir data/types.ts).
  Pour ajouter une ville : créer data/cities/<slug>.ts (City + Neighborhoods +
  Pois + Itineraries, une par durée) en suivant exactement le pattern de
  lisbon.ts, puis l'enregistrer dans data/index.ts (import + cityBundles).
- Contenu éditorial : MDX dans /content (frontmatter title, description,
  date, tag: Comparison|Seasonal|Planning|Guide).
- JAMAIS d'image sous copyright. Photos libres (Unsplash/Pexels) + alt
  descriptif. Pas d'API Google Places.
- Tout texte rédigé en propres mots. Chaque paragraphe autonome (GEO).
- Pas de tiret cadratin (—) dans les textes.
- Chaque page commence par un Quick Answer Block (BoardingPass, 150-200 mots).
- Tips POI : toujours une info actionnable (horaire, file, gratuité). Jamais
  de remplissage type "worth a visit" ou "nichée au cœur de".
- Liens affiliés : uniquement via <AffiliateLink>. aid Stay22 en env var
  (NEXT_PUBLIC_STAY22_AID), jamais en dur.
- Maillage interne généré depuis /data (durées <-> mois <-> where-to-stay <->
  villes voisines via nearbyCitySlugs, filtrées par getPublishedCity).
- Schema JSON-LD : Article + FAQPage sur toutes les pages, ItemList sur
  listicles, BreadcrumbList global (helpers dans lib/seo.ts).
- Aucune URL/domaine en dur : NEXT_PUBLIC_SITE_URL (lib/site.ts).
- Embeds Stay22 lazy-loadés (IntersectionObserver) pour le LCP.

## Commandes
- `npm run dev` : dev server (Turbopack)
- `npm run build` : build prod (vérifier avant tout push)
- `npm run lint` : ESLint
