import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

function DiamondIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 0L14 7L7 14L0 7L7 0Z" />
    </svg>
  )
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: 'var(--nav-bg)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2"
          style={{ color: 'var(--text-primary)' }}
        >
          <DiamondIcon />
          <span className="font-semibold text-[15px]">Spendly</span>
        </Link>

        {/* Nav actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm"
            style={{ color: 'var(--text-primary)' }}
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
            }}
          >
            Get started
          </Link>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border-0 bg-transparent flex items-center"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
