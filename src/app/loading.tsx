export default function Loading() {
  return (
    <div className="tl-page-enter space-y-6 py-2" aria-busy="true" aria-label="Loading">
      <div className="h-3 w-28 animate-pulse rounded-full bg-border" />
      <div className="h-9 w-3/4 max-w-md animate-pulse rounded-lg bg-border/80" />
      <div className="h-4 w-full max-w-xl animate-pulse rounded bg-border/60" />
      <div className="h-4 w-5/6 max-w-lg animate-pulse rounded bg-border/50" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="h-36 animate-pulse rounded-xl border border-border bg-card" />
        <div className="h-36 animate-pulse rounded-xl border border-border bg-card" />
      </div>
    </div>
  );
}
