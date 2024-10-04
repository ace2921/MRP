import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './TopNav.css';

function TopNav() {
  const navOption = [
    "Collabs & License",
    "What's New",
    "Ladies",
    "Mens",
    "Shoes",
    "Everyday Basics",
    "Kids",
    "Baby",
    "Beauty",
    "Novelty",
    "Inspo",
    "Promos",
    "Cellular"
  ];

  let navItems = navOption.map((e) =>
    <li key={e}>{e}</li>
  );

  return (
    <><><>
      <div className='topNav'>
        {/* <img src="/mrp-logo.svg" alt="MRP Logo" /> */}
        <img
          src="https://cdn.omni.mrpg.com/cdn/web/assets/images/mrp-logo.svg"
          alt="Mr Price Clothing South Africa"
          className='logo' />
        <div className='search-container'>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='search-icon' />
          <input
            type="search"
            className='searchbar'
            placeholder='Search items, Brands & Categories' />
        </div>
      </div>

      <div>
        <nav>
          {navItems}
        </nav>
      </div>

      <div className='promo'>
        <p className='promoMessage'>
          <span>Free click + collect</span> to any Mr Price store when you spend R350 or more.
        </p>
      </div>

      <div className='promoVideo'>
        <video src="/Mr-Price.mp4" loop autoPlay muted playsInline></video>
        <div className='button-container'>
          <button>SHOP LADIES</button>
          <button>SHOP MENS</button>

        </div>
      </div>

      <div class="parent">
        <div class="child"></div>
      </div>
      <div className='options'>
        <div className='ChooseOptions'>
          <a href="/en_za/customer-service/faqs" data-gtm-event="Campaign" data-gtm-action="Home Page" data-gtm-label="" title="FAQ's"><img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-faq-ic.png" alt="frequently asked questions" width="201" height="138" class="img-fluid" loading="lazy"></img></a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/customer-service/faqs" data-gtm-event="Campaign" data-gtm-action="Home Page" data-gtm-label="" title="Delivery and returns"><img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-delivery-ic.png" alt="delivery and returns" width="201" height="138" class="img-fluid" loading="lazy"></img></a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/sales/order/history" data-gtm-event="Campaign" data-gtm-action="Home Page" data-gtm-label="" title="Track my order"><img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-track-ic.png" alt="track my order" width="202" height="138" class="img-fluid" loading="lazy"></img></a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/store-locator/" data-gtm-event="Campaign" data-gtm-action="Home Page" data-gtm-label="" title="Stores near me"><img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-loc-ic.png" alt="stores near me" width="201" height="138" class="img-fluid" loading="lazy"></img></a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/customer-service/faqs" data-gtm-event="Campaign" data-gtm-action="Home Page" data-gtm-label="" title="How to shop"><img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-hts-ic.png" alt="how to shop" width="201" height="138" class="img-fluid" loading="lazy"></img></a>
        </div>
      </div></>
      <div className='clothingOptions'>
        <p><span>Hook me up with fashion news</span></p>
        <label htmlFor="" className='opt'>All</label>
        <input type="checkbox" />
        <label htmlFor="" className='opt'>Ladies</label>
        <input type="checkbox" />
        <label htmlFor="" className='opt'>Mens</label>
        <input type="checkbox" />
        <label htmlFor="" className='opt'>Kids</label>
        <input type="checkbox" />
        <label htmlFor="" className='opt'>Baby</label>
        <input type="checkbox" />
        <input type="email" name="" id="" />
      </div>
      <div className='beforeFooter'>
        <div className='mrp'>
          <div><strong>Mr Price</strong></div>
          <p>Get to Know Us</p>
          <p>Mr Price App</p>
          <p>Find a Store</p>
          <p>Gift Cards</p>
          <p>Find Your Fit</p>
          <p>Partner Up with Mr Price</p>
        </div>
        <div className='mrp'>
          <div><strong>Mr Price Money</strong></div>
          <p>Open an Account</p>
          <p>Application Status</p>
          <p>Pay My Account</p>
          <p>Airtime & Data</p>
          <p>Mr Price Cellular</p>
          <p>Mr Price Insurance</p>
        </div>
        <div className='mrp'>
          <div><strong>Mr Price Group</strong></div>
          <p>About Us</p>
          <p>Investors</p>
          <p>Sustainability</p>
          <p>Careers</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Message Disclaimer</p>
        </div>
        <div className='mrp'>
          <div><strong>Need Help?</strong></div>
          <p>WhatsApp</p>
          <p>How to Shop Online</p>
          <p>How to Get Free Delivery</p>
          <p>Delivery & Returns</p>
          <p>Size Guides</p>
          <p>FAQ's</p>
          <p>Contact Us</p>
        </div>
      </div>
    </>
    <div className='differentSocials'>
      <div><strong>FOLLOW US</strong></div>
      <p>FAQ's</p>
      <p className='social'>Contact Us</p>
    </div>
    </>
  );
}

export default TopNav;
