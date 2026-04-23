import { visaData } from "@/app/lib/visaData";
import { MetadataRoute } from "next";

/**
 * Full Sitemap Generator
 * This file tells Google exactly which pages exist so they are indexed instantly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Define your production domain
  const baseUrl = "https://nomadtax.io"; 

  // 2. Map through your country data to create dynamic visa pages
  const countryUrls = visaData.map((country) => ({
    url: `${baseUrl}/visa/${country.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const, // Visa laws don't change daily, so weekly is ideal
    priority: 0.8, // High priority for individual country tools
  }));

  // 3. Define your core static pages (Home, Compare, etc.)
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0, // The homepage is the most important
    },
    {
      url: `${baseUrl}/compare`, // If you have a general comparison hub
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // 4. Combine and return the full list
  return [...staticUrls, ...countryUrls];
}