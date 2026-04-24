"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertTriangle,
  Calendar,
  ToggleLeft,
  ToggleRight,
  Info,
} from "lucide-react";
import { VisaCountry, calculateMonthlySavings } from "@/app/lib/visaData";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface NomadCalculatorProps {
  country: VisaCountry;
  initialIncome?: number;
  compact?: boolean; // used in comparison view
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function formatCurrency(amount: number, compact = false): string {
  if (compact && Math.abs(amount) >= 1000) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 1,
      notation: "compact",
    }).format(amount);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function MetricCard({
  label,
  value,
  sub,
  accent,
  negative,
  delay = 0,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
  negative?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className={`
        rounded-xl border p-3 flex flex-col gap-1
        ${accent
          ? "bg-blue-500/10 border-blue-500/30"
          : negative
          ? "bg-red-500/10 border-red-500/20"
          : "bg-zinc-800/60 border-zinc-700/50"
        }
      `}
      aria-label={`${label}: ${value}`}
    >
      {/* 1. Changed text-xs to text-[10px] */}
      <span className="text-[9px] font-medium text-zinc-400 uppercase tracking-wider">
        {label}
      </span>
      
      {/* 2. Changed text-2xl to text-lg (This is the main fix for the big numbers) */}
      <span
        className={`text-base md:text-lg font-semibold tabular-nums tracking-tight
          ${accent ? "text-blue-400" : negative ? "text-red-400" : "text-white"}
        `}
      >
        {value}
      </span>
      
      {/* 3. Changed text-xs to text-[9px] */}
      {sub && (
        <span className="text-[9px] text-zinc-500 leading-tight">{sub}</span>
      )}
    </motion.div>
  );
}

