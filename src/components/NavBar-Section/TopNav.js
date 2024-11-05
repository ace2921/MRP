import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './TopNav.css';

// Sample data array for categories
const categories = [
  { id: 1, title: 'Ladies', image: '2024wk44-home-ladies.avif' },
  { id: 2, title: 'Mens', image: '2024wk45-home-mens.avif' },
  { id: 3, title: 'Kids 7-14', image: '2024wk45-home-bigkids.avif' },
  { id: 4, title: 'Kids 1-7', image: '2024wk45-home-prekids.avif' },
  { id: 5, title: 'Babies', image: '2024wk45-home-baby.avif' },
  { id: 6, title: 'Novelty', image: '2024wk43-home-novelty.avif' },
  { id: 6, title: 'Beauty', image: '2024wk45-home-beauty.avif' },
  { id: 6, title: 'Get the Scope', image: '2024wk45-home-bf.avif' },
  // Add more categories as needed
];

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
    <>
      <div className='topNav'>
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

      {/* Categories Grid Section */}
      <div className='categories-grid'>
        {categories.map((category) => (
          <div key={category.id} className='category-item'>
            <img src={category.image} alt={category.title} className='category-image' />
            <h3 className='category-title'>{category.title}</h3>
          </div>
        ))}
      </div>

      <div className='options'>
        <div className='ChooseOptions'>
          <a href="/en_za/customer-service/faqs" title="FAQ's">
            <img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-faq-ic.png" alt="frequently asked questions" />
          </a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/customer-service/faqs" title="Delivery and returns">
            <img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-delivery-ic.png" alt="delivery and returns" />
          </a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/sales/order/history" title="Track my order">
            <img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-track-ic.png" alt="track my order" />
          </a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/store-locator/" title="Stores near me">
            <img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-loc-ic.png" alt="stores near me" />
          </a>
        </div>
        <div className='ChooseOptions'>
          <a href="/en_za/customer-service/faqs" title="How to shop">
            <img src="https://cdn.omni.mrpg.com/cdn/01/content/2023/wk16/home-hts-ic.png" alt="how to shop" />
          </a>
        </div>
      </div>

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
        <input type="email" placeholder="Enter your email" />
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

      <div className='differentSocials'>
        <div><strong>FOLLOW US</strong></div>
        <p>FAQ's</p>
        <p className='social'>Contact Us</p>
      </div>
    </>
  );
}

export default TopNav;
