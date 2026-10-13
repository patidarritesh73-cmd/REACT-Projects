import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import JobCard from "./components/JobCard.jsx";

function App() {
  const company = "CareerConnect";
  const openJobs = 128;
  const location = "India";
  const isHiring = true;

  return (
    <div className="career-app">
      <Header />

      <main className="main-content">
        <HeroSection />

        <section className="jobs-section" id="jobs">
          <div className="section-heading">
            <p className="section-label">Trending roles</p>
            <h2>Featured Job Openings</h2>
          </div>

          <div className="jobs-grid">
            <JobCard />
          </div>
        </section>

        <section className="app-info" id="companies">
          <h2>{company}</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Open Jobs</span>
              <strong>{openJobs}</strong>
            </div>
            <div className="stat-item">
              <span className="stat-label">Location</span>
              <strong>{location}</strong>
            </div>
            <div className="stat-item">
              <span className="stat-label">Hiring Status</span>
              <strong>{isHiring ? "Actively Hiring" : "Not Hiring"}</strong>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
