import Link from "next/link";

/** Data line (wording cleared Oct 13). Must match /privacy. */
export function DataLine() {
  return (
    <section className="data-line">
      <div className="wrap"><p><b>Your data stays yours.</b> We don&rsquo;t sell personal or health data. <Link href="/privacy">Read our Privacy Policy.</Link></p></div>
    </section>
  );
}
