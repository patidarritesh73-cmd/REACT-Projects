function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <span className="visually-hidden">Search jobs, skills, or companies</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Job title, skill, or company"
        />
      </label>
      <span className="search-hint">Search open roles</span>
    </div>
  )
}

export default SearchBar
