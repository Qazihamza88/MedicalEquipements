import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#333', color: '#fff' ,paddingTop:"30px"  }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-info" style={{ textAlign: 'center' }}>
              <h3>Contact Us</h3>
              <p>
                ✉️ na6699965@gmail.com
              </p>
              <p>
                ✉️ royalashrafi72@hotmail.com
              </p>
              <p>
                ☎️ 0033605604198
              </p>
            </div>
          </div>

          <div className="col-md-4">
          <div className="footer-branch" style={{ textAlign: 'center' }}>
             <h3> Branch Office</h3>
             <a><h4>Gagny France</h4> </a>
            </div>
          </div>
          <div className="col-md-4">
          <div className="footer-links" style={{ textAlign: 'center' }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit'  }}>Home</a>
                </li>
                <li style={{ margin: '10px 0' }}>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
                </li>
                <li style={{ margin: '10px 0' }}>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Services</a>
                </li>
                <li style={{ margin: '10px 0' }}>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
                </li>
            </ul>
          </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
