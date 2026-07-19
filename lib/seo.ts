import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";

export type Faq = { q: string; a: string };

// dateModified defaults to the build date so it advances on every deploy
// instead of being frozen. datePublished falls back to the site launch date.
const BUILD_DATE = new Date().toISOString().slice(0, 10);
const SITE_LAUNCH = "2026-07-04";
const OG_IMAGE = absoluteUrl("/opengraph-image");

const ORG = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    width: 1200,
    height: 630,
  },
};

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
  datePublished?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(opts.path),
    },
    image: opts.image ?? OG_IMAGE,
    author: ORG,
    publisher: ORG,
    datePublished: opts.datePublished ?? SITE_LAUNCH,
    dateModified: opts.dateModified ?? BUILD_DATE,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      // Google's ItemList guidance expects `item`, not `url`.
      item: absoluteUrl(item.path),
    })),
  };
}
