"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowLeftRight,
  ChevronDown,
  Check,
  Search,
} from "lucide-react";
import { VisaCountry, visaData } from "@/app/lib/visaData";
import NomadCalculator from "@/app/components/NomadCalculator";
import DocumentVault from "@/app/components/DocumentVault";
import ResidencyRoadmap from "@/app/components/ResidencyRoadmap";
import Script from "next/script";

interface CompareClientProps {
  countryA: VisaCountry;
  countryB: VisaCountry;
}

// ─── DESKTOP CUSTOM DROPDOWN ──────────────────────────────────────────────────
function DesktopPicker({
  selected,
  exclude,
  onSelect,
}: {
  selected: VisaCountry;
  exclude: string;
  onSelect: (c: VisaCountry) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const options = visaData.filter(
    (c) =>
      c.id !== exclude &&
      (query === "" ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.region.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all
          ${open
            ? "bg-blue-500/10 border-blue-500/40 text-white"
            : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
          }`}
      >
        <span className="text-base">{selected.flag}</span>
        <span className="hidden sm:inline">{selected.name}</span>
        <ChevronDown
          size={13}
          className={`text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 w-60 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-black/60 overflow-hidden"
          >
            <div className="p-2 border-b border-zinc-800">
              <div className="flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-2">
                <Search size={12} className="text-zinc-500 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-white placeholder-zinc-600 outline-none"
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto py-1">
              {options.length === 0 && (
                <p className="text-xs text-zinc-600 text-center py-4">No results</p>
              )}
              {options.map((country) => (
                <button
                  key={country.id}
                  onClick={() => { onSelect(country); setOpen(false); setQuery(""); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors
                    ${country.id === selected.id
                      ? "bg-blue-500/10 text-blue-300"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    }`}
                >
                  <span className="text-base w-6 text-center">{country.flag}</span>
                  <div className="flex-1 text-left min-w-0">
                    <p className="font-medium truncate">{country.name}</p>
                    <p className="text-xs text-zinc-600">
                      {country.region} · {(country.taxRate * 100).toFixed(0)}% tax
                    </p>
                  </div>
                  {country.id === selected.id && <Check size={12} className="text-blue-400 shrink-0" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MOBILE NATIVE PICKER ─────────────────────────────────────────────────────
function MobilePicker({
  selected,
  exclude,
  onSelect,
}: {
  selected: VisaCountry;
  exclude: string;
  onSelect: (c: VisaCountry) => void;
}) {
  const options = visaData.filter((c) => c.id !== exclude);
  return (
    <div className="relative inline-flex items-center">
      <span className="absolute left-3 text-base pointer-events-none z-10 leading-none">
        {selected.flag}
      </span>
      <select
        value={selected.id}
        onChange={(e) => {
          const found = visaData.find((c) => c.id === e.target.value);
          if (found) onSelect(found);
        }}
        aria-label={`Change country, currently ${selected.name}`}
        className="appearance-none bg-zinc-900 border border-zinc-700 text-white text-sm font-medium rounded-xl pl-9 pr-8 py-2 cursor-pointer focus:outline-none focus:border-blue-500/60"
        style={{ WebkitAppearance: "none" }}
      >
        {options.map((c) => (
          <option key={c.id} value={c.id} className="bg-zinc-900 text-white">
            {c.name} — {(c.taxRate * 100).toFixed(0)}% tax
          </option>
        ))}
      </select>
      <ChevronDown size={13} className="absolute right-2.5 text-zinc-500 pointer-events-none" />
    </div>
  );
}

// ─── UNIFIED PICKER ───────────────────────────────────────────────────────────
function CountryPicker(props: { selected: VisaCountry; exclude: string; onSelect: (c: VisaCountry) => void }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile ? <MobilePicker {...props} /> : <DesktopPicker {...props} />;
}

// ─── STAT ROW — works at all sizes ───────────────────────────────────────────
function StatRow({
  label,
  valueA,
  valueB,
  aWins,
  last,
}: {
  label: string;
  valueA: string;
  valueB: string;
  aWins: boolean;
  last?: boolean;
}) {
  return (
    <div className={`grid grid-cols-3 ${!last ? "border-b border-zinc-800" : ""}`}>
      <div className="bg-zinc-950 p-3 sm:p-5 flex items-center justify-center">
        <span className={`text-xs sm:text-sm font-semibold tabular-nums text-center ${aWins ? "text-emerald-400" : "text-zinc-400"}`}>
          {valueA}
        </span>
      </div>
      <div className="bg-zinc-900 p-3 sm:p-4 flex items-center justify-center">
        <span className="text-[9px] sm:text-[10px] text-zinc-500 uppercase font-bold tracking-widest text-center leading-tight">
          {label}
        </span>
      </div>
      <div className="bg-zinc-950 p-3 sm:p-5 flex items-center justify-center">
        <span className={`text-xs sm:text-sm font-semibold tabular-nums text-center ${!aWins ? "text-emerald-400" : "text-zinc-400"}`}>
          {valueB}
        </span>
      </div>
    </div>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3 px-1">
      {children}
    </h2>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function CompareClient({ countryA, countryB }: CompareClientProps) {
  const router = useRouter();

  // SEO: Structured Data for Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonChart",
    "name": `${countryA.name} vs ${countryB.name} Nomad Tax Comparison`,
    "description": `2026 Comparison of Digital Nomad Visas: ${countryA.name} (${(countryA.taxRate * 100).toFixed(0)}% tax) vs ${countryB.name} (${(countryB.taxRate * 100).toFixed(0)}% tax).`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "GovernmentPermit",
            "name": `${countryA.name} Digital Nomad Visa`,
            "amount": countryA.minIncome,
            "currency": "USD"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "GovernmentPermit",
            "name": `${countryB.name} Digital Nomad Visa`,
            "amount": countryB.minIncome,
            "currency": "USD"
          }
        }
      ]
    }
  };

  function handleSwap(side: "A" | "B", newCountry: VisaCountry) {
    const idA = side === "A" ? newCountry.id : countryA.id;
    const idB = side === "B" ? newCountry.id : countryB.id;
    router.push(`/compare/${idA}-vs-${idB}`);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* SEO Injection */}
      <Script
        id="json-ld-compare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Back to Index</span>
            <span className="sm:hidden">Back</span>
          </a>
          <span className="text-sm font-bold text-white uppercase tracking-tighter">
            NOMAD<span className="text-blue-400">TAX</span> INDEX
          </span>
          <div className="w-16" />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-24 space-y-8">

        {/* ── Hero: flags + pickers ── */}
        <div className="flex items-center gap-3 sm:gap-8">
          <div className="flex-1 flex flex-col items-center gap-2 min-w-0">
            <span className="text-4xl sm:text-6xl">{countryA.flag}</span>
            <h1 className="text-sm sm:text-xl font-bold text-white truncate max-w-full px-1">
              {countryA.name}
            </h1>
            <CountryPicker
              selected={countryA}
              exclude={countryB.id}
              onSelect={(c) => handleSwap("A", c)}
            />
          </div>

          <div className="shrink-0 bg-zinc-900 p-2 sm:p-3 rounded-full border border-zinc-800">
            <ArrowLeftRight size={16} className="text-zinc-600" />
          </div>

          <div className="flex-1 flex flex-col items-center gap-2 min-w-0">
            <span className="text-4xl sm:text-6xl">{countryB.flag}</span>
            <h1 className="text-sm sm:text-xl font-bold text-white truncate max-w-full px-1">
              {countryB.name}
            </h1>
            <CountryPicker
              selected={countryB}
              exclude={countryA.id}
              onSelect={(c) => handleSwap("B", c)}
            />
          </div>
        </div>

        <p className="text-center text-xs text-zinc-700">
          Tap to swap a country — URL updates automatically
        </p>

        {/* ── Quick Stats ── */}
        <div>
          <SectionLabel>At a glance</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-zinc-800 overflow-hidden"
          >
            <StatRow
              label="Min. Income"
              valueA={`$${countryA.minIncome.toLocaleString()}/mo`}
              valueB={`$${countryB.minIncome.toLocaleString()}/mo`}
              aWins={countryA.minIncome <= countryB.minIncome}
            />
            <StatRow
              label="Tax Rate"
              valueA={`${(countryA.taxRate * 100).toFixed(0)}%`}
              valueB={`${(countryB.taxRate * 100).toFixed(0)}%`}
              aWins={countryA.taxRate <= countryB.taxRate}
            />
            <StatRow
              label="Living Cost"
              valueA={`$${countryA.avgLivingCost.toLocaleString()}/mo`}
              valueB={`$${countryB.avgLivingCost.toLocaleString()}/mo`}
              aWins={countryA.avgLivingCost <= countryB.avgLivingCost}
            />
            <StatRow
              label="Citizenship"
              valueA={countryA.pathToCitizenship ? `${countryA.citizenshipYears ?? "?"}yr` : "None"}
              valueB={countryB.pathToCitizenship ? `${countryB.citizenshipYears ?? "?"}yr` : "None"}
              aWins={
                countryA.pathToCitizenship && countryB.pathToCitizenship
                  ? (countryA.citizenshipYears ?? 99) <= (countryB.citizenshipYears ?? 99)
                  : countryA.pathToCitizenship
              }
              last
            />
          </motion.div>
        </div>

        {/* ── Calculator ── */}
        <div>
          <SectionLabel>Tax Calculator</SectionLabel>
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
            <NomadCalculator country={countryA} compact />
            <NomadCalculator country={countryB} compact />
          </div>
        </div>

        {/* ── Documents ── */}
        <div>
          <SectionLabel>Document Requirements</SectionLabel>
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
            <DocumentVault country={countryA} />
            <DocumentVault country={countryB} />
          </div>
        </div>

        {/* ── Roadmap ── */}
        <div>
          <SectionLabel>Residency Roadmap</SectionLabel>
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
            <ResidencyRoadmap country={countryA} />
            <ResidencyRoadmap country={countryB} />
          </div>
        </div>

        <footer className="text-center pt-4 border-t border-zinc-900">
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-bold">
            Data verified for 2026 regulations
          </p>
        </footer>

      </div>
    </main>
  );
}