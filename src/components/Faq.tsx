import { JsonLd } from "@/components/JsonLd";

export type QA = { q: string; a: string };

export function Faq({ items, title = "Frequently asked questions" }: { items: QA[]; title?: string }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="label">FAQ</div>
        <h2>{title}</h2>
        <dl className="faq">
          {items.map((it) => (
            <div key={it.q}>
              <dt>{it.q}</dt>
              <dd>{it.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
    </section>
  );
}
