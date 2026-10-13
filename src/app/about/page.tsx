import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_ADDRESS, COMPANY_CONTACT_EMAIL, COMPANY_LEGAL_NAME } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: "Thinking Labs, Inc. is a healthcare software company in Irvine, California that develops CKD Twin and Intake Twin.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="wrap page-hero">
        <div className="label">About</div>
        <h1>About Thinking Labs</h1>
        <p className="lead">Thinking Labs, Inc. develops healthcare software: CKD Twin for clinician-supervised CKD monitoring, and Intake Twin for fax and referral intake. We keep claims modest and clinicians in charge.</p>
      </div>
      <section className="sec"><div className="wrap two">
        <div className="prose">
          <div className="label">The company</div>
          <h2>{COMPANY_LEGAL_NAME}</h2>
          <p>Thinking Labs builds software that helps patients and care teams look at chronic kidney disease readings together with clearer shared views, and helps practices spend less time on paperwork.</p>
          <address><p>{COMPANY_ADDRESS}<br /><a href={`mailto:${COMPANY_CONTACT_EMAIL}`}>{COMPANY_CONTACT_EMAIL}</a></p></address>
        </div>
        <ul className="ticks">
          <li><b>Clinical advisors</b><span>Thinking Labs works with clinical advisors on clarity and safety framing. Advisor relationships do not mean Thinking Labs employs clinicians or practices medicine. Clinical care remains with each patient&rsquo;s own licensed providers.</span></li>
          <li><b>How we describe our work</b><span>Plainly: CKD Twin supports conversations and care coordination, and the clinician decides. We state regulatory status as it is.</span></li>
        </ul>
      </div></section>
      <section className="sec"><div className="wrap"><Link className="btn" href="/contact">Get in touch</Link></div></section>
    </>
  );
}
