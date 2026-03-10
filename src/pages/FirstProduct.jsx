import React from "react";
import "./FirstProduct.css";

function FirstProduct() {
  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="product-hero-container">
          <h1 className="product-hero-title">Vamo Talent</h1>
          <p className="product-hero-subtitle">
            Our first product: connecting non-technical founders with world-class developers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="product-main-section">
        <div className="product-main-container">
          <div className="product-overview">
            <h2 className="product-section-title">What is Vamo Talent?</h2>
            <p className="product-text">
              <strong>Vamo Talent</strong> is our marketplace that pairs ambitious non-technical founders with skilled developers who can bring their ideas to life.
            </p>
            <p className="product-text">
              Whether you're in the Vamo Fellowship or building something on your own, we'll match you with the perfect technical co-founder to turn your vision into reality.
            </p>
          </div>

          <div className="product-image-wrapper">
            <img src="/fellow-3.png" alt="Vamo Talent profiles" className="product-main-img" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features-section">
        <div className="product-features-container">
          <h2 className="product-section-title centered">How it works</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">1</div>
              <h3 className="feature-title">Share your idea</h3>
              <p className="feature-text">
                Tell us about your product idea and what kind of technical expertise you need.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">2</div>
              <h3 className="feature-title">Get matched</h3>
              <p className="feature-text">
                We connect you with vetted developers who have the right skills for your project.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">3</div>
              <h3 className="feature-title">Build together</h3>
              <p className="feature-text">
                Work alongside your developer to create a product your customers will love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="product-why-section">
        <div className="product-why-container">
          <h2 className="product-section-title">Why Vamo Talent?</h2>

          <div className="why-list">
            <div className="why-item">
              <h3 className="why-heading">Vetted developers</h3>
              <p className="why-text">
                Every developer in our network has been carefully screened for technical skills and communication ability.
              </p>
            </div>

            <div className="why-item">
              <h3 className="why-heading">Built for non-technical founders</h3>
              <p className="why-text">
                We understand you might not know how to code, and that's okay. Our process is designed to help you communicate your vision effectively.
              </p>
            </div>

            <div className="why-item">
              <h3 className="why-heading">Fellowship support</h3>
              <p className="why-text">
                Vamo Fellows get priority access and additional support to ensure they can complete the 100-day challenge successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section">
        <div className="product-cta-container">
          <h2 className="product-cta-heading">Ready to build your product?</h2>
          <p className="product-cta-subheading">Visit Vamo Talent to find your perfect developer match.</p>
          <a href="https://vamo.xyz/" target="_blank" rel="noopener noreferrer" className="btn-product-cta">Visit Vamo Talent</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo-wrapper">
              <img src="/vamo-logo-gray.svg" alt="Vamo Fellowship" className="footer-logo-img" />
            </div>
            <a href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com" target="_blank" rel="noopener noreferrer" className="btn-apply-footer">Apply now</a>
          </div>
          <p className="footer-copyright">© 2025 BeWanted, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default FirstProduct;
