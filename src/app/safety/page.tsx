import type { Metadata } from "next";
import Link from "next/link";
import { RegStatus } from "@/components/Notice";
import { CKD_REGULATORY_STATUS } from "@/lib/company";

export const metadata: Metadata = {
  title: "Safety & regulatory",
  description: "CKD Twin regulatory status, intended use and human oversight, in plain words. Not FDA cleared; the treating clinician makes all care decisions.",
  alternates: { canonical: "/safety" },
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
    <>
      <div className="wrap page-hero">
        <div className="label">Safety &amp; regulatory</div>
        <h1>Safety &amp; regulatory</h1>
        <p className="lead">Plain-language framing for where we are today, and what comes later when clinics enroll.</p>
        <RegStatus />
      </div>
      <section className="sec"><div className="wrap">
        <div className="steps" style={{ marginTop: 0 }}>
          <div className="step"><div className="n">INTENDED USE</div><h2 style={{ fontSize: 20 }}>Intended use</h2><p>{CKD_REGULATORY_STATUS} CKD Twin does not diagnose, stage, or treat CKD on its own. Licensed clinicians retain full responsibility for care decisions.</p></div>
          <div className="step"><div className="n">REGULATORY STATUS</div><h2 style={{ fontSize: 20 }}>Regulatory status</h2><p>CKD Twin is not FDA cleared or approved. We are working with FDA on an appropriate regulatory pathway for clinician-supervised CKD monitoring software. Features beyond the current intended use, including predictive features, will not be enabled without the required validation and regulatory steps.</p></div>
          <div className="step"><div className="n">HIPAA &amp; BAAS</div><h2 style={{ fontSize: 20 }}>HIPAA &amp; BAAs</h2><p>When clinics or health systems enroll for workflows that involve protected health information, Thinking Labs will put Business Associate Agreements (BAAs) and appropriate safeguards in place before those deployments. Public demos and marketing pages are not clinic enrollment.</p></div>
        </div>
      </div></section>
      <section className="sec"><div className="wrap two">
        <div><div className="label">At a glance</div><h2>Safety checklist</h2><p className="lead">Intake Twin is administrative software, not a medical device. A person confirms every step before anything is filed.</p></div>
        <ul className="ticks">{checklist.map((c) => <li key={c}><b>{c}</b></li>)}</ul>
      </div></section>
      <section className="sec"><div className="wrap"><Link href="/contact">Questions? Contact us →</Link></div></section>
    </>
  );
}
