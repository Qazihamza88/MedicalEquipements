import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#333', color: '#fff' ,paddingTop:"30px"  }}>
      <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="contact-info" style={{ textAlign: 'center' }}>
            <h3>Contact Us</h3>
            <p>
              ☎️ Phone: +33605604198
            </p>
            <p>
              ✉️ Email: <a href="mailto:na6699965@gmail.com">na6699965@gmail.com</a>
            </p>
            <p>
              ✉️ Email: <a href="mailto:royalashrafi72@hotmail.com">royalashrafi72@hotmail.com</a>
            </p>
           <p>
              📅 Opening Days: Monday - Friday
            </p>
            <p>
              📅 Opening Times: 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-branch" style={{ textAlign: 'center' }}>
          <h3>Office Location</h3>
          <a href="https://www.google.com/maps/place/Gagny,+France"target="_blank" 
          style={{textDecoration:"none"}}><h4>Gagny France</h4></a>
      </div>
    </div>
    </div>
    </div>
    </footer>
  );
}

export default Footer;
