import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); 

  
  const isActive = (path) => {
    return location.pathname === path ? 'bg-red' : '';
  };

  return (
    <>
      <div className="container d-flex">
        <div className="col-6 div1">
          <span><i className="fa-solid fa-location-dot"></i></span>
          <span className='px-1'>
            <a href="https://en.wikipedia.org/wiki/Karachi" target="_blank" rel="noopener noreferrer">
              Karachi, Pakistan
            </a>
          </span>
        </div>
        <div className="col-6 div1 d-flex align-items-center justify-content-end">
          <span><i className="fa-solid fa-globe"></i></span>
          <span className='px-1'>
            <a href="https://fasih-nasirall.netlify.app/" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            Fasih-Nasir
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${isActive('/')}`} aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className={`nav-link ${isActive('/About')}`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className={`nav-link ${isActive('/Contact')}`}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Product" className={`nav-link ${isActive('/Product')}`}>
                  Product
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn1 px-2" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
