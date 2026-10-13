import Link from "next/link";
import { Faq } from "@/components/Faq";
import { DataLine } from "@/components/DataLine";
import { JsonLd } from "@/components/JsonLd";
import { RegStatus } from "@/components/Notice";
import { CKD_REGULATORY_STATUS, SITE_URL } from "@/lib/company";

const faq = [
  { q: "What is CKD Twin?", a: "CKD Twin is clinician-supervised monitoring software from Thinking Labs. Patients enter readings and lab values; the care team reviews past readings over time on a companion dashboard and decides what happens next." },
  { q: "Is CKD Twin FDA cleared?", a: "No. " + CKD_REGULATORY_STATUS },
  { q: "What does the CKD Twin trend show?", a: "Measured values only. eGFR is plotted as recorded, with a simple slope across past readings, and nothing is projected forward. KDIGO stage categories are shown to the clinician to confirm and are not a diagnosis." },
  { q: "Who is Thinking Labs?", a: "Thinking Labs, Inc. is a healthcare software company in Irvine, California. It develops CKD Twin and Intake Twin." },
];

export default function HomePage() {
  return (
    <>
      <div className="wrap hero">
        <div className="label">CKD Twin · by Thinking Labs</div>
        <h1>Shared CKD readings over time, for patients and their care team, with the clinician in charge.</h1>
        <p className="sub">CKD Twin is a clinician-supervised monitoring platform. Patients enter readings and lab values; the care team reviews past readings over time on a companion dashboard and decides what happens next.</p>
        <div className="cta"><Link className="btn" href="/contact">Contact Thinking Labs</Link><Link className="btn2" href="/how-it-works">How it works</Link></div>
        <RegStatus />
      </div>

      <section className="sec"><div className="wrap">
        <div className="label">What CKD Twin does today</div>
        <h2>Two views of the same record.</h2>
        <div className="cards">
          <div className="card"><span className="status">PATIENT VIEW</span><h3>Simple entry, phone-friendly</h3><p>Patients enter readings such as weight and lab results, or upload past readings from a CSV file. An entry assistant helps collect and confirm entries; it does not give clinical advice.</p></div>
          <div className="card"><span className="status">CLINICIAN VIEW</span><h3>Roster and patient detail</h3><p>A patient roster shows who has logged recently. Each patient page shows vitals and measured eGFR readings from the past 12 months, with notes, history and CSV export. Structured information for the care team; the platform does not issue orders.</p></div>
        </div>
        <div className="steps">
          <div className="step"><div className="n">TRENDS</div><h3>Measured values only</h3><p>eGFR is plotted as recorded, with a simple slope across past readings. Nothing is projected forward.</p></div>
          <div className="step"><div className="n">STAGING</div><h3>CKD stage category</h3><p>KDIGO categories (G1–G5) calculated from the latest labs are shown to the clinician to confirm. They are not a diagnosis.</p></div>
          {/* PENDING: "validated" needs Robert's confirmation of the cuff's validation before production. */}
          <div className="step"><div className="n">COMING SOON</div><h3>Connected home blood pressure cuff</h3><p>In development and not active. When available, readings from a validated cellular home blood pressure cuff will arrive in the patient&rsquo;s record automatically, so the care team can review measured values without manual entry.</p></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap two">
        <div>
          <div className="label">Safety &amp; regulatory</div>
          <h2>Intended to support, not replace, clinical judgment.</h2>
          <p className="lead">CKD Twin is designed for clinician-supervised monitoring and care coordination. Every screen carries the same reminder: the doctor decides.</p>
          <Link href="/safety">Read safety &amp; regulatory details →</Link>
        </div>
        <ul className="ticks">
          <li><b>Intended use</b><span>Shared views that support monitoring and care coordination under a treating clinician.</span></li>
          <li><b>Human oversight</b><span>The clinician reviews past readings and makes all care decisions. The platform does not issue orders.</span></li>
          <li><b>Predictive features are not enabled</b><span>Any future features follow validation and regulatory steps.</span></li>
          <li><b>Data in demonstrations</b><span>Current demonstrations use synthetic (made-up) patient data only.</span></li>
        </ul>
      </div></section>

      <section className="sec"><div className="wrap two">
        <div><div className="label">Contact</div><h2>For clinicians &amp; research partners</h2><p className="lead">We welcome conversations with nephrology clinicians and research partners about how CKD Twin should be evaluated.</p></div>
        <div style={{ paddingTop: 40 }}><Link className="btn" href="/contact">Contact Thinking Labs</Link></div>
      </div></section>

      <Faq items={faq} />

      <section className="sec"><div className="wrap">
        <div className="label">Also from Thinking Labs</div>
        <div className="card also">
          <div><h3 style={{ marginTop: 0 }}>Intake Twin</h3><p style={{ margin: 0 }}>Faxed referrals in, chart-ready intake out, confirmed by your staff. More patient care. Less paperwork.</p></div>
          <Link href="/intake-twin">Visit Intake Twin →</Link>
        </div>
      </div></section>

      <DataLine />

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "CKD Twin",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description: "Clinician-supervised CKD monitoring dashboards for patients and care teams. " + CKD_REGULATORY_STATUS,
        publisher: { "@type": "Organization", name: "Thinking Labs, Inc.", url: SITE_URL },
      }} />
    </>
  );
}
