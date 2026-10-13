function CompanyInfo({ company }) {
  return (
    <div className="company-info">
      <div className="company-avatar" aria-hidden="true">
        {company.charAt(0)}
      </div>
      <p className="company-name">{company}</p>
    </div>
  )
}

export default CompanyInfo
