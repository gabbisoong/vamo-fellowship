import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../assets/home.svg";
import founderIcon from "../assets/founder.svg";
import newsIcon from "../assets/news.svg";
import "./VerticalNav.css";

function VerticalNav() {
  const location = useLocation();

  return (
    <nav className="vertical-nav">
      <Link to="/" className={`vertical-nav-item${location.pathname === '/' ? ' nav-active' : ''}`}>
        <img src={homeIcon} alt="Home" className="nav-icon-img nav-icon-home" />
      </Link>
      <Link to="/founder" className={`vertical-nav-item${location.pathname === '/founder' ? ' nav-active' : ''}`}>
        <img src={founderIcon} alt="Founder" className="nav-icon-img nav-icon-founder" />
      </Link>
      <Link to="/product" className={`vertical-nav-item${location.pathname === '/product' ? ' nav-active' : ''}`}>
        <img
          src={location.pathname === '/product' ? '/product-selected.svg' : '/product-og.svg'}
          alt="Product"
          className="nav-icon-img nav-icon-product"
        />
      </Link>
      <Link to="/news" className={`vertical-nav-item${location.pathname === '/news' ? ' nav-active' : ''}`}>
        <img src={newsIcon} alt="News" className="nav-icon-img" />
      </Link>
    </nav>
  );
}

export default VerticalNav;
