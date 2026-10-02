import type { Metadata } from "next";
import Link from "next/link";
import { DarkBand } from "@/components/DarkBand";
import { InfoCard } from "@/components/InfoCard";
import { Notice } from "@/components/Notice";
import { PageHero } from "@/components/PageHero";
import { TechBand } from "@/components/TechBand";

export const metadata: Metadata = {
  title: "Safety & compliance",
  description:
    "Educational intent, FDA/TEMPO path in plain words, and HIPAA/BAA when clinics enroll — Thinking Labs.",
};

const checklist = [
  "Educational / demonstrator framing",
  "Not a medical device (current)",
  "Not FDA-cleared (current)",
  "Doctor decides",
  "HIPAA/BAA when clinics enroll for PHI workflows",
];

export default function SafetyPage() {
  return (
    <div className="tl-page-enter space-y-10">
      <PageHero
        title="Safety & compliance"
        lead="Plain-language framing for where we are today—and what comes later when clinics enroll."
      />

      <TechBand />

      <Notice>
        Current software is intended for{" "}
        <strong>education and demonstration</strong>. It is not FDA-cleared or
        approved as a medical device.
      </Notice>

      <div className="grid gap-5 sm:grid-cols-3">
        <InfoCard title="Educational intent" accent="teal">
          CKD Twin and related Thinking Labs materials help patients and
          clinicians explore cardio-kidney-metabolic concepts together. They
          are not intended to diagnose, treat, cure, or prevent disease on their
          own. Licensed clinicians retain full responsibility for care.
        </InfoCard>
        <InfoCard title="FDA / TEMPO path" accent="violet">
          We are <strong className="text-foreground">not claiming clearance
          today</strong>. Longer term, if product features move beyond
          educational demonstration, Thinking Labs expects to pursue an
          appropriate U.S. regulatory pathway—which may include early programs
          such as FDA’s TEMPO-related efforts for digital health innovation,
          followed by the clearance or authorization route that fits the final
          intended use. That work is future-facing. Nothing on this site
          implies present FDA clearance.
        </InfoCard>
        <InfoCard title="HIPAA & BAAs" accent="navy">
          When clinics or health systems enroll for workflows that involve
          protected health information, Thinking Labs will put Business
          Associate Agreements (BAAs) and appropriate safeguards in place
          before those deployments. Public demos and marketing pages are not
          clinic enrollment.
        </InfoCard>
      </div>

      <DarkBand eyebrow="At a glance" title="Safety checklist">
        <ul className="mt-1 grid gap-2 sm:grid-cols-2">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </DarkBand>

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
