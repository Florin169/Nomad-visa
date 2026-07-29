import { visaData, getCountryById } from "@/app/lib/visaData";
import { titleOverrides, descriptionOverrides } from "@/app/lib/metaOverrides";
import { countryFaqs } from "@/app/lib/faqData";
import CountryIntelligenceClient from "./CountryIntelligenceClient";
import CountryNarrative from "./CountryNarrative";
import CountryFaq from "./CountryFaq";
import CountryTaxSection from "./CountryTaxSection";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Share2 } from "lucide-react";

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

  if (!country) return { title: "Country Not Found | NomadTaxIndex" };

  const title =
    titleOverrides[countryId] ??
    `${country.name} Digital Nomad Visa 2026: Tax Calculator & Requirements`;

  const description =
    descriptionOverrides[countryId] ??
    `Calculate your net savings in ${country.name} with the ${country.visaType}. Features 2026 tax rates (${(country.taxRate * 100).toFixed(0)}%), $${country.minIncome}/mo minimum income checks, and full document checklist.`;

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
    alternates: {
      canonical: `https://www.nomadtaxindex.com/visa/${countryId}`,
    }
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

  // 2. FAQ JSON-LD Schema
  const faqs = countryFaqs[countryId] ?? [];
  // 3. BreadcrumbList JSON-LD Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.nomadtaxindex.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Visa Index",
        "item": "https://www.nomadtaxindex.com/#index"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${country.name} Digital Nomad Visa`,
        "item": `https://www.nomadtaxindex.com/visa/${countryId}`
      }
    ]
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a,
      },
    })),
  } : null;

  return (
    <>
      {/* Inject Structured Data into the Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      
      <main className="min-h-screen bg-zinc-950">
        {/* Main Navigation — sticky top bar */}
        <nav className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md" aria-label="Main Navigation">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 h-16 sm:h-14 flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              title="Return to Global Tax Index"
            >
              <ArrowLeft size={15} />
              Back
            </a>
            <div className="text-sm font-bold text-white">
              NOMAD<span className="text-blue-400">TAX INDEX</span>
            </div>
            <button
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Share this visa intelligence report"
            >
              <Share2 size={14} />
              Share
            </button>
          </div>
        </nav>

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

          {/* Editorial narrative + calculator context — server-rendered for Google */}
          <CountryNarrative country={country} />

          {/* The Dashboard UI */}
          <CountryIntelligenceClient country={country} />

          {/* Dedicated tax section — renders for Spain, Portugal etc. where tax intent dominates */}
          <CountryTaxSection country={country} />
          <CountryFaq faqs={faqs} countryName={country.name} />

          {/* Related guides — server-rendered links to guide pages for this country */}
          {(() => {
            const guideLinks: Record<string, { label: string; slug: string }[]> = {
              spain: [
                { label: "Spain Digital Nomad Visa Tax 2026 — Complete Guide", slug: "digital-nomad-visa-spain-tax-2026" },
                { label: "Spain Digital Nomad Visa Tax Rate — Beckham Law Breakdown", slug: "spain-digital-nomad-visa-tax-rate-2026" },
                { label: "Spain vs Portugal Digital Nomad Tax 2026", slug: "spain-vs-portugal-digital-nomad-tax-2026" },
              ],
              portugal: [
                { label: "Portugal Digital Nomad Tax Calculator 2026 — NHR 2.0", slug: "portugal-digital-nomad-tax-calculator-2026" },
                { label: "Spain vs Portugal Digital Nomad Tax 2026", slug: "spain-vs-portugal-digital-nomad-tax-2026" },
              ],
              france: [
                { label: "Does France Have a Digital Nomad Visa? (2026 Answer)", slug: "does-france-have-a-digital-nomad-visa" },
              ],
              thailand: [
                { label: "Move from UAE to Thailand — Tax & Visa Guide 2026", slug: "move-from-uae-to-thailand-2026" },
              ],
              uae: [
                { label: "Move from UAE to Thailand — Tax & Visa Guide 2026", slug: "move-from-uae-to-thailand-2026" },
              ],
            };

            const guides = guideLinks[countryId] ?? [];
            if (guides.length === 0) return null;

            return (
              <div className="mt-8 mb-4">
                <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">
                  Related guides
                </h2>
                <div className="flex flex-col gap-2">
                  {guides.map((guide) => (
                    <a
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 transition-all rounded-xl px-4 py-3"
                    >
                      <span className="text-sm text-zinc-300">{guide.label}</span>
                      <span className="text-zinc-600 text-xs shrink-0 ml-3">→</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ─── CRAWLABLE DOCUMENT & ROADMAP DATA ────────────────────────────────
              Visually hidden via sr-only but fully server-rendered and crawlable by Google.
              This surfaces the Document Vault and Roadmap tab content — unique structured
              data that Google cannot see when it is hidden behind client-side CSS tabs.
          ──────────────────────────────────────────────────────────────────────── */}
          <div className="sr-only">
            {/* Document requirements */}
            <section aria-label={`${country.name} Digital Nomad Visa Required Documents`}>
              <h2>{country.name} Digital Nomad Visa Required Documents 2026</h2>
              <p>
                The {country.visaType} requires {country.detailedDocs.length} documents
                for a complete application. Minimum income requirement: ${country.minIncome}/month.
                One-time government visa fee: ${country.visaFee}.
              </p>
              <ul>
                {country.detailedDocs.map((doc) => (
                  <li key={doc.id}>
                    <strong>{doc.title}</strong> ({doc.category}, {doc.difficulty} difficulty,
                    approximately {doc.estimatedDays} days to obtain):
                    {" "}{doc.description}
                  </li>
                ))}
              </ul>
            </section>

            {/* Residency roadmap */}
            <section aria-label={`${country.name} Digital Nomad Visa Application Roadmap`}>
              <h2>{country.name} Digital Nomad Visa Application Process 2026</h2>
              <p>
                The {country.visaType} application has {country.roadmap.length} stages.
                {country.pathToCitizenship
                  ? ` Path to citizenship available after ${country.citizenshipYears} years.`
                  : " No direct citizenship path through this visa."}
              </p>
              <ol>
                {country.roadmap.map((stage) => (
                  <li key={stage.stage}>
                    <strong>Stage {stage.stage}: {stage.title}</strong> — {stage.duration}.
                    {" "}{stage.description}
                    {stage.milestones.length > 0 && (
                      <>
                        {" "}Key milestones:{" "}
                        <ul>
                          {stage.milestones.map((milestone, i) => (
                            <li key={i}>{milestone}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          </div>
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