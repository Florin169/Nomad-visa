"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Globe,
  ArrowRight,
  Zap,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { visaData, rankByNetSavings, VisaCountry } from "@/app/lib/visaData";

const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
const currentYear = new Date().getFullYear();

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

// ─── GLOBAL TAX INDEX TABLE ───────────────────────────────────────────────────
function GlobalTaxIndex({ income, search }: { income: number; search: string }) {
  const ranked = rankByNetSavings(income);
  const filtered = ranked.filter(
    (r) =>
      r.country.name.toLowerCase().includes(search.toLowerCase()) ||
      r.country.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      {/* Table header - Semantic Header for Table */}
      <div className="grid grid-cols-[40px_1fr_100px_100px_100px_120px] gap-0 px-4 sm:px-5 py-3 border-b border-zinc-800 bg-zinc-900/50 overflow-x-auto">
        {["#", "Country", "Tax Rate", "Living Cost", "Min. Income", "Net Savings/mo"].map(
          (h, i) => (
            <span
              key={h}
              className={`text-xs font-medium text-zinc-500 uppercase tracking-wider ${
                i > 1 ? "text-right" : ""
              }`}
            >
              {h}
            </span>
          )
        )}
      </div>

      {/* Rows */}
      <div className="divide-y divide-zinc-800/60 overflow-x-auto">
        {filtered.map(({ country, savings }, i) => {
          const isTop = i === 0 && !search;
          const qualifies = savings.qualifies;
          const positive = savings.monthlySavings > 0;
          
          const originalRank = ranked.findIndex(r => r.country.id === country.id) + 1;

          return (
            <motion.a
              key={country.id}
              href={`/visa/${country.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              title={`View 2026 tax and visa details for ${country.name}`}
              className={`
                grid grid-cols-[40px_1fr_100px_100px_100px_120px] gap-0 px-4 sm:px-5 py-4 items-center
                hover:bg-zinc-900/60 transition-colors group cursor-pointer
                ${isTop ? "bg-blue-500/5" : ""}
              `}
            >
              {/* Rank */}
              <span
                className={`text-sm font-bold tabular-nums ${
                  isTop ? "text-blue-400" : "text-zinc-600"
                }`}
              >
                {originalRank}
              </span>

              {/* Country */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xl" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{country.name}</p>
                  <p className="text-xs text-zinc-600 truncate">{country.region}</p>
                </div>
                {country.trending && (
                  <span className="hidden sm:flex items-center gap-0.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    <TrendingUp size={6} />
                    {country.searchVelocity}%
                  </span>
                )}
              </div>

              {/* Tax Rate */}
              <span
                className={`text-sm text-right font-medium tabular-nums ${
                  country.taxRate === 0
                    ? "text-emerald-400"
                    : country.taxRate > 0.3
                    ? "text-red-400"
                    : "text-zinc-300"
                }`}
              >
                {(country.taxRate * 100).toFixed(0)}%
              </span>

              {/* Living Cost */}
              <span className="text-sm text-right text-zinc-400 tabular-nums">
                {fmt(country.avgLivingCost)}
              </span>

              {/* Min Income */}
              <span className="text-sm text-right text-zinc-500 tabular-nums">
                {fmt(country.minIncome)}
              </span>

              {/* Net Savings */}
              <div className="flex items-center justify-end gap-2">
                {!qualifies ? (
                  <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-1 rounded-lg">
                    Below min.
                  </span>
                ) : (
                  <span
                    className={`text-sm font-semibold tabular-nums ${
                      positive ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {positive ? "+" : ""}
                    {fmt(savings.monthlySavings)}
                  </span>
                )}
                <ArrowRight
                  size={14}
                  className="text-zinc-700 group-hover:text-zinc-500 transition-colors"
                />
              </div>
            </motion.a>
          );
        })}
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-zinc-500 text-sm">No countries matching "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN LANDING PAGE ────────────────────────────────────────────────────────
export default function LandingPage() {
  const [income, setIncome] = useState(6000);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950 text-white pb-16">
      {/* Background grid pattern */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
              <Globe size={14} className="text-white" />
            </div>
            <a href="/" className="text-sm font-bold tracking-tight text-white group">
              NOMAD<span className="text-blue-400 group-hover:text-blue-300 transition-colors">TAX</span>
            </a>
            <span className="text-xs text-zinc-700 font-mono ml-1">{currentYear}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="/compare/spain-vs-portugal" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
              Compare
            </a>
            <a href="#index" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
              Index
            </a>
            <button className="text-sm bg-blue-500 hover:bg-blue-400 transition-colors text-white px-4 py-1.5 rounded-lg font-medium">
              Get Started
            </button>
          </div>
          <div className="sm:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-zinc-400 hover:text-white p-2"
              aria-label="Toggle navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
                <Globe size={14} className="text-white" />
              </div>
              <span className="text-sm font-bold tracking-tight text-white">
                NOMAD<span className="text-blue-400">TAX</span>
              </span>
              <span className="text-xs text-zinc-700 font-mono ml-1">2026</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 pt-4 pb-8">
            <a href="/compare/spain-vs-portugal" className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors py-3 border-b border-zinc-900">
              Compare Countries
            </a>
            <a href="#index" onClick={() => setIsMenuOpen(false)} className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors py-3 border-b border-zinc-900">
              Tax Index
            </a>
            <button className="w-full text-sm bg-blue-500 hover:bg-blue-400 transition-colors text-white px-4 py-3 rounded-lg font-medium mt-6">
              Get Started
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero Section - Optimized for SEO */}
        <section className="pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
              <Zap size={12} className="text-blue-400" />
              <span className="text-xs font-medium text-blue-300">
                Updated {currentMonth} {currentYear} · Digital Nomad Visa Requirements for {visaData.length} Countries
              </span>
            </div>

            {/* H1 is essential for SEO */}
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Digital Nomad Visa Index 2026:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Compare Tax & Income Requirements
              </span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
              Compare digital nomad tax rates, minimum income requirements, and residency paths with mathematical transparency. Get real-time {currentYear} data on visa processing times and required documents for {visaData.length} top-tier destinations.
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-3 max-w-md mx-auto bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus-within:border-blue-500/50 transition-colors">
              <label htmlFor="country-search" className="sr-only">Search for a country</label>
              <Search size={16} className="text-zinc-600 shrink-0" />
              <input
                id="country-search"
                type="text"
                placeholder="Search a country (e.g. Spain, France)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white placeholder-zinc-600 outline-none"
              />
            </div>
          </motion.div>
        </section>

        {/* Semantic Section for Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          aria-label="NomadTax Platform Statistics"
        >
          {[
            { label: "Visa programs tracked", value: visaData.length.toString() },
            { label: "Avg. yearly tax savings", value: "$18,400" },
            { label: "Requirements searches", value: "+300% YoY" },
            { label: "Visa processing time", value: "2–12 wks" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.section>

        {/* Global Tax Index Section */}
        <section id="index" aria-labelledby="index-heading">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 id="index-heading" className="text-2xl font-bold text-white">{currentYear} Global Tax Index</h2>
              <p className="text-sm text-zinc-500 mt-1">
                Top countries ranked by net monthly savings for your income level
              </p>
            </div>

            {/* Income input - Semantic Labeling */}
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5">
              <label htmlFor="income-input" className="text-xs text-zinc-500">My income</label>
              <span className="text-blue-400 text-sm font-semibold" aria-hidden="true">$</span>
              <input
                id="income-input"
                type="number"
                value={income}
                min={500}
                max={50000}
                step={500}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const val = e.target.value;
                  if (val === "") {
                    setIncome(0);
                    return;
                  }
                  setIncome(Number(val));
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  const val = Number(e.target.value);
                  setIncome(Math.max(500, Math.min(50000, val)));
                }}
                className="w-20 bg-transparent text-sm font-semibold text-white outline-none tabular-nums"
                aria-label="Monthly income in USD"
              />
              <span className="text-xs text-zinc-600">/mo</span>
              <div className="flex flex-col gap-0.5 ml-1">
                <button 
                  onClick={() => setIncome((p) => Math.min(50000, p + 500))}
                  aria-label="Increase income by 500"
                >
                  <ChevronUp size={12} className="text-zinc-600 hover:text-zinc-400" />
                </button>
                <button 
                  onClick={() => setIncome((p) => Math.max(500, p - 500))}
                  aria-label="Decrease income by 500"
                >
                  <ChevronDown size={12} className="text-zinc-600 hover:text-zinc-400" />
                </button>
              </div>
            </div>
          </div>

          <GlobalTaxIndex income={income} search={searchQuery} />

          <p className="text-xs text-zinc-700 mt-4 text-center italic">
            Calculation Logic: Net savings = (Monthly Income × (1 − Tax Rate)) − Average Living Cost. 
            Select any country to view full document requirements and residency roadmaps.
          </p>
        </section>

        {/* Compare CTA - Section for internal linking */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 text-center"
          aria-labelledby="compare-heading"
        >
          <h3 id="compare-heading" className="text-2xl font-bold text-white mb-2">
            Compare {currentYear} Nomad Visas Side-by-Side
          </h3>
          <p className="text-sm text-zinc-500 mb-8 max-w-lg mx-auto">
            Deep-dive comparison tool including tax calculators, document vaults, 
            and citizenship roadmaps for top digital nomad destinations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              ["spain", "portugal"],
              ["uae", "thailand"],
              ["colombia", "estonia"],
              ["indonesia", "germany"],
            ].map(([a, b]) => {
              const ca = visaData.find((c) => c.id === a)!;
              const cb = visaData.find((c) => c.id === b)!;
              return (
                <a
                  key={`${a}-${b}`}
                  href={`/compare/${a}-vs-${b}`}
                  className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 transition-all rounded-xl px-5 py-3 text-sm text-zinc-300 hover:text-white shadow-lg"
                >
                  <div className="flex items-center gap-1.5">
                    <span>{ca.flag}</span>
                    <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-tighter">vs</span>
                    <span>{cb.flag}</span>
                  </div>
                  <span className="font-medium">
                    {ca.name} vs {cb.name}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.section>

      </div>
    </main>
  );
}