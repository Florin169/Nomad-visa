// app/guides/[slug]/page.tsx — Server Component, no "use client"
import { guidesData, getGuideBySlug } from "@/app/lib/guidesData";
import { getCountryById } from "@/app/lib/visaData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return guidesData.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found | NomadTaxIndex" };

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: [guide.primaryKeyword, "digital nomad tax calculator", "nomad visa 2026"],
    alternates: {
      canonical: `https://www.nomadtaxindex.com/guides/${slug}`,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://www.nomadtaxindex.com/guides/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const country = getCountryById(guide.countryId);
  if (!country) notFound();

  // JSON-LD schemas
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.metaDescription,
    url: `https://www.nomadtaxindex.com/guides/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "NomadTaxIndex",
      url: "https://www.nomadtaxindex.com",
    },
    dateModified: new Date().toISOString().split("T")[0],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nomadtaxindex.com" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.nomadtaxindex.com/guides" },
      { "@type": "ListItem", position: 3, name: guide.h1, item: `https://www.nomadtaxindex.com/guides/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="bg-zinc-950 min-h-screen text-white pb-24 relative">
        {/* Ambient background glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute top-80 -left-20 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-3xl" />
        </div>

        {/* Nav */}
        <nav className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group px-2 py-1 rounded-lg hover:bg-zinc-900/50"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              <span className="hidden sm:inline font-medium">Back</span>
            </a>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight text-white">
                <span className="text-zinc-400 font-medium">NOMAD</span>TAX
              </span>
            </div>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-6 pt-12 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-zinc-300 transition-colors duration-200">Home</a>
            <svg className="w-3 h-3 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-zinc-400">Guides</span>
            <svg className="w-3 h-3 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-zinc-300 truncate max-w-[200px]">{guide.metaTitle}</span>
          </nav>

          {/* Hero */}
          <div className="mb-14">
            {/* Guide type badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 pl-2.5 pr-3 py-1 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                2026 Guide
              </span>
              <span className="text-xs text-zinc-500 font-medium bg-zinc-900/50 border border-zinc-800/60 px-3 py-1 rounded-full">
                {country.name} · {country.visaType}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {guide.h1}
            </h1>

            {/* Intro with left border accent */}
            <div className="relative pl-5">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent rounded-full" />
              <p className="text-sm text-zinc-400 leading-relaxed">
                {guide.intro}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-800/50 to-transparent mb-14" />

          {/* Content sections */}
          <div className="space-y-16">
            {guide.sections.map((section, i) => (
              <section key={i}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-mono text-zinc-500 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-white leading-snug pt-1">
                    {section.heading}
                  </h2>
                </div>

                {/* Table */}
                {section.table && (
                  <div className="overflow-x-auto w-full mb-6 rounded-2xl border border-zinc-800/60 shadow-xl shadow-black/20">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-800/60 bg-zinc-900/80">
                          {section.table.headers.map((h, j) => (
                            <th key={j} className="text-left py-3.5 px-5 text-zinc-400 font-medium text-[10px] uppercase tracking-widest first:rounded-tl-2xl last:rounded-tr-2xl">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, j) => (
                          <tr key={j} className="border-b border-zinc-900/60 hover:bg-zinc-900/40 transition-colors duration-200 last:border-0">
                            {row.map((cell, k) => {
                              const isGreen = cell.includes("+") || cell.toLowerCase().includes("exempt") || cell.toLowerCase().includes("yes");
                              const isRed = cell.includes("up to 47%") || cell.includes("up to 48%") || cell.includes("up to 45%");
                              const isHighlight = k === 0;
                              return (
                                <td key={k} className={`py-3.5 px-5 text-sm ${
                                  isHighlight ? "text-zinc-200 font-medium" :
                                  isGreen ? "text-emerald-400 font-medium" :
                                  isRed ? "text-red-400" :
                                  "text-zinc-400"
                                }`}>
                                  {cell}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* List */}
                {section.list && (
                  <ul className="space-y-3 mb-6">
                    {section.list.map((item, j) => (
                      <li key={j} className="group flex items-start gap-4 text-sm text-zinc-400 bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60 rounded-xl px-5 py-3.5 transition-all duration-200 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-black/10">
                        <span className="text-blue-400/80 mt-0.5 shrink-0 text-xs bg-blue-500/10 w-5 h-5 rounded-md flex items-center justify-center transition-colors group-hover:bg-blue-500/20">→</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Content */}
                {section.content && (
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((para, j) => (
                      <p key={j} className="text-sm text-zinc-400 leading-[1.7]">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Section divider */}
          <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-800/50 to-transparent my-16" />

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.82.146-1.99.794-1.995 1.811h-2.006c0-1.202.55-2.084 1.508-2.548.75-.354 1.298-1.098 1.298-1.96 0-1.118-.895-2.028-2-2.028-1.105 0-2 .91-2 2.028 0 .413.083.69.176.99" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 17h2v2h-2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-white">Frequently asked questions</h2>
            </div>
            <p className="text-sm text-zinc-500 mb-8 ml-11">Common questions about {guide.primaryKeyword}.</p>

            <div className="border border-zinc-800/60 rounded-2xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm divide-y divide-zinc-800/40">
              {guide.faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-zinc-900/40 transition-colors duration-200">
                    <span className="text-sm font-medium text-zinc-200 leading-relaxed">{faq.q}</span>
                    <span className="shrink-0 w-6 h-6 rounded-full border border-zinc-700/50 flex items-center justify-center text-zinc-500 group-open:rotate-45 transition-transform duration-300 text-sm leading-none bg-zinc-900/50">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-800/40">
                    <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Section divider */}
          <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-800/50 to-transparent my-16" />

          {/* CTA buttons */}
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-zinc-700 inline-block" />
              Run the numbers
            </p>
            <div className="flex flex-col gap-3">
              {guide.ctas.map((cta, i) => (
                <a
                  key={i}
                  href={cta.href}
                  className={`group flex items-center justify-between px-6 py-5 rounded-2xl border transition-all duration-200 ${
                    i === 0
                      ? "bg-blue-500/[0.03] border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
                      : "bg-zinc-900/30 border-zinc-800/60 hover:bg-zinc-900/50 hover:border-zinc-700/80 hover:shadow-lg hover:shadow-black/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold ${i === 0 ? "text-blue-300" : "text-zinc-300"}`}>
                      {cta.label}
                    </span>
                    {i === 0 && <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Popular</span>}
                  </div>
                  <span className={`text-sm transition-transform duration-200 group-hover:translate-x-0.5 ${i === 0 ? "text-blue-400" : "text-zinc-500"}`}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Related guides */}
          {guide.relatedGuides.length > 0 && (
            <div className="mt-12 pt-8 border-t border-zinc-800/40">
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-zinc-700 inline-block" />
                Related guides
              </p>
              <div className="grid gap-3">
                {guide.relatedGuides.map((relSlug) => {
                  const rel = getGuideBySlug(relSlug);
                  if (!rel) return null;
                  return (
                    <a
                      key={relSlug}
                      href={`/guides/${relSlug}`}
                      className="group flex items-center justify-between bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-200 rounded-2xl px-6 py-4 hover:shadow-lg hover:shadow-black/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-xs font-mono text-zinc-500">
                          {String(guide.relatedGuides.indexOf(relSlug) + 1).padStart(2, "0")}
                        </div>
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{rel.h1}</span>
                      </div>
                      <span className="text-zinc-600 group-hover:text-zinc-400 text-sm shrink-0 transition-colors duration-200">→</span>
                    </a>
                  );
                })}
              </div>

              {/* Additional compare links for guides */}
              {(() => {
                const compareLinks: Record<string, { label: string; href: string }[]> = {
                  "digital-nomad-visa-spain-tax-2026": [
                    { label: "Spain vs Portugal — side by side", href: "/compare/spain-vs-portugal" },
                    { label: "Spain vs France — tax comparison", href: "/compare/spain-vs-france" },
                    { label: "Spain vs Indonesia — savings comparison", href: "/compare/spain-vs-indonesia" },
                  ],
                  "spain-digital-nomad-visa-tax-rate-2026": [
                    { label: "Spain vs Portugal — tax rate comparison", href: "/compare/spain-vs-portugal" },
                    { label: "Spain vs Estonia — flat tax comparison", href: "/compare/spain-vs-estonia" },
                  ],
                  "portugal-digital-nomad-tax-calculator-2026": [
                    { label: "Portugal vs Spain — NHR 2.0 vs Beckham Law", href: "/compare/portugal-vs-spain" },
                    { label: "Portugal vs Thailand — savings comparison", href: "/compare/portugal-vs-thailand" },
                    { label: "Portugal vs France — citizenship path", href: "/compare/portugal-vs-france" },
                  ],
                  "spain-vs-portugal-digital-nomad-tax-2026": [
                    { label: "Spain vs France — tax comparison", href: "/compare/spain-vs-france" },
                    { label: "Portugal vs Thailand — savings", href: "/compare/portugal-vs-thailand" },
                    { label: "Spain vs Indonesia — lifestyle vs career", href: "/compare/spain-vs-indonesia" },
                  ],
                  "move-from-uae-to-thailand-2026": [
                    { label: "UAE vs Thailand — full calculator comparison", href: "/compare/uae-vs-thailand" },
                    { label: "UAE vs Spain — tax comparison", href: "/compare/uae-vs-spain" },
                    { label: "Thailand vs Portugal — citizenship vs savings", href: "/compare/thailand-vs-portugal" },
                  ],
                  "does-france-have-a-digital-nomad-visa": [
                    { label: "France vs Spain — visa comparison", href: "/compare/france-vs-spain" },
                    { label: "France vs Portugal — citizenship path", href: "/compare/france-vs-portugal" },
                    { label: "France vs South Korea — tax comparison", href: "/compare/france-vs-south-korea" },
                  ],
                };

                const links = compareLinks[slug] ?? [];
                if (links.length === 0) return null;

                return (
                  <div className="mt-6 pt-6 border-t border-zinc-800/60">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
                      Compare destinations
                    </p>
                    <div className="flex flex-col gap-2">
                      {links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 transition-all rounded-lg px-4 py-2.5"
                        >
                          <span className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">{link.label}</span>
                          <span className="text-zinc-600 text-xs shrink-0 ml-3">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-zinc-900/50 py-16 text-center relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <span className="text-xs text-zinc-500 font-medium">NomadTaxIndex</span>
          </div>
          <p className="text-xs text-zinc-600 max-w-2xl mx-auto px-4 leading-relaxed">
            {guide.disclaimer}
          </p>
        </footer>
      </main>
    </>
  );
}
