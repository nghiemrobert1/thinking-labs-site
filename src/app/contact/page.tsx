import type { Metadata } from "next";
import { COMPANY_ADDRESS, COMPANY_CONTACT_EMAIL } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Thinking Labs about CKD Twin or Intake Twin. Email robert@thinkinglabsinc.com. 15 Marconi Ste A, Irvine, CA 92618.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="wrap page-hero">
        <div className="label">Contact</div>
        <h1>Contact Thinking Labs</h1>
        <p className="lead">For CKD Twin conversations with clinicians and research partners, Intake Twin demos, or general questions.</p>
      </div>
      <section className="sec"><div className="wrap cards" style={{ marginTop: 0 }}>
        <div className="card"><span className="status">EMAIL</span><h2 style={{ fontSize: 24 }}>Email us</h2>
          <p>To book an Intake Twin demo, include your clinic, your role, your EMR and roughly how many faxes you receive per day.</p>
          <a className="btn" href={`mailto:${COMPANY_CONTACT_EMAIL}?subject=Thinking%20Labs%20inquiry`}>{COMPANY_CONTACT_EMAIL}</a></div>
        <div className="card"><span className="status">ADDRESS</span><h2 style={{ fontSize: 24 }}>Irvine, California</h2>
          <address><p>Thinking Labs, Inc.<br />{COMPANY_ADDRESS}</p></address></div>
      </div></section>
    </>
  );
}
