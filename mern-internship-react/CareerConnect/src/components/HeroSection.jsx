import SearchBar from "./SearchBar.jsx";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <p className="hero-label">YOUR CAREER STARTS HERE</p>

      <h1>
        Find Your <span>Dream Job</span>
      </h1>

      <p className="hero-description">
        Discover exciting opportunities, connect with top companies, and take
        the next step in your career.
      </p>

      <SearchBar />

      <p className="hero-note">Explore opportunities across India.</p>
    </section>
  );
}

export default HeroSection;
