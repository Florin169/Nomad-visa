// app/lib/guidesData.ts

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideSection {
  heading: string;
  content: string;
}

export interface GuideTable {
  headers: string[];
  rows: string[][];
}

export interface GuideDefinition {
  slug: string;
  countryId: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  intro: string;
  sections: {
    heading: string;
    content?: string;
    table?: GuideTable;
    list?: string[];
    subsections?: { heading: string; content: string }[];
  }[];
  faqs: GuideFaq[];
  ctas: { label: string; href: string }[];
  disclaimer: string;
  relatedGuides: string[];
}

export const guidesData: GuideDefinition[] = [
  // ─── GUIDE 1 ────────────────────────────────────────────────────────────────
  {
    slug: "spain-digital-nomad-visa-tax-rate-2026",
    countryId: "spain",
    metaTitle: "Spain Digital Nomad Visa Tax Rate 2026 — Beckham Law Calculator & Breakdown",
    metaDescription: "Spain's Digital Nomad Visa applies a flat 24% Beckham Law tax rate — not Spain's standard 47% progressive system. See the exact 2026 tax math at your income level and calculate your net monthly savings.",
    primaryKeyword: "spain digital nomad visa tax rate",
    h1: "Spain Digital Nomad Visa Tax Rate 2026: Beckham Law Explained With Real Math",
    intro: "The Spain Digital Nomad Visa tax rate is 24% flat — applied under the Beckham Law (Régimen Especial para Trabajadores Desplazados) for the first 6 years of residency. This replaces Spain's standard progressive income tax (IRPF), which reaches 47% at higher income levels. For US remote workers earning $4,000–$10,000/month, the difference is thousands of dollars per year.",
    sections: [
      {
        heading: "What Is the Beckham Law Tax Rate for Digital Nomads?",
        content: "The Beckham Law locks your Spanish income tax at a flat 24% on income up to €600,000/year. Above that threshold, the rate jumps to 47%. For the vast majority of US remote workers, the 24% flat rate applies to 100% of their income.\n\nThis regime was originally created for high-earning executives relocating to Spain. The 2023 Ley de Startups (Startup Act) extended it explicitly to digital nomads — making Spain one of the few EU countries with a dedicated flat-rate tax regime for remote workers.",
        list: [
          "Flat 24% on all Spanish-sourced income up to €600,000/year",
          "Foreign-sourced income (from non-Spanish clients) is exempt from Spanish tax entirely",
          "Applies for a maximum of 6 years",
          "Must be applied for within 6 months of Social Security registration using Modelo 149",
          "Does not trigger automatically — you must opt in",
        ],
      },
      {
        heading: "Spain Digital Nomad Visa Tax Rate vs Standard IRPF: The Numbers",
        content: "At $5,000/month gross income:",
        table: {
          headers: ["", "Standard IRPF", "Beckham Law"],
          rows: [
            ["Gross monthly income", "$5,000", "$5,000"],
            ["Effective tax rate", "~32%", "24%"],
            ["Monthly tax owed", "~$1,600", "$1,200"],
            ["Monthly take-home", "~$3,400", "$3,800"],
            ["After living costs ($1,800)", "~$1,600", "$2,000"],
            ["Annual savings", "~$19,200", "$24,000"],
          ],
        },
      },
      {
        heading: "Does the Spain Digital Nomad Visa Tax Rate Apply to Foreign Income?",
        content: "This is the most misunderstood aspect of the Beckham Law. Under the regime, income earned from non-Spanish clients or employers is fully exempt from Spanish income tax. You only pay the 24% flat rate on income sourced within Spain.\n\nFor a US remote worker employed by a US company or freelancing for US clients:\n• Income from US clients: 0% Spanish tax\n• Income from Spanish clients: 24% flat rate\n• Total effective Spanish tax rate: potentially well below 24%\n\nThe 20% rule: Under the Digital Nomad Visa terms, no more than 20% of your total income can come from Spanish sources. If you stay within this limit, the bulk of your income remains Spanish-tax-exempt.",
      },
      {
        heading: "The Modelo 149 Deadline — The Rule That Catches Most Applicants",
        content: "Qualifying for the Beckham Law is not automatic when you receive your visa. You must file Modelo 149 with the Agencia Tributaria within 6 months of registering with Spanish Social Security. Miss this window by a single day and the application is permanently rejected — you default to standard progressive IRPF rates for your entire Spanish residency.\n\nMost US applicants work with a Spanish tax advisor specifically to manage this deadline. The fee for professional handling typically runs $500–$1,500 USD.",
      },
      {
        heading: "Spain Digital Nomad Visa Minimum Income Requirement 2026",
        content: "To qualify for the visa itself (separate from the Beckham Law), you must prove a minimum monthly income of €2,646 gross for a single applicant ($2,900 USD approximate). With dependents, add 75% of Spain's SMI per additional dependent.\n\nProof requirements: 3 months of certified bank statements or payslips. For freelancers, active service contracts with registered companies outside Spain are required.",
      },
      {
        heading: "2026 Spain DNV Tax Rate vs Other European Nomad Visas",
        table: {
          headers: ["Country", "Tax Regime", "Rate", "Duration"],
          rows: [
            ["Spain", "Beckham Law", "24% flat", "6 years"],
            ["Portugal", "NHR 2.0", "20% flat", "10 years"],
            ["Estonia", "Flat income tax", "20% flat", "No cap"],
            ["Germany", "Progressive", "30–38% effective", "N/A"],
            ["France", "Progressive", "30–45% effective", "N/A"],
          ],
        },
        content: "Portugal's NHR 2.0 offers a lower flat rate (20%) for a longer period (10 years), but carries a higher minimum income threshold ($3,480/month vs Spain's $2,646/month).",
      },
    ],
    faqs: [
      {
        q: "What is the tax rate for Spain's digital nomad visa?",
        a: "The Beckham Law applies a flat 24% income tax rate on Spanish-sourced income. Foreign-sourced income from non-Spanish clients is exempt. This rate applies for 6 years from the date you become a Spanish tax resident.",
      },
      {
        q: "Do US citizens pay double tax in Spain under the digital nomad visa?",
        a: "No. The US-Spain tax treaty prevents double taxation. Under the Beckham Law, foreign-sourced income is exempt from Spanish tax. You still file US taxes as a citizen, but the Foreign Earned Income Exclusion (FEIE — $132,900 for 2026) and Foreign Tax Credit reduce or eliminate your US liability on the same income.",
      },
      {
        q: "What happens to my Spain digital nomad visa tax rate after 6 years?",
        a: "After the 6-year Beckham Law period ends, you transition to Spain's standard progressive IRPF rates (up to 47%). Many nomads plan their exit strategy in advance — commonly transitioning to Portugal's NHR 2.0 regime to reset their flat-rate clock for another 10 years.",
      },
      {
        q: "Is the Spain digital nomad visa worth it for US remote workers?",
        a: "At incomes above $3,000/month, the Beckham Law produces meaningful tax savings versus both US progressive rates and standard Spanish rates. The visa also grants full Schengen zone access, a path to permanent EU residency after 5 years, and eventual Spanish citizenship after 10 years. For US nomads planning a long-term European base, Spain is among the most financially structured options available.",
      },
    ],
    ctas: [
      { label: "Run your exact Spain tax calculation", href: "/visa/spain" },
      { label: "Compare Spain vs Portugal side by side", href: "/compare/spain-vs-portugal" },
    ],
    disclaimer: "Data reflects 2026 Spain Digital Nomad Visa (Ley de Startups) legislative framework. Verify with a qualified Spanish tax advisor before filing. NomadTaxIndex is an intelligence tool, not a legal or tax service.",
    relatedGuides: ["portugal-digital-nomad-tax-calculator-2026", "spain-vs-portugal-digital-nomad-tax-2026"],
  },

  // ─── GUIDE 2 ────────────────────────────────────────────────────────────────
  {
    slug: "move-from-uae-to-thailand-2026",
    countryId: "thailand",
    metaTitle: "Move From UAE to Thailand in 2026 — Visa, Tax & Savings Comparison",
    metaDescription: "Moving from UAE to Thailand as a digital nomad? Thailand's LTR Visa saves more than UAE below $8,000/month. Here's the complete 2026 tax, cost, and visa transition guide.",
    primaryKeyword: "move from uae to thailand",
    h1: "Move From UAE to Thailand in 2026: The Complete Digital Nomad Transition Guide",
    intro: "Moving from the UAE to Thailand is one of the most common digital nomad transitions in 2026 — and for good reason. The UAE offers 0% income tax but costs $3,200/month to live. Thailand's LTR Visa offers 17% flat tax on remitted income and costs $1,200/month. Below $8,000/month gross income, Thailand produces higher net savings than the UAE despite having income tax.",
    sections: [
      {
        heading: "UAE vs Thailand: Net Savings at Key Income Levels",
        table: {
          headers: ["Monthly Income", "UAE (0% tax, $3,200 costs)", "Thailand LTR (17% tax, $1,200 costs)", "Thailand Advantage"],
          rows: [
            ["$3,000", "-$200/mo (doesn't qualify)", "$1,290/mo", "+$1,490"],
            ["$5,000", "$1,800/mo", "$2,950/mo", "+$1,150"],
            ["$8,000", "$4,800/mo", "$5,440/mo", "+$640"],
            ["$10,000", "$6,800/mo", "$7,100/mo", "+$300"],
            ["$15,000", "$11,800/mo", "$11,250/mo", "UAE +$550"],
          ],
        },
        content: "The crossover point is approximately $12,000–$15,000/month. Below that, Thailand's dramatically lower cost of living outweighs its 17% tax rate. Above $15,000/month, the UAE's 0% tax produces better net savings.",
      },
      {
        heading: "Thailand LTR Visa Requirements for UAE Residents",
        content: "The Thailand Long-Term Resident (LTR) Visa is the correct visa for US remote workers moving from the UAE.",
        list: [
          "Income: $80,000/year ($6,667/month) minimum, documented over the past 2 years",
          "Health insurance: Minimum $50,000 coverage or $100,000 in Thai bank deposits",
          "Application: Online via the Thailand Board of Investment (BOI) portal",
          "Processing time: 4–8 weeks",
          "Visa duration: 10 years (5-year visa + 5-year renewal)",
          "Work permit: Included — allows remote work for foreign employers",
        ],
      },
      {
        heading: "How Thailand's Tax System Works for UAE Expats",
        content: "Thailand's LTR Visa applies a flat 17% income tax on income remitted into Thailand — money you transfer into a Thai bank account. Income kept in foreign accounts is not subject to Thai tax.\n\nFor a US nomad moving from Dubai with $7,000/month income:\n• Keep $3,000/month in a US or UAE account: taxed at 0%\n• Transfer $4,000/month to Thailand for living expenses: taxed at 17% ($680)\n• Effective total Thai tax: $680/month (9.7% effective rate)\n• After $1,200/month living costs: $5,120/month saved\n\nThis remittance-based structure gives you significant control over your effective tax rate. Most Thailand-based nomads structure transfers to minimize the taxable amount while covering local costs.",
      },
      {
        heading: "Practical Steps: Moving From UAE to Thailand",
        content: "Month 1–2 (while still in UAE): Apply for Thailand LTR Visa via BOI portal (4–8 week processing). Obtain health insurance meeting Thai requirements. Compile 2 years of income documentation (tax returns, bank statements, or employer letters).\n\nMonth 2–3: Receive LTR Visa approval. Arrange Thai bank account (Bangkok Bank, Kasikorn, or SCB accept foreign nationals with LTR documentation). Book accommodation in Chiang Mai, Bangkok, or Koh Samui for first 1–3 months.\n\nMonth 3 onwards: Cancel UAE residency visa (voluntary cancellation at GDRFA Dubai). Establish Thai residency address for BOI registration. Set up remittance structure to manage taxable income flow.\n\nCost of the transition: Thailand LTR Visa fee is approximately $200 USD.",
      },
      {
        heading: "UAE vs Thailand: What You Give Up and Gain",
        content: "What you gain moving to Thailand: $2,000+/month in additional savings at most income levels, 10-year visa stability with no annual renewals, Chiang Mai/Bangkok digital nomad infrastructure, and Southeast Asia as a travel base with direct flights to Japan, Vietnam, Indonesia, and India.\n\nWhat you give up: UAE's 0% tax on all income, Dubai's financial infrastructure (easier international banking), UTC+4 timezone advantage for EU/Asia client overlap, and UAE's long-term residency options.",
      },
    ],
    faqs: [
      {
        q: "Can I get a Thailand LTR Visa while living in the UAE?",
        a: "Yes. The LTR Visa application is entirely online through the BOI portal and can be initiated from any country. UAE residents regularly apply without returning to their home country first.",
      },
      {
        q: "Do I pay tax in both UAE and Thailand when I move?",
        a: "The UAE has no personal income tax, so there's no UAE tax obligation to manage. Thailand only taxes income remitted into Thailand — money in your UAE or US accounts is not subject to Thai tax. There is no double taxation risk on this transition.",
      },
      {
        q: "Is Chiang Mai or Bangkok better for US nomads moving from Dubai?",
        a: "Chiang Mai is the better landing choice for most US nomads: 40% cheaper than Bangkok, established nomad infrastructure, and slower pace. Bangkok makes sense if you need a major airport hub, financial services, or prefer a larger city. Both have reliable fiber internet (200+ Mbps) and co-working ecosystems comparable to Dubai's.",
      },
      {
        q: "What happens to my UAE bank accounts when I leave?",
        a: "UAE bank accounts remain open after you leave. Most UAE banks allow non-residents to maintain accounts — you simply notify them of your address change. Many nomads keep UAE accounts for receiving client payments at 0% UAE tax, then transfer selectively to Thailand.",
      },
    ],
    ctas: [
      { label: "See the full UAE vs Thailand comparison", href: "/compare/uae-vs-thailand" },
      { label: "Thailand LTR Visa details and document checklist", href: "/visa/thailand" },
    ],
    disclaimer: "Data reflects 2026 UAE Remote Work Visa and Thailand LTR Visa frameworks. Always verify current requirements with official sources before relocating. NomadTaxIndex is an intelligence tool, not a legal service.",
    relatedGuides: ["spain-digital-nomad-visa-tax-rate-2026", "portugal-digital-nomad-tax-calculator-2026"],
  },

  // ─── GUIDE 3 ────────────────────────────────────────────────────────────────
  {
    slug: "portugal-digital-nomad-tax-calculator-2026",
    countryId: "portugal",
    metaTitle: "Portugal Digital Nomad Tax Calculator 2026 — NHR 2.0 Rate & D8 Visa Math",
    metaDescription: "Portugal's NHR 2.0 taxes qualifying digital nomads at 20% flat for 10 years. Calculate your exact net savings on the D8 Visa, check the €3,480/month income requirement, and see how it compares to Spain.",
    primaryKeyword: "portugal digital nomad tax calculator",
    h1: "Portugal Digital Nomad Tax Calculator 2026: NHR 2.0 Complete Breakdown",
    intro: "Portugal's D8 Digital Nomad Visa combined with the NHR 2.0 (IFICI) tax regime offers US remote workers a flat 20% income tax rate for 10 years — one of the most favorable long-term tax structures in Europe. At $5,000/month income, you keep $4,000 after tax and save $2,400/month after living costs. Over 10 years, that's $288,000 in net savings at this income level.",
    sections: [
      {
        heading: "Portugal Digital Nomad Visa Tax Rate 2026",
        content: "The NHR 2.0 regime (officially IFICI — Incentivo Fiscal à Investigação Científica e Inovação) replaced Portugal's original NHR program in 2024.",
        table: {
          headers: ["", "Original NHR", "NHR 2.0 (IFICI)"],
          rows: [
            ["Flat rate", "20%", "20%"],
            ["Duration", "10 years", "10 years"],
            ["Foreign income exemption", "Most types exempt", "Reduced exemptions"],
            ["Pension income", "Exempt", "Now taxable at 10%"],
            ["Available to new applicants", "Closed 2024", "Open"],
          ],
        },
      },
      {
        heading: "Portugal Nomad Tax Calculator: Your Numbers at Key Income Levels",
        table: {
          headers: ["Monthly Income", "Tax (20%)", "Take-Home", "Living Costs", "Monthly Savings", "Annual Savings"],
          rows: [
            ["$3,480 (minimum)", "$696", "$2,784", "$1,600", "$1,184", "$14,208"],
            ["$5,000", "$1,000", "$4,000", "$1,600", "$2,400", "$28,800"],
            ["$7,500", "$1,500", "$6,000", "$1,600", "$4,400", "$52,800"],
            ["$10,000", "$2,000", "$8,000", "$1,600", "$6,400", "$76,800"],
          ],
        },
        content: "Living costs based on NomadTaxIndex 2026 Portugal average ($1,600/month). Actual costs vary — Lisbon and Porto run $1,800–$2,200/month; Algarve, Braga, and the Azores run $1,100–$1,400/month.",
      },
      {
        heading: "Does My Foreign Income Get Taxed Under Portugal NHR 2.0?",
        content: "This is the most important question for US nomads. Under NHR 2.0:\n• Income from foreign employers (remote employment): Generally exempt\n• Freelance income from foreign clients: Generally exempt\n• Portuguese-sourced income: Taxed at 20% flat\n• Dividends from foreign sources: Treatment varies — consult a tax advisor\n• US Social Security: Protected by US-Portugal tax treaty; taxable only by the US\n\nPractical implication: A US freelancer earning $7,000/month entirely from US clients, living in Lisbon on the D8 Visa, may have an effective Portuguese tax rate close to 0% — paying 20% only on any Portuguese-sourced income. The 20% headline rate is a ceiling, not a floor.",
      },
      {
        heading: "Portugal D8 Visa Income Requirement 2026",
        content: "The D8 Visa requires proof of a minimum monthly income of €3,480/month (4x Portugal's minimum wage). In USD: approximately $3,800/month.\n\nProof requirements by employment type:\n• Remote employees: Employment contract plus 3 months of payslips or bank statements\n• Freelancers: Active client contracts plus 3–6 months of bank statements\n• Business owners: Business registration documents plus bank statements\n\nThe €3,480 threshold is higher than Spain's €2,646 requirement — the most common reason US nomads choose Spain over Portugal at lower income levels.",
      },
      {
        heading: "Portugal vs Spain Tax Rate: Side-by-Side at $5,000/Month",
        table: {
          headers: ["Metric", "Portugal (NHR 2.0)", "Spain (Beckham Law)"],
          rows: [
            ["Tax rate", "20% flat", "24% flat"],
            ["Monthly tax at $5,000", "$1,000", "$1,200"],
            ["Average living costs", "$1,600", "$1,800"],
            ["Monthly savings", "$2,400", "$2,000"],
            ["Annual savings", "$28,800", "$24,000"],
            ["Regime duration", "10 years", "6 years"],
            ["Minimum income", "$3,480/mo", "$2,646/mo"],
            ["Citizenship path", "5 years", "10 years"],
            ["Visa processing", "4–8 weeks", "3–6 months"],
          ],
        },
        content: "Portugal wins at $5,000/month on every financial metric. Spain wins on lower income threshold and larger city options.",
      },
      {
        heading: "NHR 2.0 Application Process for D8 Visa Holders",
        content: "NHR 2.0 status is not automatic — you must apply in your first year of Portuguese tax residency. Miss this window and you cannot apply retroactively.\n\n1. Obtain your Portuguese NIF (tax identification number) — can be done remotely via a fiscal representative\n2. Arrive in Portugal and register your address with the local Junta de Freguesia\n3. Open a Portuguese bank account\n4. File your NHR 2.0 application through the Portuguese Tax Authority (AT) portal during your first tax year\n5. Receive confirmation (typically 4–6 weeks after application)",
      },
    ],
    faqs: [
      {
        q: "What is the tax rate for Portugal's digital nomad visa?",
        a: "Under NHR 2.0, qualifying digital nomads pay a flat 20% rate on Portuguese-sourced income. Most income from foreign clients and employers is exempt. The effective rate for US freelancers earning entirely from foreign sources can be substantially below 20%.",
      },
      {
        q: "Is Portugal's NHR 2.0 better than Spain's Beckham Law for US citizens?",
        a: "At incomes above $3,480/month where both visas are accessible, Portugal's NHR 2.0 produces higher net savings (20% vs 24% tax, lower living costs), offers a longer tax benefit period (10 vs 6 years), and a faster citizenship path (5 vs 10 years). For most US nomads at $4,000–$10,000/month, Portugal is the stronger financial choice.",
      },
      {
        q: "Can I apply for Portugal's D8 Visa from the US?",
        a: "Yes. Apply through your nearest Portuguese consulate. Major US cities with Portuguese consulates: New York, Boston, Newark, San Francisco, Los Angeles, Washington DC. Processing takes 8–12 weeks from consulate application submission.",
      },
      {
        q: "Does Portugal tax my US retirement income?",
        a: "Under the US-Portugal tax treaty, US Social Security benefits paid to a Portuguese resident are taxable only by the US — Portugal cannot tax them. Other US retirement income (401k distributions, IRA withdrawals) may be subject to Portuguese tax under NHR 2.0 depending on income type. Verify with a dual-qualified US-Portugal tax advisor.",
      },
    ],
    ctas: [
      { label: "Calculate your exact Portugal savings", href: "/visa/portugal" },
      { label: "Compare Portugal vs Spain at your income level", href: "/compare/portugal-vs-spain" },
    ],
    disclaimer: "Data reflects 2026 Portugal D8 Digital Nomad Visa and NHR 2.0 (IFICI) legislative framework. Always verify with a licensed Portuguese tax advisor before filing. NomadTaxIndex is an intelligence tool, not a legal or tax service.",
    relatedGuides: ["spain-digital-nomad-visa-tax-rate-2026", "spain-vs-portugal-digital-nomad-tax-2026"],
  },

  // ─── GUIDE 4 ────────────────────────────────────────────────────────────────
  {
    slug: "does-france-have-a-digital-nomad-visa",
    countryId: "france",
    metaTitle: "Does France Have a Digital Nomad Visa in 2026? (Honest Answer + Best Alternative)",
    metaDescription: "France has no dedicated digital nomad visa in 2026. The closest option is the Talent Passport (Passeport Talent). Here's exactly what it requires, what it costs, and how it compares to Spain and Portugal.",
    primaryKeyword: "does france have a digital nomad visa",
    h1: "Does France Have a Digital Nomad Visa in 2026?",
    intro: "No — France does not have a dedicated digital nomad visa in 2026. Unlike Spain, Portugal, Estonia, and several other EU countries, France has not launched a visa specifically branded for remote workers. The closest legal alternative for US remote workers is the Talent Passport (Passeport Talent) — specifically the Business Creator or Salaried Employee categories. It functions similarly to a nomad visa but carries stricter qualification requirements and higher tax obligations.",
    sections: [
      {
        heading: "What Is the France Talent Passport for Remote Workers?",
        content: "The Talent Passport is a 4-year renewable residency permit for skilled foreign professionals, entrepreneurs, and remote workers. Unlike Spain's 1-year DNV or Portugal's D8, it is issued for 4 years upfront with no first-year temporary status.\n\nFor US remote workers, the relevant categories are:\n\nSalarié en mission (Remote Employee): For employees of foreign companies assigned to work in France. Requires employment contract, employer authorization letter, and proof the company has operated for 1+ year.\n\nCréation d'entreprise (Business Creator / Freelancer): For self-employed professionals. Requires a Master's degree or 5+ years of professional experience, a viable business plan, and proof of at least €30,000 in project financing.",
      },
      {
        heading: "France Digital Nomad Visa Requirements 2026 (Talent Passport)",
        table: {
          headers: ["Requirement", "France Talent Passport", "Spain DNV", "Portugal D8"],
          rows: [
            ["Income threshold", "No formal minimum", "€2,646/month", "€3,480/month"],
            ["Qualification requirement", "Master's degree or 5yr exp", "None", "None"],
            ["Business plan required", "Yes (freelancers)", "No", "No"],
            ["Processing time", "6–10 weeks", "3–6 months", "4–8 weeks"],
            ["Visa duration", "4 years", "1 year (renewable)", "1 year (renewable)"],
            ["Path to citizenship", "5 years", "10 years", "5 years"],
          ],
        },
        content: "France's Talent Passport has no income minimum — but the qualification and business plan requirements make it harder to obtain than Spain or Portugal despite the lack of a formal threshold.",
      },
      {
        heading: "What Are the Tax Rates in France for Digital Nomads?",
        content: "France has no flat-rate nomad tax regime equivalent to Spain's Beckham Law or Portugal's NHR 2.0. Remote workers on the Talent Passport are taxed under France's standard progressive income tax system.",
        table: {
          headers: ["Annual Income", "French Tax Rate", "Effective Rate"],
          rows: [
            ["Up to €11,294", "0%", "0%"],
            ["€11,295–€28,797", "11%", "~5%"],
            ["€28,798–€82,341", "30%", "~20%"],
            ["€82,342–€177,106", "41%", "~28%"],
            ["Above €177,106", "45%", "Up to 45%"],
          ],
        },
      },
      {
        heading: "Should US Nomads Choose France Over Spain or Portugal?",
        content: "Choose France if: EU citizenship in 5 years is your primary goal (same as Portugal, much faster than Spain's 10 years), you specifically want to live in Paris or other French cities, you have a Master's degree that simplifies the Talent Passport application, or language immersion is a priority.\n\nChoose Spain or Portugal instead if: Tax efficiency matters — both offer flat-rate regimes France lacks. You want a simpler application without a business plan. Budget matters — France's living costs ($2,100/month average) are 17–31% higher than Spain or Portugal.",
      },
      {
        heading: "How to Apply for France's Talent Passport as a US Citizen",
        content: "1. Determine which Talent Passport category applies to your situation\n2. Prepare your business plan (freelancers) or employment documentation (employees)\n3. Apply at the nearest French consulate in the US (New York, Los Angeles, Chicago, Houston, Miami, San Francisco)\n4. Submit documentation including apostilled degree certificates, business plan, proof of financing, and health insurance\n5. Processing: 6–10 weeks\n6. Upon approval: enter France and complete residency registration with the local Prefecture within 3 months",
      },
    ],
    faqs: [
      {
        q: "Does France have a digital nomad visa like Spain or Portugal?",
        a: "No. France has no dedicated digital nomad visa in 2026. The Talent Passport is the closest alternative — it covers remote employees and business creators but requires professional qualifications and a business plan that Spain and Portugal's nomad visas do not.",
      },
      {
        q: "Can a US citizen work remotely in France legally?",
        a: "Yes, through the Talent Passport. Working remotely in France on a tourist visa (even within the 90-day Schengen allowance) is technically not permitted and creates tax residency risk if you stay long enough. The Talent Passport is the correct legal route for stays beyond 90 days.",
      },
      {
        q: "What is the income requirement for France's Talent Passport?",
        a: "There is no formal minimum income requirement for the Talent Passport. However, for the Business Creator category, you must demonstrate €30,000 in project financing. For the Salaried Employee category, your employment contract and salary must be consistent with your role and industry.",
      },
      {
        q: "Is France citizenship faster than Portugal citizenship?",
        a: "They are identical: both require 5 years of legal residency. France requires a B1-level French language test; Portugal requires A2-level Portuguese. France allows dual citizenship; Portugal does too. Both paths lead to an EU passport with full Schengen zone rights.",
      },
    ],
    ctas: [
      { label: "Compare France vs other European nomad destinations", href: "/compare/france-vs-south-korea" },
      { label: "France visa details and tax calculator", href: "/visa/france" },
      { label: "Better tax options: Spain vs Portugal", href: "/compare/spain-vs-portugal" },
    ],
    disclaimer: "Data reflects 2026 French Talent Passport (Passeport Talent) requirements. Always verify current requirements at the French consulate nearest to you. NomadTaxIndex is an intelligence tool, not a legal service.",
    relatedGuides: ["spain-digital-nomad-visa-tax-rate-2026", "portugal-digital-nomad-tax-calculator-2026", "spain-vs-portugal-digital-nomad-tax-2026"],
  },

  // ─── GUIDE 5 ────────────────────────────────────────────────────────────────
  {
    slug: "spain-vs-portugal-digital-nomad-tax-2026",
    countryId: "spain",
    metaTitle: "Spain vs Portugal Digital Nomad Tax 2026 — Which Saves More? (Beckham Law vs NHR 2.0)",
    metaDescription: "Spain's Beckham Law (24% flat, 6 years) vs Portugal's NHR 2.0 (20% flat, 10 years). At $5,000/month, Portugal saves $400/month more. See the full 2026 comparison across tax, visas, cost, and citizenship.",
    primaryKeyword: "spain vs portugal digital nomad",
    h1: "Spain vs Portugal Digital Nomad Tax 2026: Beckham Law vs NHR 2.0 Complete Comparison",
    intro: "For US remote workers choosing between Spain and Portugal in 2026, Portugal wins on pure financial math at most income levels — lower tax rate, lower living costs, longer tax benefit duration. Spain wins on lower income threshold, larger city options, and visa accessibility for earners between $2,646–$3,480/month where Portugal's D8 isn't accessible. Here's the complete comparison across every metric that matters.",
    sections: [
      {
        heading: "Tax Rate: Portugal NHR 2.0 vs Spain Beckham Law",
        table: {
          headers: ["", "Spain Beckham Law", "Portugal NHR 2.0"],
          rows: [
            ["Flat tax rate", "24%", "20%"],
            ["Tax regime duration", "6 years", "10 years"],
            ["Foreign income treatment", "Exempt", "Mostly exempt"],
            ["After 6/10 years", "Progressive (up to 47%)", "Progressive (up to 48%)"],
            ["Application window", "6 months from SS registration", "First year of tax residency"],
            ["Application form", "Modelo 149", "AT Portal (NHR 2.0)"],
          ],
        },
        content: "Portugal's 20% rate saves you 4 percentage points vs Spain's 24%. On $5,000/month: $200/month in additional tax savings. Over Portugal's 10-year duration: $24,000 in tax savings from the rate difference alone — before accounting for living cost differences.",
      },
      {
        heading: "Net Monthly Savings: Spain vs Portugal at Key Income Levels",
        table: {
          headers: ["Monthly Income", "Spain (24% tax, $1,800 costs)", "Portugal (20% tax, $1,600 costs)", "Portugal Advantage"],
          rows: [
            ["$3,480", "$846", "$1,184", "+$338/mo"],
            ["$4,000", "$1,240", "$1,600", "+$360/mo"],
            ["$5,000", "$2,000", "$2,400", "+$400/mo"],
            ["$7,500", "$3,900", "$4,400", "+$500/mo"],
            ["$10,000", "$5,800", "$6,400", "+$600/mo"],
          ],
        },
        content: "Portugal produces more savings at every income level where both visas are accessible ($3,480+/month). The advantage grows at higher incomes because both the tax rate differential and living cost differential compound.",
      },
      {
        heading: "Visa Requirements: Which Is Easier to Get?",
        table: {
          headers: ["Requirement", "Spain DNV (Ley de Startups)", "Portugal D8"],
          rows: [
            ["Minimum monthly income", "€2,646 (~$2,900)", "€3,480 (~$3,800)"],
            ["Income documentation", "3 months bank statements", "3 months bank statements"],
            ["Background check", "Yes (FBI apostille)", "Yes (FBI apostille)"],
            ["Health insurance", "Yes", "Yes"],
            ["Processing time", "3–6 months", "4–8 weeks"],
            ["One-time visa fee", "$865", "$533"],
          ],
        },
        content: "Spain's income threshold ($2,646/month) beats Portugal's ($3,480/month) — the decisive advantage for remote workers earning $2,646–$3,479/month who can only access Spain. Above $3,480/month, Portugal's faster processing (4–8 weeks vs 3–6 months), lower fee ($533 vs $865), and simpler application make it easier to obtain.",
      },
      {
        heading: "Cost of Living: Spain vs Portugal",
        table: {
          headers: ["Expense", "Spain (Major Cities)", "Portugal (Major Cities)"],
          rows: [
            ["1-bed apartment (center)", "$1,200–$1,600", "$1,100–$1,500"],
            ["Groceries (monthly)", "$350–$450", "$300–$400"],
            ["Coworking space", "$150–$250", "$120–$200"],
            ["Total average", "$1,800", "$1,600"],
          ],
        },
        content: "Portugal is $200/month cheaper on average. In secondary cities (Valencia/Malaga vs Braga/Porto), the gap narrows. In the capitals (Madrid/Barcelona vs Lisbon), it widens — Lisbon has seen steeper rent increases than Madrid in recent years.",
      },
      {
        heading: "Citizenship Path: Spain vs Portugal",
        table: {
          headers: ["", "Spain", "Portugal"],
          rows: [
            ["Permanent residency", "5 years", "5 years"],
            ["Full citizenship", "10 years", "5 years"],
            ["Language requirement", "B1 Spanish", "A2 Portuguese"],
            ["Dual citizenship", "Yes (US+Spain)", "Yes (US+Portugal)"],
            ["Passport strength", "#6 globally", "#5 globally"],
          ],
        },
        content: "Portugal's 5-year citizenship path is the single biggest long-term advantage over Spain's 10-year requirement. Both result in an EU passport — but Portugal gets you there in half the time. The A2 Portuguese language requirement is also considered easier to achieve than Spain's B1 Spanish.",
      },
      {
        heading: "The Spain → Portugal Strategy",
        content: "Many experienced nomads use both countries sequentially:\n\nYear 1–6: Spain on the Beckham Law. Build Schengen residency, take advantage of the flat 24% rate, establish European banking and professional network.\n\nYear 6: Beckham Law expires. Transition to Portugal's D8 Visa and apply for NHR 2.0 in the first tax year — resetting the flat-rate clock for another 10 years at 20%.\n\nYear 11 (Portugal year 5): Apply for Portuguese citizenship. EU passport acquired.\n\nThis strategy maximizes the flat-rate tax benefit period (16 years total) while ending with EU citizenship in 11 years from the initial Spain move.",
      },
    ],
    faqs: [
      {
        q: "Is Spain or Portugal better for US digital nomads in 2026?",
        a: "Portugal is better at incomes above $3,480/month: lower tax (20% vs 24%), lower living costs ($1,600 vs $1,800/month), longer tax benefit (10 vs 6 years), faster citizenship (5 vs 10 years), and faster visa processing. Spain is the only accessible option for US nomads earning $2,646–$3,479/month.",
      },
      {
        q: "Which country has a lower tax rate — Spain or Portugal?",
        a: "Portugal's NHR 2.0 is lower at 20% flat vs Spain's Beckham Law at 24% flat. Both apply flat rates as alternatives to much higher progressive systems (Portugal up to 48%, Spain up to 47%). Both also exempt most foreign-sourced income from tax entirely.",
      },
      {
        q: "Can I switch from Spain to Portugal after my Beckham Law period ends?",
        a: "Yes — this is a well-documented transition strategy. After 6 years in Spain, you apply for Portugal's D8 Visa and NHR 2.0 regime in your first Portuguese tax year. The only requirement is establishing Portuguese tax residency — you don't need to renounce Spanish residency first, though you cannot be a tax resident in both countries simultaneously.",
      },
      {
        q: "Does Spain or Portugal double tax US citizens?",
        a: "Neither. Both countries have tax treaties with the US preventing double taxation. Under both the Beckham Law and NHR 2.0, foreign-sourced income is generally exempt from local tax. US citizens still file US taxes but can use the Foreign Earned Income Exclusion ($132,900 in 2026) and Foreign Tax Credit to reduce or eliminate US liability on the same income.",
      },
      {
        q: "Which is faster — Spain or Portugal digital nomad visa?",
        a: "Portugal processes in 4–8 weeks vs Spain's 3–6 months. If you need residency quickly, Portugal is significantly faster.",
      },
    ],
    ctas: [
      { label: "Run the exact Spain vs Portugal calculation at your income", href: "/compare/spain-vs-portugal" },
      { label: "Spain Digital Nomad Visa details", href: "/visa/spain" },
      { label: "Portugal D8 Visa details", href: "/visa/portugal" },
    ],
    disclaimer: "Data reflects 2026 Spain Digital Nomad Visa (Ley de Startups) and Portugal D8 Digital Nomad Visa legislative frameworks. Always verify with qualified local tax advisors before making residency decisions. NomadTaxIndex is an intelligence tool, not a legal or tax service.",
    relatedGuides: ["spain-digital-nomad-visa-tax-rate-2026", "portugal-digital-nomad-tax-calculator-2026", "does-france-have-a-digital-nomad-visa"],
  },

  // ─── GUIDE 6 ────────────────────────────────────────────────────────────────
  {
    slug: "digital-nomad-visa-spain-tax-2026",
    countryId: "spain",
    metaTitle: "Digital Nomad Visa Spain Tax 2026 — Complete Guide (Beckham Law, Rates & Rules)",
    metaDescription: "Spain's Digital Nomad Visa taxes remote workers at a flat 24% Beckham Law rate instead of the standard 47% progressive system. Here's every Spain DNV tax rule US nomads need to know for 2026.",
    primaryKeyword: "digital nomad visa spain tax",
    h1: "Digital Nomad Visa Spain Tax 2026: The Complete Guide for US Remote Workers",
    intro: "Spain's Digital Nomad Visa (Ley de Startups) comes with one of Europe's most favorable tax structures for foreign remote workers — a flat 24% Beckham Law rate replacing Spain's standard progressive income tax (IRPF) that reaches 47%. But the Spain digital nomad visa tax system has rules, deadlines, and exceptions that trip up most applicants. This guide covers every tax rule US nomads need to understand before applying.",
    sections: [
      {
        heading: "What Taxes Apply to Spain's Digital Nomad Visa?",
        content: "Spain's DNV holders are subject to three potential tax categories.\n\nIncome Tax (IRPF / Beckham Law): The primary tax for DNV holders. Standard Spanish tax residents pay progressive IRPF rates from 19% to 47%. DNV holders who apply for the Beckham Law regime pay a flat 24% on income up to €600,000/year instead. Above €600,000/year the rate is 47%.\n\nSocial Security Contributions: Employees whose foreign employer voluntarily registers with the Spanish Social Security system may pay contributions. Most US remote workers on employment contracts are exempt through the US-Spain totalization agreement. Freelancers who register as Autónomos in Spain pay monthly social security contributions — typically €200–€300/month in year one. Many DNV holders avoid this by maintaining their foreign employment or contractor status.\n\nVAT (IVA): Only applies if you provide services to Spanish clients. Remote workers earning from non-Spanish sources do not collect or remit Spanish VAT.",
      },
      {
        heading: "The Beckham Law: How Spain's DNV Tax Rate Actually Works",
        content: "The Beckham Law (Régimen Especial para Trabajadores Desplazados) is the tax regime that makes Spain's DNV financially viable. Under it, income from foreign employers and clients is fully exempt from Spanish tax. Income from Spanish clients (up to 20% of total income) is taxed at 24% flat. Capital gains and dividends from foreign assets are exempt. Spanish-sourced capital gains are taxed at standard rates (19–28%). Foreign wealth is exempt — no Modelo 720 declaration required.\n\nThe 20% rule: Under DNV terms, no more than 20% of your total annual income can come from Spanish sources. If you exceed this, your visa status is at risk and the Beckham Law may no longer apply.\n\nFor most US freelancers and remote employees earning from US clients or a US employer, the effective Spanish income tax rate under the Beckham Law is close to 0% — you pay 24% only on any Spanish-sourced portion of income, which for most US nomads is zero.",
      },
      {
        heading: "Spain Digital Nomad Visa Tax: Employee vs Freelancer",
        content: "The Beckham Law applies to both employees and freelancers on the DNV, but the structure differs.\n\nEmployees (W-2 equivalent): Your foreign employer pays you as normal. Spain taxes only the Spanish-sourced portion of your salary at 24%. If your employer is entirely US-based and you have no Spanish clients, your effective Spanish income tax rate is 0%.\n\nFreelancers (1099 / Self-employed): You can access the Beckham Law as a freelancer under the DNV if your work qualifies as innovative activity or serves clients outside Spain. The 24% flat rate applies to your Spanish-sourced freelance income. Income from US or other non-Spanish clients is exempt. However, if you register as an Autónomo in Spain, social security contributions apply on top. Many freelancers on the DNV avoid Autónomo registration by maintaining their US business entity.",
      },
      {
        heading: "How Spain DNV Taxes Compare to Other European Nomad Destinations",
        table: {
          headers: ["Country", "Tax Regime", "Rate", "Foreign Income"],
          rows: [
            ["Spain DNV", "Beckham Law", "24% flat", "Exempt"],
            ["Portugal D8", "NHR 2.0", "20% flat", "Mostly exempt"],
            ["Estonia DNV", "Flat income tax", "20% flat", "Taxable"],
            ["Germany Freelancer", "Progressive IRPF", "30–38% effective", "Taxable"],
            ["France Talent Passport", "Progressive", "30–45% effective", "Taxable"],
          ],
        },
        content: "Spain's 24% is higher than Portugal's 20% NHR 2.0, but both exempt foreign income — making the effective rate for US nomads with foreign clients comparable in practice. The difference shows up on Spanish-sourced income, where Spain charges 24% vs Portugal's 20%.",
      },
      {
        heading: "The Modelo 149 Deadline — The Most Dangerous Spain Tax Rule",
        content: "This is the rule that costs applicants the most money when missed.\n\nThe Beckham Law does not activate automatically when you receive your DNV. You must file Modelo 149 with the Agencia Tributaria within 6 calendar months of the date you register with Spanish Social Security (Seguridad Social).\n\nWhat happens if you miss it: Your application for the Beckham Law is permanently rejected. You cannot reapply. You default to Spain's standard progressive IRPF rates (19–47%) for your entire Spanish residency — potentially costing tens of thousands of dollars in additional tax.\n\nThe filing process: First, register with Social Security within 30 days of starting activities in Spain. Second, count 6 months from your Social Security registration date — this is your hard deadline. Third, file Modelo 149 electronically through the AEAT (Agencia Estatal de Administración Tributaria) portal. Fourth, receive confirmation of Beckham Law status — typically 4–8 weeks after filing.\n\nMost US applicants hire a Spanish gestor (tax administrator) specifically to manage this deadline. Professional fees for Modelo 149 filing typically run €300–€800.",
      },
      {
        heading: "Does Spain Double Tax US Citizens?",
        content: "No — but the interaction between US and Spanish tax obligations requires careful management.\n\nThe US-Spain Tax Treaty (in force since 1990) prevents double taxation on most income types. Foreign income exempt under the Beckham Law is not taxed in Spain — you report it on your US return but do not pay Spanish tax on it. The Foreign Earned Income Exclusion (FEIE) lets US citizens exclude up to $132,900 (2026) of foreign-earned income from US income tax if they meet the bona fide residence or physical presence test in Spain. The Foreign Tax Credit (FTC) allows you to credit Spanish taxes paid against your US tax liability, preventing double taxation on income taxed in both countries. US Social Security taxes continue to apply — the US-Spain totalization agreement covers Social Security, meaning you pay into one system (typically US) but not both.\n\nPractical example: A US freelancer earning $8,000/month entirely from US clients, living in Barcelona on a DNV — Spanish income tax is €0 (all income foreign-sourced, exempt under Beckham Law). US income tax is offset significantly by the FEIE exclusion. Effective combined tax rate: potentially very low depending on income level. Always work with a dual-qualified US-Spain tax advisor for your specific situation.",
      },
      {
        heading: "Spain Digital Nomad Visa Tax After Year 6",
        content: "The Beckham Law applies for a maximum of 6 tax years from the year you become a Spanish tax resident (the year you first register with Social Security counts as year 1).\n\nAfter year 6, you transition to Spain's standard progressive IRPF system: income up to €12,450 is taxed at 19%, €12,451–€20,200 at 24%, €20,201–€35,200 at 30%, €35,201–€60,000 at 37%, €60,001–€300,000 at 45%, and above €300,000 at 47%.\n\nAt $8,000/month ($96,000/year), your effective IRPF rate after year 6 would be approximately 37–40% — significantly higher than the 24% Beckham Law rate. Most nomads plan their exit strategy before year 6 ends, commonly transitioning to Portugal's NHR 2.0 regime (20% flat for 10 years) to reset their flat-rate clock.",
      },
    ],
    faqs: [
      {
        q: "Do I pay taxes in Spain on my digital nomad visa?",
        a: "It depends on where your income comes from. Under the Beckham Law, income from non-Spanish clients and employers is exempt from Spanish tax. If 100% of your income comes from foreign sources, your effective Spanish income tax is 0%. You pay 24% only on income from Spanish clients, capped at 20% of total income under DNV rules.",
      },
      {
        q: "What is the Spain digital nomad visa income tax rate?",
        a: "The Beckham Law applies a flat 24% on Spanish-sourced income up to €600,000/year. Foreign-sourced income is exempt. Without the Beckham Law, Spain's progressive IRPF reaches 47% at higher income levels.",
      },
      {
        q: "How do I apply for the Beckham Law tax regime on the Spain DNV?",
        a: "File Modelo 149 with the Agencia Tributaria within 6 months of registering with Spanish Social Security. This is mandatory — the regime does not activate automatically. Late filing results in permanent rejection with no appeals process.",
      },
      {
        q: "Can US freelancers get the Beckham Law tax rate in Spain?",
        a: "Yes, if your freelance activity qualifies as innovative or you primarily serve non-Spanish clients. The 24% flat rate applies to your Spanish-sourced income. Income from US or other foreign clients remains exempt. Consult a Spanish tax advisor to confirm your specific activity qualifies.",
      },
      {
        q: "What taxes do I pay as a Spain digital nomad if all my clients are in the US?",
        a: "Under the Beckham Law: effectively 0% in Spain on your US client income. You still file and potentially pay US taxes, offset by the FEIE ($132,900 exclusion in 2026) or Foreign Tax Credit. No Spanish VAT on US-sourced services. No Spanish Social Security if you maintain your US employment or LLC structure.",
      },
      {
        q: "How long does the Spain digital nomad visa flat tax rate last?",
        a: "6 tax years from the year you become a Spanish tax resident. After year 6, standard progressive IRPF rates apply (up to 47%). Most nomads plan to transition to another low-tax jurisdiction — commonly Portugal's NHR 2.0 — before this deadline.",
      },
    ],
    ctas: [
      { label: "Calculate your exact net savings in Spain", href: "/visa/spain" },
      { label: "Compare Spain taxes vs Portugal NHR 2.0", href: "/compare/spain-vs-portugal" },
      { label: "Full Spain Beckham Law rate breakdown", href: "/guides/spain-digital-nomad-visa-tax-rate-2026" },
    ],
    disclaimer: "Data reflects 2026 Spain Digital Nomad Visa (Ley de Startups) and Beckham Law (Régimen Especial para Trabajadores Desplazados) legislative framework. Tax rules are subject to change — always verify with a licensed Spanish tax advisor or gestor before filing. NomadTaxIndex is an intelligence tool, not a legal or tax service.",
    relatedGuides: [
      "spain-digital-nomad-visa-tax-rate-2026",
      "spain-vs-portugal-digital-nomad-tax-2026",
      "portugal-digital-nomad-tax-calculator-2026",
    ],
  },
];

export function getGuideBySlug(slug: string): GuideDefinition | undefined {
  return guidesData.find((g) => g.slug === slug);
}
