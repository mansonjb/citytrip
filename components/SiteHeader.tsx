import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight">
            Perfect<span className="text-coral">City</span>Break
          </span>
          <span className="label-mono hidden text-ink/60 sm:inline">
            .com
          </span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/destinations"
            className="label-mono text-ink/80 hover:text-ink"
          >
            Destinations
          </Link>
          <Link href="/guides" className="label-mono text-ink/80 hover:text-ink">
            Guides
          </Link>
          <Link
            href="/about"
            className="label-mono hidden text-ink/80 hover:text-ink sm:inline"
          >
            Method
          </Link>
        </nav>
      </div>
    </header>
  );
}
