import "../App.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <a className="navbar-brand" href="#">
          <strong>Navbar</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/second">
                Second
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Opinions
              </a>
            </li>
          </ul>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
