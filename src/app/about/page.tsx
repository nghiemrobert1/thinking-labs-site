import type { Metadata } from "next";
import Link from "next/link";
import { DarkBand } from "@/components/DarkBand";
import { InfoCard } from "@/components/InfoCard";
import { Logo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { TechBand } from "@/components/TechBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Thinking Labs, Inc. — manufacturer of educational CKD twin dashboards.",
};

export default function AboutPage() {
  return (
    <div className="tl-page-enter space-y-10">
      <PageHero
        title="About Thinking Labs"
        lead="Thinking Labs, Inc. manufactures educational cardio-kidney-metabolic twin dashboards. We keep claims modest and clinicians in charge."
      />

      <TechBand />

      <DarkBand eyebrow="Manufacturer" title="Thinking Labs, Inc.">
        <div className="mb-4 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Logo showWordmark={false} size="md" />
          <span className="text-sm font-semibold text-white">
            Twin dashboards · Educational framing
          </span>
        </div>
        <p>
          Thinking Labs builds software that helps people and care teams talk
          about chronic kidney disease and related cardio-metabolic context
          with clearer shared views. We are the manufacturer of the CKD Twin
          educational product line. Custom domain planning is in progress;
          this site ships on Vercel while that decision is open.
        </p>
      </DarkBand>

      <div className="grid gap-5 sm:grid-cols-2">
        <InfoCard title="Clinical advisors" accent="teal">
          Thinking Labs works with clinical advisors on clarity and safety
          framing. Advisor relationships do <em>not</em> mean Thinking Labs
          employs clinicians as manufacturer staff or practices medicine.
          Clinical care remains with each patient’s own licensed providers.
        </InfoCard>
        <InfoCard title="What we avoid" accent="violet">
          <ul className="list-disc space-y-2 pl-5">
            <li>Cure or outcome guarantees</li>
            <li>Implying FDA clearance we do not have</li>
            <li>
              Presenting advisory relationships as employment or clinical
              practice by the company
            </li>
          </ul>
        </InfoCard>
      </div>

      <p>
        <Link
          href="/contact"
          className="tl-press inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal/20 hover:bg-accent-dark"
        >
          Get in touch →
        </Link>
      </p>
    </div>
  );
}
