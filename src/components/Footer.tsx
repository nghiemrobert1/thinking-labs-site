import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  COMPANY_LEGAL_NAME,
  COMPANY_MAILING_ADDRESSES,
} from "@/lib/company";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "CKD Twin" },
      { href: "/intake-twin", label: "Intake Twin" },
      { href: "/how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/safety", label: "Safety & compliance" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="h-1 w-full bg-gradient-to-r from-teal via-violet to-cyan" aria-hidden />
      <div className="relative overflow-hidden bg-navy text-slate-200">
        <div className="tl-animate-orb pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-teal/15 blur-3xl" />
        <div className="tl-animate-orb-alt pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo reversed size="md" />
            <p className="mt-4 text-base font-semibold text-white">
              Care for patients, not paperwork.
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Products: CKD Twin · Intake Twin — by Thinking Labs
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              CKD Twin supports clinician-supervised monitoring and care coordination;
              the treating clinician makes all care decisions. See Safety &amp;
              compliance for regulatory status.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {COMPANY_LEGAL_NAME}
            </p>
            <address className="mt-3 space-y-1 text-xs not-italic leading-relaxed text-slate-400">
              {COMPANY_MAILING_ADDRESSES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-200/70">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-300 transition hover:text-teal"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              © {new Date().getFullYear()} {COMPANY_LEGAL_NAME}. Healthcare software.
            </p>
            <p>Clinician judgment always governs care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
