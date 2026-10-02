import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="h-1 w-full bg-gradient-to-r from-teal via-violet to-cyan" aria-hidden />
      <div className="bg-navy text-slate-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo className="[&_span]:text-white" size="sm" />
            <p className="mt-3 max-w-md text-sm text-slate-300">
              Educational cardio-kidney-metabolic twin dashboards. Not a medical
              device. Not for diagnosis or treatment decisions alone.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-400">
              Thinking Labs, Inc.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/product" className="text-slate-300 transition hover:text-teal">
              Product
            </Link>
            <Link href="/safety" className="text-slate-300 transition hover:text-teal">
              Safety
            </Link>
            <Link href="/contact" className="text-slate-300 transition hover:text-teal">
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-400 sm:px-6">
            © {new Date().getFullYear()} Thinking Labs, Inc. Educational /
            demonstrator software. Clinician judgment always governs care.
          </p>
        </div>
      </div>
    </footer>
  );
}
