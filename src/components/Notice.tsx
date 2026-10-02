export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="flex gap-3 overflow-hidden rounded-xl border border-amber-200/90 bg-warn-bg shadow-sm"
      role="note"
    >
      <div className="w-1 shrink-0 bg-gradient-to-b from-amber-500 to-orange-400" aria-hidden />
      <div className="px-4 py-3 text-sm text-warn">{children}</div>
    </aside>
  );
}
