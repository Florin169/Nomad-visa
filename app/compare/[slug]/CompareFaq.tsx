import type { CompareFaq } from "@/app/lib/faqData";

export default function CompareFaq({
  faqs,
  countryAName,
  countryBName,
}: {
  faqs: CompareFaq[];
  countryAName: string;
  countryBName: string;
}) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 pb-16"
      aria-labelledby="compare-faq-heading"
    >
      <h2
        id="compare-faq-heading"
        className="text-lg font-semibold text-white mb-1"
      >
        {countryAName} vs {countryBName} — common questions
      </h2>
      <p className="text-sm text-zinc-500 mb-8">
        Straight answers to the most-searched comparison questions.
      </p>

      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="border-l-2 border-zinc-800 pl-5">
            <h3 className="text-sm font-semibold text-zinc-200 mb-2 leading-snug">
              {faq.q}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
