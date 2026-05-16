import { Link } from 'react-router-dom'
import { ExpensePreviewCard } from './ExpensePreviewCard'

export function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--page-bg)', paddingTop: '56px' }}>
      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-5">
          {/* Badge */}
          <span
            className="self-start text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold"
            style={{ color: '#2ca85a', backgroundColor: 'rgba(44,168,90,0.1)' }}
          >
            Personal Finance Tracker
          </span>

          {/* Headline */}
          <h1
            className="leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span
              className="block text-5xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Know where your
            </span>
            <span
              className="block text-5xl font-bold italic"
              style={{ color: '#1e7a40' }}
            >
              money goes
            </span>
          </h1>

          {/* Body */}
          <p
            className="text-base leading-relaxed max-w-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            Log expenses, understand your spending patterns, and take control of your financial
            life — one transaction at a time.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 mt-1">
            <Link
              to="/register"
              className="text-sm font-medium px-5 py-2.5 rounded-lg"
              style={{
                backgroundColor: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
              }}
            >
              Start tracking free
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium px-5 py-2.5 rounded-lg border"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
                backgroundColor: 'transparent',
              }}
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="flex justify-center">
          <ExpensePreviewCard />
        </div>
      </div>
    </section>
  )
}
