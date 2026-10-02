import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://thinking-labs-site.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Thinking Labs — Educational CKD twin dashboards",
    template: "%s · Thinking Labs",
  },
  description:
    "Thinking Labs, Inc. builds educational cardio-kidney-metabolic twin dashboards for patients and clinicians. Not a medical device. Doctor decides.",
  metadataBase: new URL(siteUrl),
  applicationName: "Thinking Labs",
  authors: [{ name: "Thinking Labs, Inc." }],
  creator: "Thinking Labs, Inc.",
  publisher: "Thinking Labs, Inc.",
  keywords: [
    "Thinking Labs",
    "CKD Twin",
    "educational dashboard",
    "cardio-kidney-metabolic",
    "not a medical device",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thinking Labs — Educational CKD twin dashboards",
    description:
      "Educational patient + clinician twin dashboards. Not a medical device. Doctor decides.",
    url: siteUrl,
    siteName: "Thinking Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinking Labs — Educational CKD twin dashboards",
    description:
      "Educational patient + clinician twin dashboards. Not a medical device. Doctor decides.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <a href="#main-content" className="tl-skip-link">
          Skip to main content
        </a>
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-14"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
