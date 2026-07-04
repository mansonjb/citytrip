import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How CityTrip Guides handles data: no cookies, no tracking pixels, privacy-friendly analytics.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold tracking-tight">
        Privacy policy
      </h1>
      <div className="prose-guide mt-8">
        <p>Last updated: July 2026.</p>
        <h2>Analytics</h2>
        <p>
          This site uses Plausible Analytics, a privacy-friendly tool that
          collects aggregate statistics only. It sets no cookies, stores no
          personal data and does not track you across websites.
        </p>
        <h2>Affiliate links</h2>
        <p>
          Hotel maps and booking links are provided by partners (Stay22,
          Tiqets, GetYourGuide, Viator). When you click through to a partner,
          that partner may set cookies on its own domain under its own privacy
          policy. We receive aggregate commission reports, never your personal
          booking details.
        </p>
        <h2>Data we hold about you</h2>
        <p>
          None. There are no accounts, no comment forms and no newsletter yet.
          If a mailing list launches, it will be strictly opt-in.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy: contact the publisher via the domain
          registrar contact or the address published on this page once the
          entity details are finalized.
        </p>
      </div>
    </div>
  );
}
