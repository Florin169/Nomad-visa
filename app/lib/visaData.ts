// visaData.ts — NomadTax 2026 Central Intelligence Database

export interface DocumentRequirement {
  id: string;
  title: string;
  description: string;
  category: "financial" | "identity" | "legal" | "health" | "housing";
  difficulty: "easy" | "medium" | "hard";
  estimatedDays: number;
  officialLink?: string;
}

export interface RoadmapStage {
  stage: number;
  title: string;
  duration: string;
  description: string;
  milestones: string[];
}

export interface VisaCountry {
  id: string;
  name: string;
  flag: string;
  region: string;
  // Core financials
  minIncome: number;        // Monthly USD minimum
  taxRate: number;          // Decimal e.g. 0.0 = 0%, 0.24 = 24%
  avgLivingCost: number;    // Monthly USD
  visaFee: number;          // One-time USD
  // Velocity signals (from Google Trends data)
  searchVelocity: number;   // YoY % increase
  trending: boolean;
  // Intelligence
  summary: string;
  pros: string[];
  cons: string[];
  detailedDocs: DocumentRequirement[];
  roadmap: RoadmapStage[];
  // Meta
  lastUpdated: string;
  visaType: string;
  maxStay: string;
  renewalPossible: boolean;
  pathToCitizenship: boolean;
  citizenshipYears: number | null;
}

// ─── CORE MATH ────────────────────────────────────────────────────────────────
export function calculateMonthlySavings(
  userIncome: number,
  country: VisaCountry
): {
  qualifies: boolean;
  grossIncome: number;
  taxAmount: number;
  netIncome: number;
  livingCost: number;
  monthlySavings: number;
  annualSavings: number;
  effectiveTakeHome: number; // percentage of gross kept after tax + living
} {
  const qualifies = userIncome >= country.minIncome;

  if (!qualifies) {
    return {
      qualifies: false,
      grossIncome: userIncome,
      taxAmount: 0,
      netIncome: 0,
      livingCost: country.avgLivingCost,
      monthlySavings: 0,
      annualSavings: 0,
      effectiveTakeHome: 0,
    };
  }

  const taxAmount = userIncome * country.taxRate;
  const netIncome = userIncome - taxAmount;
  const monthlySavings = netIncome - country.avgLivingCost;
  const annualSavings = monthlySavings * 12;
  const effectiveTakeHome = (monthlySavings / userIncome) * 100;

  return {
    qualifies: true,
    grossIncome: userIncome,
    taxAmount,
    netIncome,
    livingCost: country.avgLivingCost,
    monthlySavings,
    annualSavings,
    effectiveTakeHome,
  };
}

