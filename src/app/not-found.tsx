import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-hero">
      <div className="label">404</div>
      <h1>Page not found</h1>
      <p className="lead">That page isn&rsquo;t part of the Thinking Labs site.</p>
      <div className="cta"><Link className="btn" href="/">Back to CKD Twin</Link><Link className="btn2" href="/contact">Contact</Link></div>
    </div>
  );
}
