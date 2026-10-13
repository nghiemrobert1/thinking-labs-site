import Link from "next/link";
import { Logo } from "@/components/Logo";

export const NAV = [
  { href: "/", label: "CKD Twin" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/safety", label: "Safety & regulatory" },
  { href: "/intake-twin", label: "Intake Twin" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" aria-label="Thinking Labs home" className="brand">
          <Logo blink />
          <span className="label brand-name">Thinking Labs</span>
        </Link>
        <nav aria-label="Primary" className="nav-desktop">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <Link className="btn nav-cta" href="/contact">Contact us</Link>
        <details className="nav-mobile">
          <summary>Menu</summary>
          <nav aria-label="Mobile">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/contact">Contact us</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
