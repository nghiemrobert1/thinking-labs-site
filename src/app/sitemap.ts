import type { MetadataRoute } from "next";

const base = "https://thinkinglabsinc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/product",
    "/how-it-works",
    "/safety",
    "/about",
    "/contact",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
