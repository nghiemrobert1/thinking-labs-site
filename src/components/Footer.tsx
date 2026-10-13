import Link from "next/link";
import { Logo } from "@/components/Logo";
import { COMPANY_ADDRESS, COMPANY_CONTACT_EMAIL, COMPANY_LEGAL_NAME } from "@/lib/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <Logo height={26} />
          <p>
            <b>{COMPANY_LEGAL_NAME}</b>
            <br />
            <span>{COMPANY_ADDRESS}</span>
            <br />
            <a className="link" href={`mailto:${COMPANY_CONTACT_EMAIL}`}>{COMPANY_CONTACT_EMAIL}</a>
          </p>
          <p>© {new Date().getFullYear()} {COMPANY_LEGAL_NAME} Clinician judgment always governs care.</p>
        </div>
        <div>
          <b>Products</b>
          <Link href="/">CKD Twin</Link>
          <Link href="/intake-twin">Intake Twin</Link>
          <Link href="/how-it-works">How it works</Link>
        </div>
        <div>
          <b>Company</b>
          <Link href="/about">About</Link>
          <Link href="/safety">Safety &amp; regulatory</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
