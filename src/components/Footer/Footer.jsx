import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <div className="social-links">
            <div>
              <p>MR PRICE</p>
              <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaTiktok />
          <FaYoutube />
            </div>
            <div>
              <p>MR PRICE KIDS</p>
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="payment-methods">
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.webp" alt="MasterCard" />
          <img src="/Dclub.webp" alt="Diners Club" />
          <img src="/ozow.png" alt="Ozow" />
          <img src="/mr_price_money.png" alt="Mr Price Money" />
          <img src="/cyber.png" alt="Cybersource" />
        </div>
        <div className="app-links">
          <a href="#"><img src="https://cdn.omni.mrpg.com/cdn/web/assets/images/google-playstore.svg" alt="Google Play" /></a>
          <a href="#"><img src="https://cdn.omni.mrpg.com/cdn/web/assets/images/apple-store.svg" alt="App Store" /></a>
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
          <img src="https://www.mrp.com/assets/images/flag/za.svg" alt="South Africa Flag" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
