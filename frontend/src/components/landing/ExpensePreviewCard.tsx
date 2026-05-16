const expenses = [
  { label: 'Bills', amount: '₹4,500', width: '65%', color: 'var(--bar-bills)' },
  { label: 'Food', amount: '₹3,200', width: '45%', color: 'var(--bar-food)' },
  { label: 'Health', amount: '₹2,050', width: '30%', color: 'var(--bar-health)' },
  { label: 'Transport', amount: '₹1,800', width: '25%', color: 'var(--bar-transport)' },
]

export function ExpensePreviewCard() {
  return (
    <div
      className="rounded-2xl p-6 shadow-md w-full max-w-[340px]"
      style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-xs uppercase tracking-widest font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          March 2026
        </span>
        <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          ₹12,450
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {expenses.map(({ label, amount, width, color }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-sm w-20 shrink-0" style={{ color: 'var(--text-primary)' }}>
              {label}
            </span>
            <div
              className="flex-1 h-1.5 rounded-full overflow-hidden"
              style={{ backgroundColor: 'var(--bar-track)' }}
            >
              <div
                className="h-full rounded-full"
                style={{ width, backgroundColor: color }}
              />
            </div>
            <span
              className="text-sm w-16 text-right shrink-0 tabular-nums"
              style={{ color: 'var(--text-muted)' }}
            >
              {amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
