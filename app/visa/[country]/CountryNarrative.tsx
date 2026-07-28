// app/visa/[country]/CountryNarrative.tsx — Server Component (no "use client")
// Generates editorial narrative and calculator context for each country page.
// Fully server-rendered — Google reads this on first-pass crawl.

import { VisaCountry, calculateMonthlySavings } from "@/app/lib/visaData";

// Country-specific tax regime names for editorial context
const TAX_REGIME_NAMES: Record<string, string> = {
  spain: "Beckham Law (Régimen Especial para Trabajadores Desplazados)",
  portugal: "NHR 2.0 (Non-Habitual Resident / IFICI regime)",
  estonia: "flat 20% income tax system",
  thailand: "LTR Visa remittance-based tax system",
  uae: "0% personal income tax policy",
  indonesia: "territorial tax system for Second Home Visa holders",
  colombia: "territorial tax system for M Visa holders",
  brazil: "non-resident tax framework",
  france: "progressive income tax (IRPF) system",
  germany: "progressive Einkommensteuer system",
  "south-korea": "optional flat-rate tax election for F-1-D Workation Visa holders",
};

// Country-specific comparison context
const COMPARISON_CONTEXT: Record<string, string> = {
  spain:
    "compared to Portugal's NHR 2.0 (20% flat) and Estonia's flat 20% system — Spain's 24% rate is higher but its lower minimum income threshold ($2,646/month vs Portugal's $3,480/month) makes it the only accessible European option for many mid-range earners",
  portugal:
    "compared to Spain's Beckham Law (24% flat) and France's progressive system (30–45% effective) — Portugal offers the lowest flat rate of any EU country in this index and the fastest citizenship path at 5 years",
  estonia:
    "compared to Spain's Beckham Law (24% flat) and Portugal's NHR 2.0 (20% flat) — Estonia's 20% flat rate matches Portugal's but applies indefinitely rather than for a fixed term, and the e-Residency program enables running an EU company with 0% corporate tax on retained profits",
  thailand:
    "compared to the UAE (0% tax, $3,200/month costs) and Portugal (20% flat, $1,600/month costs) — Thailand's remittance-based structure means only money transferred into Thailand is taxed, giving disciplined nomads an effective rate well below the 17% headline figure",
  uae:
    "compared to Thailand (17% remittance tax, $1,200/month costs) and Portugal (20% flat, $1,600/month costs) — the UAE's 0% tax advantage only outperforms lower-cost alternatives above approximately $10,000–$12,000/month gross income",
  indonesia:
    "compared to Thailand (17% remittance tax) and Colombia (0% flat) — Indonesia offers the same 0% foreign income tax as Colombia but requires $130,000 in liquid assets rather than a monthly income threshold",
  colombia:
    "compared to Brazil (15% flat, $1,100/month costs) and Indonesia (0% tax, $1,100/month costs) — Colombia offers 0% tax on foreign income with the lowest minimum income requirement of any country in this index at $750/month",
  brazil:
    "compared to Colombia (0% tax, $900/month costs) and Indonesia (0% tax, $1,100/month costs) — Brazil's 15% flat rate and $1,500/month minimum income sit between the 0% tax destinations and the European options",
  france:
    "compared to Spain's Beckham Law (24% flat) and Portugal's NHR 2.0 (20% flat) — France has no equivalent flat-rate nomad tax regime, making it the highest-tax European option in this index but the only one alongside Portugal to offer EU citizenship in 5 years",
  germany:
    "compared to Spain (24% flat Beckham Law) and Portugal (20% flat NHR 2.0) — Germany's progressive rates produce the highest effective tax burden of any European destination in this index, offset by the strongest passport and professional network access in continental Europe",
  "south-korea":
    "compared to Thailand (17% remittance tax, $1,200/month costs) and Japan (not in this index) — South Korea offers the fastest internet infrastructure in the world alongside an optional 19% flat tax rate, though the $5,500/month income requirement and 2-year maximum stay make it a transitional rather than permanent base",
};

// Income examples to show — different per country based on their minIncome
function getExampleIncomes(minIncome: number): number[] {
  if (minIncome <= 1000) return [1500, 3000, 5000];
  if (minIncome <= 2000) return [2500, 4000, 7000];
  if (minIncome <= 3000) return [3500, 5000, 8000];
  if (minIncome <= 4000) return [4500, 6000, 10000];
  return [6000, 8000, 12000];
}

