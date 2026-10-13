import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/company";

const desc = "Intake Twin reads faxed referrals, checks insurance and prepares chart-ready intake. Your staff confirms every item before it is filed.";

export const metadata: Metadata = {
  title: "Intake Twin | Faxed referrals to chart-ready intake",
  description: desc,
  alternates: { canonical: "/intake-twin" },
  openGraph: { title: "Intake Twin by Thinking Labs", description: desc, url: `${SITE_URL}/intake-twin`, images: [{ url: "/brand/og-intake.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Intake Twin by Thinking Labs", description: desc, images: ["/brand/og-intake.png"] },
};

const faq = [
  { q: "What is Intake Twin?", a: "Intake Twin is administrative software from Thinking Labs. It reads incoming faxes and scans, sorts them by patient and document type, checks insurance, and prepares them for your staff to confirm and file to the chart." },
  { q: "Does Intake Twin work with DrChrono?", a: "DrChrono is the first EMR Intake Twin is being built to file into. Contact us about other EMRs." },
  { q: "Does anything get filed automatically?", a: "No. Staff confirm the patient match and document split before upload, and Intake Twin never creates a chart on its own." },
  { q: "Is Intake Twin a medical device?", a: "No. Intake Twin is administrative software, not a medical device." },
];

export default function IntakeTwinPage() {
  return (
    <>
      <div className="wrap hero">
        <div className="label">Intake Twin · by Thinking Labs</div>
        <h1>Faxes and referrals in. Chart-ready documents out.</h1>
        <p className="sub">For primary care practices and specialist groups. Incoming faxes and scans (consult notes, discharge summaries, results, referrals) are read, sorted by patient and document type, and checked against insurance. Your team confirms each one, then files it to the chart.</p>
        <div className="cta"><Link className="btn" href="/contact">Book a demo</Link></div>
        <div className="slogan">More patient care. Less paperwork.</div>
      </div>

      <section className="sec"><div className="wrap">
        <div className="label">How it works</div><h2>Read. Check. File.</h2>
        <p className="lead">The fax still arrives. The retyping, sorting and chasing don&rsquo;t have to.</p>
        <div className="steps">
          <div className="step"><div className="n">01</div><h3>Read</h3><p>Each fax is split into notes, labs, imaging and orders, and the patient, birth date and insurance are pulled out.</p></div>
          <div className="step"><div className="n">02</div><h3>Check</h3><p>Insurance is verified, and anything missing or that doesn&rsquo;t match is flagged for your staff.</p></div>
          <div className="step"><div className="n">03</div><h3>File</h3><p>You confirm the chart and the split, then upload to the EMR. Nothing is filed without a person.</p></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap two">
        <div><div className="label">Safety</div><h2>A person confirms every step.</h2><p className="lead">Intake Twin prepares the work. Your staff makes the call.</p><p style={{ color: "var(--graphite)", fontSize: 15 }}>Intake Twin is administrative software, not a medical device.</p></div>
        <ul className="ticks">
          <li><b>Nothing filed without a person</b><span>Staff confirm the patient match and document split before upload.</span></li>
          <li><b>New charts need approval</b><span>Intake Twin never creates a chart on its own.</span></li>
          <li><b>Flags, not guesses</b><span>Missing or mismatched insurance is flagged for review.</span></li>
        </ul>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="label">Who it&rsquo;s for</div><h2>Built for the practices with the most paperwork.</h2>
        <div className="cards">
          <div className="card"><h3 style={{ marginTop: 0 }}>Primary care</h3><ul className="ticks">
            <li><b>Documents coming back</b><span>Specialist consult notes and hospital discharge summaries, matched to the right patient.</span></li>
            <li><b>Results and requests</b><span>Lab and imaging results and records requests, sorted by document type.</span></li>
            <li><b>Prior auth paperwork</b><span>Prior auth forms sorted to the right patient, with missing items flagged for staff.</span></li></ul></div>
          <div className="card"><h3 style={{ marginTop: 0 }}>Specialist groups</h3><ul className="ticks">
            <li><b>New referrals in</b><span>Referral packets split into notes, labs, imaging and orders.</span></li>
            <li><b>Insurance checks</b><span>Coverage is checked, and missing or mismatched details are flagged.</span></li>
            <li><b>Ready to schedule</b><span>Each referral is prepared for staff to confirm and file to the chart.</span></li></ul></div>
        </div>
      </div></section>

      <Faq items={faq} />

      <section className="sec" style={{ border: 0 }}><div className="wrap">
        <div className="final"><div><div className="label">Book a demo</div><h2>See Intake Twin on your own fax workflow.</h2></div><Link className="btn" href="/contact">Book a demo</Link></div>
        <p style={{ marginTop: 22 }}>Looking for kidney monitoring? <Link href="/">See CKD Twin →</Link></p>
      </div></section>

      <JsonLd data={{
        "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Intake Twin",
        applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${SITE_URL}/intake-twin`, description: desc,
        publisher: { "@type": "Organization", name: "Thinking Labs, Inc.", url: SITE_URL },
      }} />
    </>
  );
}
