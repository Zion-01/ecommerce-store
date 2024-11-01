import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

  function Home() {
    return (
      <div className="home">
        <header
          className="hero-section"
          style={{
            backgroundImage: `url('/images/hero-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-content">
            <h1>Welcome to Car Center</h1>
            <p>Your trusted marketplace for only the premium cars</p>
            <a href="/products" className="cta-button">Shop Now</a>
          </div>
        </header>

      <section className="featured-section">
        <h2>Featured Cars</h2>
        <div className="featured-cars">
          <div className="car-card">
            <img src="/images/2019_Toyota_Camry.jpg" alt="Toyota Camry" className="car-image" />
            <h3>Toyota Camry</h3>
            <p>Starting at $24,000</p>
            <Link to="/product/1" className="details-link">View Details</Link>
          </div>
          <div className="car-card">
            <img src="/images/honda-accord.jpg" alt="Honda Accord" className="car-image" />
            <h3>Honda Accord</h3>
            <p>Starting at $26,000</p>
            <Link to="/product/2" className="details-link">View Details</Link>
          </div>
          <div className="car-card">
            <img src="/images/Tesla-Model-S.png" alt="Tesla Model S" className="car-image" />
            <h3>Tesla Model S</h3>
            <p>Starting at $80,000</p>
            <Link to="/product/3" className="details-link">View Details</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>At Car Center, we are dedicated to providing our customers with the best selection of high-quality vehicles, along with unmatched customer service.</p>
        <Link to="/about" className="learn-more-link">Learn More</Link>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have any questions? Reach out to our team, and we’ll be happy to assist you!</p>
        <Link to="/contact" className="contact-link">Contact Us</Link>
      </section>
    </div>
  );
}

export default Home;
