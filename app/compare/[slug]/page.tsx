import { parseCompareSlug, getCountryById, visaData } from "@/app/lib/visaData";
import CompareClient from "./CompareClient";
import { Metadata } from "next";

// ─── SEO METADATA GENERATION ──────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseCompareSlug(slug);

  if (!parsed) return { title: "Compare Digital Nomad Visas" };

  const [idA, idB] = parsed;
  const countryA = getCountryById(idA);
  const countryB = getCountryById(idB);

  if (!countryA || !countryB) return { title: "Comparison Not Found" };

  // SEO-optimized title for "vs" search intent
  const title = `${countryA.name} vs ${countryB.name} Digital Nomad Visa: 2026 Comparison`;
  
  // Detailed description to capture long-tail keywords like taxes, income requirements, and savings
  const description = `Compare ${countryA.name} and ${countryB.name} digital nomad visas side-by-side. See differences in income requirements (${countryA.minIncome}/mo vs ${countryB.minIncome}/mo), tax rates, and potential monthly savings.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Dynamic SEO Heading - Hidden from UI, visible to crawlers */}
      <h1 className="sr-only">
        Comparing Digital Nomad Visas: {countryA.name} vs {countryB.name} (2026 Guide)
      </h1>
      <CompareClient countryA={countryA} countryB={countryB} />
    </div>
  );
}