# Instructions d'exécution — Perfect City Break

## Contexte
Site city breaks programmatique. Marque : Perfect City Break, domaine
perfectcitybreak.com (acheté, via NEXT_PUBLIC_SITE_URL, jamais en dur). Stack : Next.js 15 App Router, TS strict,
Tailwind v4, MDX (next-mdx-remote). Hosting Vercel + ISR. Monétisation : Stay22
(pivot) + Tiqets/GetYourGuide/Viator via le composant <AffiliateLink>.

Design system "Transit Editorial" : base crème #FAF6EE + encre #1A1A2E,
Fraunces (display) / Inter (body) / JetBrains Mono (labels), accent couleur
par ville (City.accent, injecté via cityVars() -> variables CSS --city).
Composants signature : BoardingPass (quick answer), DayTimeline (ligne de
métro), NeighborhoodBoard (tableau départ), Stamp, hard-shadow.

## i18n (6 locales : en racine, /fr /pt /it /de /es)
- UI : dictionnaires lib/i18n/{en,fr,pt,it,de,es}.ts (en.ts = shape canonique,
  les autres typés `typeof en`). Interpolation via fmt() et {placeholders}.
  Ajouter une locale = créer lib/i18n/<loc>.ts + l'enregistrer dans
  lib/i18n/index.ts (LOCALES, NON_DEFAULT_LOCALES, STR, LOCALE_LABELS,
  HTML_LANG) : sitemap, hreflang et le LanguageSwitcher s'auto-câblent depuis
  LOCALES. Puis wrappers app/<loc>/ (copie de app/fr/) + les 3 registres data.
- Contenu : un fichier de données PAR locale (data/cities/<slug>.<locale>.ts,
  data/hotels.<locale>.ts), même structure, seuls les champs rédigés traduits
  (slugs/nombres/coords/enums/URLs identiques). Registres : data/index.ts
  (bundlesByLocale) et data/hotels.ts (byLocale).
- Routes : templates partagés dans app/_shared/*.tsx (factories make*(locale)),
  wrappers minces dans app/(en)/ et app/{fr,pt,it,de,es}/. Slugs d'URL identiques
  dans toutes les langues ("3-days", "in-february"). hreflang + canonical via
  lib/i18n (hreflangs, localePath). Guides MDX + about/privacy : EN uniquement.
- Italien : préposition mois = "in {month}" (jamais "a {month}", problème
  euphonique "a aprile").

## Règles
- Données programmatiques : uniquement dans /data, typées (voir data/types.ts).
  Pour ajouter une ville : créer data/cities/<slug>.ts (City + Neighborhoods +
  Pois + Itineraries, une par durée) en suivant exactement le pattern de
  lisbon.ts, PUIS ses 5 traductions <slug>.{fr,pt,it,de,es}.ts, puis
  l'enregistrer dans data/index.ts (bundlesByLocale, les 6 tableaux). Ajouter
  aussi ses entrées dans data/extras.<loc>.ts et data/hotels.<loc>.ts pour les
  6 locales (es inclus).
- Contenu éditorial : MDX dans /content (frontmatter title, description,
  date, tag: Comparison|Seasonal|Planning|Guide).
- Contenu enrichi par ville (photo héros, histoire, "connu pour") : dans
  data/extras.<locale>.ts (type CityExtras), 1 record par ville par locale,
  accessible via getCityExtras(slug, locale). Photos héros = Pexels libre,
  URL + contrôle visuel obligatoires. NE PAS utiliser mix-blend-multiply pour
  teinter les photos (casse certaines couleurs, ex. Prague) : calque dégradé
  normal faible opacité + scrim ink en bas pour la lisibilité.
- Photos réelles des hôtels : pipeline Apify (actor compass~crawler-google-places),
  script scripts/sync-hotel-photos.mjs. `APIFY_TOKEN=... node scripts/sync-hotel-photos.mjs`
  (incrémental, --FORCE pour tout refaire). Télécharge 1 vraie photo/hôtel dans
  public/hotels/<citySlug>/<slug>.jpg et écrit data/hotel-photos.json (slug -> chemin).
  HotelCard utilise la vraie photo si présente, sinon fallback sur l'image px() stock.
  Token dans .env.local (gitignore, jamais commité). Après ajout d'hôtels, relancer le script.
- Hôtels (pattern HotelsWithPets) : 4 picks par ville dans data/hotels.ts
  (1 splurge, 2 mid, 1 budget, vrais établissements), affichés avec photo via
  <HotelsRail> dans le PREMIER TIERS de chaque page destination (hub,
  itinéraires, mois, where-to-stay, budget). Images libres Pexels/Unsplash
  uniquement, URL vérifiée (curl 200 + contrôle visuel), alt honnête,
  mention "Photos are illustrative". Liens via stay22HotelUrl (param address).
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
