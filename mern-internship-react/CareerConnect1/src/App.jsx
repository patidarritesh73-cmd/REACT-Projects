import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import SearchBar from './components/SearchBar.jsx'
import JobList from './components/JobList.jsx'
import StatsSection from './components/StatsSection.jsx'
import { stats } from './data/stats.js'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [applicationMessage, setApplicationMessage] = useState('')

  function handleApply(job) {
    setApplicationMessage(
      `The application flow for ${job.title} at ${job.company} is not connected yet.`,
    )
  }

  return (
    <div className="career-connect" id="top">
      <Header />
      <main>
        <HeroSection
          title="Find Your Next Career Opportunity"
          description="Discover jobs from companies hiring across India."
        />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <StatsSection stats={stats} />
        {applicationMessage && (
          <p className="application-message" role="status">
            {applicationMessage}
          </p>
        )}
        <JobList searchQuery={searchQuery} onApply={handleApply} />
      </main>
      <Footer />
    </div>
  )
}

export default App
