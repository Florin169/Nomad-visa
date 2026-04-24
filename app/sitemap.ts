import { visaData } from "@/app/lib/visaData";
import { MetadataRoute } from "next";

/**
 * Optimized Sitemap Generator for NomadTax Index
 * Targets high-intent "vs" search queries by indexing all 421 combinations.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // 1. UPDATED DOMAIN: Using your live Spaceship domain
  const baseUrl = "https://nomadtaxindex.com"; 

  // 2. CORE STATIC PAGES
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0, 
    },
    {
      url: `${baseUrl}/compare`, 
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
  ];

  // 3. INDIVIDUAL COUNTRY PAGES (e.g., /visa/spain)
  const countryUrls = visaData.map((country) => ({
    url: `${baseUrl}/visa/${country.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 4. THE SHARK MOVE: DYNAMIC COMPARISON PAGES (e.g., /compare/spain-vs-portugal)
  // This loop matches the 421 routes Google's algorithm is starving for.
  const comparisonUrls: MetadataRoute.Sitemap = [];
  
  for (let i = 0; i < visaData.length; i++) {
    for (let j = i + 1; j < visaData.length; j++) {
      comparisonUrls.push({
        url: `${baseUrl}/compare/${visaData[i].id}-vs-${visaData[j].id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9, // Higher priority to dominate the "vs" search results
      });
    }
  }

  // 5. Combine everything into one massive index
  return [...staticUrls, ...countryUrls, ...comparisonUrls];
}