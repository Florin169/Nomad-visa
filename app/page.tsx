import { visaData } from "@/app/lib/visaData";
import HomeClientWrapper from "./HomeClientWrapper";

const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
const currentYear = new Date().getFullYear();

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function LandingPage() {
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

      {/* SEO Semantic Prose — invisible to users, fully indexable by crawlers */}
      <section className="sr-only" aria-hidden="false">
        <h2>Digital Nomad Visa Index {currentYear} — Complete Country Guide Updated {currentMonth} {currentYear}</h2>
        <p>
          Compare digital nomad tax rates, minimum income requirements, and residency paths for {visaData.length} countries.
          Updated {currentMonth} {currentYear}.
        </p>

        {visaData.map((country) => (
          <article key={country.id}>
            <h3>{country.flag} {country.name} Digital Nomad Visa — {country.visaType}</h3>
            <p>
              {country.summary}
            </p>
            <p>
              Region: {country.region}. Minimum monthly income requirement: {fmt(country.minIncome)} USD.
              Tax rate: {(country.taxRate * 100).toFixed(0)}%. Average monthly living cost: {fmt(country.avgLivingCost)} USD.
              One-time visa fee: {fmt(country.visaFee)} USD.
            </p>
            <p>
              Maximum stay: {country.maxStay}. Renewal possible: {country.renewalPossible ? "Yes" : "No"}.
              Path to citizenship: {country.pathToCitizenship ? `Yes, after ${country.citizenshipYears} years` : "No"}.
            </p>
            <p>
              Pros: {country.pros.join("; ")}.
            </p>
            <p>
              Cons: {country.cons.join("; ")}.
            </p>
            <p>
              Required documents include: {country.detailedDocs.map((d) => d.title).join(", ")}.
            </p>
          </article>
        ))}

        <p>
          Calculation logic for net monthly savings: Net savings equals Monthly Income multiplied by one minus Tax Rate, minus Average Living Cost.
          Data covers Spain, Brazil, France, South Korea, Portugal, UAE, Thailand, Germany, Indonesia, Colombia, and Estonia.
        </p>
      </section>

      {/* Client-interactive UI */}
      <HomeClientWrapper initialCountries={visaData} />
    </main>
  );
}
