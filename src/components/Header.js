import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import the logo using the correct relative path from your current file
import logo from '../assets/logo3.PNG';  // Adjust this path based on your file structure
import './Header.css';

const Header = ({ onGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logo} alt="Revolv Logo" className="nav-logo-img" />
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="#features">About</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`header ${isVisible ? 'visible' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="Revolv Logo" className="hero-logo" />
        </div>
        {/* <h1 className="title">Revolv</h1> */}
        {/* <p className="tagline">Smart Tools for Smart Businesses</p> */}
        <button className="cta-button" onClick={onGetStarted}>
          Get started
        </button>
      </div>
    </>
  );
};

export default Header;