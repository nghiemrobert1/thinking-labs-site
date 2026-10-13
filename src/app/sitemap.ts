import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/intake-twin", "/how-it-works", "/safety", "/about", "/contact", "/privacy"].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
