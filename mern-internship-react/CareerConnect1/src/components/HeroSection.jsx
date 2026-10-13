function HeroSection({ title, description }) {
  return (
    <section className="intro" aria-labelledby="page-title">
      <p className="eyebrow">Your next chapter starts here</p>
      <h1 id="page-title">{title}</h1>
      <p className="intro-copy">{description}</p>
    </section>
  )
}

export default HeroSection
