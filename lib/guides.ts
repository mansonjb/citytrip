import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
};

export function listGuides(): GuideMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, f), "utf8");
      const { data } = matter(raw);
      return {
        slug: f.replace(/\.mdx$/, ""),
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tag: (data.tag as string) ?? "Guide",
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getGuide(slug: string): { meta: GuideMeta; content: string } | null {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      tag: (data.tag as string) ?? "Guide",
    },
    content,
  };
}
