"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type NavLink = { href: string; label: string };

// Native <details> keeps its "open" state across client-side navigation
// (the header lives in the root layout and never remounts), so close it
// explicitly on link tap, route change, outside tap, Escape and bfcache restore.
export function MobileMenu({ links }: { links: NavLink[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    if (ref.current?.open) ref.current.open = false;
    setOpen(false);
  }, []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const el = ref.current;
      if (el?.open && e.target instanceof Node && !el.contains(e.target)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !ref.current?.open) return;
      close();
      ref.current?.querySelector("summary")?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("pageshow", close);
    window.addEventListener("popstate", close);
    window.addEventListener("hashchange", close);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pageshow", close);
      window.removeEventListener("popstate", close);
      window.removeEventListener("hashchange", close);
    };
  }, [close]);

  return (
    <details
      ref={ref}
      className="nav-mobile"
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary aria-expanded={open} aria-controls="mobile-nav">Menu</summary>
      <nav id="mobile-nav" aria-label="Mobile" onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) close();
      }}>
        {links.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
      </nav>
    </details>
  );
}
