import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <div className="social-links">
            <div>
              <p>MR PRICE</p>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-tiktok"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <div>
              <p>MR PRICE KIDS</p>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="payment-methods">
          <img src="/images/visa-logo.png" alt="Visa" />
          <img src="/images/mastercard-logo.png" alt="MasterCard" />
          <img src="/images/diners-club-logo.png" alt="Diners Club" />
          <img src="/images/ozow-logo.png" alt="Ozow" />
          <img src="/images/mrprice-money-logo.png" alt="Mr Price Money" />
          <img src="/images/cybersource-logo.png" alt="Cybersource" />
        </div>
        <div className="app-links">
          <a href="#"><img src="/images/google-play-badge.png" alt="Google Play" /></a>
          <a href="#"><img src="/images/app-store-badge.png" alt="App Store" /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Mr Price</a>
          <a href="#">Mr Price Home</a>
          <a href="#">Mr Price Sport</a>
          <a href="#">Mr Price Money</a>
          <a href="#">Mr Price Foundation</a>
          <a href="#">Investors</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer-info">
          <p>© MRP 2024. All rights reserved. MRP Money is a division of the Mr Price Group Ltd and is an authorised Financial Service and Credit Provider. FSP31450 and NCRCP46.</p>
          <img src="/images/south-africa-flag.png" alt="South Africa Flag" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
