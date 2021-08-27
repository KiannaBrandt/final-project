import React from 'react';

export default function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md">
        <a className="navbar-brand fs-1 text-primary" href="#">Crypto Simulator</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Prices</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="#" role="button">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
