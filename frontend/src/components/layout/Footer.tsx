function DiamondIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#d97706">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)' }} className="py-12">
      <div className="flex flex-col items-center gap-2">
        <DiamondIcon />
        <span className="text-sm font-semibold text-white">Spendly</span>
        <span className="text-xs text-gray-500">Track every rupee. Own your finances.</span>
      </div>
    </footer>
  )
}
