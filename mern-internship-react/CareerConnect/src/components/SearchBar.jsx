
import { useState } from "react";

function SearchBar() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    alert(
      `Job: ${jobTitle || "Any job"}\nLocation: ${location || "Any location"}`
    );
  }

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Job title or skill"
        value={jobTitle}
        onChange={(event) => setJobTitle(event.target.value)}
        aria-label="Job title or skill"
      />

      <input
        type="text"
        placeholder="City or location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        aria-label="City or location"
      />

      <button type="submit">Search Jobs</button>
    </form>
  );
}

export default SearchBar;
