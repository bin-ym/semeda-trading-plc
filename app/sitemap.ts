import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://semedatrading.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/sectors",
    "/sectors/export",
    "/sectors/floriculture",
    "/sectors/import",
    "/sectors/mining",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
