import { parseCompareSlug, getCountryById, visaData } from "@/app/lib/visaData";
import CompareClient from "./CompareClient";
import { Metadata } from "next";

// ─── SEO METADATA GENERATION ──────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseCompareSlug(slug);

  if (!parsed) return { title: "Compare Digital Nomad Visas | NomadTax Index" };

  const [idA, idB] = parsed;
  const countryA = getCountryById(idA);
  const countryB = getCountryById(idB);

  if (!countryA || !countryB) return { title: "Comparison Not Found | NomadTax Index" };

  // SEO-optimized title using high-intent keywords (Compare, 2026, Tax)
  const title = `${countryA.name} vs ${countryB.name} Digital Nomad Visa: 2026 Tax & Income Comparison`;
  
  // Description optimized for CTR (Click-Through Rate) by showing raw data immediately
  const description = `Side-by-side comparison: ${countryA.name} (${(countryA.taxRate * 100).toFixed(0)}% tax) vs ${countryB.name} (${(countryB.taxRate * 100).toFixed(0)}% tax). Compare income requirements ($${countryA.minIncome}/mo vs $${countryB.minIncome}/mo) and residency paths.`;

  const url = `https://nomadtaxindex.com/compare/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "NomadTax Index",
      locale: "en_US",
      type: "article", // Changed to article for better social card depth
      images: [
        {
          url: "/og-image.png", // This pulls your custom 1200x630 AI billboard
          width: 1200,
          height: 630,
          alt: `${countryA.name} vs ${countryB.name} comparison`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@nomadtaxindex",
      images: ["/og-image.png"],
    },
    // Keywords help with some smaller search engines
    keywords: [
      `${countryA.name} nomad visa`,
      `${countryB.name} nomad visa`,
      "digital nomad tax comparison",
      "0% tax countries 2026",
      "nomad visa requirements",
    ],
  };
}

export function generateStaticParams() {
  const pairs: { slug: string }[] = [];
  for (let i = 0; i < visaData.length; i++) {
    for (let j = i + 1; j < visaData.length; j++) {
      pairs.push({ slug: `${visaData[i].id}-vs-${visaData[j].id}` });
    }
  }
  return pairs;
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parsed = parseCompareSlug(slug);

  if (!parsed) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-400 px-4">
        Invalid comparison URL. Use format: /compare/spain-vs-portugal
      </div>
    );
  }

  const [idA, idB] = parsed;
  const countryA = getCountryById(idA);
  const countryB = getCountryById(idB);

  if (!countryA || !countryB) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-400 px-4">
        One or both countries not found.
      </div>
    );
  }

  return (
    <>
      {/* Semantic SEO Heading: 
          Invisible in UI but provides an H1 to crawlers which is mandatory 
          for a "Perfect" accessibility/SEO score.
      */}
      <h1 className="sr-only">
        {countryA.name} vs {countryB.name}: Digital Nomad Visa Comparison Guide (2026)
      </h1>
      <CompareClient countryA={countryA} countryB={countryB} />
    </>
  );
}