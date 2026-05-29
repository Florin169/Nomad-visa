// app/lib/metaOverrides.ts
// Per-country SEO title and description overrides.
// Countries not listed here fall back to the generic template in generateMetadata.
// Priority: add overrides for highest-impression pages first (Spain, Portugal, UAE, Colombia).

export const titleOverrides: Record<string, string> = {
  spain:
    "Spain Digital Nomad Tax Calculator 2026 — Beckham Law Savings",
  portugal:
    "Portugal Digital Nomad Tax Calculator 2026 — NHR 2.0 Rate",
  uae:
    "UAE Digital Nomad Visa 2026 — 0% Income Tax Calculator",
  colombia:
    "Colombia Digital Nomad Visa 2026 — Lowest Income Threshold ($750/mo)",
  estonia:
    "Estonia Digital Nomad Visa 2026 — e-Residency & 20% Flat Tax Calculator",
  thailand:
    "Thailand LTR Visa 2026 — 17% Tax Calculator & Requirements",
  indonesia:
    "Indonesia Second Home Visa 2026 — 0% Tax & Bali Cost Calculator",
  "south-korea":
    "South Korea Workation Visa 2026 — 19% Flat Tax Calculator",
  brazil:
    "Brazil Digital Nomad Visa 2026 — Tax Calculator & Requirements",
  france:
    "France Digital Nomad Visa 2026 — Talent Passport Tax Guide",
  germany:
    "Germany Freelancer Visa 2026 — Tax Calculator & EU Citizenship Path",
};

export const descriptionOverrides: Record<string, string> = {
  spain:
    "Calculate your net monthly savings in Spain under the Beckham Law — flat 24% tax for 6 years. Check the €2,646/mo income requirement and full document checklist for 2026.",
  portugal:
    "Portugal's NHR 2.0 offers a 20% flat tax for 10 years. Calculate your savings, check the €3,480/mo income threshold, and get the full D8 visa document checklist for 2026.",
  uae:
    "0% income tax in Dubai. Calculate exactly how much you keep on your income, check the $5,000/mo requirement, and compare net savings vs Spain and Portugal.",
  colombia:
    "The easiest digital nomad visa in 2026 — just $750/mo income, 0% foreign tax, fully online application in 2–4 weeks. Calculate your savings and get the full document checklist.",
  estonia:
    "Estonia's Digital Nomad Visa offers a 20% flat tax and access to e-Residency for running an EU company. Check the €4,500/mo income requirement and document checklist for 2026.",
  thailand:
    "Thailand's LTR Visa gives you 10 years of stability with a 17% flat tax on remitted income only. Calculate your net savings and check all 2026 requirements.",
  indonesia:
    "Indonesia's Second Home Visa: 0% tax on foreign income, $1,100/mo average living costs in Bali. Calculate your savings and check the 2026 document requirements.",
  "south-korea":
    "South Korea's Workation Visa offers an optional 19% flat tax rate. Check the $5,500/mo income requirement, calculate your net savings, and get the 2026 document checklist.",
  brazil:
    "Brazil's VITEM XIV is the lowest-bar nomad visa in the Americas — just $1,500/mo income. Calculate your net savings and get the full 2026 document requirements.",
  france:
    "France's Talent Passport is the closest equivalent to a digital nomad visa. Calculate your tax obligations, check income requirements, and compare vs Spain and Portugal.",
  germany:
    "Germany's Freelancer Visa leads to EU citizenship in 5 years. Calculate your 2026 tax burden, check income and qualification requirements, and compare vs other EU countries.",
};
