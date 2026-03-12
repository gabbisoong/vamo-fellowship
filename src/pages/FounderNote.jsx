import React from "react";
import { Link } from "react-router-dom";
import vamoLogo from "../assets/vamo-logo.svg";
import founderPhoto from "../assets/vamo-bolun.png";
import gradientBg from "../assets/gradient-bottom.png";
import "./FounderNote.css";

function FounderNote() {
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

          <p>I had no idea what I was doing — until a mentor named Scott saw potential in me and my idea and gave me $100k to make it happen.</p>

          <p>But Scott didn't stop there — he set a challenge for me: sell his product to 10 customers in 3 months. It felt impossible. I had no contacts, no product, just a powerpoint. But to my surprise, I made it happen, and those first 10 customers changed <strong>everything</strong>.</p>

          <p>Zogo's growth skyrocketed: 10 customers became 100, then 200. Eventually, Zogo was acquired for 8 figures in 2021 — just two months before graduation. I had won my bet, and it changed everything.</p>

          <p>Now, I'm on a mission to give others the opportunity that Scott gave me — to <strong>support the next generation of entrepreneurs</strong>.</p>
        </div>

        <div className="founder-signature">
          <p className="founder-sig-name">Bolun Li</p>
          <p className="founder-sig-role">(Non-technical) Founder of <strong>Zogo</strong></p>
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

      {/* Green gradient bottom */}
      <div className="founder-gradient-bottom">
        <img src={gradientBg} alt="" />
      </div>
    </div>
  );
}

export default FounderNote;
