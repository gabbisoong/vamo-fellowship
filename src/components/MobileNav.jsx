import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import vamoLogo from "../assets/vamo-logo.svg";
import homeIcon from "../assets/home.svg";
import founderIcon from "../assets/founder.svg";
import newsIcon from "../assets/news.svg";
import "./MobileNav.css";

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="mobile-nav">
      {/* Green banner */}
      <a
        href="https://vamotalent.com/"
        target="_blank"
        rel="noreferrer"
        className="mobile-nav-banner"
      >
        CHECK OUT OUR FIRST PRODUCT: <span className="mobile-nav-banner-bold">VAMO TALENT</span>
      </a>

      {/* Hamburger + Logo row */}
      <div className="mobile-nav-bar">
        <button
          className={`mobile-nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <Link to="/" className="mobile-nav-logo" onClick={closeMenu}>
          <img src={vamoLogo} alt="Vamo" className="mobile-nav-logo-img" />
        </Link>
      </div>

      {/* Dropdown menu */}
        <nav className={`mobile-nav-dropdown${menuOpen ? " mobile-nav-dropdown-open" : ""}`}>
          <Link
            to="/"
            className={`mobile-nav-menu-item${location.pathname === "/" ? " mobile-nav-active" : ""}`}
            onClick={closeMenu}
          >
            <img src={homeIcon} alt="" className="mobile-nav-menu-icon mobile-nav-icon-home" />
            <span>HOME</span>
          </Link>
          <Link
            to="/founder"
            className={`mobile-nav-menu-item${location.pathname === "/founder" ? " mobile-nav-active" : ""}`}
            onClick={closeMenu}
          >
            <img src={founderIcon} alt="" className="mobile-nav-menu-icon mobile-nav-icon-founder" />
            <span>LETTER</span>
          </Link>
          <Link
            to="/product"
            className={`mobile-nav-menu-item${location.pathname === "/product" ? " mobile-nav-active" : ""}`}
            onClick={closeMenu}
          >
            <img
              src={location.pathname === "/product" ? "/product-selected.svg" : "/product-og.svg"}
              alt=""
              className="mobile-nav-menu-icon mobile-nav-icon-product"
            />
            <span>PRODUCTS</span>
          </Link>
          <Link
            to="/news"
            className={`mobile-nav-menu-item${location.pathname === "/news" ? " mobile-nav-active" : ""}`}
            onClick={closeMenu}
          >
            <img src={newsIcon} alt="" className="mobile-nav-menu-icon" />
            <span>NEWS</span>
          </Link>
      </nav>
    </div>
  );
}

export default MobileNav;
