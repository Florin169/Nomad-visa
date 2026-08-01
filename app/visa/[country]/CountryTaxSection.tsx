// app/visa/[country]/CountryTaxSection.tsx — Server Component (no "use client")
// Renders a full structured tax section for countries where tax intent dominates queries.
// Fully server-rendered — Google indexes this as primary H2-level content.

import { VisaCountry } from "@/app/lib/visaData";

interface TaxSectionProps {
  country: VisaCountry;
}

// Spain-specific tax section
function SpainTaxSection() {
  return (
    <section
      id="spain-digital-nomad-visa-tax"
      className="mt-10 mb-10"
      aria-labelledby="spain-tax-heading"
    >
      <h2
        id="spain-tax-heading"
        className="text-xl font-bold text-white mb-4"
      >
        Spain Digital Nomad Visa Tax Rules (2026)
      </h2>

      <div className="text-sm text-zinc-400 leading-relaxed space-y-4">
        <p>
          Spain&apos;s Digital Nomad Visa (Ley de Startups) applies a flat{" "}
          <strong className="text-zinc-200">24% Beckham Law tax rate</strong> on
          Spanish-sourced income for the first 6 years of residency. Foreign-sourced
          income — from non-Spanish clients or employers — is generally{" "}
          <strong className="text-zinc-200">fully exempt</strong> from Spanish income
          tax. For most US remote workers earning exclusively from US clients, the
          effective Spanish tax rate under this regime is close to 0%.
        </p>

        <p>
          This replaces Spain&apos;s standard progressive IRPF system, which reaches
          47% at higher income levels. The Beckham Law is the primary reason Spain&apos;s
          Digital Nomad Visa is financially competitive with Portugal&apos;s NHR 2.0
          (20% flat) and Estonia&apos;s flat 20% system.
        </p>
      </div>

      {/* H3: How the Beckham Law works */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          How the Beckham Law Works for Digital Nomads
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            The Beckham Law (Régimen Especial para Trabajadores Desplazados) caps
            your income tax at a flat 24% on income up to €600,000/year. Income above
            €600,000 is taxed at 47%. The regime applies for a maximum of{" "}
            <strong className="text-zinc-200">6 consecutive tax years</strong> from
            the year you first become a Spanish tax resident.
          </p>
          <p>
            Critically, the Beckham Law does{" "}
            <strong className="text-zinc-200">not activate automatically</strong> when
            you receive your Digital Nomad Visa. You must file{" "}
            <strong className="text-zinc-200">Modelo 149</strong> with the Agencia
            Tributaria (Spanish Tax Authority) within{" "}
            <strong className="text-zinc-200">6 months</strong> of registering with
            Spanish Social Security. Missing this deadline means permanent rejection —
            you cannot reapply and default to standard progressive IRPF rates for
            your entire Spanish residency.
          </p>
          <p>
            After 6 years, you transition to Spain&apos;s standard progressive IRPF
            rates (19%–47%). Most nomads plan this transition in advance — commonly
            moving to Portugal&apos;s NHR 2.0 regime (20% flat for 10 years) to reset
            their flat-rate tax period.
          </p>
        </div>
      </div>

      {/* H3: Do digital nomads pay tax in Spain */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Do Digital Nomads Pay Income Tax in Spain?
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            Yes — but only on Spanish-sourced income. Under the Beckham Law, income
            earned from non-Spanish clients or employers is exempt from Spanish income
            tax. Under the Digital Nomad Visa terms, no more than{" "}
            <strong className="text-zinc-200">20% of your total income</strong> can
            come from Spanish sources. If you stay within this limit, up to 100% of
            your income may be exempt from Spanish tax.
          </p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-lg p-3">
              <p className="text-xs font-semibold text-emerald-400 mb-2">Exempt from Spanish tax</p>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>→ Income from US clients or employer</li>
                <li>→ Income from non-Spanish companies</li>
                <li>→ Foreign capital gains and dividends</li>
                <li>→ Foreign rental income</li>
              </ul>
            </div>
            <div className="bg-red-500/5 border border-red-500/15 rounded-lg p-3">
              <p className="text-xs font-semibold text-red-400 mb-2">Taxed at 24% flat</p>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>→ Income from Spanish clients (up to 20% of total)</li>
                <li>→ Spanish-sourced employment income</li>
                <li>→ Spanish capital gains</li>
                <li>→ Spanish rental income</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* H3: Employee vs freelancer */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Spain Digital Nomad Taxes: Employee vs Freelancer
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            <strong className="text-zinc-200">Employees (W-2 equivalent):</strong>{" "}
            If your employer is a US or non-Spanish company, your salary is
            foreign-sourced and generally exempt under the Beckham Law. Your employer
            does not need to register with Spanish Social Security for the tax exemption
            to apply. Effective Spanish tax rate: potentially 0%.
          </p>
          <p>
            <strong className="text-zinc-200">Freelancers (1099 / self-employed):</strong>{" "}
            You can access the Beckham Law if your work qualifies as innovative activity
            or primarily serves non-Spanish clients. Income from US or other foreign
            clients is exempt. If you register as an Autónomo (self-employed) in Spain,
            social security contributions apply separately — typically €200–€300/month
            in year one. Many freelancers on the Digital Nomad Visa avoid Autónomo
            registration by maintaining their home-country business entity.
          </p>
        </div>
      </div>

      {/* H3: Double taxation */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Does Spain Double Tax US Digital Nomads?
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            No. The US-Spain tax treaty (in force since 1990) prevents double taxation.
            Under the Beckham Law, foreign-sourced income is exempt from Spanish tax —
            you report it on your US return but pay no Spanish tax on it.
          </p>
          <p>
            US citizens still file and potentially owe US taxes, but two mechanisms
            reduce this significantly: the{" "}
            <strong className="text-zinc-200">
              Foreign Earned Income Exclusion (FEIE)
            </strong>{" "}
            allows exclusion of up to $132,900 (2026) of foreign-earned income from US
            tax if you meet the bona fide residence or physical presence test. The{" "}
            <strong className="text-zinc-200">Foreign Tax Credit (FTC)</strong> credits
            Spanish taxes paid against your US liability, preventing double taxation on
            the same income.
          </p>
        </div>
      </div>

      {/* H3: Spain vs Portugal tax comparison */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Spain vs Portugal Tax Rate for Digital Nomads
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            Portugal&apos;s NHR 2.0 offers a lower flat rate (20% vs Spain&apos;s 24%)
            for a longer period (10 years vs Spain&apos;s 6 years). At $5,000/month
            income: Spain saves you $2,000/month after tax and living costs; Portugal
            saves $2,400/month — a $400/month difference in Portugal&apos;s favor.
          </p>
          <p>
            Spain&apos;s key advantages over Portugal: lower minimum income threshold
            (€2,646/month vs €3,480/month) making it accessible for more applicants,
            and larger nomad communities in Barcelona and Madrid. For nomads earning
            between $2,646–$3,480/month, Spain is the only viable European flat-rate
            option.
          </p>
          <a
            href="/compare/spain-vs-portugal"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-2"
          >
            Compare Spain vs Portugal taxes in full →
          </a>
        </div>
      </div>

      {/* H3: Who qualifies */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Who Qualifies for the Spain Digital Nomad Visa Tax Regime?
        </h3>
        <ul className="text-sm text-zinc-400 space-y-2">
          {[
            "Not a Spanish tax resident in the last 5 years",
            "Working remotely for a non-Spanish employer or serving non-Spanish clients",
            "No more than 20% of total income from Spanish sources",
            "Gross income of at least €2,646/month (200% of Spain's SMI)",
            "Filed Modelo 149 within 6 months of Social Security registration",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA to calculator */}
      <div className="mt-6 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-white mb-1">
            Calculate your exact Spain tax savings
          </p>
          <p className="text-xs text-zinc-500">
            Enter your income below to see your net monthly savings under the Beckham Law
          </p>
        </div>
        <a
          href="/guides/digital-nomad-visa-spain-tax-2026"
          className="shrink-0 text-xs text-blue-400 hover:text-blue-300 transition-colors"
        >
          Full tax guide →
        </a>
      </div>
    </section>
  );
}

// Portugal-specific tax section
function PortugalTaxSection() {
  return (
    <section
      id="portugal-digital-nomad-visa-tax"
      className="mt-10 mb-10"
      aria-labelledby="portugal-tax-heading"
    >
      <h2
        id="portugal-tax-heading"
        className="text-xl font-bold text-white mb-4"
      >
        Portugal Digital Nomad Visa Tax Rules (2026)
      </h2>

      <div className="text-sm text-zinc-400 leading-relaxed space-y-4">
        <p>
          Portugal&apos;s D8 Digital Nomad Visa combined with the{" "}
          <strong className="text-zinc-200">
            NHR 2.0 regime (IFICI — Incentivo Fiscal à Investigação Científica e
            Inovação)
          </strong>{" "}
          applies a flat <strong className="text-zinc-200">20% income tax rate</strong> on
          Portuguese-sourced income for{" "}
          <strong className="text-zinc-200">10 years</strong> from the date you first
          become a Portuguese tax resident. Most income earned from foreign clients and
          employers is <strong className="text-zinc-200">fully exempt</strong> from
          Portuguese tax under this regime.
        </p>
        <p>
          This makes Portugal&apos;s effective tax rate for US remote workers earning
          exclusively from foreign clients potentially close to 0% — lower in practice
          than Spain&apos;s 24% Beckham Law, and for a longer fixed period (10 years vs
          Spain&apos;s 6 years).
        </p>
      </div>

      {/* H3: How NHR 2.0 works */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          How the NHR 2.0 Tax Regime Works for Digital Nomads
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            NHR 2.0 (IFICI) replaced Portugal&apos;s original Non-Habitual Resident
            (NHR) program in 2024. The key terms for D8 visa holders:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              "20% flat rate on Portuguese-sourced employment and freelance income",
              "Most foreign-sourced income (from non-Portuguese clients/employers) is exempt",
              "Applies for 10 consecutive tax years from first Portuguese tax residency",
              "Must be applied for in your first year of Portuguese tax residency — cannot be applied retroactively",
              "Foreign pensions are taxed at 10% (unlike the original NHR which exempted them)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            NHR 2.0 does not activate automatically when you arrive in Portugal. You must
            register as a Portuguese tax resident and then apply for NHR 2.0 status
            through the Portuguese Tax Authority (AT) portal within your first tax year.
            Missing this window means you cannot apply retroactively.
          </p>
        </div>
      </div>

      {/* H3: Do digital nomads pay tax in Portugal */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Do Digital Nomads Pay Income Tax in Portugal?
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            Under NHR 2.0, it depends entirely on where your income comes from. For a
            US remote worker earning exclusively from US clients or a US employer, the
            effective Portuguese tax rate is typically{" "}
            <strong className="text-zinc-200">close to 0%</strong> — foreign-sourced
            income is exempt and only Portuguese-sourced income faces the 20% flat rate.
          </p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-lg p-3">
              <p className="text-xs font-semibold text-emerald-400 mb-2">
                Exempt from Portuguese tax
              </p>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>→ Income from US clients or employer</li>
                <li>→ Income from non-Portuguese companies</li>
                <li>→ Foreign dividends (most cases)</li>
                <li>→ Foreign capital gains (most cases)</li>
              </ul>
            </div>
            <div className="bg-red-500/5 border border-red-500/15 rounded-lg p-3">
              <p className="text-xs font-semibold text-red-400 mb-2">
                Taxed at 20% flat
              </p>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>→ Income from Portuguese clients</li>
                <li>→ Portuguese employment income</li>
                <li>→ Foreign pension income (10%)</li>
                <li>→ Portuguese rental income</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* H3: Portugal vs Spain tax */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Portugal vs Spain Tax Rate: Which Is Lower for Digital Nomads?
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            Portugal wins on rate and duration. NHR 2.0 charges{" "}
            <strong className="text-zinc-200">20% flat for 10 years</strong> vs
            Spain&apos;s Beckham Law at{" "}
            <strong className="text-zinc-200">24% flat for 6 years</strong>. At
            $5,000/month income, Portugal saves you $2,400/month after tax and
            $1,600/month living costs — vs Spain&apos;s $2,000/month after 24% tax and
            $1,800/month costs. That&apos;s a $400/month ($4,800/year) advantage for
            Portugal.
          </p>
          <p>
            Spain has one key advantage: a lower minimum income threshold ($2,646/month
            vs Portugal&apos;s $3,480/month), making Spain the only viable European
            flat-rate option for nomads earning between $2,646–$3,479/month.
          </p>
          <a
            href="/compare/portugal-vs-spain"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-2"
          >
            Compare Portugal vs Spain taxes in full →
          </a>
        </div>
      </div>

      {/* H3: Double taxation */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Does Portugal Double Tax US Digital Nomads?
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
          <p>
            No. The US-Portugal tax treaty prevents double taxation. Under NHR 2.0,
            foreign-sourced income is exempt from Portuguese tax — you report it on your
            US return but pay no Portuguese tax on it.
          </p>
          <p>
            US citizens still file US taxes, but the{" "}
            <strong className="text-zinc-200">
              Foreign Earned Income Exclusion (FEIE)
            </strong>{" "}
            allows exclusion of up to $132,900 (2026) of foreign-earned income if you
            meet the physical presence or bona fide residence test in Portugal. The{" "}
            <strong className="text-zinc-200">Foreign Tax Credit (FTC)</strong> credits
            Portuguese taxes paid against your US liability for any remaining overlap.
          </p>
          <p>
            One treaty-specific note: US Social Security benefits paid to a Portuguese
            resident are taxable <strong className="text-zinc-200">only by the US</strong>{" "}
            — Portugal cannot tax them under the treaty.
          </p>
        </div>
      </div>

      {/* H3: NHR 2.0 application */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          How to Apply for NHR 2.0 as a D8 Visa Holder
        </h3>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-2">
          {[
            "Obtain your Portuguese NIF (tax number) — can be done remotely via a fiscal representative before you arrive",
            "Arrive in Portugal and register your address with the local Junta de Freguesia",
            "Open a Portuguese bank account (required for residency permit application at AIMA)",
            "File your NHR 2.0 application through the Portuguese Tax Authority (AT) portal — must be done in your first tax year of residency",
            "Receive NHR 2.0 confirmation — typically 4–8 weeks after filing",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xs font-mono text-zinc-600 mt-0.5 w-4 shrink-0">
                {i + 1}.
              </span>
              <p className="text-sm text-zinc-400">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* H3: Who qualifies */}
      <div className="mt-6 border-l-2 border-zinc-800 pl-4">
        <h3 className="text-base font-semibold text-white mb-3">
          Who Qualifies for Portugal&apos;s NHR 2.0 Tax Regime?
        </h3>
        <ul className="text-sm text-zinc-400 space-y-2">
          {[
            "Not a Portuguese tax resident in the last 5 years",
            "Holds a valid D8 Digital Nomad Visa or other Portuguese residency permit",
            "Earning income from remote work, freelance, or employment for non-Portuguese entities",
            "Applied for NHR 2.0 status in the first year of Portuguese tax residency",
            "Gross income of at least €3,480/month (4x Portugal's minimum wage as of 2026)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-white mb-1">
            Calculate your exact Portugal tax savings
          </p>
          <p className="text-xs text-zinc-500">
            Enter your income below to see net monthly savings under NHR 2.0
          </p>
        </div>
        <a
          href="/guides/portugal-digital-nomad-tax-calculator-2026"
          className="shrink-0 text-xs text-blue-400 hover:text-blue-300 transition-colors"
        >
          Full Portugal tax guide →
        </a>
      </div>
    </section>
  );
}

export default function CountryTaxSection({ country }: TaxSectionProps) {
  // Only render for countries with dedicated tax sections
  // Add more cases as Portugal, France etc. are built
  if (country.id === "spain") {
    return <SpainTaxSection />;
  }
  if (country.id === "portugal") {
    return <PortugalTaxSection />;
  }

  return null;
}
