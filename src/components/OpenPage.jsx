import React, { useState, useEffect } from 'react';
import './OpenPage.css';
import { Link } from 'react-router-dom';

const OpenPage = ({setPage ,setIsLogin ,isLogin}) => {
//   setPage("OpenPage")
  const [activeSlide, setActiveSlide] = useState(0);

  
  // Automatic slider for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Redirect to login page
  const redirect = () => {
    
  };


  return (
    <div className="open-page">
      <nav className="nav-bar">
        <div className="logo">HomeHunt</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#regions">Regions</a>
          <a href="#about">About</a>
          <div className="auth-buttons">
            <button className="login-button" onClick={redirect}><Link to="/auth">Login</Link></button>
            <button className="signup-button" onClick={redirect}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero section with side image */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Simplify Your Home Search & Connect Directly with Home Owners</h1>
            <p>Search across all your favorite real estate websites, save homes you love, and get connected with a local agent</p>
            
          </div>
          <div className="hero-image"></div>
        </div>
      </header>

      <section className="feature-banner">
        <h2>Explore and Bookmark on the Most Trusted Listing Sites</h2>
        <p>Take control of your home search experience.</p>
        
      </section>

      {/* Features section with alternating side images */}
      <section id="features" className="features-section">
        <div className="feature-row">
          <div className="feature-image left"></div>
          <div className="feature-content slide-in-right">
            <h3>Your Global Home Search History, All in One Place</h3>
            <p>
              Effortlessly explore properties across various platforms, all centralized in one place. 
              Our seamless app not only simplifies your search but also saves and organizes your search 
              history from top listing sites, providing easy access for a satisfying home-buying experience.
            </p>
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-content slide-in-left">
            <h3>Save Your Favorite Homes Across Borders</h3>
            <p>
              With our intuitive bookmarking feature, your dream homes are never out of reach. 
              Save your favorite properties across multiple platforms and regions with just a single click. 
              Whether you're exploring homes in your neighborhood or across continents, your personalized 
              home list is always at your fingertips.
            </p>
          </div>
          <div className="feature-image right"></div>
        </div>

        <div className="feature-row">
          <div className="feature-image left"></div>
          <div className="feature-content slide-in-right">
            <h3>Find Your Perfect Match with Suggested Properties</h3>
            <p>
              We curate a personalized list of suggested homes that align with your unique taste and needs. 
              Our intelligent recommendations can go beyond surface-level matching, diving deep into what 
              you truly desire in a home.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial slider section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-slider">
          <div className={`testimonial-slide ${activeSlide === 0 ? 'active' : ''}`}>
            <div className="testimonial-content">
              <p>"HomeHunt made finding my dream apartment so much easier. I could save listings from different websites and compare them side by side!"</p>
              <h4>Sarah K.</h4>
              <span>New York, NY</span>
            </div>
          </div>
          <div className={`testimonial-slide ${activeSlide === 1 ? 'active' : ''}`}>
            <div className="testimonial-content">
              <p>"The property recommendations were spot on! Found a house I wouldn't have discovered otherwise."</p>
              <h4>Michael T.</h4>
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className={`testimonial-slide ${activeSlide === 2 ? 'active' : ''}`}>
            <div className="testimonial-content">
              <p>"Being able to search across multiple platforms saved me countless hours. Best home search tool I've used!"</p>
              <h4>Jennifer L.</h4>
              <span>Austin, TX</span>
            </div>
          </div>
          <div className="slider-dots">
            <span className={activeSlide === 0 ? 'active' : ''} onClick={() => setActiveSlide(0)}></span>
            <span className={activeSlide === 1 ? 'active' : ''} onClick={() => setActiveSlide(1)}></span>
            <span className={activeSlide === 2 ? 'active' : ''} onClick={() => setActiveSlide(2)}></span>
          </div>
        </div>
      </section>

      <section id="regions" className="regions-section">
        <h2>Supported Regions</h2>
        <p>Start finding your new home with HomeHunter on these popular real estate sites. Below are the current websites that support HomeHunter:</p>
        <div className="regions-grid">
          <div className="region-logo"></div>
          <div className="region-logo"></div>
          <div className="region-logo"></div>
          <div className="region-logo"></div>
          <div className="region-logo"></div>
          <div className="region-logo"></div>
        </div>
      </section>

      <footer id="about" className="footer-section">
        <h2>Simplifying Home Search Across Your Favorite Sites</h2>
        <p>Find Your Dream Home with Tailored Recommendations, One-Click Bookmarks, and Effortless Search Across Your Favorite Listing Sites.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Help Center</a>
        </div>
      </footer>
    </div>
  );
};

export default OpenPage;