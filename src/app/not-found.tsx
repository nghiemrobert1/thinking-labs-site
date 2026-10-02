import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="tl-page-enter mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <Logo size="lg" />
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent-dark">
        404
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        That URL isn’t part of the Thinking Labs marketing site. Educational
        twin dashboards live on the pages below—not a medical device.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="tl-press inline-flex rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal/20 hover:bg-accent-dark"
        >
          Back home
        </Link>
        <Link
          href="/product"
          className="tl-press inline-flex rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:border-teal/40"
        >
          Product
        </Link>
        <Link
          href="/contact"
          className="text-sm font-semibold text-accent-dark hover:underline"
        >
          Contact →
        </Link>
      </div>
    </div>
  );
}
