import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import vamoLogo from '../assets/vamo-logo.svg';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="nav-header">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={vamoLogo} alt="Vamo Fellowship" className="nav-logo-img" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/founder"
              className={`nav-link ${isActive('/founder') ? 'nav-link-active' : ''}`}
            >
              Letter
            </Link>
            <Link
              to="/product"
              className={`nav-link ${isActive('/product') ? 'nav-link-active' : ''}`}
            >
              Product
            </Link>
          </nav>

          {/* Apply Button */}
          <a
            href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-apply-btn"
          >
            Apply now
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`nav-menu-btn ${isMenuOpen ? 'nav-menu-btn-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="nav-menu-icon"></span>
            <span className="nav-menu-icon"></span>
            <span className="nav-menu-icon"></span>
          </button>
        </div>
      </header>

      {/* Mobile Side Menu Overlay */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'nav-overlay-open' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Side Menu */}
      <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
        <div className="nav-mobile-content">
          <Link
            to="/"
            className={`nav-mobile-link ${isActive('/') ? 'nav-mobile-link-active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/founder"
            className={`nav-mobile-link ${isActive('/founder') ? 'nav-mobile-link-active' : ''}`}
            onClick={closeMenu}
          >
            Letter
          </Link>
          <Link
            to="/product"
            className={`nav-mobile-link ${isActive('/product') ? 'nav-mobile-link-active' : ''}`}
            onClick={closeMenu}
          >
            Product
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