// ─── COUNTRY DATABASE ─────────────────────────────────────────────────────────
export const visaData: VisaCountry[] = [
  {
    id: "spain",
    name: "Spain",
    flag: "🇪🇸",
    region: "Europe",
    minIncome: 2646,
    taxRate: 0.24,
    avgLivingCost: 1800,
    visaFee: 790,
    searchVelocity: 300,
    trending: true,
    visaType: "Digital Nomad Visa (Ley de Startups)",
    maxStay: "1 year (renewable to 5)",
    renewalPossible: true,
    pathToCitizenship: true,
    citizenshipYears: 10,
    summary:
      "Spain's Digital Nomad Visa under the Startup Act offers EU access with Beckham Law tax benefits — a flat 24% on Spanish income for the first 6 years.",
    pros: [
      "Full Schengen Zone access",
      "Beckham Law: flat 24% tax rate",
      "Path to EU permanent residency",
      "World-class healthcare system",
      "Vibrant nomad communities in Barcelona & Madrid",
    ],
    cons: [
      "Bureaucracy can be slow (3-6 month processing)",
      "Cost of living rising sharply in major cities",
      "Spanish proficiency helps significantly",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "spain-passport",
        title: "Valid Passport",
        description: "Must be valid for the entire duration of your visa plus 6 months. Non-EU nationals only.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
        officialLink: "https://www.exteriores.gob.es",
      },
      {
        id: "spain-income-proof",
        title: "Proof of Income",
        description: "Bank statements or contracts showing minimum €2,334/month (200% of Spanish minimum wage). Last 3 months required.",
        category: "financial",
        difficulty: "medium",
        estimatedDays: 7,
      },
      {
        id: "spain-criminal-record",
        title: "Criminal Background Check",
        description: "FBI background check (US citizens) or equivalent, apostilled and translated to Spanish. Must be less than 3 months old.",
        category: "legal",
        difficulty: "hard",
        estimatedDays: 30,
      },
      {
        id: "spain-health-insurance",
        title: "Private Health Insurance",
        description: "Full coverage policy from an insurer operating in Spain. Must cover the entire visa period with no copays.",
        category: "health",
        difficulty: "easy",
        estimatedDays: 3,
      },
      {
        id: "spain-employment-contract",
        title: "Employment/Client Contract",
        description: "Contracts with employers or clients proving remote work for non-Spanish companies. Must show 1+ year relationship or open-ended.",
        category: "legal",
        difficulty: "medium",
        estimatedDays: 14,
      },
      {
        id: "spain-accommodation",
        title: "Proof of Accommodation",
        description: "Rental contract, property deed, or hotel reservation for initial period. Must show a fixed address in Spain.",
        category: "housing",
        difficulty: "medium",
        estimatedDays: 7,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "Document Preparation",
        duration: "4-8 weeks",
        description: "Gather and apostille all required documents. Most time-consuming phase.",
        milestones: ["FBI background check submitted", "Health insurance purchased", "Income documentation compiled"],
      },
      {
        stage: 2,
        title: "Consulate Application",
        duration: "1-2 weeks",
        description: "Submit application at Spanish consulate in your home country.",
        milestones: ["Application submitted", "Biometrics appointment", "Visa fee paid"],
      },
      {
        stage: 3,
        title: "Processing & Approval",
        duration: "2-3 months",
        description: "Wait period. Spain's processing is notoriously slow — plan accordingly.",
        milestones: ["Application acknowledged", "Additional docs requested (if any)", "Visa approved"],
      },
      {
        stage: 4,
        title: "Arrival & NIE Registration",
        duration: "First 30 days",
        description: "Register at local Foreigners Office (Oficina de Extranjeros) for your TIE card.",
        milestones: ["Enter Spain on visa", "Book TIE appointment", "Register on Padron municipal"],
      },
      {
        stage: 5,
        title: "Tax Residency & Beckham Law",
        duration: "First 6 months",
        description: "Apply for Beckham Law (régimen especial) to lock in the 24% flat rate.",
        milestones: ["File form 149 with Agencia Tributaria", "Tax residency established", "First tax year filed"],
      },
      {
        stage: 6,
        title: "Permanent Residency",
        duration: "Year 5",
        description: "After 5 continuous years, apply for long-term EU residency.",
        milestones: ["5-year residency mark", "PR application filed", "EU Blue Card issued"],
      },
    ],
  },
  {
    id: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    region: "Europe",
    minIncome: 3480,
    taxRate: 0.20,
    avgLivingCost: 1600,
    visaFee: 533,
    searchVelocity: 250,
    trending: true,
    visaType: "Digital Nomad Visa (D8)",
    maxStay: "1 year (renewable to 2)",
    renewalPossible: true,
    pathToCitizenship: true,
    citizenshipYears: 5,
    summary:
      "Portugal's D8 visa with NHR 2.0 tax regime offers one of Europe's most attractive packages — 20% flat tax, fast citizenship path (5 years), and a thriving Lisbon/Porto nomad scene.",
    pros: [
      "Fastest EU citizenship path at 5 years",
      "NHR 2.0: 20% flat rate on foreign income",
      "Low cost of living vs. Western Europe",
      "Strong English proficiency nationwide",
      "Stable, safe, high quality of life",
    ],
    cons: [
      "NHR 2.0 less generous than original NHR",
      "Lisbon housing costs have surged",
      "SEF (immigration service) appointment backlogs",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "portugal-passport",
        title: "Valid Passport",
        description: "Valid passport with minimum 6 months validity beyond intended stay.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
      },
      {
        id: "portugal-income-proof",
        title: "Proof of Remote Income",
        description: "Bank statements showing €2,900+/month average over 3 months (4x Portuguese minimum wage).",
        category: "financial",
        difficulty: "medium",
        estimatedDays: 7,
      },
      {
        id: "portugal-criminal-record",
        title: "Criminal Record Certificate",
        description: "Clean criminal record from country of residence, apostilled. Must be issued within 3 months.",
        category: "legal",
        difficulty: "hard",
        estimatedDays: 21,
      },
      {
        id: "portugal-health-insurance",
        title: "Travel/Health Insurance",
        description: "Coverage valid in Portugal with minimum €30,000 emergency coverage.",
        category: "health",
        difficulty: "easy",
        estimatedDays: 2,
      },
      {
        id: "portugal-nif",
        title: "Portuguese NIF Number",
        description: "Tax identification number — can be obtained at any Finanças office or via a fiscal representative before arrival.",
        category: "legal",
        difficulty: "easy",
        estimatedDays: 1,
      },
      {
        id: "portugal-accommodation",
        title: "Proof of Accommodation",
        description: "Rental agreement, property deed, or declaration from host. Must cover full visa period.",
        category: "housing",
        difficulty: "medium",
        estimatedDays: 7,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "Pre-Application Setup",
        duration: "2-4 weeks",
        description: "Obtain NIF remotely, arrange accommodation, compile financial docs.",
        milestones: ["NIF obtained remotely", "Rental agreement signed", "3 months bank statements ready"],
      },
      {
        stage: 2,
        title: "Consulate Application",
        duration: "1 week",
        description: "Apply at Portuguese consulate in home country with full document pack.",
        milestones: ["Documents submitted", "Visa fee paid (€533)", "Biometrics done"],
      },
      {
        stage: 3,
        title: "Visa Processing",
        duration: "4-8 weeks",
        description: "Portugal processes faster than Spain. Average 6 weeks for D8.",
        milestones: ["Application in review", "Visa granted", "Entry visa received"],
      },
      {
        stage: 4,
        title: "AIMA Registration",
        duration: "First 4 months",
        description: "Book appointment with AIMA (formerly SEF) for residence permit.",
        milestones: ["Arrival in Portugal", "AIMA appointment booked", "Residence permit issued"],
      },
      {
        stage: 5,
        title: "NHR 2.0 Application",
        duration: "First tax year",
        description: "Register for NHR 2.0 (IFICI) regime to secure 20% flat rate for 10 years.",
        milestones: ["NHR 2.0 application submitted", "Tax residency established", "Regime confirmed"],
      },
      {
        stage: 6,
        title: "Citizenship Eligibility",
        duration: "Year 5",
        description: "Shortest EU citizenship path. Apply after 5 years legal residency.",
        milestones: ["5-year residency completed", "A2 Portuguese language test passed", "Citizenship application filed"],
      },
    ],
  },
  {
    id: "uae",
    name: "UAE",
    flag: "🇦🇪",
    region: "Middle East",
    minIncome: 5000,
    taxRate: 0.0,
    avgLivingCost: 3200,
    visaFee: 611,
    searchVelocity: 90,
    trending: false,
    visaType: "Remote Work Visa (1 Year)",
    maxStay: "1 year (renewable)",
    renewalPossible: true,
    pathToCitizenship: false,
    citizenshipYears: null,
    summary:
      "Zero income tax jurisdiction with world-class infrastructure. High living costs offset the tax advantage — works best for high earners. No path to citizenship.",
    pros: [
      "0% income tax — completely legal",
      "World-class infrastructure and connectivity",
      "Strategic timezone for EU + Asia clients",
      "High safety and stability",
    ],
    cons: [
      "High cost of living (especially Dubai)",
      "No path to citizenship",
      "Cultural restrictions to be aware of",
      "Extreme summer heat limits outdoor life",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "uae-passport",
        title: "Valid Passport",
        description: "Passport valid for minimum 6 months with at least 2 blank pages.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
      },
      {
        id: "uae-income-proof",
        title: "Proof of Employment/Income",
        description: "Last 3 months' payslips or bank statements showing minimum $5,000/month.",
        category: "financial",
        difficulty: "easy",
        estimatedDays: 3,
      },
      {
        id: "uae-health-insurance",
        title: "Health Insurance",
        description: "Valid health insurance with UAE coverage. Many employers provide; otherwise purchase locally.",
        category: "health",
        difficulty: "easy",
        estimatedDays: 2,
      },
      {
        id: "uae-employer-letter",
        title: "Employer/Client Letter",
        description: "Letter from employer confirming remote work arrangement and salary. Must be on company letterhead.",
        category: "legal",
        difficulty: "easy",
        estimatedDays: 3,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "Online Application",
        duration: "1 week",
        description: "Apply through Dubai Tourism or GDRFA portal. Mostly digital process.",
        milestones: ["Portal account created", "Documents uploaded", "Application fee paid"],
      },
      {
        stage: 2,
        title: "Processing",
        duration: "2-3 weeks",
        description: "UAE processes remote work visas quickly by regional standards.",
        milestones: ["Application reviewed", "Medical fitness test (in UAE)", "Visa issued"],
      },
      {
        stage: 3,
        title: "Arrival & Emirates ID",
        duration: "First 2 weeks",
        description: "Register for Emirates ID biometrics shortly after arrival.",
        milestones: ["Arrival on visa", "Biometrics appointment", "Emirates ID received"],
      },
      {
        stage: 4,
        title: "Banking & Tax Setup",
        duration: "First month",
        description: "Open UAE bank account and establish tax residency documentation.",
        milestones: ["UAE bank account opened", "Tax residency certificate obtained", "Home country tax obligations reviewed"],
      },
    ],
  },
  {
    id: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    region: "Southeast Asia",
    minIncome: 2000,
    taxRate: 0.17,
    avgLivingCost: 1200,
    visaFee: 200,
    searchVelocity: 9,
    trending: false,
    visaType: "Long-Term Resident Visa (LTR)",
    maxStay: "10 years",
    renewalPossible: true,
    pathToCitizenship: false,
    citizenshipYears: null,
    summary:
      "Thailand's LTR Visa offers the best lifestyle-to-cost ratio in Asia. 17% flat tax on remitted income, incredible food, and a massive expat infrastructure.",
    pros: [
      "Extremely low cost of living",
      "10-year visa with single renewal",
      "17% flat tax (only on remitted income)",
      "World-class healthcare at fraction of US cost",
      "Massive digital nomad community",
    ],
    cons: [
      "No path to citizenship",
      "Tax only on remitted income (complex tracking)",
      "Political instability historically",
      "Visa rules changed frequently in past",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "thailand-passport",
        title: "Valid Passport",
        description: "Passport valid for at least 18 months from date of application.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
      },
      {
        id: "thailand-income-proof",
        title: "Income Documentation",
        description: "Proof of passive income or remote employment of minimum $80,000/year. Last 2 years tax returns.",
        category: "financial",
        difficulty: "medium",
        estimatedDays: 14,
      },
      {
        id: "thailand-health-insurance",
        title: "Health Insurance",
        description: "Coverage of minimum 40,000 THB outpatient and 400,000 THB inpatient from approved Thai insurer.",
        category: "health",
        difficulty: "easy",
        estimatedDays: 3,
      },
      {
        id: "thailand-criminal-record",
        title: "Criminal Background Check",
        description: "Notarized criminal record from country of citizenship. Must be issued within 3 months.",
        category: "legal",
        difficulty: "medium",
        estimatedDays: 14,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "Document Compilation",
        duration: "3-6 weeks",
        description: "Gather income proof, criminal records, and health insurance.",
        milestones: ["2 years tax returns obtained", "Health insurance purchased", "Background check completed"],
      },
      {
        stage: 2,
        title: "BOI Application",
        duration: "2-4 weeks",
        description: "Apply through Thailand Board of Investment portal.",
        milestones: ["BOI account created", "Application submitted", "Fee paid ($200)"],
      },
      {
        stage: 3,
        title: "Visa Issuance",
        duration: "1-2 weeks",
        description: "Fast processing once BOI approves. Collect at Thai embassy.",
        milestones: ["BOI approval received", "Embassy appointment", "10-year visa stamped"],
      },
    ],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    minIncome: 4000,
    taxRate: 0.35,
    avgLivingCost: 2400,
    visaFee: 100,
    searchVelocity: 140,
    trending: true,
    visaType: "Freelancer Visa (Freiberufler)",
    maxStay: "3 years (renewable)",
    renewalPossible: true,
    pathToCitizenship: true,
    citizenshipYears: 5,
    summary:
      "Germany's freelancer visa is rigorous but rewarding. High taxes offset by world-class public services, infrastructure, and a 5-year citizenship path.",
    pros: [
      "Strong economy and professional network",
      "5-year citizenship path (recently reduced)",
      "Excellent public healthcare and transport",
      "Central EU location",
    ],
    cons: [
      "High tax burden (up to 42% effective rate)",
      "Extensive bureaucracy",
      "German language increasingly required",
      "High cost of living in Munich/Berlin",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "germany-passport",
        title: "Valid Passport",
        description: "Passport valid for duration of intended stay plus 3 months.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
      },
      {
        id: "germany-qualifications",
        title: "Professional Qualifications",
        description: "Proof of relevant education or work experience in your freelance field. Degree certificates, portfolio, client list.",
        category: "legal",
        difficulty: "hard",
        estimatedDays: 21,
      },
      {
        id: "germany-income-proof",
        title: "Financial Viability Proof",
        description: "Business plan showing projected income, existing client contracts. Finanzamt (tax office) evaluation required.",
        category: "financial",
        difficulty: "hard",
        estimatedDays: 30,
      },
      {
        id: "germany-health-insurance",
        title: "German Health Insurance",
        description: "Full health insurance compliant with German law. TK, AOK or private equivalent.",
        category: "health",
        difficulty: "medium",
        estimatedDays: 7,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "Preparation",
        duration: "6-10 weeks",
        description: "Most complex application in this list. Build a thorough business case.",
        milestones: ["Business plan prepared", "Client contracts secured", "Qualifications translated & apostilled"],
      },
      {
        stage: 2,
        title: "Embassy Application",
        duration: "2-4 weeks",
        description: "Apply at German embassy in home country.",
        milestones: ["Application submitted", "Interview conducted", "Visa fee paid"],
      },
      {
        stage: 3,
        title: "Registration (Anmeldung)",
        duration: "First 2 weeks",
        description: "Register your address at local Bürgeramt within 2 weeks of arrival.",
        milestones: ["Address registered", "Tax number (Steuernummer) obtained", "Bank account opened"],
      },
      {
        stage: 4,
        title: "Business Registration",
        duration: "First month",
        description: "Register freelance activity with Finanzamt. Receive VAT number.",
        milestones: ["Fragebogen zur steuerlichen Erfassung filed", "VAT number received", "First invoices issued"],
      },
      {
        stage: 5,
        title: "Citizenship",
        duration: "Year 5",
        description: "Apply for naturalization after 5 years continuous legal residency.",
        milestones: ["B1 German test passed", "Residency requirement met", "Dual citizenship application filed"],
      },
    ],
  },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    region: "Southeast Asia",
    minIncome: 2000,
    taxRate: 0.0,
    avgLivingCost: 1100,
    visaFee: 500,
    searchVelocity: 180,
    trending: true,
    visaType: "Second Home Visa / E-Visa",
    maxStay: "5 years",
    renewalPossible: true,
    pathToCitizenship: false,
    citizenshipYears: null,
    summary:
      "Bali's digital nomad scene remains world-class. Indonesia's Second Home Visa offers 5 years with zero tax on foreign income — making it the best value in Asia.",
    pros: [
      "Zero tax on foreign-sourced income",
      "Extremely low cost of living",
      "5-year visa duration",
      "World's best surf and natural scenery",
      "180% YoY search growth — infrastructure improving",
    ],
    cons: [
      "No path to citizenship",
      "Internet reliability varies by island",
      "Bureaucracy can be unpredictable",
      "Visa rules have changed multiple times",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "indonesia-passport",
        title: "Valid Passport",
        description: "Passport valid for minimum 18 months from date of application.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
      },
      {
        id: "indonesia-funds-proof",
        title: "Proof of Funds",
        description: "Bank statements showing minimum $130,000 USD equivalent in deposits OR property ownership of equivalent value.",
        category: "financial",
        difficulty: "medium",
        estimatedDays: 7,
      },
      {
        id: "indonesia-health-insurance",
        title: "International Health Insurance",
        description: "Valid international health insurance covering Indonesia. Minimum $50,000 coverage.",
        category: "health",
        difficulty: "easy",
        estimatedDays: 2,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "Online Application",
        duration: "1-2 weeks",
        description: "Apply via molina.imigrasi.go.id portal.",
        milestones: ["Account created", "Documents uploaded", "Fee paid ($500)"],
      },
      {
        stage: 2,
        title: "Processing",
        duration: "2-4 weeks",
        description: "Digital processing. Typically faster than EU options.",
        milestones: ["Application in review", "Additional docs if requested", "Approval granted"],
      },
      {
        stage: 3,
        title: "Entry & KITAS",
        duration: "First 2 weeks",
        description: "Enter Indonesia and convert to KITAS (residence permit) within 30 days.",
        milestones: ["Entry visa stamped", "KITAS appointment", "Biometrics taken"],
      },
    ],
  },
  {
    id: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    region: "Latin America",
    minIncome: 750,
    taxRate: 0.0,
    avgLivingCost: 900,
    visaFee: 177,
    searchVelocity: 130,
    trending: true,
    visaType: "Digital Nomad Visa (M Visa)",
    maxStay: "2 years",
    renewalPossible: true,
    pathToCitizenship: true,
    citizenshipYears: 5,
    summary:
      "Colombia's M Visa has the lowest income threshold of any country in this database. Zero tax on foreign income, Medellín's eternal spring climate, and rapid tech scene growth.",
    pros: [
      "Lowest income requirement ($750/month)",
      "Zero tax on foreign-sourced income",
      "Very low cost of living",
      "Medellín ranked top nomad city globally",
      "130% YoY search growth",
    ],
    cons: [
      "Safety perception (though rapidly improving)",
      "Healthcare quality varies by region",
      "Power/internet outages in some areas",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "colombia-passport",
        title: "Valid Passport",
        description: "Passport valid for at least 6 months beyond intended stay.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
      },
      {
        id: "colombia-income-proof",
        title: "Income Verification",
        description: "Bank statements or employment letter showing minimum $750/month (3x Colombian minimum wage).",
        category: "financial",
        difficulty: "easy",
        estimatedDays: 5,
      },
      {
        id: "colombia-criminal-record",
        title: "Background Check",
        description: "Criminal record from country of residence. Apostilled. Issued within 90 days.",
        category: "legal",
        difficulty: "medium",
        estimatedDays: 14,
      },
      {
        id: "colombia-health-insurance",
        title: "Health Insurance",
        description: "International policy valid in Colombia or local Colombian policy.",
        category: "health",
        difficulty: "easy",
        estimatedDays: 2,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "Document Prep",
        duration: "2-4 weeks",
        description: "Simplest application process in this database.",
        milestones: ["Background check obtained", "Income docs compiled", "Insurance purchased"],
      },
      {
        stage: 2,
        title: "Online Application",
        duration: "1 week",
        description: "Apply via cancilleria.gov.co — fully online process.",
        milestones: ["Application submitted online", "Fee paid ($177)", "Confirmation received"],
      },
      {
        stage: 3,
        title: "Visa & Registration",
        duration: "2-4 weeks",
        description: "Processing followed by Cédula de Extranjería registration in Colombia.",
        milestones: ["Visa approved", "Entry into Colombia", "Cédula registered"],
      },
    ],
  },
  {
    id: "estonia",
    name: "Estonia",
    flag: "🇪🇪",
    region: "Europe",
    minIncome: 4500,
    taxRate: 0.20,
    avgLivingCost: 1400,
    visaFee: 100,
    searchVelocity: 120,
    trending: true,
    visaType: "Digital Nomad Visa",
    maxStay: "1 year",
    renewalPossible: false,
    pathToCitizenship: true,
    citizenshipYears: 8,
    summary:
      "The original digital nomad visa country. Estonia's e-Residency + DNV combo is unmatched for remote business owners. 20% flat income tax, EU access, most digital government on Earth.",
    pros: [
      "Original digital nomad visa (since 2020)",
      "e-Residency: run EU company remotely",
      "20% flat income tax",
      "Most digitized government in the world",
      "Full EU Schengen access",
    ],
    cons: [
      "1-year visa, not renewable",
      "Small country, limited local network",
      "Cold climate 6+ months of year",
      "Higher income requirement than some alternatives",
    ],
    lastUpdated: "2026-04",
    detailedDocs: [
      {
        id: "estonia-passport",
        title: "Valid Passport",
        description: "Passport valid for the entire stay plus 3 months.",
        category: "identity",
        difficulty: "easy",
        estimatedDays: 0,
      },
      {
        id: "estonia-income-proof",
        title: "Proof of Remote Income",
        description: "Bank statements showing minimum €4,500/month average over 6 months.",
        category: "financial",
        difficulty: "medium",
        estimatedDays: 7,
      },
      {
        id: "estonia-employer-contract",
        title: "Employment/Business Proof",
        description: "Contract with employer or proof of business registration showing remote work capability.",
        category: "legal",
        difficulty: "medium",
        estimatedDays: 7,
      },
      {
        id: "estonia-health-insurance",
        title: "Travel Insurance",
        description: "Comprehensive travel insurance with medical coverage valid in EU/Schengen.",
        category: "health",
        difficulty: "easy",
        estimatedDays: 1,
      },
    ],
    roadmap: [
      {
        stage: 1,
        title: "e-Residency (Optional but Recommended)",
        duration: "3-5 weeks",
        description: "Apply for e-Residency to run an EU company. Separate from the visa but complementary.",
        milestones: ["e-Residency application submitted", "Kit collected at Estonian embassy", "OÜ company registered"],
      },
      {
        stage: 2,
        title: "Visa Application",
        duration: "1-2 weeks",
        description: "Apply at Estonian embassy or consulate.",
        milestones: ["Documents submitted", "Fee paid", "Interview (if required)"],
      },
      {
        stage: 3,
        title: "Processing",
        duration: "2-4 weeks",
        description: "Estonia is known for efficient processing.",
        milestones: ["Application reviewed", "Visa issued", "Entry into Estonia"],
      },
      {
        stage: 4,
        title: "Registration",
        duration: "First week",
        description: "Register at local government office.",
        milestones: ["Address registered", "Tax ID obtained", "Bank account opened"],
      },
    ],
  },
];

