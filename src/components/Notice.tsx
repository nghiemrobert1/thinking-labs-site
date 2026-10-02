export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="rounded-lg border border-amber-200 bg-warn-bg px-4 py-3 text-sm text-warn"
      role="note"
    >
      {children}
    </aside>
  );
}
