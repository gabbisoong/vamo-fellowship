import React from "react";
import "./FounderNote.css";

function FounderNote() {
  return (
    <div className="founder-note-page">
      {/* Hero Section */}
      <section className="founder-hero">
        <div className="founder-hero-container">
          <h1 className="founder-hero-title">A Note from the Founder</h1>
        </div>
      </section>

      {/* Founder Content */}
      <section className="founder-main-section">
        <div className="founder-main-container">
          <div className="founder-image-section">
            <img src="/bolun.png" alt="Bolun Li" className="founder-main-photo" />
          </div>

          <div className="founder-story">
            <p className="founder-story-text">
              Freshman year of college, I bet myself I'd buy a Ferrari before graduation. To win, I decided to start a company. That's how <strong>Zogo</strong>, the "Duolingo for financial literacy," was born.
            </p>

            <p className="founder-story-text">
              I had no idea what he was doing — until a mentor named Scott saw potential in me and my idea and gave me $100k to make it happen.
            </p>

            <p className="founder-story-text">
              But Scott didn't stop there — he set a challenge for me: sell his product to 10 customers in 3 months. It felt impossible. I had no contacts, no product, just a powerpoint. But to my surprise, I made it happen, and those first 10 customers changed <strong>everything</strong>.
            </p>

            <p className="founder-story-text">
              Zogo's growth skyrocketed: 10 customers became 100, then 200. Eventually, Zogo was acquired for 8 figures in 2021 — just two months before graduation. I had won my bet, and it changed everything.
            </p>

            <p className="founder-story-text">
              Now, I'm on a mission to give others the opportunity that Scott gave me — to <strong>support the next generation of entrepreneurs</strong>.
            </p>

            <div className="founder-signature-section">
              <img src="/bolun-signature.svg" alt="Bolun Li signature" className="signature-img" />
              <div className="signature-details">
                <div className="signature-name">Bolun Li</div>
                <div className="signature-role">(Non-technical) Founder of <strong>Zogo</strong></div>
                <div className="signature-mission">Giving back with <strong>Vamo Fellowships</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="founder-cta-section">
        <div className="founder-cta-container">
          <h2 className="founder-cta-heading">Ready to bet on yourself?</h2>
          <p className="founder-cta-subheading">Join the fellowship and take the challenge.</p>
          <a href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com" target="_blank" rel="noopener noreferrer" className="btn-founder-cta">Apply now</a>
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

export default FounderNote;
