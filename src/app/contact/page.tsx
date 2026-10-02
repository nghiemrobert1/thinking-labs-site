import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

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

      <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Email</h2>
        <p className="mt-2 text-sm text-muted">
          Preferred for now. Replace with a dedicated inbox when the domain is
          finalized.
        </p>
        <p className="mt-4">
          <a
            href="mailto:hello@thinkinglabs.com?subject=Thinking%20Labs%20inquiry"
            className="text-base font-semibold text-accent-dark hover:underline"
          >
            hello@thinkinglabs.com
          </a>
        </p>
        <p className="mt-2 text-xs text-muted">
          Placeholder address while domain ownership is confirmed. If mail
          bounces, use your existing Thinking Labs contact channel.
        </p>
      </section>

      <section className="rounded-xl border border-dashed border-border bg-slate-50 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">
          Contact form — coming soon
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
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-muted disabled:cursor-not-allowed disabled:opacity-70"
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
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-muted disabled:cursor-not-allowed disabled:opacity-70"
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
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-muted disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>
          <button
            type="button"
            disabled
            className="rounded-lg bg-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600 disabled:cursor-not-allowed"
          >
            Submit (coming soon)
          </button>
        </div>
      </section>
    </div>
  );
}
