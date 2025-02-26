import React, { useState } from 'react';
import './HomeHuntLanding.css';

const HomeHuntLanding = ({setPage}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [propertyType, setPropertyType] = useState('any');

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      location: 'Downtown, Metro City',
      price: 2200,
      beds: 2,
      baths: 2,
      sqft: 1100,
      imageUrl: '/api/placeholder/400/300',
    },
    {
      id: 2,
      title: 'Suburban Family Home',
      location: 'Greenview, Metro City',
      price: 3500,
      beds: 4,
      baths: 3,
      sqft: 2400,
      imageUrl: '/api/placeholder/400/300',
    },
    {
      id: 3,
      title: 'Cozy Studio Loft',
      location: 'Arts District, Metro City',
      price: 1700,
      beds: 1,
      baths: 1,
      sqft: 750,
      imageUrl: '/api/placeholder/400/300',
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, priceRange, propertyType);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">HomeHunt</div>
        <nav className="nav">
          <a href="#">Rent</a>
          <a href="#">Buy</a>
          <a href="#">Sell</a>
          <a href="#">Mortgage</a>
        </nav>
        <div className="auth-buttons">
          <button className="signin" onClick={()=>setPage("Auth")}>Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Home</h1>
        <p>Discover thousands of homes and apartments for rent in your area with HomeHunt.</p>
        
        {/* Search Box */}
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="City, neighborhood, or address"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="any">Any Property</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Featured Properties */}
      <section className="featured">
        <h2>Featured Rentals</h2>
        <div className="property-grid">
          {featuredProperties.map((property) => (
            <div key={property.id} className="property-card" >
              <img src={property.imageUrl} alt={property.title} />
              <div className="property-info">
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <p className="price">${property.price}/month</p>
                <div className="details">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
              <button className="view-details">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Home Hunt Today</h2>
        <p>Join thousands of satisfied customers who found their perfect home with us.</p>
        <button>Create Your Free Account</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 HomeHunt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeHuntLanding;