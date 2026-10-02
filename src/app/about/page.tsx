import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Thinking Labs, Inc. — manufacturer of educational CKD twin dashboards.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="About Thinking Labs"
        lead="Thinking Labs, Inc. manufactures educational cardio-kidney-metabolic twin dashboards. We keep claims modest and clinicians in charge."
      />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">The company</h2>
        <p className="text-muted leading-relaxed">
          Thinking Labs builds software that helps people and care teams talk
          about chronic kidney disease and related cardio-metabolic context
          with clearer shared views. We are the manufacturer of the CKD Twin
          educational product line. Custom domain planning is in progress;
          this site ships on Vercel while that decision is open.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Clinical advisors
        </h2>
        <p className="mt-3 text-muted leading-relaxed">
          Thinking Labs works with clinical advisors on clarity and safety
          framing. Advisor relationships do <em>not</em> mean Thinking Labs
          employs clinicians as manufacturer staff or practices medicine.
          Clinical care remains with each patient’s own licensed providers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">What we avoid</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>Cure or outcome guarantees</li>
          <li>Implying FDA clearance we do not have</li>
          <li>Presenting advisory relationships as employment or clinical practice by the company</li>
        </ul>
      </section>

      <p>
        <Link
          href="/contact"
          className="text-sm font-semibold text-accent-dark hover:underline"
        >
          Get in touch →
        </Link>
      </p>
    </div>
  );
}
