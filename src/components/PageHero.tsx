export function PageHero({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{lead}</p>
    </div>
  );
}
