import StatsCard from './StatsCard.jsx'

function StatsSection({ stats }) {
  return (
    <section className="stats-section" aria-label="CareerConnect in numbers">
      {stats.map((stat) => (
        <StatsCard key={stat.id} label={stat.label} value={stat.value} />
      ))}
    </section>
  )
}

export default StatsSection
