import type { Faq } from "@/lib/seo";

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="font-display mb-6 text-3xl font-semibold tracking-tight">
        Quick questions, straight answers
      </h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border-2 border-ink bg-paper open:hard-shadow"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold marker:hidden">
              <span className="mr-2 font-mono" style={{ color: "var(--city)" }}>
                Q
              </span>
              {f.q}
            </summary>
            <p className="border-t border-ink/10 px-5 py-4 leading-relaxed text-ink/85">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
