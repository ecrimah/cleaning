import type { MetadataRoute } from "next";
import { siteConfig, SERVICES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/pricing", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    // { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/book", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.6, freq: "weekly" },
  ];

  const serviceRoutes = SERVICES.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    freq: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
  }));
}