// ─── UTILITY FUNCTIONS ────────────────────────────────────────────────────────
export function getCountryById(id: string): VisaCountry | undefined {
  return visaData.find((c) => c.id === id);
}

export function getCountriesByRegion(region: string): VisaCountry[] {
  return visaData.filter((c) => c.region === region);
}

export function getTrendingCountries(): VisaCountry[] {
  return visaData.filter((c) => c.trending);
}

export function rankByNetSavings(monthlyIncome: number): Array<{
  country: VisaCountry;
  savings: ReturnType<typeof calculateMonthlySavings>;
}> {
  return visaData
    .map((country) => ({
      country,
      savings: calculateMonthlySavings(monthlyIncome, country),
    }))
    .sort((a, b) => b.savings.monthlySavings - a.savings.monthlySavings);
}

export function parseCompareSlug(slug: string): [string, string] | null {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return null;
  return [parts[0], parts[1]];
}

// Ticker data for GlobalTicker component
export const tickerItems = visaData
  .filter((c) => c.searchVelocity > 0)
  .sort((a, b) => b.searchVelocity - a.searchVelocity)
  .map((c) => ({
    id: c.id,
    flag: c.flag,
    name: c.name,
    velocity: c.searchVelocity,
    label: `${c.flag} ${c.name} Requirements +${c.searchVelocity}% YoY`,
  }));
