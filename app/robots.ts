import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // Protect your data endpoints
    },
    sitemap: "https://nomadtax.io/sitemap.xml",
  };
}