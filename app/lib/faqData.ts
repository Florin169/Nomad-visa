export interface FaqItem {
  q: string;
  a: string;
}

export const countryFaqs: Record<string, FaqItem[]> = {
  spain: [
    {
      q: "Do digital nomads pay income tax in Spain?",
      a: "Yes. Under Spain's Digital Nomad Visa (Ley de Startups), you pay a flat 24% income tax rate on Spanish-sourced income for your first 6 years — this is the Beckham Law (régimen especial). It replaces the standard progressive rate that goes up to 47%, making Spain significantly more tax-efficient for high earners on a nomad visa.",
    },
    {
      q: "What is the Beckham Law tax rate in Spain?",
      a: "The Beckham Law locks your income tax at a flat 24% on income up to €600,000 per year. Income above that threshold is taxed at 47%. You must apply for the regime using form 149 with the Agencia Tributaria within 6 months of becoming a Spanish tax resident. It applies for 6 years total.",
    },
    {
      q: "How much income do I need for a Spain digital nomad visa?",
      a: "You need to demonstrate a minimum monthly income of €2,646 (200% of Spain's Minimum Interprofessional Salary as of 2026). If you include dependents, add 75% of the SMI for the first dependent and 25% for each additional one. Bank statements for the last 3 months are the standard proof.",
    },
    {
      q: "Does Spain double tax US income?",
      a: "Spain and the US have a tax treaty that prevents true double taxation. Under the Beckham Law regime, your foreign-sourced income (income from non-Spanish clients or employers) is generally exempt from Spanish tax — you only pay the 24% flat rate on income earned within Spain. You still file US taxes as a citizen, but the Foreign Earned Income Exclusion (FEIE) and Foreign Tax Credit (FTC) mechanisms reduce your US liability. Consult a dual-qualified tax advisor for your specific situation.",
    },
    {
      q: "How long can I work remotely in Spain without paying tax?",
      a: "If you spend fewer than 183 days in Spain within a calendar year, you are generally not considered a Spanish tax resident and owe no Spanish income tax. However, once you cross the 183-day threshold — or establish your main economic base in Spain — tax residency is triggered. The Digital Nomad Visa is specifically for people who intend to become tax residents and benefit from the Beckham Law flat rate.",
    },
    {
      q: "How difficult is it to get a digital nomad visa in Spain?",
      a: "Spain's DNV is moderately difficult — the main challenge is bureaucracy and processing time (3–6 months), not eligibility. The income threshold is achievable for most remote workers, but gathering apostilled documents (especially the FBI background check for US citizens, which takes 3–4 weeks alone) is time-consuming. Success rates are high for well-prepared applicants. Apply at your local Spanish consulate — not in Spain itself.",
    },
    {
      q: "Can I get permanent residency in Spain on a digital nomad visa?",
      a: "Yes. The Spain DNV is renewable: 1 year initially, then up to 3 years, with a path to long-term EU residency after 5 continuous years. After 10 years of legal residency, you can apply for Spanish citizenship. The Beckham Law tax benefit applies for 6 years, after which you transition to standard Spanish progressive tax rates.",
    },
  ],

  portugal: [
    {
      q: "Do digital nomads pay income tax in Portugal?",
      a: "Yes. Portugal's D8 Digital Nomad Visa combined with the NHR 2.0 (IFICI) regime taxes qualifying foreign-sourced income at a flat 20% for 10 years. Without NHR 2.0, standard Portuguese progressive rates apply (up to 48%). You must apply for NHR 2.0 status in your first tax year of residency — it's not automatic.",
    },
    {
      q: "What is the NHR 2.0 tax regime in Portugal?",
      a: "NHR 2.0 (officially called IFICI — Incentivo Fiscal à Investigação Científica e Inovação) replaced the original NHR regime in 2024. It offers a 20% flat tax rate on Portuguese-sourced income and exemption on most foreign-sourced income for 10 years. It's less generous than the original NHR (which was 0% on many foreign income streams), but still one of Europe's best nomad tax deals.",
    },
    {
      q: "How much income do I need for Portugal's digital nomad visa?",
      a: "Portugal's D8 visa requires a minimum monthly income of €3,480 (4x Portugal's minimum wage as of 2026). You need 3 months of bank statements demonstrating this average. This is a higher bar than Spain's requirement, but Portugal's lower cost of living (average €1,600/month) means your net savings can still be competitive.",
    },
    {
      q: "Is it easier to get a digital nomad visa in Spain or Portugal?",
      a: "Portugal is generally considered easier and faster. Processing takes 4–8 weeks vs. Spain's 3–6 months. Portugal's document requirements are slightly simpler, and the AIMA (immigration office) is more predictable than Spain's consular system. However, Portugal's income threshold (€3,480/month) is higher than Spain's (€2,646/month). For most applicants, Portugal wins on speed and simplicity; Spain wins if you earn closer to the minimum threshold.",
    },
    {
      q: "Does Portugal tax US Social Security income?",
      a: "Under the US-Portugal tax treaty, US Social Security benefits paid to a Portuguese resident are only taxable by the US — Portugal cannot tax them. However, other US pension or retirement income may be subject to Portuguese tax depending on the income type and your NHR 2.0 status. Always verify with a tax advisor who handles US-Portugal cross-border situations.",
    },
    {
      q: "How fast can I get EU citizenship through Portugal?",
      a: "Portugal has one of the fastest EU citizenship paths at 5 years of legal residency. You must maintain continuous residency (allowed up to 6 months abroad per year), pass an A2-level Portuguese language test, have no criminal record, and demonstrate ties to Portuguese culture. After 5 years on a D8 visa with renewals, you can apply directly for naturalization — no separate permanent residency step required.",
    },
    {
      q: "What is the disadvantage of Portugal's D8 visa?",
      a: "The main drawbacks are: (1) NHR 2.0 is less generous than the original NHR — foreign pension income is no longer fully exempt. (2) Lisbon and Porto housing costs have surged, eroding the cost-of-living advantage. (3) AIMA appointment backlogs can delay your residence permit by months after arrival. (4) The visa fee (€533) is the highest among European nomad visas in this index.",
    },
  ],

  france: [
    {
      q: "Does France have a digital nomad visa?",
      a: "France does not have a dedicated 'digital nomad visa' by that name. The closest equivalent is the Talent Passport (Passeport Talent) — specifically the 'Business Creator' category — which grants a 4-year renewable residency permit for remote entrepreneurs and freelancers. It has stricter requirements than Spain or Portugal's nomad visas, including a business plan and proof of €30,000 in investment funds.",
    },
    {
      q: "Can I live in France as a digital nomad?",
      a: "Yes, via the Talent Passport (Business Creator). Unlike 1-year nomad visas in other countries, France's permit is issued for 4 years upfront and counts fully toward the 5-year citizenship path. The tradeoff is higher requirements: you need a Master's degree or 5+ years of professional experience, a viable business plan, and demonstrated economic activity in France. Tax rates are also higher than Spain or Portugal.",
    },
    {
      q: "What is the income tax rate for nomads in France?",
      a: "France does not offer a flat nomad tax rate equivalent to Spain's Beckham Law or Portugal's NHR. Freelancers under the Micro-Entrepreneur regime pay simplified flat-rate social contributions (around 22% for services) instead of standard employment taxes, with a progressive income tax on top. Effective rates for freelancers typically land between 30–45% depending on income. France's taxes are significantly higher than other countries in this index.",
    },
    {
      q: "How long does it take to get French citizenship?",
      a: "5 years of continuous legal residency. France's citizenship path is the same length as Portugal's but requires a higher level of French language (B1 test) and demonstrated 'assimilation' into French society. Spouses of French citizens can apply after 4 years. France allows dual citizenship, so you don't need to renounce your original nationality.",
    },
    {
      q: "What is the 90/180 rule for France?",
      a: "The 90/180 rule applies to Schengen tourist entries — you can spend a maximum of 90 days in any 180-day period in the Schengen Area (which includes France) without a visa. If you hold a French Talent Passport residence permit, this limit does not apply — you can stay indefinitely. The rule is only relevant when deciding whether to apply for a long-stay visa.",
    },
    {
      q: "Can a US citizen just move to France?",
      a: "US citizens can enter France visa-free for up to 90 days as tourists. To stay longer and work remotely legally, you need the Talent Passport or another long-stay visa. You cannot work or run a business on a tourist entry. The Talent Passport Business Creator route typically takes 6–10 weeks from application to visa issuance.",
    },
  ],

  "south-korea": [
    {
      q: "Can I be a digital nomad in South Korea?",
      a: "Yes. South Korea's Workation Visa (F-1-D) is specifically designed for remote workers employed by foreign companies. It allows stays of up to 1 year, renewable once for a maximum of 2 years total. You must earn at least twice the Korean GNI per capita — approximately $5,500/month or $66,000/year as of 2026 — and have at least 1 year with your current employer.",
    },
    {
      q: "What is the income tax rate in South Korea for nomads?",
      a: "South Korea offers a 19% flat income tax option for qualifying foreign residents on the Workation Visa, as an alternative to the standard progressive rates (6–45%). This flat rate applies to employment income paid by foreign companies. You must opt into this regime — it's not automatic. For high earners, the standard progressive system may actually be lower depending on income level.",
    },
    {
      q: "Is South Korea safe for digital nomads?",
      a: "South Korea consistently ranks among the safest countries in the world. Violent crime rates are extremely low, the transport infrastructure is world-class, and cities like Seoul, Busan, and Jeju Island have established nomad communities. The main practical challenges are the language barrier outside Seoul's international districts and strict visa rules prohibiting any local employment.",
    },
    {
      q: "Is $10,000 a month enough to live in South Korea?",
      a: "More than enough. Average monthly living costs for a digital nomad in Seoul run $1,950–$2,500 for comfortable living including rent in a modern apartment, food, transport, and entertainment. At $10,000/month gross with the 19% flat tax, your net is around $8,100 — leaving $5,600–$6,000/month in savings after expenses. Busan and Jeju are 20–30% cheaper than Seoul.",
    },
    {
      q: "Does South Korea offer a path to permanent residency?",
      a: "Not through the Workation Visa (F-1-D). This visa explicitly does not lead to permanent residency or citizenship. The maximum stay is 2 years total. If you want to remain in Korea long-term, you'd need to transition to a different visa category such as the D-8 (corporate investment), F-2 (residency), or F-5 (permanent residency through other qualifying routes like the points-based system).",
    },
    {
      q: "How fast is the internet in South Korea?",
      a: "South Korea has the world's fastest and most reliable internet infrastructure. Average fixed broadband speeds exceed 250 Mbps nationwide, with 5G coverage blanketing all major cities. Co-working spaces, cafes, and even remote mountain areas have reliable fiber connectivity. This makes it the top choice for developers, video editors, and other bandwidth-intensive nomads.",
    },
  ],

  germany: [
    {
      q: "Can I get a digital nomad visa for Germany?",
      a: "Germany does not have a formal 'digital nomad visa,' but the Freelancer Visa (Niederlassungserlaubnis für Freiberufler or Freiberufler-Visum) serves a similar purpose for self-employed remote workers in qualifying 'liberal professions' — including tech, design, writing, consulting, and similar fields. It's issued for 3 years and is renewable, with a path to permanent residency after 5 years.",
    },
    {
      q: "What are the income tax rates in Germany for freelancers?",
      a: "Germany has a progressive income tax ranging from 0% on the first €11,784 (2026 basic allowance) up to 42% on income above €66,761, with a 45% 'wealth tax' on income above €277,825. On top of income tax, freelancers pay solidarity surcharge (Solidaritätszuschlag) if applicable, and church tax if enrolled. Effective rates for most nomads earning €4,000–€8,000/month typically land around 30–38%.",
    },
    {
      q: "How hard is it to move to Germany as a US citizen?",
      a: "Moderately difficult — Germany's freelancer visa requires the most preparation of any country in this index. You need translated and apostilled qualifications, a detailed business plan, client contracts demonstrating demand for your services, and German-compliant health insurance. The Finanzamt (tax authority) evaluates whether your planned activity qualifies as a 'liberal profession.' Processing takes 6–12 weeks at the German embassy.",
    },
    {
      q: "What are the new rules in Germany in 2026?",
      a: "Germany reduced its citizenship residency requirement from 8 years to 5 years in 2024, and now officially permits dual citizenship — a significant change from the previous single-citizenship rule. For freelancers, the 2026 tax-free income threshold increased to €11,784. Germany also expanded the points-based Opportunity Card (Chancenkarte) but this targets job-seekers rather than established remote workers.",
    },
    {
      q: "Is Germany worth it compared to Spain or Portugal for digital nomads?",
      a: "Germany makes sense if your priorities are EU citizenship, professional network access in Europe's largest economy, or proximity to German-speaking clients. If tax efficiency is your primary goal, Spain (24% flat) and Portugal (20% flat under NHR 2.0) are significantly better. Germany's effective tax rate of 30–38% is the highest among European countries in this index, offset by world-class public services, infrastructure, and one of the strongest passports.",
    },
  ],

  brazil: [
    {
      q: "What is the income requirement for Brazil's digital nomad visa?",
      a: "Brazil's VITEM XIV requires proof of either $1,500 USD/month in regular remote income OR a bank balance of at least $18,000 USD. This is the lowest monthly income threshold among all countries in this index, making Brazil the most accessible option for early-career remote workers. Bank statements for the last 3 months are the standard documentation.",
    },
    {
      q: "Do digital nomads pay tax in Brazil?",
      a: "Tax obligations in Brazil depend on your residency status. If you spend fewer than 183 days per year in Brazil, you are a non-resident and generally only pay tax on Brazilian-sourced income (typically none for foreign remote workers). If you exceed 183 days, you become a Brazilian tax resident subject to progressive rates up to 27.5% on worldwide income. Most nomads on the VITEM XIV structure their stays to stay under 183 days per year.",
    },
    {
      q: "Can a US citizen get a digital nomad visa in Brazil?",
      a: "Yes. The VITEM XIV is open to all nationalities. US citizens do not need a tourist visa for Brazil (visa-free for 90 days), but the digital nomad visa requires a separate consular application. Processing typically takes 2–4 weeks — one of the fastest in this index. The one-time government visa fee is approximately $150 USD.",
    },
    {
      q: "How long can you stay in Brazil on the digital nomad visa?",
      a: "The VITEM XIV grants an initial stay of 1 year. It can be renewed once for a second year, giving a maximum of 2 years total under this visa category. After that, you'd need to switch to a different residency category (permanent residency, marriage, or investment-based) to continue living in Brazil long-term.",
    },
    {
      q: "What is the $2,000 rule in Brazil?",
      a: "The '$2,000 rule' is an informal reference to Brazil's simplified tax declaration threshold — individuals with annual income below approximately R$28,559 (roughly $5,600 USD at 2026 rates) may qualify for simplified filing. It is not directly related to the VITEM XIV income requirement. For nomads, what matters more is whether you cross the 183-day residency threshold that triggers full Brazilian tax residency.",
    },
    {
      q: "Is Brazil safe for digital nomads?",
      a: "Safety in Brazil varies enormously by location. Established nomad hubs like Florianópolis, Recife (Porto de Galinhas), and upscale neighborhoods in São Paulo and Rio are generally safe with sensible precautions. Favela areas and certain city outskirts carry significant risk. Florianópolis ('Floripa') is widely considered the safest and most nomad-friendly Brazilian city, with a high quality of life and a large international community.",
    },
  ],

  thailand: [
    {
      q: "How is income taxed on Thailand's LTR Visa?",
      a: "Thailand's Long-Term Resident (LTR) Visa offers a 17% flat income tax rate on income remitted to Thailand — meaning only money you actually transfer into Thailand is taxed, not your total global income. Income kept offshore is not subject to Thai tax. This remittance-based system makes Thailand highly tax-efficient if you manage your remittances carefully. The standard Thai progressive rates (5–35%) do not apply to LTR holders.",
    },
    {
      q: "Is $2,000 a month enough to live in Thailand?",
      a: "Yes, comfortably in most cities. Average nomad living costs in Chiang Mai run $800–$1,200/month for a good lifestyle including a private apartment, daily restaurant meals, motorbike rental, and fast internet. Bangkok runs $1,200–$1,800/month for a comparable standard. On $2,000/month, you'd live well in any Thai city — the LTR Visa's $2,000/month minimum income is calibrated specifically to this cost of living reality.",
    },
    {
      q: "How long is Thailand's LTR Visa valid?",
      a: "10 years, issued as a 5-year visa with one 5-year renewal — making it the longest initial visa duration of any country in this index. There is no path to permanent residency or citizenship through the LTR, but the decade of stability it offers is unmatched for nomads who want a long-term base without committing to the full EU residency path.",
    },
    {
      q: "Does Thailand offer a path to citizenship?",
      a: "No. Neither the LTR Visa nor standard Thai residency routes lead to citizenship for most foreigners. Thailand's naturalization process requires 5 years of legal permanent residency (not just the LTR visa), a high bar of Thai language proficiency, and significant discretionary government approval. In practice, Thai citizenship is extremely difficult for foreign nationals to obtain.",
    },
    {
      q: "Is Thailand good for digital nomads in 2026?",
      a: "Yes — Thailand remains the benchmark for Southeast Asian nomad infrastructure. Chiang Mai, Bangkok, and Koh Samui have dense co-working ecosystems, fast fiber internet (300+ Mbps in major cities), and massive expat communities. The LTR Visa resolved the previous 'visa run' problem that plagued nomads on tourist visas. Key drawbacks: no citizenship path, remittance-based tax tracking requires discipline, and political stability has been historically uneven.",
    },
  ],

  uae: [
    {
      q: "Is there really 0% income tax in the UAE?",
      a: "Yes. The UAE levies no personal income tax on employment or freelance income. This applies to the Dubai Remote Work Visa and all UAE residency categories. The UAE introduced a 9% corporate tax in 2023, but this applies to business profits above AED 375,000 — not to personal employment or remote work income. There are no capital gains taxes or wealth taxes either.",
    },
    {
      q: "Is the UAE worth it as a digital nomad given the high cost of living?",
      a: "It depends on your income level. At $5,000/month (the minimum), average living costs of $3,200/month leave only $1,800 in net savings — less than Portugal or Spain after their taxes. At $10,000+/month, the 0% tax advantage becomes decisive: $10,000 in the UAE nets $6,800 after living costs, versus $4,200 in Spain after 24% tax. The UAE math works strongly in favor of high earners.",
    },
    {
      q: "Does the UAE offer a path to citizenship?",
      a: "No — not through the Remote Work Visa. The UAE has historically not offered naturalization to foreign residents. In 2021 the UAE introduced a limited exceptional citizenship program for investors, scientists, and specialized talents by presidential nomination, but this is not a standard residency-to-citizenship pathway. Most nomads use the UAE as a tax-optimized base without expecting long-term settlement rights.",
    },
    {
      q: "What is the strategic advantage of the UAE timezone for nomads?",
      a: "UTC+4 overlaps with European morning hours (6am–12pm in London = 9am–3pm in Dubai) and Asian business hours simultaneously. This makes the UAE one of the only locations where you can hold EU client calls in the morning and Asia-Pacific calls in the afternoon without working unusual hours. It's particularly valuable for freelancers and consultants serving clients across both regions.",
    },
    {
      q: "Can I move to Thailand from the UAE easily?",
      a: "Yes. UAE residents with a valid UAE residence visa can enter Thailand visa-free for up to 30 days as tourists. For longer stays on Thailand's LTR Visa, you apply through the Thai Board of Investment portal regardless of your current residency. The UAE → Thailand route is a common nomad transition: start in Dubai to establish tax-free income history, then move to Thailand for lower costs while maintaining offshore financial structures.",
    },
  ],

  indonesia: [
    {
      q: "Is there income tax on Indonesia's Second Home Visa?",
      a: "No — Indonesia does not tax foreign-sourced income for holders of the Second Home Visa. Only income earned within Indonesia (from Indonesian clients or employers) would be subject to Indonesian tax, which most nomads have none of. This 0% effective tax rate on foreign income, combined with Bali's extremely low cost of living ($1,100/month average), makes Indonesia one of the highest net-savings destinations in this index.",
    },
    {
      q: "How much money do I need for Indonesia's Second Home Visa?",
      a: "The Second Home Visa requires proof of $130,000 USD equivalent in liquid assets (bank deposits) OR ownership of property in Indonesia worth the same amount. This is a high liquid asset bar compared to other countries' monthly income requirements. The $2,000/month income shown in this index reflects the practical cost of living, not a formal visa income threshold.",
    },
    {
      q: "How long can I stay in Indonesia on the Second Home Visa?",
      a: "5 years, with renewal possible for another 5 years. This is one of the longest initial visa durations available to nomads outside of Thailand's LTR. There is no path to permanent residency or citizenship through this visa category.",
    },
    {
      q: "Is Bali internet reliable enough for remote work?",
      a: "In established nomad zones — Canggu, Seminyak, Ubud, and Sanur — fiber internet is widely available with speeds of 50–200 Mbps in co-working spaces and most villas. The main reliability issue is power outages during rainy season (November–March), which can interrupt connectivity. Most serious nomads use a local SIM with a Telkomsel or XL data plan as backup. Outside Bali's main hubs and on outer islands, connectivity degrades significantly.",
    },
    {
      q: "Can Indonesians visit South Korea without a visa?",
      a: "As of 2026, Indonesian citizens generally require a visa for South Korea for standard tourism. South Korea announced a conditional pilot group visa-free program for Indonesian tourists in certain conditions, but it has not been broadly extended to individual travelers. Individual Indonesian tourists must still apply for a C-3 tourism visa through the Korean consulate or the K-ETA electronic travel authorization, where eligible.",
    },
  ],

  colombia: [
    {
      q: "Is there income tax in Colombia on a digital nomad visa?",
      a: "No — Colombia's M Visa does not tax foreign-sourced income. As long as your income comes from clients or employers outside Colombia (which is the case for virtually all digital nomads), you pay 0% Colombian income tax. You only become subject to Colombian tax if you work for Colombian companies or earn Colombian-sourced income. Combined with the lowest income threshold in this index ($750/month), Colombia offers the best entry-level nomad tax deal.",
    },
    {
      q: "How much income do I need for Colombia's digital nomad visa?",
      a: "The M Visa requires just $750 USD/month in verifiable remote income — equivalent to 3x Colombia's minimum wage. This is the lowest threshold of any country in this index by a significant margin, making Colombia the most accessible digital nomad visa for freelancers, early-career remote workers, or those transitioning from employment.",
    },
    {
      q: "Can I stay in Colombia for more than 6 months?",
      a: "Yes — the M Visa grants a 2-year stay, renewable. This is longer than most nomad visas and doesn't require the 90-day exit trips that tourist visa nomads manage. After 5 years of continuous legal residency across Colombia's visa categories, you can apply for permanent residency (Visa M Migrante Residente) and eventually citizenship.",
    },
    {
      q: "Is Colombia safe for digital nomads in 2026?",
      a: "Safety has improved dramatically in Medellín, Bogotá's Chapinero and Usaquén neighborhoods, Cartagena's tourist zone, and Santa Marta. Medellín in particular has undergone a major transformation and is consistently ranked among the top 3 global nomad cities by cost-to-quality ratio. The key is neighborhood selection — nomads who stay within established expat zones report very few issues. The overall country-level safety perception lags significantly behind the ground reality in nomad hubs.",
    },
    {
      q: "How fast is the application process for Colombia's nomad visa?",
      a: "Colombia's M Visa is fully online via cancilleria.gov.co and typically processes in 2–4 weeks — among the fastest in this index. The $177 government fee is also the second-lowest here. You don't need to visit a consulate; the entire process is digital. This combination of low income threshold, fast processing, and low fees makes it the easiest visa to obtain in this database.",
    },
  ],

  estonia: [
    {
      q: "What is the income tax rate in Estonia for digital nomads?",
      a: "Estonia applies a flat 20% income tax rate with no progressive brackets — you pay 20% whether you earn €4,500 or €45,000/month. There is also a 33% social tax on employment income (paid by the employer) and a 13% health insurance contribution, but for self-employed nomads running an Estonian OÜ (company), structuring can significantly reduce these. e-Residents running an EU company through Estonia can control when and how much income they extract.",
    },
    {
      q: "What is the income requirement for Estonia's digital nomad visa?",
      a: "Estonia requires a minimum monthly income of €4,500 — the highest threshold among the European countries in this index. This reflects Estonia's intention to attract established high-earning remote professionals rather than entry-level nomads. Bank statements for at least 6 months showing this average are standard documentation.",
    },
    {
      q: "Does the US have a tax treaty with Estonia?",
      a: "Yes. The US-Estonia tax treaty prevents double taxation on most income types. Under the treaty, US citizens living in Estonia generally pay Estonian tax on their income and can claim a Foreign Tax Credit on their US return for taxes paid to Estonia. The 20% flat Estonian rate is often lower than equivalent US rates, making the credit particularly useful. Always verify with a cross-border tax specialist.",
    },
    {
      q: "Is Estonia considered a tax haven?",
      a: "Not in the traditional sense. Estonia has a transparent, OECD-compliant tax system and is an EU member state — it cannot be a secrecy jurisdiction. What makes Estonia tax-attractive is its unique corporate tax system: Estonian companies (OÜs) pay 0% corporate tax on retained profits — you only pay the 20% tax when you distribute dividends. This is legal tax deferral, not evasion, and is especially valuable for remote business owners who can reinvest profits.",
    },
    {
      q: "What is Estonia's e-Residency program?",
      a: "e-Residency is a digital identity program that lets non-Estonians register and run an EU-based company (OÜ) entirely online, without physically living in Estonia. It's separate from the Digital Nomad Visa — you can have e-Residency without ever visiting Estonia. Combined with the DNV, e-Residency lets you live in Estonia, run an EU company with Estonian banking, and benefit from the 0% corporate tax on retained earnings.",
    },
    {
      q: "Can the Estonia digital nomad visa be renewed?",
      a: "No — Estonia's DNV is issued for 1 year and is not renewable. This is a unique limitation compared to Spain, Portugal, and other countries in this index. After 1 year, you must leave and reapply via a different residency route (such as the temporary residence permit for employment or business) if you want to continue living in Estonia long-term. This makes Estonia ideal as a 1-year base, not a permanent settlement.",
    },
  ],
};

