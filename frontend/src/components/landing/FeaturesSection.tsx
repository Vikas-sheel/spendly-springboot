import { IndianRupee, PieChart, CalendarClock } from 'lucide-react'

const features = [
  {
    Icon: IndianRupee,
    title: 'Log expenses instantly',
    description:
      'Add any expense in seconds. Category, amount, date, description — all in one simple form.',
  },
  {
    Icon: PieChart,
    title: 'Understand your patterns',
    description:
      'See exactly where your money goes with category breakdowns and monthly summaries.',
  },
  {
    Icon: CalendarClock,
    title: 'Filter by time period',
    description:
      'View your spending for any date range — last week, last month, or a custom period.',
  },
]

export function FeaturesSection() {
  return (
    <section style={{ backgroundColor: 'var(--section-beige)' }} className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              <Icon
                size={20}
                className="mb-4"
                style={{ color: 'var(--text-muted)' }}
              />
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
