import type { Metadata } from "next";
import Link from "next/link";
import { RegStatus } from "@/components/Notice";

export const metadata: Metadata = {
  title: "How CKD Twin works",
  description: "How CKD Twin works: patients enter readings, the care team reviews measured values over time, and the clinician decides. Not FDA cleared.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  { n: "01", t: "Patient entry", b: "Patients enter readings such as weight and lab results, or upload past readings from a CSV file. An entry assistant helps collect and confirm entries; it does not give clinical advice." },
  { n: "02", t: "Clinician review", b: "The care team sees a roster and each patient's measured eGFR readings and vitals over time, with notes, history and CSV export. The platform does not issue orders." },
  { n: "03", t: "The clinician decides", b: "Conversation and care decisions stay with the licensed care team. Nothing is projected forward, and stage categories are shown to the clinician to confirm." },
];

export default function HowItWorksPage() {
  return (
    <>
      <div className="wrap page-hero">
        <div className="label">How it works</div>
        <h1>From patient entry to clinician review.</h1>
        <p className="lead">A shared view of a patient&rsquo;s own recorded data; no simulation or prediction.</p>
        <RegStatus />
      </div>
      <section className="sec"><div className="wrap">
        <div className="steps" style={{ marginTop: 0 }}>
          {steps.map((s) => (
            <div className="step" key={s.n}><div className="n">{s.n}</div><h2 style={{ fontSize: 20 }}>{s.t}</h2><p>{s.b}</p></div>
          ))}
        </div>
      </div></section>
      <section className="sec"><div className="wrap two">
        <div><div className="label">Boundaries</div><h2>Supports conversations; the clinician decides.</h2>
          <p className="lead">CKD Twin is a communication aid for patients and their care team. Clinical decisions remain with the clinician.</p></div>
        <div style={{ paddingTop: 40 }} className="cta"><Link className="btn" href="/safety">Safety &amp; regulatory</Link><Link className="btn2" href="/contact">Contact</Link></div>
      </div></section>
    </>
  );
}
