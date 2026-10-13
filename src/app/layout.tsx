import type { Metadata } from "next";
import { Courier_Prime, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  COMPANY_CITY, COMPANY_CONTACT_EMAIL, COMPANY_LEGAL_NAME, COMPANY_POSTAL,
  COMPANY_REGION, COMPANY_STREET, SITE_URL,
} from "@/lib/company";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const courier = Courier_Prime({ variable: "--font-courier", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CKD Twin by Thinking Labs | Clinician-supervised CKD monitoring dashboards",
    template: "%s | Thinking Labs",
  },
  description:
    "CKD Twin: shared views of kidney labs, blood pressure and vitals over time, for clinician-supervised monitoring. Not FDA cleared; the clinician decides.",
  applicationName: "Thinking Labs",
  authors: [{ name: COMPANY_LEGAL_NAME }],
  publisher: COMPANY_LEGAL_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Thinking Labs",
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    title: "CKD Twin by Thinking Labs",
    description: "Shared CKD readings over time, for patients and their care team, with the clinician in charge.",
    images: [{ url: "/brand/og-ckd.png", width: 1200, height: 630, alt: "CKD Twin by Thinking Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CKD Twin by Thinking Labs",
    description: "Shared CKD readings over time, for patients and their care team, with the clinician in charge.",
    images: ["/brand/og-ckd.png"],
  },
  robots: { index: true, follow: true },
};

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: COMPANY_CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_STREET,
    addressLocality: COMPANY_CITY,
    addressRegion: COMPANY_REGION,
    postalCode: COMPANY_POSTAL,
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${courier.variable}`}>
      <body>
        <a href="#main-content" className="skip">Skip to main content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <JsonLd data={org} />
      </body>
    </html>
  );
}
