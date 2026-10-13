
const defaultJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Bhopal",
    type: "Full-time",
    salary: "₹3–5 LPA",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "Digital Labs",
    location: "Indore",
    type: "Full-time",
    salary: "₹4–7 LPA",
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Software Hub",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹4–6 LPA",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    title: "React Developer Intern",
    company: "WebWorks",
    location: "Remote",
    type: "Internship",
    salary: "₹10,000/month",
    skills: ["JavaScript", "React", "Git"],
  },
  {
    id: 5,
    title: "Junior JavaScript Developer",
    company: "CodeCraft",
    location: "Pune",
    type: "Full-time",
    salary: "₹3–4.5 LPA",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Innovate Tech",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹5–8 LPA",
    skills: ["React", "Node.js", "MongoDB", "REST API"],
  },
];

function JobCard({ jobs = defaultJobs }) {
  return (
    <>
      {jobs.map((job) => (
        <article className="job-card" key={job.id}>
          <div className="job-card-top">
            <div>
              <h3>{job.title}</h3>
              <p className="job-company">{job.company}</p>
            </div>

            <span className="job-type">{job.type}</span>
          </div>

          <p>📍 {job.location}</p>
          <p>💰 {job.salary}</p>

          <h4>Required Skills</h4>

          <div className="skills-list">
            {job.skills.map((skill) => (
              <span className="skill-tag" key={`${job.id}-${skill}`}>
                {skill}
              </span>
            ))}
          </div>

          <button
            className="apply-button"
            type="button"
            onClick={() => alert(`You selected: ${job.title}`)}
          >
            View Job
          </button>
        </article>
      ))}
    </>
  );
}

export default JobCard;
