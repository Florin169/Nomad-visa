import { parseCompareSlug, getCountryById, visaData } from "@/app/lib/visaData";
import { compareFaqs } from "@/app/lib/faqData";
import CompareClient from "./CompareClient";
import CompareFaq from "./CompareFaq";
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

  const url = `https://www.nomadtaxindex.com/compare/${slug}`;

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

  const faqs = compareFaqs[slug] ?? [];

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
      <h1 className="sr-only">
        {countryA.name} vs {countryB.name}: Digital Nomad Visa Comparison Guide (2026)
      </h1>

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <CompareClient countryA={countryA} countryB={countryB} />

      <CompareFaq
        faqs={faqs}
        countryAName={countryA.name}
        countryBName={countryB.name}
      />

      {/* Spain tax guide link — renders on all compare pages featuring Spain */}
      {(countryA.id === "spain" || countryB.id === "spain") && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-6">
          <a
            href="/guides/digital-nomad-visa-spain-tax-2026"
            className="flex items-center justify-between bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all rounded-xl px-5 py-4 w-full"
          >
            <div>
              <p className="text-xs text-zinc-500 mb-1">Spain tax guide</p>
              <p className="text-sm font-medium text-zinc-200">
                Digital Nomad Visa Spain Tax 2026 — Complete Beckham Law Guide →
              </p>
            </div>
          </a>
        </div>
      )}

      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex flex-col sm:flex-row gap-3"
        aria-label="View individual country details"
      >
        <a
          href={`/visa/${countryA.id}`}
          className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all rounded-xl px-4 py-3 text-sm text-zinc-400 hover:text-zinc-200"
        >
          <span>{countryA.flag}</span>
          <span>View full {countryA.name} details →</span>
        </a>
        <a
          href={`/visa/${countryB.id}`}
          className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all rounded-xl px-4 py-3 text-sm text-zinc-400 hover:text-zinc-200"
        >
          <span>{countryB.flag}</span>
          <span>View full {countryB.name} details →</span>
        </a>
      </nav>

      {/* Related comparisons — internal links to other compare pages featuring these two countries */}
      {(() => {
        const related = visaData
          .filter((c) => c.id !== countryA.id && c.id !== countryB.id)
          .slice(0, 6)
          .map((c) => ({
            labelA: `${countryA.name} vs ${c.name}`,
            hrefA: `/compare/${countryA.id}-vs-${c.id}`,
            labelB: `${countryB.name} vs ${c.name}`,
            hrefB: `/compare/${countryB.id}-vs-${c.id}`,
          }));

        return (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
              Related comparisons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {related.map((r, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <a
                    href={r.hrefA}
                    className="text-sm text-zinc-400 hover:text-zinc-200 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 transition-all rounded-lg px-4 py-2.5 flex items-center justify-between"
                  >
                    <span>{r.labelA}</span>
                    <span className="text-zinc-600 text-xs">→</span>
                  </a>
                  <a
                    href={r.hrefB}
                    className="text-sm text-zinc-400 hover:text-zinc-200 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 transition-all rounded-lg px-4 py-2.5 flex items-center justify-between"
                  >
                    <span>{r.labelB}</span>
                    <span className="text-zinc-600 text-xs">→</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        );
      })()}
    </>
  );
}