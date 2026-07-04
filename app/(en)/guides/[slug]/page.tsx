import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getGuide, listGuides } from "@/lib/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Stamp } from "@/components/Stamp";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return listGuides().map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.meta.title,
    description: guide.meta.description,
    alternates: { canonical: `/guides/${slug}` },
  };
}

const mdxComponents = {
  a: (props: React.ComponentProps<"a">) =>
    props.href?.startsWith("/") ? (
      <Link href={props.href}>{props.children}</Link>
    ) : (
      <a {...props} />
    ),
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const path = `/guides/${slug}`;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd
        data={[
          articleSchema({
            title: guide.meta.title,
            description: guide.meta.description,
            path,
            dateModified: guide.meta.date,
          }),
          breadcrumbSchema([
            { name: "Guides", path: "/guides" },
            { name: guide.meta.title, path },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Guides", path: "/guides" },
          { name: guide.meta.title, path },
        ]}
      />
      <div className="mt-8">
        <Stamp color="#c0287e">{guide.meta.tag}</Stamp>
      </div>
      <h1 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        {guide.meta.title}
      </h1>
      <p className="label-mono mt-4 text-ink/50">
        Updated {guide.meta.date}
      </p>
      <article className="prose-guide mt-8">
        <MDXRemote source={guide.content} components={mdxComponents} />
      </article>
    </div>
  );
}
