import Button from './Button.jsx'
import Navigation from './Navigation.jsx'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="CareerConnect home">
        <span className="brand-mark" aria-hidden="true">C</span>
        CareerConnect
      </a>
      <Navigation />
      <div className="header-actions">
        <Button className="button-quiet">Log in</Button>
        <Button className="button-primary button-small">Register</Button>
      </div>
    </header>
  )
}

export default Header
