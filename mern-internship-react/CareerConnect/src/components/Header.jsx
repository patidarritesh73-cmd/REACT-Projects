
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="site-header">
      <h2 className="brand">CareerConnect</h2>

      <Navigation />

      <div className="header-actions">
        <button type="button" className="btn btn-secondary">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
