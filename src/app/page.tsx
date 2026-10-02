import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { DarkBand } from "@/components/DarkBand";
import { Notice } from "@/components/Notice";

export default function HomePage() {
  return (
    <div className="tl-page-enter space-y-12">
      <section className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        {/* On mobile: copy first, then compact hero */}
        <div className="order-1 space-y-5 sm:space-y-6">
          <p className="tl-animate-fade-up inline-flex items-center gap-2 rounded-full border border-teal/30 bg-accent-soft/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
            Thinking Labs, Inc.
          </p>
          <h1 className="tl-animate-fade-up-delay max-w-xl text-[1.85rem] font-semibold leading-tight tracking-tight text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
            Educational twin dashboards for cardio-kidney-metabolic care
          </h1>
          <p className="tl-animate-fade-up-delay-2 max-w-xl text-base text-muted sm:text-lg">
            We build clear patient and clinician views that help people explore
            CKD-related trajectories together—with the doctor deciding what
            happens next. Learning tools first. Not a device. Not a diagnosis.
          </p>
          <div className="tl-animate-fade-up-delay-2 flex flex-wrap gap-3">
            <Link
              href="/product"
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal/20 transition hover:bg-accent-dark hover:shadow-lg hover:shadow-teal/25"
            >
              See the product
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-violet/40 hover:bg-violet-soft/50"
            >
              How it works
            </Link>
          </div>
        </div>
        <div className="order-2 tl-animate-fade-up-delay">
          <HeroVisual />
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
            tint: "from-teal/80 to-cyan/50",
            stagger: "tl-stagger-1",
          },
          {
            title: "Clinician view",
            body: "A companion dashboard for the care team. Structured context, not automated orders. The clinician decides.",
            tint: "from-violet/80 to-violet/40",
            stagger: "tl-stagger-2",
          },
          {
            title: "Built for learning",
            body: "POC and educational framing today. Validated AI components and regulatory pathways come later, on purpose.",
            tint: "from-navy-mid/80 to-teal/40",
            stagger: "tl-stagger-3",
          },
        ].map((card) => (
          <article
            key={card.title}
            className={`card-glow group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-teal/30 ${card.stagger}`}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${card.tint}`} aria-hidden />
            <div className="p-5">
              <h2 className="text-base font-semibold text-foreground">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {card.body}
              </p>
            </div>
          </article>
        ))}
      </section>

      <DarkBand eyebrow="Mission" title="Clearer conversations, clinicians in charge">
        <p>
          Chronic kidney disease and cardio-kidney-metabolic risk are hard to
          talk about with numbers alone. Thinking Labs manufactures educational
          twin dashboards that make those conversations clearer—without
          promising outcomes, cures, or autonomous care.
        </p>
        <p className="mt-4">
          <Link
            href="/about"
            className="text-sm font-semibold text-teal-200 hover:text-white hover:underline"
          >
            About Thinking Labs →
          </Link>
        </p>
      </DarkBand>
    </div>
  );
}
