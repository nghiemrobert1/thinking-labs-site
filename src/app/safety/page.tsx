import type { Metadata } from "next";
import Link from "next/link";
import { Notice } from "@/components/Notice";
import { PageHero } from "@/components/PageHero";
import { TechBand } from "@/components/TechBand";

export const metadata: Metadata = {
  title: "Safety & compliance",
  description:
    "Educational intent, FDA/TEMPO path in plain words, and HIPAA/BAA when clinics enroll — Thinking Labs.",
};

export default function SafetyPage() {
  return (
    <div className="tl-page-enter space-y-10">
      <PageHero
        title="Safety & compliance"
        lead="Plain-language framing for where we are today—and what comes later when clinics enroll."
      />

      <TechBand />

<Notice>
        Current software is intended for <strong>education and demonstration</strong>.
        It is not FDA-cleared or approved as a medical device.
      </Notice>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">
          Educational intent
        </h2>
        <p className="text-muted leading-relaxed">
          CKD Twin and related Thinking Labs materials help patients and
          clinicians explore cardio-kidney-metabolic concepts together. They
          are not intended to diagnose, treat, cure, or prevent disease on their
          own. Licensed clinicians retain full responsibility for care.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">
          FDA / TEMPO path (plain words)
        </h2>
        <p className="text-muted leading-relaxed">
          We are <strong className="text-foreground">not claiming clearance
          today</strong>. Longer term, if product features move beyond
          educational demonstration, Thinking Labs expects to pursue an
          appropriate U.S. regulatory pathway—which may include early programs
          such as FDA’s TEMPO-related efforts for digital health innovation,
          followed by the clearance or authorization route that fits the final
          intended use. That work is future-facing. Nothing on this site
          implies present FDA clearance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">
          HIPAA & BAAs
        </h2>
        <p className="text-muted leading-relaxed">
          When clinics or health systems enroll for workflows that involve
          protected health information, Thinking Labs will put Business
          Associate Agreements (BAAs) and appropriate safeguards in place
          before those deployments. Public demos and marketing pages are not
          clinic enrollment.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-base font-semibold text-foreground">
          Short checklist
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>Educational / demonstrator framing</li>
          <li>Not a medical device (current)</li>
          <li>Not FDA-cleared (current)</li>
          <li>Doctor decides</li>
          <li>HIPAA/BAA when clinics enroll for PHI workflows</li>
        </ul>
      </section>

      <p>
        <Link
          href="/contact"
          className="text-sm font-semibold text-accent-dark hover:underline"
        >
          Questions? Contact us →
        </Link>
      </p>
    </div>
  );
}
