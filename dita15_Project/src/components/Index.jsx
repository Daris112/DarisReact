import React from 'react';
import './Index.css';

function Index() {
  return (
    <>
      <div id="home">
        {/* Floating Gold Shapes */}
        <div className="bg-shape shape1"></div>
        <div className="bg-shape shape2"></div>
        <div className="bg-shape shape3"></div>
        <div className="bg-shape shape4"></div>

        {/* Dark overlay */}
        <div className="hero-gradient"></div>

        {/* Hero content */}
        <div className="hero-content">
          <div className="inner">
            <h1 id="hero-title">La Maison</h1>
            <p id="hero-tagline">Fresh • Authentic • Local</p>

            <div className="hero-actions">
              <button className="btn-primary">View Menu</button>
              <button className="btn-secondary">Reserve a Table</button>
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="about-wrapper">
        <div className="about-box">
          <div className="about-text">
            <h2 className="about-title">About Our Restaurant</h2>
            <p className="about-desc">
              We combine tradition, quality, and exceptional flavors to bring you
              an unforgettable dining experience. Every dish is prepared with
              fresh ingredients, passion, and authentic recipes.
            </p>
            <p className="about-desc">
              Our goal is to create a warm atmosphere where family, friends,
              and food lovers can enjoy delicious meals and feel at home.
            </p>
          </div>
          <div className="about-image">
            <img src="./interior.jpg  " alt="Restaurant interior" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
