export default function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  )
}
