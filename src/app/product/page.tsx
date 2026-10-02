import type { Metadata } from "next";
import Link from "next/link";
import { DarkBand } from "@/components/DarkBand";
import { Notice } from "@/components/Notice";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { TechBand } from "@/components/TechBand";

export const metadata: Metadata = {
  title: "Product",
  description:
    "CKD Twin educational dual dashboards from Thinking Labs — patient and clinician views. Not a medical device.",
};

export default function ProductPage() {
  return (
    <div className="tl-page-enter space-y-10">
      <PageHero
        title="Product: CKD Twin"
        lead="Dual dashboards—patient and clinician—built as an educational trajectory demonstrator. Thinking Labs is the manufacturer."
      />

      <TechBand />

      <ProductVisual />

      <Notice>
        <strong>Not a medical device.</strong> Not cleared or approved by the
        FDA for diagnosis, treatment, or independent clinical decision-making.
        Outputs are educational. Your clinician decides.
      </Notice>

      <section>
        <p className="tl-eyebrow mb-3">Dual views</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="card-glow tl-lift overflow-hidden rounded-xl border border-border bg-card">
            <div className="h-1 w-full bg-gradient-to-r from-teal to-cyan" aria-hidden />
            <div className="p-6">
              <h2 className="tl-h2 text-lg font-semibold text-foreground">
                Patient dashboard
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A straightforward place to enter information and explore how
                lifestyle and lab context can relate to a kidney-related
                trajectory over time—presented as learning material, not a
                prescription.
              </p>
            </div>
          </article>
          <article className="card-glow tl-lift overflow-hidden rounded-xl border border-border bg-card">
            <div className="h-1 w-full bg-gradient-to-r from-violet to-violet/50" aria-hidden />
            <div className="p-6">
              <h2 className="tl-h2 text-lg font-semibold text-foreground">
                Clinician dashboard
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A companion view for the care team. Context and structure to
                support conversation—not automated orders, alerts that replace
                judgment, or outcome guarantees.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section>
        <p className="tl-eyebrow mb-3">Scope</p>
        <h2 className="tl-h2 text-xl font-semibold text-foreground">
          What this is — and is not
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-teal/25 bg-accent-soft/40 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Is
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                Educational / POC demonstrator for cardio-kidney-metabolic discussion
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                Dual views so patient and clinician can look at the same story
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                Doctor (or licensed clinician) decides all care
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-violet/25 bg-violet-soft/50 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-violet">
              Is not
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" aria-hidden />
                Diagnostic software
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" aria-hidden />
                A treatment or cure product
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" aria-hidden />
                A substitute for clinical judgment
              </li>
            </ul>
          </div>
        </div>
      </section>

      <DarkBand eyebrow="Optional" title="Live educational demo">
        <p>
          A public educational demo may be available separately. It carries the
          same non-device, non-diagnostic framing. Marketing site and demo app
          are separate.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://ckd-twin.vercel.app"
            className="tl-press inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:bg-slate-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open CKD Twin demo →
          </a>
          <Link
            href="/how-it-works"
            className="tl-press inline-flex rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
          >
            How it works
          </Link>
        </div>
      </DarkBand>
    </div>
  );
}
