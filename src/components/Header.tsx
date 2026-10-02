"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="tl-press inline-flex items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-teal/40 hover:bg-accent-soft/50 md:hidden"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>

          <nav
            id="primary-nav"
            className={`${
              open ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-1 border-b border-border bg-card/98 px-4 py-3 shadow-lg backdrop-blur-md md:static md:flex md:flex-row md:items-center md:gap-0.5 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
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
                  onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              className="tl-press mt-1 inline-flex items-center justify-center rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-white shadow-sm shadow-teal/20 transition hover:bg-accent-dark md:ml-2 md:mt-0"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
