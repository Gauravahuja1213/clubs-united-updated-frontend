import React from "react";
function Navbar() {
  return (



    <div className="container-fluid nav_bg">
      <div className="row navigation">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark "  style={{backgroundColor:"black"}}>
            <div className="container-fluid">
              <a className="navbar-brand">
                Clubs United
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ml-auto nav-pills">
                <li className="nav-item">
                    <a className="nav-link"  href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a   className="nav-link" href="/clubs">
                      Clubs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
