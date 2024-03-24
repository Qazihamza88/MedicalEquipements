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
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div style={{ paddingLeft: "20px" }}>
              <Link to="/Form" className="btn btn-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="main"
        style={{ position: "relative", width: "100%", height: "100vh" }}>
        <div
          className="img"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}>
          <img src={background} style={{width:"100%",height:"100%",objectFit:"cover" }}/>
        </div>
        <div
          className="overlay" style={{position:"absolute",top:"52%",left:"35%",transform:"translate(-50%, -50%)",
            textAlign: "center",color: "#505050",}}>
          <h2 style={{fontSize:"55px" , fontWeight:900}}>Welcome to Our Website</h2>
          <h4  style={{fontSize:"35px" , fontWeight:600}}> Saab Internationale Trading Company</h4>
          <p style={{fontSize:"20px"}}>Empowering healthcare with cutting-edge medical equipment for better patient outcomes.<br/>
             dolorem nam fugit facere dicta ea ducimus illo ab, odio aperiam!"Precision meets <br/> 
             innovation: Explore our range of advanced medical equipment."</p>
        <div>
           <video src={video}
            controls
            width="540"
            height="220"
            autoPlay 
            /> 
        </div>
        </div>
      </div>

      <Services />
    </div>
  );
}

export default Header;
