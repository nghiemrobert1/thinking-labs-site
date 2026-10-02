import type { Metadata } from "next";
import { DarkBand } from "@/components/DarkBand";
import { Logo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { TechBand } from "@/components/TechBand";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Thinking Labs, Inc. — email placeholder and coming-soon form.",
};

export default function ContactPage() {
  return (
    <div className="tl-page-enter space-y-10">
      <PageHero
        title="Contact"
        lead="Reach Thinking Labs about the educational twin dashboards, clinic conversations, or general questions."
      />

      <TechBand />

      <DarkBand eyebrow="Preferred channel" title="Email us">
        <p className="mb-4 text-slate-300">
          Preferred for now. Replace with a dedicated inbox when the domain is
          finalized.
        </p>
        <a
          href="mailto:hello@thinkinglabs.com?subject=Thinking%20Labs%20inquiry"
          className="tl-press inline-flex items-center gap-3 rounded-xl border border-teal/30 bg-teal/10 px-4 py-3 text-base font-semibold text-teal-50 transition hover:border-teal/50 hover:bg-teal/20"
        >
          <Logo showWordmark={false} size="sm" />
          hello@thinkinglabs.com
        </a>
        <p className="mt-3 text-xs text-slate-400">
          Placeholder address while domain ownership is confirmed. If mail
          bounces, use your existing Thinking Labs contact channel.
        </p>
      </DarkBand>

      <section className="card-glow overflow-hidden rounded-2xl border border-dashed border-border bg-card">
        <div className="card-accent-bar h-1 w-full" aria-hidden />
        <div className="p-6 sm:p-8">
          <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
            Coming soon
          </div>
          <h2 className="mt-2 text-lg font-semibold text-foreground">
            Contact form — placeholder only
          </h2>
          <p className="mt-2 text-sm text-muted">
            A working form is not live yet. Fields below are a visual placeholder
            only and <strong>do not submit</strong>.
          </p>

          <div className="mt-6 space-y-4" aria-disabled="true">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                disabled
                placeholder="Coming soon"
                className="mt-1 w-full rounded-lg border border-border bg-slate-50 px-3 py-2.5 text-sm text-muted disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                disabled
                placeholder="Coming soon"
                className="mt-1 w-full rounded-lg border border-border bg-slate-50 px-3 py-2.5 text-sm text-muted disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                disabled
                placeholder="Form submissions are not enabled yet. Please use email."
                className="mt-1 w-full rounded-lg border border-border bg-slate-50 px-3 py-2.5 text-sm text-muted disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>
            <button
              type="button"
              disabled
              className="rounded-lg bg-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-500 disabled:cursor-not-allowed"
            >
              Submit (coming soon)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
