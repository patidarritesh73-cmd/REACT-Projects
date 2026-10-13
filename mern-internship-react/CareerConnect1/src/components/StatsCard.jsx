function StatsCard({ label, value }) {
  return (
    <article className="stats-card">
      <p className="stats-value">{value}</p>
      <p className="stats-label">{label}</p>
    </article>
  )
}

export default StatsCard
