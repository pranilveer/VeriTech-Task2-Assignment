// LandingPage.js
import React from 'react';
import './LandingPage.css';
// import productImage from './images/product_image.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="logo">
          {/* <img src={productImage} alt="Product Logo" /> */}
        </div>
        <h1>Futuristic Product Unveiling</h1>
        <p>Experience the Future Today</p>
      </header>

      <section className="event-details">
        <div className="details-card">
          <h2>Date & Time</h2>
          <p>Saturday, March 09, 2024</p>
          <p>6:00 PM - 9:00 PM</p>
        </div>

        <div className="details-card">
          <h2>Location</h2>
          <p>Grand Event Hall</p>
          <p>123 Main Street, Mumbai</p>
        </div>
      </section>

      <section className="product-features">
        <h2>Discover the Unseen Features</h2>
        <ul>
          <li>Revolutionary Design</li>
          <li>AI-Powered Technology</li>
          <li>Immersive User Experience</li>
          <li>Unmatched Performance</li>
        </ul>
      </section>

      <section className="cta-section">
        <p>Be part of the excitement! Reserve your spot now.</p>
        <button className="cta-button">RSVP</button>
      </section>

      <footer>
        <p>© 2024 Futuristic Products. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
