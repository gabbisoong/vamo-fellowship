import { useState } from "react";
import vamoLogo from "../assets/vamo-logo.svg";
import founderPhoto from "../assets/vamo-bolun.png";
import gradientBg from "../assets/gradient-bottom.png";
import bolunSignature from "../assets/bolun-li-signature.svg";
import "./FounderNote.css";

function FounderNote() {
  const [footerEmail, setFooterEmail] = useState("");

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Footer email submitted:", footerEmail);
    setFooterEmail("");
  };

  return (
    <div className="founder-page">

      {/* Top Navigation */}
      <div className="home-nav-wrapper">
        <div className="home-nav-container">
          <div className="home-logo">
            <img src={vamoLogo} alt="Vamo" className="home-logo-img" />
          </div>
          <button className="home-get-discovered-btn">Get Discovered</button>
        </div>
      </div>

      {/* Film strip photo */}
      <div className="founder-photo-wrapper">
        <img src={founderPhoto} alt="Bolun Li" className="founder-photo" />
      </div>

      {/* Letter card */}
      <div className="founder-card">
        <p className="founder-date">MARCH 9, 2026</p>
        <h1 className="founder-title">For the Quiet Geniuses</h1>

        <div className="founder-body">
          <p>Freshman year of college, I bet myself I'd buy a Ferrari before graduation. To win, I decided to start a company. That's how Zogo, the "Duolingo for financial literacy," was born.</p>

          <p>I had no contacts, no product, just a powerpoint. But</p>

          <p>Zogo's growth skyrocketed: 10 customers became 100, then 200. Eventually, Zogo was acquired for 8 figures in 2021 — just two months before graduation. I had won my bet.</p>

          <p>Now, I'm on a mission to give others the opportunity that Scott gave me — to support the next generation of quiet geniuses.</p>
        </div>

        <div className="founder-signature">
          <img src={bolunSignature} alt="Bolun Li" className="founder-sig-name-img" />
          <p className="founder-sig-name">Bolun Li</p>
          <p className="founder-sig-role">Non-technical Founder of Zogo</p>
          <p className="founder-sig-mission">Giving back with <strong>Vamo Fellowships</strong></p>
        </div>

        <a
          href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com"
          target="_blank"
          rel="noopener noreferrer"
          className="founder-apply-btn"
        >
          Apply now
        </a>
      </div>

      {/* Mobile footer (visible only on mobile via CSS) */}
      <div className="founder-mobile-footer">
        <div className="founder-footer-top">
          <div className="founder-footer-info">
            <img src={vamoLogo} alt="Vamo" className="founder-footer-logo" />
            <div className="founder-footer-text">
              <p className="founder-footer-company">BeWanted, Inc.</p>
              <p className="founder-footer-copyright">&copy; 2026 All Rights Reserved.</p>
            </div>
          </div>
          <form className="founder-footer-email-form" onSubmit={handleFooterSubmit}>
            <input
              type="email"
              className="founder-footer-email-input"
              placeholder="YOUR EMAIL"
              value={footerEmail}
              onChange={(e) => setFooterEmail(e.target.value)}
              required
            />
            <button type="submit" className="founder-footer-email-btn" aria-label="Submit email">
              &rarr;
            </button>
          </form>
        </div>
        <p className="founder-footer-socials">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
          {" \u00B7 "}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>

      {/* Green gradient bottom */}
      <div className="founder-gradient-bottom">
        <img src={gradientBg} alt="" />
      </div>
    </div>
  );
}

export default FounderNote;
