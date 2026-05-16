import { Link } from 'react-router-dom'

export function CtaSection() {
  return (
    <section style={{ backgroundColor: 'var(--section-beige)' }} className="pb-24 pt-4">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold mb-3"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: 'var(--text-primary)',
          }}
        >
          Ready to take control?
        </h2>
        <p className="text-base mb-8" style={{ color: 'var(--text-muted)' }}>
          Join thousands of people who track their expenses with Spendly.
        </p>
        <Link
          to="/register"
          className="inline-block text-sm font-medium px-6 py-3 rounded-full"
          style={{
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-text)',
          }}
        >
          Create free account
        </Link>
      </div>
    </section>
  )
}