function BreakdownRow({
  label,
  value,
  isNegative,
  isBold,
  tooltip,
}: {
  label: string;
  value: string;
  isNegative?: boolean;
  isBold?: boolean;
  tooltip?: string;
}) {
  const [showTip, setShowTip] = useState(false);
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-zinc-800/80 last:border-0 group">
      <div className="flex items-center gap-1.5">
        <span className={`text-sm ${isBold ? "text-white font-medium" : "text-zinc-400"}`}>
          {label}
        </span>
        {tooltip && (
          <div className="relative">
            <Info
              size={12}
              className="text-zinc-600 cursor-pointer hover:text-zinc-400 transition-colors"
              onMouseEnter={() => setShowTip(true)}
              onMouseLeave={() => setShowTip(false)}
              aria-label="Information"
            />
            <AnimatePresence>
              {showTip && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-5 left-0 w-52 bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-xs text-zinc-300 z-50 shadow-xl"
                  role="tooltip"
                >
                  {tooltip}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      <span
        className={`text-sm tabular-nums font-medium
          ${isNegative ? "text-red-400" : isBold ? "text-white" : "text-zinc-300"}
        `}
      >
        {value}
      </span>
    </div>
  );
}

// ─── INCOME SLIDER ────────────────────────────────────────────────────────────
function IncomeSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const MIN = 500;
  const MAX = 30000;
  const STEP = 100;

  const pct = ((value - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor="income-input" className="text-sm font-medium text-zinc-300">
          Monthly Income
        </label>
        <div className="flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5">
          <DollarSign size={13} className="text-blue-400" aria-hidden="true" />
          <input
            id="income-input"
            type="number"
            value={value}
            min={MIN}
            max={MAX}
            step={STEP}
            aria-label="Adjust Monthly Income Numerical Value"
            onChange={(e) => {
              const v = Math.min(MAX, Math.max(MIN, Number(e.target.value)));
              onChange(v);
            }}
            className="w-20 bg-transparent text-sm font-semibold text-white outline-none tabular-nums"
          />
          <span className="text-xs text-zinc-500">/mo</span>
        </div>
      </div>

      {/* Custom styled range */}
      <div className="relative h-5 flex items-center">
        <div className="absolute w-full h-1 bg-zinc-700 rounded-full" />
        <div
          className="absolute h-1 bg-blue-500 rounded-full"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={value}
          aria-label="Monthly Income Slider"
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute w-full appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-blue-500
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110"
        />
      </div>

      <div className="flex justify-between text-xs text-zinc-600" aria-hidden="true">
        <span>$500</span>
        <span>$30,000</span>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function NomadCalculator({
  country,
  initialIncome = 5000,
  compact = false,
}: NomadCalculatorProps) {
  const [income, setIncome] = useState(initialIncome);
  const [annual, setAnnual] = useState(false);

  const result = calculateMonthlySavings(income, country);

  const multiplier = annual ? 12 : 1;
  const period = annual ? "/yr" : "/mo";

  const savingsIsPositive = result.monthlySavings > 0;

  return (
    <section 
      className={`
        bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden
        ${compact ? "p-4" : "p-6"}
      `}
      aria-labelledby="calculator-title"
    >
      {/* SEO Heading - Hidden from UI */}
      <h2 id="calculator-title" className="sr-only">
        {country.name} Digital Nomad Visa Tax & Savings Calculator
      </h2>

      {/* Header */}
      {!compact && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
            <div>
              <h3 className="text-lg font-semibold text-white">{country.name}</h3>
              <p className="text-xs text-zinc-500">{country.visaType}</p>
            </div>
          </div>
          {/* Annual/Monthly toggle */}
          <button
            onClick={() => setAnnual(!annual)}
            aria-label={`Switch to ${annual ? 'monthly' : 'annual'} view`}
            className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-300 hover:border-zinc-600 transition-colors"
          >
            {annual ? (
              <>
                <ToggleRight size={16} className="text-blue-400" aria-hidden="true" />
                <span className="text-blue-400">Annual</span>
              </>
            ) : (
              <>
                <ToggleLeft size={16} className="text-zinc-500" aria-hidden="true" />
                <span>Monthly</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Compact header */}
      {compact && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
            <span className="text-base font-semibold text-white">{country.name}</span>
          </div>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label={`Toggle ${annual ? 'monthly' : 'annual'} view`}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <Calendar size={13} aria-hidden="true" />
            {annual ? "Annual" : "Monthly"}
          </button>
        </div>
      )}

      {/* Income Slider */}
      <div className="mb-6">
        <IncomeSlider value={income} onChange={setIncome} />
      </div>

      {/* Does Not Qualify State */}
      <AnimatePresence mode="wait">
        {!result.qualifies ? (
          <motion.div
            key="disqualified"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3 mb-4"
            role="alert"
          >
            <AlertTriangle size={18} className="text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-amber-300">Residency Income Verification</p>
              <p className="text-xs text-amber-400/80 mt-0.5">
                {country.name} requires a minimum of{" "}
                <span className="font-semibold text-amber-300">
                  {formatCurrency(country.minIncome)}/month
                </span>
                . Your current income of{" "}
                <span className="font-semibold">{formatCurrency(income)}/month</span> does
                not qualify for the {country.visaType}.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="qualified"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Hero Savings Number */}
            <div className="text-center mb-6 py-4 rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-900/20 border border-zinc-700/30">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                Net Monthly Savings
              </p>
              <motion.p
                key={`${result.monthlySavings}-${annual}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`text-4xl font-bold tabular-nums tracking-tight
                  ${savingsIsPositive ? "text-emerald-400" : "text-red-400"}
                `}
              >
                {savingsIsPositive ? "+" : ""}
                {formatCurrency(result.monthlySavings * multiplier)}
                <span className="text-xl font-normal text-zinc-500 ml-1" aria-hidden="true">{period}</span>
              </motion.p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                {savingsIsPositive ? (
                  <TrendingUp size={13} className="text-emerald-400" aria-hidden="true" />
                ) : (
                  <TrendingDown size={13} className="text-red-400" aria-hidden="true" />
                )}
                <span
                  className={`text-xs font-medium ${
                    savingsIsPositive ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {formatPercent(Math.abs(result.effectiveTakeHome))} of gross income kept
                </span>
              </div>
            </div>

            {/* Metric Grid */}
            {!compact && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                <MetricCard
                  label="Tax Liability"
                  value={formatCurrency(result.taxAmount * multiplier, true)}
                  sub={`${(country.taxRate * 100).toFixed(0)}% Tax Rate`}
                  negative
                  delay={0}
                />
                <MetricCard
                  label="Living Cost"
                  value={formatCurrency(result.livingCost * multiplier, true)}
                  sub="estimated monthly"
                  delay={0.05}
                />
                <MetricCard
                  label="Annual Net Savings"
                  value={formatCurrency(result.annualSavings, true)}
                  sub="if staying 12mo"
                  accent
                  delay={0.1}
                />
              </div>
            )}

            {/* Breakdown */}
            <article className="bg-zinc-800/30 rounded-xl border border-zinc-800 p-4">
              <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                Financial Breakdown
              </h3>
              <div className="space-y-1">
                <BreakdownRow
                  label="Gross Income"
                  value={formatCurrency(income * multiplier)}
                  tooltip="Your total monthly income before any deductions"
                />
                <BreakdownRow
                  label={`Tax (${(country.taxRate * 100).toFixed(0)}% flat rate)`}
                  value={`− ${formatCurrency(result.taxAmount * multiplier)}`}
                  isNegative
                  tooltip={`${country.name}'s special tax rate for digital nomad visa holders`}
                />
                <BreakdownRow
                  label="Net After Tax"
                  value={formatCurrency(result.netIncome * multiplier)}
                />
                <BreakdownRow
                  label="Avg. Living Cost"
                  value={`− ${formatCurrency(result.livingCost * multiplier)}`}
                  isNegative
                  tooltip="Estimated monthly cost of living including rent, food, transport"
                />
                <BreakdownRow
                  label="Final Monthly Savings"
                  value={formatCurrency(result.monthlySavings * multiplier)}
                  isBold
                />
              </div>
            </article>

            {/* Visa fee note */}
            <p className="text-xs text-zinc-600 mt-3 text-center">
              One-time government visa fee: {formatCurrency(country.visaFee)} · Min. income requirement:{" "}
              {formatCurrency(country.minIncome)}/mo
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}