export default function CountryNarrative({ country }: { country: VisaCountry }) {
  const taxRegimeName = TAX_REGIME_NAMES[country.id] ?? "local tax system";
  const comparisonContext = COMPARISON_CONTEXT[country.id] ?? "";
  const exampleIncomes = getExampleIncomes(country.minIncome);
  const taxRatePercent = (country.taxRate * 100).toFixed(0);
  const isZeroTax = country.taxRate === 0;

  // Pre-calculate examples server-side using the same function the calculator uses
  const examples = exampleIncomes.map((income) => ({
    income,
    ...calculateMonthlySavings(income, country),
  }));

  return (
    <section
      className="mb-8"
      aria-label={`${country.name} digital nomad visa overview and tax calculator guide`}
    >
      {/* Editorial narrative */}
      <div className="text-sm text-zinc-400 leading-relaxed space-y-3 border-l-2 border-zinc-800 pl-4 mb-8">
        <p>
          {country.name}&apos;s {country.visaType} is designed for remote workers and freelancers
          who earn their income from outside {country.name}. Under the {taxRegimeName},
          {isZeroTax
            ? ` foreign-sourced income is not subject to ${country.name} income tax — meaning a US remote worker earning exclusively from US clients pays 0% in ${country.name} regardless of how long they stay.`
            : ` qualifying residents pay a ${taxRatePercent}% ${country.taxRate < 0.25 ? "flat" : "effective"} tax rate on ${country.name}-sourced income, with most foreign-sourced income exempt from local taxation.`
          }
          {comparisonContext && ` This positions ${country.name} ${comparisonContext}.`}
        </p>

        <p>
          The minimum income requirement of ${country.minIncome.toLocaleString()}/month
          {country.minIncome <= 1500
            ? ` is the lowest of any destination in this index — accessible to most established freelancers and remote workers.`
            : country.minIncome <= 3000
            ? ` is achievable for mid-senior remote workers and freelancers earning above $${Math.round(country.minIncome * 1.2).toLocaleString()}/month with a comfortable buffer.`
            : ` is among the higher thresholds in this index, targeting established high-earning professionals and remote workers.`
          }
          {" "}The one-time government visa fee is ${country.visaFee.toLocaleString()} USD.
          {country.pathToCitizenship && country.citizenshipYears
            ? ` The visa leads to a citizenship path after ${country.citizenshipYears} years of continuous legal residency.`
            : ` This visa does not lead to permanent residency or citizenship.`
          }
        </p>

        <p>
          Average monthly living costs in {country.name}&apos;s main nomad hubs run
          ${country.avgLivingCost.toLocaleString()}/month — covering accommodation, food,
          transport, and co-working. At the minimum qualifying income of
          ${country.minIncome.toLocaleString()}/month, the net monthly savings after tax and
          living costs
          {(() => {
            const minCalc = calculateMonthlySavings(country.minIncome, country);
            return minCalc.monthlySavings > 0
              ? ` are $${minCalc.monthlySavings.toLocaleString()}/month ($${minCalc.annualSavings.toLocaleString()}/year).`
              : ` are minimal at the income floor — most applicants target incomes well above the minimum threshold to generate meaningful savings.`;
          })()}
        </p>
      </div>

      {/* Calculator explanation */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 mb-6">
        <h2 className="text-sm font-semibold text-white mb-2">
          {country.name} Digital Nomad Visa Tax Calculator — How It Works
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed mb-4">
          The calculator below computes your exact net monthly savings in {country.name} based on
          your gross income. It applies the {taxRatePercent}%
          {isZeroTax ? " (0%)" : ""} {country.visaType} tax rate to your income, subtracts the
          ${country.avgLivingCost.toLocaleString()}/month average local living cost, and shows
          your final monthly and annual savings — the same math a local tax advisor would use.
          Unlike generic cost-of-living calculators, this tool uses the actual 2026 tax regime
          applied to {country.visaType} holders, not standard resident rates.
        </p>

        {/* Pre-calculated examples — same output as the interactive calculator */}
        <div className="grid grid-cols-3 gap-3">
          {examples.map((ex) => (
            <div
              key={ex.income}
              className="bg-zinc-950/60 border border-zinc-800/60 rounded-lg p-3"
            >
              <p className="text-xs text-zinc-500 mb-1">
                ${ex.income.toLocaleString()}/month
              </p>
              {ex.qualifies ? (
                <>
                  <p className="text-base font-semibold text-emerald-400">
                    +${ex.monthlySavings.toLocaleString()}
                    <span className="text-xs font-normal text-zinc-500">/mo saved</span>
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Tax: <span className="text-red-400">${ex.taxAmount.toLocaleString()}</span>
                    {" · "}
                    {ex.effectiveTakeHome.toFixed(0)}% kept
                  </p>
                </>
              ) : (
                <p className="text-xs text-zinc-500 mt-1">
                  Below ${country.minIncome.toLocaleString()} minimum
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-600 mt-3">
          Calculations use 2026 {country.visaType} tax rates and average living costs.
          Use the interactive calculator below to enter your exact income.
        </p>
      </div>
    </section>
  );
}
