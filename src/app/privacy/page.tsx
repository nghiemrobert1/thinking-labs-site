/**
 * DRAFT: Privacy Policy pending review by Robert and Titan (regulatory). Not legal advice.
 * Do not promote to production until both have approved the wording.
 */
import type { Metadata } from "next";
import { COMPANY_ADDRESS, COMPANY_CONTACT_EMAIL, COMPANY_LEGAL_NAME } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Thinking Labs website handles information. We don't sell personal or health data, and the site uses no ad or tracking pixels.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="wrap page-hero">
        <div className="label">Privacy Policy</div>
        <h1>Privacy Policy</h1>
        <p className="lead">Your data stays yours. We don&rsquo;t sell personal or health data. This page explains, in plain English, what this website collects and how we handle it.</p>
      </div>
      <section className="sec"><div className="wrap prose">
        <h2>Who we are</h2>
        <p>This website, thinkinglabsinc.com, is run by {COMPANY_LEGAL_NAME}, {COMPANY_ADDRESS}. This policy covers this website only. Our software products used by clinics are covered by separate agreements with those clinics.</p>

        <h2>What we collect</h2>
        <p>This website has no forms for health information and no place to enter health data. The only personal information we receive is what you choose to send us by email, such as your name, email address, clinic and message, when you write to {COMPANY_CONTACT_EMAIL}.</p>
        <p>Like any website, our hosting provider automatically processes basic technical information needed to deliver pages and keep the site secure, such as your IP address, browser type and the pages requested.</p>

        <h2>How we use it</h2>
        <p>We use the emails you send to reply to you, arrange demos and follow up on your request. We use technical information only to run and protect the website.</p>

        <h2>We don&rsquo;t sell personal or health data</h2>
        <p>We do not sell, rent or trade personal or health data, and we do not share it with anyone for their own advertising or marketing.</p>

        <h2>No ad or tracking pixels</h2>
        <p>This website does not use advertising pixels or tracking tools such as Meta (Facebook) Pixel or Google Ads tags, and it does not use analytics services that resell data. We do not use cookies to track you across other websites.</p>

        <h2>Vendors we use</h2>
        <p>We use a small number of service providers to run our business: a website hosting provider and an email provider. They process information only to provide those services to us, and not for their own advertising.</p>

        <h2>How long we keep it</h2>
        <p>We keep emails for as long as needed to respond to you and run our business, then delete them when they are no longer needed.</p>

        <h2>Your choices</h2>
        <p>You can ask us what information we have about you, ask us to correct it or ask us to delete it. Email {COMPANY_CONTACT_EMAIL} and we will respond.</p>

        <h2>Contact us</h2>
        <address><p>{COMPANY_LEGAL_NAME}<br />{COMPANY_ADDRESS}<br /><a href={`mailto:${COMPANY_CONTACT_EMAIL}`}>{COMPANY_CONTACT_EMAIL}</a></p></address>

        <h2>Changes</h2>
        <p>If we change this policy, we will update this page and the date below.</p>
        <p>Last updated: October 13, 2026</p>
      </div></section>
    </>
  );
}
