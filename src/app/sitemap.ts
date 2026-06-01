import type { MetadataRoute } from "next";
import { aiTools } from "@/data/aiTools";

const siteUrl = "https://jack-tool-insight.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/ai-tools", "/free-plan", "/alternatives", "/tutorials", "/templates", "/cooperation", "/about"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...aiTools.map((tool) => ({
      url: `${siteUrl}/ai-tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
