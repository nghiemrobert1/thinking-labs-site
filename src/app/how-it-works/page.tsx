import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Patient entry, clinician view, and a later validated AI path — educational framing from Thinking Labs.",
};

const steps = [
  {
    n: "1",
    title: "Patient entry",
    body: "The patient (or care partner) shares information in a clear interface designed for education—not for unsupervised medical advice.",
  },
  {
    n: "2",
    title: "Clinician view",
    body: "The clinician sees a structured companion dashboard. Conversation and decisions stay with the licensed care team.",
  },
  {
    n: "3",
    title: "Later: validated AI brain",
    body: "Over time we plan more rigorously validated modeling components. That work is separate from today’s educational demonstrator and will follow appropriate evaluation and regulatory steps. No outcome promises.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-10">
      <PageHero
        title="How it works"
        lead="A simple path from patient entry to clinician review—with any advanced AI validation coming later, on purpose."
      />

      <ol className="space-y-4">
        {steps.map((step) => (
          <li
            key={step.n}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 sm:p-6"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent-dark"
              aria-hidden
            >
              {step.n}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-base font-semibold text-foreground">
          What we do not claim
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We do not promise better labs, fewer hospitalizations, cured disease,
          or autonomous recommendations. The twin is a learning and
          communication aid. Clinical decisions remain with the clinician.
        </p>
      </section>

      <p className="flex flex-wrap gap-4 text-sm font-semibold">
        <Link href="/safety" className="text-accent-dark hover:underline">
          Safety & compliance →
        </Link>
        <Link href="/product" className="text-accent-dark hover:underline">
          Product overview →
        </Link>
      </p>
    </div>
  );
}
