// app/visa/[country]/CountryFaq.tsx — Server Component (no "use client")
import { FaqItem } from "@/app/lib/faqData";

export default function CountryFaq({ faqs, countryName }: { faqs: FaqItem[]; countryName: string }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-lg font-semibold text-white mb-1">
        Frequently asked questions
      </h2>
      <p className="text-sm text-zinc-500 mb-6">
        Common questions about the {countryName} digital nomad visa and tax rules.
      </p>

      <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-zinc-900 open:bg-zinc-900"
          >
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-zinc-800/60 transition-colors">
              <span className="text-sm font-medium text-zinc-200 leading-snug">
                {faq.q}
              </span>
              <span
                className="shrink-0 text-zinc-500 group-open:rotate-45 transition-transform duration-200 text-xl leading-none"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 pt-1">
              <p className="text-sm text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}