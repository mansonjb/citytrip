import Link from "next/link";
import { cities } from "@/data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RootDocument } from "@/app/_shared/root-document";

// Global not-found: with per-locale root layouts there is no shared root, so
// this renders its own <html>/<body> via RootDocument.
export default function NotFound() {
  return (
    <RootDocument locale="en">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="stamp mx-auto text-coral">Gate closed</p>
          <h1 className="font-display mt-6 text-6xl font-bold tracking-tight">
            404
          </h1>
          <p className="mt-4 text-lg text-ink/75">
            This page missed its connection. The cities below are still boarding.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cities("en").map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="rounded-full border-2 border-ink bg-paper px-5 py-2 font-semibold transition-transform hover:-translate-y-0.5"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </RootDocument>
  );
}
