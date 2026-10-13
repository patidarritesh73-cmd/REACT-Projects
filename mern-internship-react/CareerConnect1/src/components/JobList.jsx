import JobCard from './JobCard.jsx'
import { jobs } from '../data/jobs.js'

function JobList({ searchQuery, onApply }) {
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredJobs = jobs.filter((job) => {
    const searchableText = [
      job.title,
      job.company,
      job.location,
      job.salary,
      job.experience,
      job.employmentType,
      ...job.skills,
    ].join(' ').toLowerCase()

    return searchableText.includes(normalizedQuery)
  })

  return (
    <section className="job-section" id="jobs" aria-labelledby="open-roles-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Curated for you</p>
          <h2 id="open-roles-title">Open opportunities</h2>
        </div>
        <p className="job-count" aria-live="polite">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'}
        </p>
      </div>
      {filteredJobs.length > 0 ? (
        <div className="job-grid">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={() => onApply(job)} />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          No roles match that search. Try another title, skill, or company.
        </p>
      )}
    </section>
  )
}

export default JobList
