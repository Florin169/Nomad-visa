"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowLeftRight } from "lucide-react";
import { VisaCountry } from "@/app/lib/visaData";
import NomadCalculator from "@/app/components/NomadCalculator";
import DocumentVault from "@/app/components/DocumentVault";
import ResidencyRoadmap from "@/app/components/ResidencyRoadmap";

interface CompareClientProps {
  countryA: VisaCountry;
  countryB: VisaCountry;
}

export default function CompareClient({ countryA, countryB }: CompareClientProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pb-24">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Index
          </a>
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            NOMAD<span className="text-blue-400">TAX</span>
          </div>
          <div />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <h1 className="sr-only">
          Comparison: {countryA.name} vs {countryB.name}
        </h1>

        {/* Hero comparison header */}
        <div className="flex items-center justify-center gap-4 sm:gap-12 mb-12">
          <div className="text-center flex-1">
            <div className="text-4xl sm:text-6xl mb-3">{countryA.flag}</div>
            <h2 className="text-lg sm:text-2xl font-bold truncate">{countryA.name}</h2>
          </div>
          <div className="bg-zinc-900 p-3 rounded-full border border-zinc-800 shrink-0">
            <ArrowLeftRight className="text-zinc-600" size={20} />
          </div>
          <div className="text-center flex-1">
            <div className="text-4xl sm:text-6xl mb-3">{countryB.flag}</div>
            <h2 className="text-lg sm:text-2xl font-bold truncate">{countryB.name}</h2>
          </div>
        </div>

        {/* Quick Stats Grid - Numbers HIDDEN on mobile to prevent overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mb-12"
        >
          {/* Income Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border-b border-zinc-800">
            {/* Value A (Hidden on Mobile) */}
            <div className="hidden sm:flex bg-zinc-950 p-6 items-center justify-center font-medium text-zinc-400">
              ${countryA.minIncome}/mo
            </div>
            {/* Label (Visible on all, centered) */}
            <div className="bg-zinc-900 p-4 text-center">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Min. Income</span>
            </div>
            {/* Value B (Hidden on Mobile) */}
            <div className="hidden sm:flex bg-zinc-950 p-6 items-center justify-center font-medium text-zinc-400">
              ${countryB.minIncome}/mo
            </div>
          </div>

          {/* Tax Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border-b border-zinc-800">
            <div className="hidden sm:flex bg-zinc-950 p-6 items-center justify-center font-medium text-zinc-400">
              {(countryA.taxRate * 100).toFixed(0)}%
            </div>
            <div className="bg-zinc-900 p-4 text-center">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Tax Rate</span>
            </div>
            <div className="hidden sm:flex bg-zinc-950 p-6 items-center justify-center font-medium text-zinc-400">
              {(countryB.taxRate * 100).toFixed(0)}%
            </div>
          </div>

          {/* Citizenship Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px">
            <div className="hidden sm:flex bg-zinc-950 p-6 items-center justify-center font-medium text-zinc-400">
              {countryA.pathToCitizenship ? `${countryA.citizenshipYears ?? '?'}yr path` : "None"}
            </div>
            <div className="bg-zinc-900 p-4 text-center">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Citizenship</span>
            </div>
            <div className="hidden sm:flex bg-zinc-950 p-6 items-center justify-center font-medium text-zinc-400">
              {countryB.pathToCitizenship ? `${countryB.citizenshipYears ?? '?'}yr path` : "None"}
            </div>
          </div>
        </motion.div>

        {/* Use the detailed cards for mobile comparison - these vertical sections are safer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <NomadCalculator country={countryA} compact />
          <NomadCalculator country={countryB} compact />
          
          <DocumentVault country={countryA} />
          <DocumentVault country={countryB} />
          
          <ResidencyRoadmap country={countryA} />
          <ResidencyRoadmap country={countryB} />
        </div>

        <footer className="text-center pt-10 border-t border-zinc-900">
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-bold">Data verified for 2026 regulations</p>
        </footer>
      </div>
    </main>
  );
}