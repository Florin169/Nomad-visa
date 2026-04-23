"use client";

// app/visa/[country]/CountryIntelligenceClient.tsx — Client Component
// All useState/interactivity lives here

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Shield, Clock, Globe, Share2 } from "lucide-react";
import { VisaCountry, visaData } from "@/app/lib/visaData";
import NomadCalculator from "@/app/components/NomadCalculator";
import DocumentVault from "@/app/components/DocumentVault";
import ResidencyRoadmap from "@/app/components/ResidencyRoadmap";

type Tab = "calculator" | "documents" | "roadmap";

export default function CountryIntelligenceClient({ country }: { country: VisaCountry }) {
  const [tab, setTab] = useState<Tab>("calculator");

  const tabs: { id: Tab; label: string; count?: string }[] = [
    { id: "calculator", label: "Calculator" },
    { id: "documents", label: "Document Vault", count: country.detailedDocs.length.toString() },
    { id: "roadmap", label: "Roadmap", count: country.roadmap.length.toString() },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white pb-24">
      {/* Nav */}
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
            NOMAD<span className="text-blue-400">TAX</span>
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

      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-6 sm:pt-8">
        {/* Hero header - Semantic Article for Main Topic */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-6xl" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-bold text-white">{country.name}</h1>
                  {country.trending && (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <TrendingUp size={11} />
                      +{country.searchVelocity}% search velocity
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400">{country.visaType}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Globe size={11} />
                    {country.region}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Clock size={11} />
                    {country.maxStay}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Shield size={11} />
                    {country.pathToCitizenship
                      ? `Citizenship in ${country.citizenshipYears}yr`
                      : "No citizenship path"}
                  </span>
                </div>
              </div>
            </div>

            {/* Tax rate badge */}
            <div className="text-right shrink-0 sm:shrink" aria-label={`Effective income tax rate: ${(country.taxRate * 100).toFixed(0)}%`}>
              <p className="text-4xl font-bold text-white">
                {(country.taxRate * 100).toFixed(0)}%
              </p>
              <p className="text-xs text-zinc-500">income tax</p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed mt-5 max-w-3xl border-l-2 border-zinc-800 pl-4">
            {country.summary}
          </p>

          {/* Pros / Cons - Semantic Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
            <section className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-3 sm:p-4">
              <h2 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                Advantages
              </h2>
              <ul className="space-y-2">
                {country.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>
            <section className="bg-red-500/5 border border-red-500/15 rounded-xl p-3 sm:p-4">
              <h2 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
                Considerations
              </h2>
              <ul className="space-y-2">
                {country.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-red-500 mt-0.5 shrink-0" aria-hidden="true">−</span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </motion.article>

        {/* Tabs - Aria Role for Accessibility/SEO */}
        <div className="flex overflow-x-auto gap-2 bg-zinc-900 border border-zinc-800 rounded-xl p-1.5 mb-6 w-fit" role="tablist" aria-label="Visa Details Sections">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              aria-controls={`${t.id}-panel`}
              onClick={() => setTab(t.id)}
              className={`
                flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-sm font-medium transition-all
                ${tab === t.id ? "bg-blue-500 text-white" : "text-zinc-500 hover:text-zinc-300"}
              `}
            >
              {t.label}
              {t.count && (
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    tab === t.id ? "bg-white/20 text-white" : "bg-zinc-800 text-zinc-600"
                  }`}
                >
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        <motion.div
          key={tab}
          id={`${tab}-panel`}
          role="tabpanel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {tab === "calculator" && <NomadCalculator country={country} />}
          {tab === "documents" && <DocumentVault country={country} />}
          {tab === "roadmap" && <ResidencyRoadmap country={country} />}
        </motion.div>

        {/* Compare CTAs - Semantic Sidebar for Internal Linking */}
        <aside className="mt-8 flex flex-wrap gap-2 sm:gap-3" aria-labelledby="compare-title">
          <h2 id="compare-title" className="sr-only">Compare with other countries</h2>
          {visaData
            .filter((c) => c.id !== country.id)
            .slice(0, 4)
            .map((other) => (
              <a
                key={other.id}
                href={`/compare/${country.id}-vs-${other.id}`}
                className="flex items-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all rounded-xl px-4 py-2 text-sm text-zinc-400 hover:text-zinc-200"
                title={`Compare ${country.name} vs ${other.name}`}
              >
                Compare with {other.flag} {other.name}
              </a>
            ))}
        </aside>
      </div>
    </main>
  );
}