import { visaData, getCountryById } from "@/app/lib/visaData";
import CountryIntelligenceClient from "./CountryIntelligenceClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// ─── GENERATE STATIC PATHS ──────────────────────────────────────────────────
// This ensures all country pages are pre-rendered at build time for max speed.
export function generateStaticParams() {
  return visaData.map((c) => ({ country: c.id }));
}

// ─── DYNAMIC SEO METADATA ────────────────────────────────────────────────────
// This generates unique titles and descriptions for every country.
export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: countryId } = await params;
  const country = getCountryById(countryId);

  if (!country) return { title: "Country Not Found | NomadTax" };

  const title = `${country.name} Digital Nomad Visa 2026: Tax Calculator & Requirements`;
  const description = `Calculate your net savings in ${country.name} with the ${country.visaType}. Features 2026 tax rates (${(country.taxRate * 100).toFixed(0)}%), $${country.minIncome}/mo minimum income checks, and full document checklist.`;

  return {
    title,
    description,
    keywords: [
      `${country.name} digital nomad visa 2026`,
      `${country.name} tax residency`,
      `${country.name} remote work visa requirements`,
      `${country.name} cost of living nomad`,
      "nomad tax calculator",
    ],
    openGraph: {
      title,
      description,
      images: [`/flags/${country.id}-og.png`], // Optional: if you create country-specific OG images
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ─── MAIN SERVER COMPONENT ──────────────────────────────────────────────────
export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countryId } = await params;
  const country = getCountryById(countryId);

  if (!country) notFound();

  // 1. Country-Specific JSON-LD Schema
  // This helps Google display "Rich Snippets" for your specific country tools.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${country.name} Nomad Tax Calculator`,
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "description": `Tax and residency path calculator for the ${country.name} ${country.visaType}.`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "2026 Tax Rate Calculations",
      "Minimum Income Verification",
      "Document Checklist",
      "Residency Roadmap"
    ]
  };

  return (
    <>
      {/* Inject Structured Data into the Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-zinc-950">
        {/* Hidden H1 for SEO - Ensures Google knows the primary topic even if the UI uses fancy headings */}
        <h1 className="sr-only">
          {country.name} Digital Nomad Visa 2026 — Tax, Savings, and Requirements
        </h1>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumbs - Essential for Google Search "Path" visibility */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/#index" className="hover:text-blue-400 transition-colors">Visa Index</a>
            <span>/</span>
            <span className="text-zinc-300">{country.name}</span>
          </nav>

          {/* The Dashboard UI */}
          <CountryIntelligenceClient country={country} />
        </div>

        {/* Semantic Footer for Country Pages */}
        <footer className="mt-20 border-t border-zinc-900 py-12 text-center">
          <p className="text-xs text-zinc-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Data for {country.name} is based on the 2026 {country.visaType} legislative updates. 
            Always verify with a local tax professional before making financial commitments. 
            NomadTax is an intelligence tool, not a legal service.
          </p>
        </footer>
      </main>
    </>
  );
}