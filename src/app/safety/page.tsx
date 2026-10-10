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
    "Intended use, regulatory status in plain words, and HIPAA/BAA when clinics enroll — Thinking Labs.",
};

const checklist = [
  "CKD Twin: not FDA cleared or approved",
  "Clinician-supervised monitoring and care coordination",
  "The treating clinician makes all care decisions",
  "Predictive features are not enabled",
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
        CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. Predictive features are not enabled.
      </Notice>

      <div className="grid gap-5 sm:grid-cols-3">
        <InfoCard title="Intended use" accent="teal">
          CKD Twin is not FDA cleared or approved. It supports clinician-supervised monitoring and care coordination; the treating clinician makes all care decisions. Predictive features are not enabled. CKD Twin does not diagnose, stage, or treat CKD on its own.
          Licensed clinicians retain full responsibility for care decisions.
        </InfoCard>
        <InfoCard title="Regulatory status" accent="violet">
          CKD Twin is not FDA cleared or approved. We are working with FDA on
          an appropriate regulatory pathway for clinician-supervised CKD
          monitoring software. Features beyond the current intended use,
          including predictive features, will not be enabled without the
          required validation and regulatory steps.
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
              className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100"
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
