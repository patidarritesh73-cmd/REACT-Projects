import ApplyButton from './ApplyButton.jsx'
import CompanyInfo from './CompanyInfo.jsx'
import SkillBadge from './SkillBadge.jsx'

function JobCard({ job, onApply }) {
  return (
    <article className="job-card">
      <div className="job-card-top">
        <CompanyInfo company={job.company} />
        {job.featured && <span className="featured-badge">Featured</span>}
      </div>

      <h3>{job.title}</h3>
      <p className="job-location">{job.location}</p>

      <div className="job-facts">
        <span className="job-fact">{job.employmentType}</span>
        <span className="job-fact">{job.experience}</span>
      </div>

      <ul className="skill-list" aria-label="Skills">
        {job.skills.map((skill) => (
          <li key={skill}><SkillBadge skill={skill} /></li>
        ))}
      </ul>

      <div className="job-card-footer">
        <p className="salary">{job.salary}</p>
        <ApplyButton onApply={onApply} />
      </div>
    </article>
  )
}

export default JobCard
