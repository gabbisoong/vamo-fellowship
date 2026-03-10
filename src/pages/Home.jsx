import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import vamoLogo from "../assets/vamo-logo.svg";
import gradientBg from "../assets/gradient-bottom.png";
import "./Home.css";

function Home() {
  const phrases = [
    "the ones who bet on themselves",
    "the doers, not the dreamers",
    "the ones who make it happen",
    "the self-starters",
    "the ones who grind",
    "the hustlers",
    "the ones who start with nothing",
    "the ones with high-agency",
  ];

  const duplicatedPhrases = [...phrases, ...phrases, ...phrases, ...phrases];
  const scrollContainerRef = useRef(null);
  const phraseRefs = useRef([]);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const updateOpacities = () => {
      if (!scrollContainerRef.current) return;

      const forLabel = document.querySelector('.phrase-label');
      if (!forLabel) return;

      const container = scrollContainerRef.current;
      const forLabelRect = forLabel.getBoundingClientRect();
      const forCenterY = forLabelRect.top + forLabelRect.height / 2;

      phraseRefs.current.forEach((phraseEl) => {
        if (!phraseEl) return;

        const phraseRect = phraseEl.getBoundingClientRect();
        const phraseCenterY = phraseRect.top + phraseRect.height / 2;
        const distance = Math.abs(phraseCenterY - forCenterY);
        const fadeDistance = 30;
        let opacity = 0.2;

        if (distance < fadeDistance) {
          opacity = 1 - (distance / fadeDistance) * 0.8;
          opacity = Math.max(0.2, Math.min(1, opacity));
        }

        phraseEl.style.opacity = opacity;
      });

      requestAnimationFrame(updateOpacities);
    };

    updateOpacities();
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simple email validation
    if (!email || !email.includes('@')) {
      setSubmitMessage("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate submission (you'll want to integrate with your actual email service)
    setTimeout(() => {
      setSubmitMessage("Thanks for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="home-page">
      {/* Top Navigation */}
      <div className="home-nav-wrapper">
        <div className="home-nav-container">
          <div className="home-logo">
            <img src={vamoLogo} alt="Vamo" className="home-logo-img" />
          </div>
          <button className="home-get-discovered-btn">Get Discovered</button>
        </div>
      </div>

      {/* Vertical Navigation Menu */}
      <nav className="vertical-nav">
        <Link to="/" className="vertical-nav-item">
          {/* Placeholder for icon - will be replaced */}
          <span className="nav-icon">✈</span>
        </Link>
        <Link to="/founder" className="vertical-nav-item">
          {/* Placeholder for icon - will be replaced */}
          <span className="nav-icon">📄</span>
        </Link>
        <Link to="/product" className="vertical-nav-item">
          {/* Placeholder for icon - will be replaced */}
          <span className="nav-icon">⋮⋮⋮</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src={gradientBg} alt="" className="hero-bg-img" />
        </div>

        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-description">
              <p className="hero-text-new">
                Vamo is the largest network of <em>quiet geniuses</em> behind the next generation's <strong>$1M+ ideas.</strong>
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="hero-email-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="hero-email-input"
                disabled={isSubmitting}
              />
              <button type="submit" className="hero-email-btn" disabled={isSubmitting}>
                {isSubmitting ? "..." : "Get Discovered"}
              </button>
            </form>

            {submitMessage && (
              <p className={`hero-email-message ${submitMessage.includes('Thanks') ? 'success' : 'error'}`}>
                {submitMessage}
              </p>
            )}

            <p className="hero-note-text">A NOTE FROM THE FOUNDER</p>
          </div>

          <div className="hero-right">
            <div className="phrases-container">
              <div className="phrase-label">For</div>
              <div className="phrases-wrapper" ref={scrollContainerRef}>
                <div className="phrases-scroll-container">
                  {duplicatedPhrases.map((phrase, index) => (
                    <div
                      key={index}
                      className="phrase"
                      ref={(el) => {
                        phraseRefs.current[index] = el;
                      }}
                    >
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-gradient-fade"></div>
      </section>
    </div>
  );
}

export default Home;