export interface CompareFaq {
  q: string;
  a: string;
}

export const compareFaqs: Record<string, CompareFaq[]> = {
  "spain-vs-portugal": [
    {
      q: "Is it easier to get a visa in Spain or Portugal?",
      a: "Portugal is easier and faster. Processing takes 4–8 weeks vs Spain's 3–6 months. Portugal's document checklist is slightly simpler, and the AIMA office is more predictable than Spain's consular system. The tradeoff: Portugal's income threshold (€3,480/month) is higher than Spain's (€2,646/month). For most applicants, Portugal wins on speed and simplicity.",
    },
    {
      q: "Which has lower taxes — Spain or Portugal?",
      a: "Portugal is marginally lower: 20% flat rate under NHR 2.0 vs Spain's 24% Beckham Law flat rate. Both apply for a fixed term (Portugal for 10 years, Spain for 6 years). Portugal also exempts most foreign-sourced income entirely under NHR 2.0, whereas Spain taxes all income at 24% regardless of source. For high earners with diversified income streams, Portugal's NHR 2.0 structure is typically more tax-efficient.",
    },
    {
      q: "Spain vs Portugal — which is better for US citizens?",
      a: "Both countries have tax treaties with the US that prevent double taxation. Portugal edges ahead for most US citizens because NHR 2.0's foreign income exemption means many US income streams (dividends, capital gains from non-Portuguese sources) are untaxed in Portugal, reducing your overall burden. Spain's Beckham Law taxes everything at 24% regardless of source. Portugal also has a faster citizenship path (5 years) and stronger English proficiency nationwide, easing the transition.",
    },
    {
      q: "Which country has a faster path to EU citizenship?",
      a: "Both require 5 years of continuous legal residency for citizenship. Portugal's process is considered more straightforward: A2 Portuguese language test, clean record, and demonstrated ties. Spain requires 10 years for standard naturalization (though the DNV path involves 5 years to permanent residency first, then another 5 to citizenship). If EU citizenship is your goal, Portugal is the clear winner.",
    },
    {
      q: "Where can I find the complete Spain digital nomad visa tax guide?",
      a: "Our complete Spain digital nomad visa tax guide covers the full Beckham Law mechanics, employee vs freelancer treatment, Modelo 149 deadline, US double taxation rules, and what happens after the 6-year period ends. See the full Spain digital nomad visa tax guide for 2026.",
    },
  ],

  "portugal-vs-spain": [
    {
      q: "Is it easier to get a visa in Portugal or Spain?",
      a: "Portugal is easier and faster. Processing takes 4–8 weeks vs Spain's 3–6 months. Portugal's document checklist is slightly simpler, and the AIMA office is more predictable than Spain's consular system. The tradeoff: Portugal's income threshold (€3,480/month) is higher than Spain's (€2,646/month). For most applicants, Portugal wins on speed and simplicity.",
    },
    {
      q: "Which has lower taxes — Portugal or Spain?",
      a: "Portugal is marginally lower: 20% flat rate under NHR 2.0 vs Spain's 24% Beckham Law flat rate. Both apply for a fixed term (Portugal for 10 years, Spain for 6 years). Portugal also exempts most foreign-sourced income entirely under NHR 2.0, whereas Spain taxes all income at 24% regardless of source. For high earners with diversified income streams, Portugal's NHR 2.0 structure is typically more tax-efficient.",
    },
    {
      q: "Portugal vs Spain — which is better for US citizens?",
      a: "Both countries have tax treaties with the US that prevent double taxation. Portugal edges ahead for most US citizens because NHR 2.0's foreign income exemption means many US income streams (dividends, capital gains from non-Portuguese sources) are untaxed in Portugal, reducing your overall burden. Spain's Beckham Law taxes everything at 24% regardless of source. Portugal also has a faster citizenship path and stronger English proficiency nationwide.",
    },
    {
      q: "Which country has a faster path to EU citizenship?",
      a: "Both require 5 years of continuous legal residency for citizenship. Portugal's process is considered more straightforward: A2 Portuguese language test, clean record, and demonstrated ties. Spain requires 10 years for standard naturalization (though 5 years gets you permanent residency first). If EU citizenship is your goal, Portugal is the clear winner.",
    },
    {
      q: "Where can I find the complete Spain digital nomad visa tax guide?",
      a: "Our complete Spain digital nomad visa tax guide covers the full Beckham Law mechanics, employee vs freelancer treatment, Modelo 149 deadline, US double taxation rules, and what happens after the 6-year period ends. See the full Spain digital nomad visa tax guide for 2026.",
    },
  ],

  "spain-vs-france": [
    {
      q: "Spain vs France — which digital nomad visa is easier to get?",
      a: "Spain is significantly easier. Spain's Digital Nomad Visa (Ley de Startups) requires proof of €2,646/month income and standard documents — no qualifications needed. France's Talent Passport requires a Master's degree or 5+ years of professional experience, a detailed business plan, and €30,000 in project financing. Spain also processes faster: 3–6 months vs France's 6–10 weeks, though France's requirements are harder to meet in the first place.",
    },
    {
      q: "Spain vs France — which has lower income tax for digital nomads?",
      a: "Spain is dramatically lower. Spain's Beckham Law applies a flat 24% rate on Spanish-sourced income for 6 years, with foreign income fully exempt. France has no equivalent flat-rate nomad regime — remote workers on the Talent Passport pay progressive income tax up to 45% plus social contributions, with effective rates typically landing at 30–45%. At $5,000/month, Spain saves you $2,000/month vs France's $1,400/month after tax and living costs.",
    },
    {
      q: "Spain vs France — which is cheaper to live in?",
      a: "Spain is cheaper. Average monthly living costs for a digital nomad: Spain $1,800 vs France $2,100. Spain's major nomad hubs (Barcelona, Madrid, Valencia, Málaga) are 15–25% cheaper than Paris for equivalent quality of life. Outside Paris, French costs drop, but Spain consistently outperforms on cost across all cities. At $5,000/month income, Spain's lower tax rate and lower living costs produce $600/month more in savings than France.",
    },
    {
      q: "Does France or Spain offer faster EU citizenship for digital nomads?",
      a: "France is significantly faster — 5 years of legal residency vs Spain's 10 years for full citizenship. Both result in an EU passport with Schengen zone rights and allow dual citizenship with the US. France requires a B1 French language test; Spain requires B1 Spanish. If an EU passport is your primary long-term goal, France's 5-year path is a major advantage despite its higher taxes and tougher visa requirements. Portugal also offers 5-year citizenship with lower taxes than both.",
    },
    {
      q: "Is $5,000/month enough for Spain or France as a digital nomad?",
      a: "Yes for Spain — comfortably. After the 24% Beckham Law flat tax ($1,200) and $1,800 living costs, you save $2,000/month. For France at $5,000/month: after approximately 30% effective tax ($1,500) and $2,100 living costs, you save $1,400/month. Spain produces $600/month more in savings at this income level. At $5,000/month you also exceed Spain's minimum income requirement ($2,646/month) with strong headroom.",
    },
    {
      q: "Where can I find the complete Spain digital nomad visa tax guide?",
      a: "Our complete Spain digital nomad visa tax guide covers the full Beckham Law mechanics, employee vs freelancer treatment, Modelo 149 deadline, US double taxation rules, and what happens after the 6-year period ends. See the full Spain digital nomad visa tax guide for 2026.",
    },
  ],

  "france-vs-spain": [
    {
      q: "France vs Spain — which digital nomad visa is easier to get?",
      a: "Spain is significantly easier. Spain's Digital Nomad Visa requires only proof of €2,646/month income with no qualification requirements. France's Talent Passport requires a Master's degree or 5+ years experience, a viable business plan, and €30,000 in project financing. For most US remote workers without a formal business plan, Spain is the only realistic option between these two.",
    },
    {
      q: "France vs Spain — which has lower taxes for remote workers?",
      a: "Spain is dramatically lower. Spain's Beckham Law locks income tax at a flat 24% with foreign income exempt. France has no equivalent flat-rate regime — effective rates for Talent Passport holders typically land at 30–45% including social contributions. At $7,500/month income, Spain saves approximately $1,050/month more than France in tax alone.",
    },
    {
      q: "France vs Spain — which is better for US digital nomads?",
      a: "Spain is better for most US nomads on tax efficiency and accessibility. Spain's Beckham Law produces lower taxes, the income threshold is achievable, and the visa process requires no business plan or formal qualifications. France wins only if EU citizenship in 5 years (vs Spain's 10 years) is your primary goal, or if you specifically want to live in Paris and are prepared for the Talent Passport requirements.",
    },
    {
      q: "Can I move from Spain to France after the Beckham Law ends?",
      a: "Yes — and some nomads plan this transition. After 6 years in Spain under the Beckham Law, transitioning to France resets your residency clock toward EU citizenship, though France's progressive tax rates (30–45%) would apply immediately with no flat-rate equivalent. A more common strategy is Spain for 6 years (Beckham Law) then Portugal (NHR 2.0, 20% flat for 10 years) to reset the flat-rate clock while maintaining EU residency.",
    },
    {
      q: "Where can I find the complete Spain digital nomad visa tax guide?",
      a: "Our complete Spain digital nomad visa tax guide covers the full Beckham Law mechanics, employee vs freelancer treatment, Modelo 149 deadline, US double taxation rules, and what happens after the 6-year period ends. See the full Spain digital nomad visa tax guide for 2026.",
    },
  ],

  "uae-vs-thailand": [
    {
      q: "UAE vs Thailand — which is better for high-earning nomads?",
      a: "UAE wins above ~$8,000/month. The 0% income tax means every dollar above living costs ($3,200/month average) is yours. At $10,000/month: UAE nets $6,800 after living costs. Thailand at 17% flat nets $7,100 — but Thailand's lower costs ($1,200/month) actually mean more savings at most income levels. Below $8,000/month, Thailand's lower cost of living typically produces better net savings despite having a 17% tax.",
    },
    {
      q: "Is it easier to get a visa in the UAE or Thailand?",
      a: "Both are relatively straightforward but different in structure. UAE's Remote Work Visa is primarily online, processes in 2–3 weeks, and requires proof of $5,000/month income. Thailand's LTR Visa requires $80,000/year income proof (2 years of tax returns) and takes 4–8 weeks via the Board of Investment. UAE is faster; Thailand has a higher income bar but a much longer visa (10 years vs 1 year renewable).",
    },
    {
      q: "UAE vs Thailand — which has a better lifestyle for nomads?",
      a: "They serve completely different lifestyles. UAE (Dubai) offers world-class infrastructure, luxury amenities, and a strategic timezone bridging Europe and Asia — ideal for client-facing professionals. Thailand (Chiang Mai, Bangkok, Koh Samui) offers unmatched cost-to-quality ratio, tropical climate, massive nomad community, and a relaxed pace — ideal for independent creators and long-term settlers. Neither is objectively better; it depends entirely on your work style and priorities.",
    },
    {
      q: "Do UAE or Thailand offer a path to citizenship?",
      a: "Neither. The UAE Remote Work Visa and Thailand LTR Visa both offer zero path to permanent residency or citizenship through standard residency. If long-term EU citizenship is a goal, neither country serves that purpose — consider Spain, Portugal, France, Germany, or Estonia instead.",
    },
  ],

  "thailand-vs-uae": [
    {
      q: "Thailand vs UAE — which is better for digital nomads?",
      a: "Thailand wins on cost and lifestyle for most nomads. Average monthly costs of $1,200 vs UAE's $3,200 mean you need far less income to live well. Thailand's 17% flat tax on remitted income combined with low living costs produces strong net savings at mid-range incomes. UAE wins for high earners ($8,000+/month) where the 0% tax advantage overcomes the higher cost of living.",
    },
    {
      q: "Thailand vs UAE — which visa is easier to get?",
      a: "UAE is faster: online application, 2–3 weeks processing, $5,000/month income requirement. Thailand's LTR Visa requires $80,000/year income (documented over 2 years) and takes 4–8 weeks via the Board of Investment portal. UAE's process is simpler; Thailand's income bar is higher but the reward is a 10-year visa vs UAE's 1-year renewable.",
    },
    {
      q: "Thailand vs UAE — which has lower taxes?",
      a: "UAE has 0% personal income tax — nothing beats it on this metric. Thailand applies 17% flat on income remitted into Thailand (money kept offshore isn't taxed). For nomads who carefully manage their Thai remittances, the effective Thai tax rate can be very low, but it requires discipline. UAE is simpler and definitively tax-free.",
    },
  ],

  "colombia-vs-estonia": [
    {
      q: "Colombia vs Estonia — which is better for digital nomads?",
      a: "They serve opposite ends of the nomad spectrum. Colombia is the best entry-level option globally: lowest income threshold ($750/month), 0% foreign income tax, $900/month living costs, and the fastest/easiest application process in this index. Estonia is for established high earners ($4,500/month minimum) who want EU access, e-Residency for running an EU company, and Estonia's unique 0% corporate tax on retained profits. Colombia = accessible and affordable; Estonia = premium EU infrastructure.",
    },
    {
      q: "Colombia vs Estonia — which has lower taxes?",
      a: "Both are 0% on foreign-sourced income in practice, but through different mechanisms. Colombia simply doesn't tax foreign income for nomads. Estonia's 20% personal income tax applies, but the OÜ company structure lets you retain profits at 0% corporate tax — you only pay 20% when you extract dividends. For a nomad earning from foreign clients, Colombia offers simpler 0% taxation; Estonia offers more sophisticated tax planning for business owners.",
    },
    {
      q: "Which is easier — Colombia's M Visa or Estonia's Digital Nomad Visa?",
      a: "Colombia is dramatically easier. $750/month income threshold, fully online application, $177 fee, 2–4 weeks processing. Estonia requires $4,500/month income (6x higher), in-person embassy application, and stricter documentation. Colombia is designed for accessibility; Estonia is designed for high-earning professionals.",
    },
    {
      q: "Does Estonia or Colombia offer a path to EU citizenship?",
      a: "Estonia does — after 8 years of legal residency. Colombia offers citizenship after 5 years of legal residency, but Colombian citizenship doesn't grant EU rights. If an EU passport is the goal, Estonia is the only option between these two, though 8 years is the longest citizenship timeline in this index. Portugal (5 years) or Germany (5 years) are faster EU paths.",
    },
  ],

  "estonia-vs-colombia": [
    {
      q: "Estonia vs Colombia — which digital nomad visa is better?",
      a: "Depends entirely on your income and goals. Estonia ($4,500/month minimum, 20% flat tax, EU access, e-Residency) is built for high-earning remote professionals who want EU infrastructure and sophisticated tax planning. Colombia ($750/month minimum, 0% foreign income tax, $900/month living costs) is built for accessibility and affordability. Most nomads under $3,000/month will find Colombia produces better net savings; above $5,000/month, Estonia's EU access and company structure advantages often outweigh the tax.",
    },
    {
      q: "Estonia vs Colombia — which has lower taxes?",
      a: "Colombia is simpler: 0% on all foreign-sourced income, no structure required. Estonia's personal income tax is 20%, but running an Estonian OÜ company lets you defer tax by retaining profits at 0% corporate tax — you only pay 20% when you extract income as dividends. Colombia wins on simplicity; Estonia wins for business owners who want to reinvest profits.",
    },
    {
      q: "Which visa is faster to get — Estonia or Colombia?",
      a: "Colombia by a wide margin. Fully online via cancilleria.gov.co, 2–4 weeks processing, $177 fee. Estonia requires an in-person embassy appointment, takes 2–4 weeks processing after submission, and has a $4,500/month income bar that rules out many applicants. Colombia's M Visa is the fastest and easiest to obtain in this entire index.",
    },
  ],

  "indonesia-vs-germany": [
    {
      q: "Indonesia vs Germany — which is better for digital nomads?",
      a: "They're designed for completely different nomads. Indonesia (Bali Second Home Visa): 0% foreign income tax, $1,100/month living costs, 5-year visa, zero bureaucracy on taxes — ideal for lifestyle-focused nomads who want maximum take-home pay in a low-cost environment. Germany (Freelancer Visa): 30–38% effective tax, $2,400/month living costs, high bureaucracy — but EU access, strong professional network, and 5-year citizenship path. Indonesia is for lifestyle optimization; Germany is for career and citizenship building.",
    },
    {
      q: "Indonesia vs Germany — which has lower taxes?",
      a: "Indonesia is dramatically lower. 0% tax on foreign-sourced income for Second Home Visa holders vs Germany's 30–38% effective progressive rate for freelancers. This is the starkest tax contrast in this index. The tradeoff: Germany offers EU permanent residency and citizenship; Indonesia offers neither.",
    },
    {
      q: "Which visa is easier to get — Indonesia or Germany?",
      a: "Indonesia is significantly easier. The Second Home Visa requires $130,000 in liquid assets and applies online — high asset bar but no business plan, qualifications, or employer contracts needed. Germany's Freelancer Visa requires translated qualifications, a detailed business plan, client contracts, a Finanzamt evaluation, and German-compliant health insurance — the most document-intensive application in this index.",
    },
    {
      q: "Does Indonesia or Germany offer a path to citizenship?",
      a: "Germany does — 5 years of legal residency since the 2024 reform, with dual citizenship now permitted. Indonesia does not offer a citizenship path through the Second Home Visa. If EU citizenship is your goal, Germany is one of the strongest options in this index despite its high taxes, offering one of the world's most powerful passports after 5 years.",
    },
  ],

  "germany-vs-indonesia": [
    {
      q: "Germany vs Indonesia — which is better for digital nomads?",
      a: "Indonesia wins on cost and tax efficiency; Germany wins on EU access and citizenship. Indonesia's Bali Second Home Visa: 0% foreign income tax, $1,100/month living costs, straightforward online application. Germany's Freelancer Visa: 30–38% effective tax, $2,400/month costs, extensive paperwork — but a 5-year EU citizenship path and Germany's powerful passport. Choose based on whether you're optimizing for current income or long-term settlement.",
    },
    {
      q: "Germany vs Indonesia — which has lower taxes?",
      a: "Indonesia by a large margin. 0% on foreign-sourced income for Second Home Visa holders vs Germany's progressive rates producing 30–38% effective burden for most freelancers. Germany's taxes are the highest of any European country in this index, offset by world-class public services, healthcare, and one of the strongest passports globally.",
    },
    {
      q: "Germany vs Indonesia — which visa is easier to get?",
      a: "Indonesia. The Second Home Visa is an online application requiring $130,000 in assets. Germany's Freelancer Visa is the most document-intensive in this index: translated qualifications, business plan, client contracts, Finanzamt evaluation, and German-compliant health insurance. Germany's process typically takes 6–12 weeks and requires an in-person embassy interview.",
    },
  ],

  "france-vs-south-korea": [
    {
      q: "France vs South Korea — which is better for digital nomads?",
      a: "South Korea is better for most nomads in 2026. Korea's Workation Visa (F-1-D) has a simpler application than France's Talent Passport, a 19% flat tax option vs France's 30–45% effective rate, and significantly lower living costs ($1,950/month vs $2,100/month). France offers a faster citizenship path (5 years) and EU access, which Korea lacks entirely. For pure nomad value, Korea wins; for long-term EU settlement, France wins.",
    },
    {
      q: "France vs South Korea — which has lower income tax?",
      a: "South Korea is lower. The F-1-D Workation Visa offers an optional 19% flat rate on employment income from foreign companies. France has no equivalent flat-rate nomad regime — effective freelancer rates typically land at 30–45% including social contributions. For tax efficiency, South Korea wins clearly over France.",
    },
    {
      q: "France vs South Korea — which visa is harder to get?",
      a: "France's Talent Passport is harder. It requires a Master's degree or 5+ years of experience, a business plan, and €30,000 in investment funds. South Korea's F-1-D requires $5,500/month income and 1+ year with a foreign employer — straightforward documentation with no business plan required. Korea's main barrier is the high income threshold; France's barrier is the qualifications and business case.",
    },
  ],

  "south-korea-vs-france": [
    {
      q: "South Korea vs France — which is better for digital nomads?",
      a: "South Korea is better for most nomads in 2026. Simpler visa application, 19% flat tax option vs France's 30–45% effective rate, and lower living costs. France has the advantage for long-term EU citizenship seekers (5-year path) and professionals who specifically need EU market access. For pure nomad value — tax efficiency, cost of living, internet speed, safety — South Korea outperforms France.",
    },
    {
      q: "South Korea vs France — which has lower taxes?",
      a: "South Korea is lower. The 19% flat rate option on the F-1-D Workation Visa compares favorably to France's 30–45% effective freelancer burden. South Korea also has lower living costs, amplifying the take-home advantage. France has no nomad-specific flat tax regime.",
    },
    {
      q: "South Korea vs France — does either offer EU citizenship?",
      a: "France does; South Korea does not. France's Talent Passport leads to citizenship after 5 years of legal residency — one of the fastest EU paths available. South Korea's F-1-D Workation Visa explicitly offers no path to permanent residency or citizenship, with a maximum 2-year total stay. If an EU passport is your goal, France is the clear choice despite its higher taxes.",
    },
  ],

  "portugal-vs-thailand": [
    {
      q: "Portugal vs Thailand — which is better for digital nomads?",
      a: "Thailand wins on cost and visa duration; Portugal wins on EU access and citizenship. Thailand: $1,200/month living costs, 10-year visa, 17% flat tax on remitted income only. Portugal: $1,600/month living costs, 20% NHR 2.0 flat rate, 5-year EU citizenship path. For nomads who want to maximize savings and stay flexible, Thailand produces higher net savings at most income levels. For nomads building toward EU citizenship, Portugal is the better long-term play.",
    },
    {
      q: "Portugal vs Thailand — which has lower taxes?",
      a: "They're similar in rate (Portugal 20% NHR 2.0 vs Thailand 17% flat) but different in structure. Portugal taxes all qualifying income at 20% and exempts most foreign-sourced income under NHR 2.0. Thailand only taxes income you remit into Thailand — money kept offshore isn't taxed at all. For nomads who can manage remittances carefully, Thailand's effective rate can be significantly below 17%. Portugal is simpler to comply with.",
    },
    {
      q: "Does Portugal or Thailand offer a path to citizenship?",
      a: "Portugal does — 5 years of legal residency leading to one of Europe's most powerful passports and full EU rights. Thailand offers no citizenship path through the LTR Visa and makes naturalization extremely difficult for foreigners in general. If long-term settlement and a strong passport are goals, Portugal is the only choice between these two.",
    },
  ],

  "thailand-vs-portugal": [
    {
      q: "Thailand vs Portugal — which is better for digital nomads?",
      a: "Thailand wins on cost and visa length; Portugal wins on EU access. Thailand: $1,200/month average costs, 10-year LTR visa, 17% tax on remitted income. Portugal: $1,600/month costs, 20% NHR 2.0 flat tax, 5-year EU citizenship path. Most nomads purely focused on savings will get more from Thailand; those building toward EU residency choose Portugal.",
    },
    {
      q: "Thailand vs Portugal — which has lower taxes?",
      a: "Thailand can be lower in practice. The 17% flat rate only applies to income remitted into Thailand — offshore income is untaxed. Portugal's NHR 2.0 is 20% on qualifying income with foreign income exemptions. If you're disciplined about remittances, Thailand's effective rate beats Portugal's. For simplicity, both are close and Portugal is easier to comply with.",
    },
    {
      q: "Thailand vs Portugal — which visa lasts longer?",
      a: "Thailand wins significantly: 10 years (5+5 renewable) vs Portugal's 1 year initial with renewals. However, Portugal's renewals lead toward permanent residency and citizenship, making it a more structured long-term path. Thailand's 10-year visa offers stability without bureaucratic renewal pressure, but it's a ceiling, not a ladder.",
    },
  ],

  "brazil-vs-colombia": [
    {
      q: "Brazil vs Colombia — which digital nomad visa is easier to get?",
      a: "Colombia is easier on every metric. Colombia's M Visa requires just $750/month income, is fully online via cancilleria.gov.co, costs $177, and processes in 2–4 weeks. Brazil's VITEM XIV requires $1,500/month income, consular in-person application in most cases, costs $150, and takes 4–8 weeks. Colombia has the lowest income threshold of any nomad visa in this index — roughly half of Brazil's requirement.",
    },
    {
      q: "Brazil vs Colombia — which has lower taxes for digital nomads?",
      a: "Colombia wins clearly. Colombia's M Visa applies 0% tax on foreign-sourced income — period. Brazil's tax situation depends on your stay length: under 183 days per year you're a non-resident and generally pay 0% on foreign income, but over 183 days you become a Brazilian tax resident subject to progressive rates up to 27.5%. Colombia's 0% rate is unconditional regardless of how long you stay.",
    },
    {
      q: "Brazil vs Colombia — which is cheaper to live in?",
      a: "Colombia is cheaper overall. Average nomad living costs: Colombia $900/month (Medellín, Bogotá) vs Brazil $1,100/month (Florianópolis, São Paulo). Both are among the most affordable destinations in this index. At $3,000/month income with 0% tax on both visas: Colombia gives you $2,100/month in savings vs Brazil's $1,900/month — a $2,400/year advantage for Colombia.",
    },
    {
      q: "Is Brazil or Colombia safer for digital nomads?",
      a: "Both countries have safety realities that depend heavily on neighborhood selection. Colombia's established nomad hubs — Medellín's El Poblado and Laureles, Bogotá's Chapinero and Usaquén — have improved dramatically and report very few incidents for nomads who stay within these zones. Brazil's safest nomad destination is Florianópolis, consistently rated the best Brazilian city for quality of life and safety. In both countries, staying within established expat zones makes the risk profile manageable.",
    },
    {
      q: "Does Brazil or Colombia offer a path to citizenship?",
      a: "Colombia does — after 5 years of continuous legal residency. Brazil technically allows naturalization after 4 years but the VITEM XIV (Digital Nomad Visa) has a maximum 2-year stay, meaning you cannot accumulate the residency time needed through this visa alone. You'd need to transition to a different Brazilian visa category for the citizenship path. Colombia's 5-year citizenship path is accessible directly through the M Visa renewal chain.",
    },
  ],

  "colombia-vs-brazil": [
    {
      q: "Colombia vs Brazil — which digital nomad visa saves more money?",
      a: "Colombia saves more at every income level. 0% tax on foreign income unconditionally, $900/month average living costs, and a $750/month income threshold. At $3,000/month: Colombia nets $2,100/month saved vs Brazil's $1,900/month. At $5,000/month: Colombia nets $4,100/month vs Brazil's $3,900/month. The $200/month advantage comes from both lower living costs and Colombia's cleaner 0% tax structure vs Brazil's 183-day residency rule.",
    },
    {
      q: "Colombia vs Brazil — which visa is faster to get?",
      a: "Colombia by a wide margin. Fully online application via cancilleria.gov.co, $177 fee, 2–4 week processing. Brazil typically requires an in-person consular visit, $150 fee, and 4–8 week processing. Colombia's M Visa is the fastest and simplest digital nomad visa in this entire index — no embassy visit, no waiting room, no in-person anything.",
    },
    {
      q: "Colombia vs Brazil — best cities for digital nomads?",
      a: "Colombia: Medellín is the standout — spring-like climate year-round (dubbed City of Eternal Spring), fast fiber internet, large established nomad community, co-working density rivals Bali, and cost of living around $800–$1,000/month for comfortable living. Bogotá is larger, more professional, and slightly cheaper. Brazil: Florianópolis offers beach lifestyle with good infrastructure, reliable internet, and strong safety relative to other Brazilian cities at around $1,000–$1,300/month.",
    },
    {
      q: "Does Colombia or Brazil offer better long-term residency?",
      a: "Colombia wins on long-term residency. The M Visa grants 2 years initially with renewals, and after 5 years of continuous residency you can apply for Colombian citizenship. Brazil's VITEM XIV has a hard 2-year maximum — you cannot renew beyond that on this visa and must switch to a different category for long-term residency. If building toward permanent residency matters, Colombia is the clearer path.",
    },
  ],

  "spain-vs-indonesia": [
    {
      q: "Spain vs Indonesia — which saves more money for digital nomads?",
      a: "Indonesia wins decisively below $8,000/month. Indonesia's Second Home Visa charges 0% tax on foreign income with $1,100/month average living costs in Bali. At $5,000/month: Indonesia nets $3,900/month saved vs Spain's $2,000/month after 24% Beckham Law tax and $1,800 living costs. The $1,900/month gap is enormous. Above $10,000+/month, Spain's EU access, professional network, and citizenship path may justify the higher tax burden.",
    },
    {
      q: "Spain vs Indonesia — which visa is easier to get?",
      a: "Spain's DNV is easier to qualify for in terms of income: €2,646/month required. Indonesia's Second Home Visa requires $130,000 USD in liquid assets — no monthly income requirement, but a high asset bar. If you have the assets, Indonesia's application is online and straightforward. If you don't have $130,000 in liquid savings, Spain is your only option between these two regardless of monthly income.",
    },
    {
      q: "Spain vs Bali — which is better for digital nomads in 2026?",
      a: "Depends entirely on what you're optimizing for. Bali (Indonesia) wins on savings, lifestyle, cost, tropical climate, and nomad community density — Canggu is arguably the world's most developed nomad hub. Spain wins on EU access, professional credibility, citizenship path (10 years), Schengen travel, and proximity to European clients and time zones. They serve completely different lifestyles: Bali for lifestyle-first nomads, Spain for career-building nomads who want long-term European roots.",
    },
    {
      q: "Does Spain or Indonesia offer a path to citizenship?",
      a: "Spain does — after 10 years of legal residency. Indonesia's Second Home Visa explicitly offers no path to permanent residency or citizenship. Indonesia makes naturalization extremely difficult for foreigners in general. If an EU passport or long-term settlement rights matter, Spain is the only choice between these two. Portugal offers a faster EU citizenship path (5 years) if citizenship timeline is your primary decision factor.",
    },
    {
      q: "Can I live in Spain and Bali in the same year?",
      a: "Not legally under either visa simultaneously — you can only be a tax resident in one country at a time. What some nomads do: spend time in Bali as a tourist (Indonesia allows 30-day visa-free entry for most nationalities, extendable to 60 days) while maintaining Spanish tax residency. However, if you spend more than 183 days outside Spain in a year you may risk your Spanish residency status. The Spain DNV and Indonesia Second Home Visa are designed for primary residency, not split-year arrangements.",
    },
    {
      q: "Where can I find the complete Spain digital nomad visa tax guide?",
      a: "Our complete Spain digital nomad visa tax guide covers the full Beckham Law mechanics, employee vs freelancer treatment, Modelo 149 deadline, US double taxation rules, and what happens after the 6-year period ends. See the full Spain digital nomad visa tax guide for 2026.",
    },
  ],

  "indonesia-vs-spain": [
    {
      q: "Indonesia vs Spain — which is better for US digital nomads?",
      a: "Indonesia (Bali) wins for lifestyle and savings; Spain wins for long-term career and citizenship. Indonesia: 0% tax on foreign income, $1,100/month costs, 5-year visa, no citizenship path. Spain: 24% Beckham Law flat tax, $1,800/month costs, 10-year citizenship path, full EU access. At incomes under $8,000/month, Indonesia produces significantly more monthly savings. Above $10,000/month where EU market access and professional network matter more, Spain becomes more compelling.",
    },
    {
      q: "Indonesia vs Spain — which visa lasts longer?",
      a: "Indonesia's Second Home Visa lasts 5 years (with renewal possible for another 5 years) — the longest initial visa duration of any country in this index except Thailand's LTR. Spain's Digital Nomad Visa starts at 1 year, renewable annually, building toward permanent residency after 5 years. Indonesia offers more stability upfront; Spain offers a structured long-term residency ladder. Indonesia has zero citizenship path; Spain leads to EU citizenship after 10 years.",
    },
    {
      q: "Indonesia vs Spain — which has better internet for remote work?",
      a: "Spain is more reliable nationwide. Major Spanish cities (Madrid, Barcelona, Valencia) have consistent fiber infrastructure with average speeds of 300+ Mbps. In Bali, established nomad zones (Canggu, Ubud, Seminyak) have reliable fiber at co-working spaces (50–200 Mbps) but residential reliability varies and power outages during rainy season (November–March) can disrupt connectivity. Outside Bali's main hubs, Indonesian internet degrades significantly.",
    },
    {
      q: "Where can I find the complete Spain digital nomad visa tax guide?",
      a: "Our complete Spain digital nomad visa tax guide covers the full Beckham Law mechanics, employee vs freelancer treatment, Modelo 149 deadline, US double taxation rules, and what happens after the 6-year period ends. See the full Spain digital nomad visa tax guide for 2026.",
    },
  ],
};