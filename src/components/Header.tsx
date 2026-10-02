"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus after paint so portal node exists
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const drawer =
    open && mounted
      ? createPortal(
          <>
            {/* Full-viewport dismiss layer — outside blurred header via portal */}
            <div
              className="fixed inset-0 z-[100] md:hidden"
              style={{ backgroundColor: "rgba(11, 31, 58, 0.55)" }}
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            {/* Opaque panel */}
            <div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="tl-drawer-in fixed inset-y-0 right-0 z-[110] flex w-[min(20rem,88vw)] flex-col border-l border-border shadow-2xl md:hidden"
              style={{ backgroundColor: "#ffffff" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex items-center justify-between border-b border-border px-4 py-3"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Logo size="sm" showWordmark />
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="tl-press rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto p-3"
                aria-label="Mobile"
                style={{ backgroundColor: "#ffffff" }}
              >
                {links.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-3 py-3 text-sm font-medium ${
                        active
                          ? "bg-accent-soft text-accent-dark"
                          : "text-foreground hover:bg-violet-soft/50"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="tl-press mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-3.5 py-3 text-sm font-semibold text-white"
                >
                  Contact
                </Link>
              </nav>
              <p
                className="border-t border-border px-4 py-3 text-xs text-muted"
                style={{ backgroundColor: "#ffffff" }}
              >
                Educational twin dashboards · Not a medical device
              </p>
            </div>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-card/85 shadow-sm shadow-navy/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg focus-visible:outline-offset-4"
            onClick={() => setOpen(false)}
            aria-label="Thinking Labs home"
          >
            <Logo size="md" showWordmark />
            <span className="tl-logo-tagline hidden border-l border-border pl-3 text-[11px] font-medium leading-tight text-muted lg:block">
              Educational
              <br />
              twin dashboards
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="Primary"
          >
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`tl-nav-link relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent-soft text-accent-dark"
                      : "text-muted hover:bg-violet-soft/50 hover:text-foreground"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="tl-press ml-2 inline-flex items-center justify-center rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-white shadow-sm shadow-teal/20 transition hover:bg-accent-dark"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="tl-press inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-teal/40 hover:bg-accent-soft/50 md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-1" aria-hidden>
              <span className="block h-0.5 w-4 rounded bg-foreground" />
              <span className="block h-0.5 w-4 rounded bg-foreground" />
              <span className="block h-0.5 w-4 rounded bg-foreground" />
            </span>
            Menu
          </button>
        </div>
      </header>
      {drawer}
    </>
  );
}
