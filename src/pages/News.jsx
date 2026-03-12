import React from "react";
import vamoLogo from "../assets/vamo-logo.svg";
import gradientBg from "../assets/gradient-bottom.png";
import "./News.css";

function News() {
  return (
    <div className="news-page">

      {/* Top Navigation */}
      <div className="home-nav-wrapper">
        <div className="home-nav-container">
          <div className="home-logo">
            <img src={vamoLogo} alt="Vamo" className="home-logo-img" />
          </div>
          <button className="home-get-discovered-btn">Get Discovered</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="news-content">

        {/* Header */}
        <div className="news-header">
          <h1 className="news-heading">News</h1>
          <p className="news-subheading">
            Read the coverage and conversations about how<br />
            Vamo is changing talent discovery.
          </p>
        </div>

        {/* News List */}
        <div className="news-list-section">

          {/* Business Insider */}
          <a
            href="https://www.businessinsider.com/hiring-managers-arent-reading-resumes-slop-2026-3"
            target="_blank"
            rel="noreferrer"
            className="news-row"
          >
            <div className="news-row-left">
              <span className="news-row-source">BUSINESS INSIDER</span>
              <h2 className="news-row-title">RIP Résumés</h2>
              <span className="news-row-date">MARCH 6, 2026</span>
              <span className="news-read-more">READ MORE</span>
            </div>
            <div className="news-row-right">
              <div className="news-card">
                <img src="/business-insider.png" alt="Business Insider" className="news-card-img" />
              </div>
            </div>
          </a>

          <div className="news-row-divider" />

          {/* Consumer Startups */}
          <a
            href="https://www.consumerstartups.com/p/vamo-finding-a-co-founder-on-tinder-8-figure-exit-at-22-and-the-future-of-recruiting"
            target="_blank"
            rel="noreferrer"
            className="news-row"
          >
            <div className="news-row-left news-row-left-wide">
              <span className="news-row-source">CONSUMER STARTUPS</span>
              <h2 className="news-row-title">Vamo: Finding a co-founder on Tinder, 8-figure exit at 22, and the future of recruiting</h2>
              <span className="news-row-date">MARCH 10, 2026</span>
              <span className="news-read-more">READ MORE</span>
            </div>
            <div className="news-row-right">
              <div className="news-card">
                <img src="/consumer-startups.png" alt="Consumer Startups" className="news-card-img" />
              </div>
            </div>
          </a>

        </div>
      </div>

      {/* Green gradient pinned to bottom */}
      <div className="news-gradient-bottom">
        <img src={gradientBg} alt="" />
      </div>
    </div>
  );
}

export default News;
