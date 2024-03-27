import React from "react";
import { Link } from "react-router-dom";
import background from "./images/background.png";
import Services from "./Services";
import video from "./Video/video.mp4"

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3>SITC</h3>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Aboutus">
                  About Us
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Contactus">
                  Contact Us
                </Link>
              </li> */}
            </ul>
            <div style={{ paddingLeft: "20px" }}>
              <Link to="/Form" className="btn btn-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
