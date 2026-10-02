import Link from "next/link";
import { Notice } from "@/components/Notice";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-wide text-accent-dark">
          Thinking Labs, Inc.
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Educational twin dashboards for cardio-kidney-metabolic care
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          We build clear patient and clinician views that help people explore
          CKD-related trajectories together—with the doctor deciding what
          happens next. Learning tools first. Not a device. Not a diagnosis.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/product"
            className="inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            See the product
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-slate-50"
          >
            How it works
          </Link>
        </div>
      </section>

      <Notice>
        Thinking Labs software is for education and demonstration. It is{" "}
        <strong>not</strong> FDA-cleared, <strong>not</strong> a medical
        device, and <strong>not</strong> a substitute for clinical judgment.
      </Notice>

      <section className="grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Patient view",
            body: "Simple entry and feedback so people can see how habits and labs might relate to a trajectory—always under clinician guidance.",
          },
          {
            title: "Clinician view",
            body: "A companion dashboard for the care team. Structured context, not automated orders. The clinician decides.",
          },
          {
            title: "Built for learning",
            body: "POC and educational framing today. Validated AI components and regulatory pathways come later, on purpose.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <h2 className="text-base font-semibold text-foreground">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {card.body}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">Our mission</h2>
        <p className="mt-3 max-w-3xl text-muted leading-relaxed">
          Chronic kidney disease and cardio-kidney-metabolic risk are hard to
          talk about with numbers alone. Thinking Labs manufactures educational
          twin dashboards that make those conversations clearer—without
          promising outcomes, cures, or autonomous care.
        </p>
        <p className="mt-4">
          <Link
            href="/about"
            className="text-sm font-semibold text-accent-dark hover:underline"
          >
            About Thinking Labs →
          </Link>
        </p>
      </section>
    </div>
  );
}
