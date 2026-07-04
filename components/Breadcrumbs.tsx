import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="label-mono text-ink/50">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <span aria-hidden>/</span>
            {i === items.length - 1 ? (
              <span className="text-ink/80">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
