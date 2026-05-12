import type { MetadataRoute } from "next";
import { posts } from "@/lib/journal";
import { navLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: `${site.url}${link.href === "/" ? "" : link.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));

  const journalPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/journal/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...journalPosts];
}
