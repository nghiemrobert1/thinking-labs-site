import type { Metadata } from "next";
import Link from "next/link";
import { Notice } from "@/components/Notice";
import { PageHero } from "@/components/PageHero";
import { TechBand } from "@/components/TechBand";

export const metadata: Metadata = {
  title: "Product",
  description:
    "CKD Twin educational dual dashboards from Thinking Labs — patient and clinician views. Not a medical device.",
};

export default function ProductPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Product: CKD Twin"
        lead="Dual dashboards—patient and clinician—built as an educational trajectory demonstrator. Thinking Labs is the manufacturer."
      />

      <TechBand />

      <Notice>
        <strong>Not a medical device.</strong> Not cleared or approved by the
        FDA for diagnosis, treatment, or independent clinical decision-making.
        Outputs are educational. Your clinician decides.
      </Notice>

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="card-glow overflow-hidden rounded-xl border border-border bg-card">
          <div className="h-1 w-full bg-gradient-to-r from-teal to-cyan" aria-hidden />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground">
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
        <article className="card-glow overflow-hidden rounded-xl border border-border bg-card">
          <div className="h-1 w-full bg-gradient-to-r from-violet to-violet/50" aria-hidden />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Clinician dashboard
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A companion view for the care team. Context and structure to
              support conversation—not automated orders, alerts that replace
              judgment, or outcome guarantees.
            </p>
          </div>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          What this is — and is not
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>Educational / POC demonstrator for cardio-kidney-metabolic discussion</li>
          <li>Dual views so patient and clinician can look at the same story</li>
          <li>
            <strong className="text-foreground">Not</strong> diagnostic software
          </li>
          <li>
            <strong className="text-foreground">Not</strong> a treatment or cure
            product
          </li>
          <li>Doctor (or licensed clinician) decides all care</li>
        </ul>
      </section>

      <section className="rounded-xl border border-dashed border-teal/30 bg-gradient-to-br from-accent-soft/40 to-violet-soft/30 p-6">
        <h2 className="text-base font-semibold text-foreground">
          Optional live demo
        </h2>
        <p className="mt-2 text-sm text-muted">
          A public educational demo may be available separately. It carries the
          same non-device, non-diagnostic framing.
        </p>
        <p className="mt-4">
          <a
            href="https://ckd-twin.vercel.app"
            className="text-sm font-semibold text-accent-dark hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open CKD Twin demo →
          </a>
        </p>
        <p className="mt-2 text-xs text-muted">
          External demo link. Thinking Labs marketing site and the demo app are
          separate.
        </p>
      </section>

      <p>
        <Link
          href="/how-it-works"
          className="text-sm font-semibold text-accent-dark hover:underline"
        >
          How it works →
        </Link>
      </p>
    </div>
  );
}
