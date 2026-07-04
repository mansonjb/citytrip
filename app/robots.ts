import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Open to search engines AND AI crawlers (GEO strategy).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
