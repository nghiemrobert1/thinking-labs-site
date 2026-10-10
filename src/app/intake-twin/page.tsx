import type { Metadata } from "next";
import Link from "next/link";
import { DarkBand } from "@/components/DarkBand";
import { InfoCard } from "@/components/InfoCard";
import { Notice } from "@/components/Notice";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Intake Twin",
  description:
    "Intake Twin by Thinking Labs: administrative workflow software for medical offices. Reads incoming faxes and scans, sorts documents, checks insurance eligibility, and files to DrChrono after staff confirm.",
  alternates: { canonical: "/intake-twin" },
  openGraph: {
    title: "Intake Twin — by Thinking Labs",
    description:
      "Administrative workflow software for medical offices. Care for patients, not paperwork.",
    url: "https://thinkinglabsinc.com/intake-twin",
    siteName: "Thinking Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intake Twin — by Thinking Labs",
    description:
      "Administrative workflow software for medical offices. Care for patients, not paperwork.",
  },
};

const steps = [
  {
    title: "Reads incoming faxes and scans",
    body: "Intake Twin reads the faxes and scanned documents that arrive at your office, so staff don’t have to retype them.",
  },
  {
    title: "Splits and sorts",
    body: "Multi-page packets are split by patient and sorted by document type: notes, labs, and imaging.",
  },
  {
    title: "Extracts demographics and insurance",
    body: "Name, date of birth, contact details, and insurance information are pulled into a form for staff to confirm.",
  },
  {
    title: "Checks insurance eligibility",
    body: "Coverage is checked against the payer so the front desk knows where things stand before the visit.",
  },
  {
    title: "Files to DrChrono after staff confirm",
    body: "Once staff confirm, documents are filed to the right patient chart in DrChrono. Nothing is filed without a person approving it.",
  },
  {
    title: "Sends signed notes back",
    body: "After staff review, signed notes are sent back to the referring provider’s office.",
  },
];

export default function IntakeTwinPage() {
  return (
    <div className="tl-page-enter space-y-10">
      <PageHero
        title="Intake Twin"
        lead="Care for patients, not paperwork. Intake Twin takes the incoming fax and scan pile off your front desk."
      />

      <Notice>
        Administrative workflow software for medical offices. Intake Twin is
        not a medical device and does not provide clinical decision support.
      </Notice>

      <section>
        <p className="tl-eyebrow mb-3">What it does</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <InfoCard key={s.title} title={s.title} accent="teal">
              {s.body}
            </InfoCard>
          ))}
        </div>
      </section>

      <DarkBand eyebrow="Staff stay in control" title="People confirm every step">
        <p>
          Intake Twin handles the paperwork. Your staff confirm what gets filed
          and what gets sent. It works with DrChrono.
        </p>
      </DarkBand>

      <p>
        <Link
          href="/contact"
          className="text-sm font-semibold text-accent-dark hover:underline"
        >
          Interested in Intake Twin? Contact us →
        </Link>
      </p>
    </div>
  );
}
