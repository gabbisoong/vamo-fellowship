import React from "react";
import vamoLogo from "../assets/vamo-logo.svg";
import gradientBg from "../assets/gradient-bottom.png";
import "./FirstProduct.css";

function FirstProduct() {
  return (
    <div className="product-page">

      {/* Top Navigation */}
      <div className="home-nav-wrapper">
        <div className="home-nav-container">
          <div className="home-logo">
            <img src={vamoLogo} alt="Vamo" className="home-logo-img" />
          </div>
          <button className="home-get-discovered-btn">Get Discovered</button>
        </div>
      </div>

      {/* Scattered green squares */}
      <img src="/green squares 1.png" alt="" className="gs gs-1" />
      <img src="/green squares 2.png" alt="" className="gs gs-2" />
      <img src="/green squares 3.png" alt="" className="gs gs-3" />

      {/* Center Content */}
      <div className="product-hero">
        <p className="product-hero-eyebrow">OUR FIRST PRODUCT</p>
        <h1 className="product-hero-heading">We've unveiled the Quiet<br />Geniuses on Github</h1>
        <a
          href="https://vamotalent.com/"
          target="_blank"
          rel="noreferrer"
          className="product-hero-btn"
        >
          Visit Vamo Talent
        </a>
        <img src="/fish.svg" alt="fish" className="product-hero-fish" />
      </div>

      {/* Green gradient pinned to bottom */}
      <div className="product-gradient-bottom">
        <img src={gradientBg} alt="" />
      </div>
    </div>
  );
}

export default FirstProduct;
