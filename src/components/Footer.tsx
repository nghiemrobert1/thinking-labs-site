import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">Thinking Labs, Inc.</p>
          <p className="mt-1 max-w-md text-sm text-muted">
            Educational cardio-kidney-metabolic twin dashboards. Not a medical
            device. Not for diagnosis or treatment decisions alone.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/product" className="text-muted hover:text-accent-dark">
            Product
          </Link>
          <Link href="/safety" className="text-muted hover:text-accent-dark">
            Safety
          </Link>
          <Link href="/contact" className="text-muted hover:text-accent-dark">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} Thinking Labs, Inc. Educational /
          demonstrator software. Clinician judgment always governs care.
        </p>
      </div>
    </footer>
  );
}
