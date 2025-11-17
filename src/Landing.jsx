import React, { useEffect, useRef } from "react";
import "./Landing.css";
import vamoLogo from "./assets/vamo-logo.svg";

function Landing() {
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

  // Duplicate phrases multiple times for seamless infinite scroll
  const duplicatedPhrases = [...phrases, ...phrases, ...phrases, ...phrases];
  const scrollContainerRef = useRef(null);
  const phraseRefs = useRef([]);

  useEffect(() => {
    // Skip carousel animation on mobile devices (768px and below)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const updateOpacities = () => {
      if (!scrollContainerRef.current) return;

      // Find the "For" label to get its position
      const forLabel = document.querySelector('.phrase-label');
      if (!forLabel) return;

      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const forLabelRect = forLabel.getBoundingClientRect();
      
      // Calculate the center Y position where "For" is located
      // We want phrases to align with the vertical center of "For" label
      const forCenterY = forLabelRect.top + forLabelRect.height / 2;
      
      phraseRefs.current.forEach((phraseEl, index) => {
        if (!phraseEl) return;
        
        const phraseRect = phraseEl.getBoundingClientRect();
        const phraseCenterY = phraseRect.top + phraseRect.height / 2;
        
        // Calculate distance from phrase center to "For" center
        const distance = Math.abs(phraseCenterY - forCenterY);
        
        // Calculate opacity: full opacity when aligned, fade to 0.2 as distance increases
        const fadeDistance = 30; // Distance in pixels where fade starts (smaller = faster fade)
        let opacity = 0.2;
        
        if (distance < fadeDistance) {
          // Linear fade: 1.0 at distance 0, 0.2 at distance fadeDistance
          opacity = 1 - (distance / fadeDistance) * 0.8;
          opacity = Math.max(0.2, Math.min(1, opacity));
        }
        
        phraseEl.style.opacity = opacity;
      });

      requestAnimationFrame(updateOpacities);
    };

    updateOpacities();
  }, []);

  return (
    <div className="landing-page">
      {/* Header/Navigation */}
      <header className="hero-header">
        <div className="hero-header-container">
          <div className="logo">
            <img src={vamoLogo} alt="Vamo Fellowship" className="logo-img" />
          </div>
          <a href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com" target="_blank" rel="noopener noreferrer" className="btn-apply-header">Apply now</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Background Gradient SVG */}
        <div className="hero-background">
          <svg
            width="1440"
            height="340"
            viewBox="0 0 1440 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-bg-svg"
          >
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(720 0) rotate(90) scale(340 3182.19)"
              >
                <stop stopColor="#F5F4F4" />
                <stop offset="1" stopColor="#E7FEEF" />
              </radialGradient>
              <filter id="filter0_f" x="615.027" y="-59.0789" width="1080.83" height="887.822">
                <feGaussianBlur stdDeviation="155.963" result="effect1_foregroundBlur" />
              </filter>
              <filter id="filter1_f" x="-255.853" y="-59.0789" width="1080.83" height="887.822">
                <feGaussianBlur stdDeviation="155.963" result="effect1_foregroundBlur" />
              </filter>
              <filter id="filter2_f" x="-45.5031" y="50.059" width="1531" height="743.771">
                <feGaussianBlur stdDeviation="116.972" result="effect1_foregroundBlur" />
              </filter>
            </defs>
            <rect opacity="0.5" width="1440" height="340" fill="url(#paint0_radial)" />
            <ellipse
              cx="1155.44"
              cy="384.832"
              rx="228.486"
              ry="131.984"
              fill="#7CFFAE"
              fillOpacity="0.4"
              opacity="0.5"
              filter="url(#filter0_f)"
            />
            <ellipse
              cx="284.559"
              cy="384.832"
              rx="228.486"
              ry="131.984"
              fill="#7CFFAE"
              fillOpacity="0.4"
              opacity="0.5"
              filter="url(#filter1_f)"
            />
            <ellipse
              cx="719.999"
              cy="421.944"
              rx="531.557"
              ry="137.94"
              fill="#A6FEC3"
              opacity="0.8"
              filter="url(#filter2_f)"
            />
          </svg>
        </div>

        <div className="hero-container">
          {/* Left Section - Main Content */}
          <div className="hero-left">
            <div className="hero-headline">
              <h1 className="hero-title-main">100 Days</h1>
              <h1 className="hero-title-accent">$100k.</h1>
            </div>

            <div className="hero-description">
              <p className="hero-text">
                We give <strong>$100K</strong> <strong>cash</strong> <strong>prizes</strong> to the
                next generation of <span className="hero-text-highlight">NON-TECHNICAL TALENT.</span>
              </p>
            </div>

            <a href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com" target="_blank" rel="noopener noreferrer" className="btn-apply-primary">Apply now</a>
          </div>

          {/* Right Section - Scrolling Phrases */}
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

        {/* Gradient fade at top of right section */}
        <div className="hero-gradient-fade"></div>
      </section>

      {/* About Section */}
      <section className="about-section">
        {/* Main Content */}
        <div className="about-content">
          <h2 className="about-heading">A REWARD FOR THOSE WHO BET ON THEMSELVES</h2>
          
          <div className="about-text-container">
            <p className="about-text">
              Maybe you went to community college, or didn't finish school at all. Maybe you cut hair in a salon, sell cars at a dealership, or serve tables at a restaurant.
            </p>
            
            <p className="about-text">
              You're the underdog. You know you're meant for more, but right now, you're stuck and searching for the way up.
            </p>
            
            <p className="about-text">
              You've sold things and made money.
            </p>
            
            <p className="about-text">
              You get people — what they want, what's off, and how to make them tick.
            </p>
            
            <p className="about-text about-text-inline">
              <span>You're a fighter, and </span>
              <span className="text-highlight">YOU WANT TO WIN.</span>
            </p>
            
            <p className="about-text">
              It doesn't matter to us where you're from or what you do now.
            </p>
            
            <p className="about-text about-text-inline">
              <span>What matters is </span>
              <span className="text-highlight">YOU'RE READY TO GO ALL IN.</span>
            </p>
          </div>

          <a href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com" target="_blank" rel="noopener noreferrer" className="btn-join-fellowship">Join the fellowship</a>
        </div>
      </section>

      {/* How to Become a Vamo Fellow Section */}
      <section className="how-to-section">
        <div className="how-to-container">
          {/* Title */}
          <div className="how-to-title-wrapper">
            <h3 className="how-to-subtitle">HOW TO BECOME A</h3>
            <div className="how-to-title-main">
              <h2 className="how-to-title-text">Vamo Fellow</h2>
              <span className="how-to-tm">™</span>
            </div>
          </div>

          {/* Steps */}
          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-item">
              <div className="step-content">
                <div className="step-number">1</div>
                <div className="step-text-wrapper">
                  <h4 className="step-title">
                    Choose an industry you're <strong>well-connected in</strong>
                  </h4>
                  <p className="step-description">
                    Anything from car dealerships, lawn mowing, hedge fund, cosmetology
                  </p>
                </div>
              </div>
              <div className="step-icons">
                <img src="/fellow-1.png" alt="Industry icons" className="step-icon-img" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-item">
              <div className="step-content">
                <div className="step-number">2</div>
                <div className="step-text-wrapper">
                  <h4 className="step-title">
                    Vibe-code a prototype for a useful product in that industry.
                  </h4>
                </div>
              </div>
              <div className="step-mockup">
                <img src="/fellow-2.png" alt="Code editor mockup" className="step-mockup-img" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-item">
              <div className="step-content step-content-3">
                <div className="step-number">3</div>
                <div className="step-text-wrapper">
                  <h4 className="step-title">
                    We match you to the perfect developer.
                  </h4>
                </div>
              </div>
              <div className="step-button-wrapper">
                <a href="https://vamo.xyz/" target="_blank" rel="noopener noreferrer" className="btn-visit-talent">Visit Vamo Talent</a>
              </div>
              <div className="step-profiles">
                <img src="/fellow-3.png" alt="Vamo Talent profiles" className="step-profiles-img" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="step-item">
              <div className="step-content">
                <div className="step-number">4</div>
                <div className="step-text-wrapper">
                  <h4 className="step-title">
                    You have 100 days to sign 10 pilot customers for that idea.
                  </h4>
                </div>
              </div>
              <div className="step-icons">
                <img src="/fellow-4.png" alt="100 Days calendar" className="step-icon-img" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="step-item">
              <div className="step-content">
                <div className="step-number">5</div>
                <div className="step-text-wrapper">
                  <h4 className="step-title">
                    Succeed? We give you a cash prize of <strong>$100k</strong>, no strings attached! 🎉
                  </h4>
                </div>
              </div>
              <div className="step-mockup">
                <img src="/fellow-5.png" alt="$100k cash prize" className="step-mockup-img" />
              </div>
            </div>

            {/* Step 6 */}
            <div className="step-item">
              <div className="step-content">
                <div className="step-number">6</div>
                <div className="step-text-wrapper">
                  <h4 className="step-title">
                    Then <strong>you</strong> get to decide if you want to stay on as CEO and take it to the next level.
                  </h4>
                </div>
              </div>
              <div className="step-profiles">
                <img src="/fellow-6.png" alt="CEO decision" className="step-profiles-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Believe Section */}
      <section className="we-believe-section">
        <div className="we-believe-container">
          <h2 className="we-believe-title">We believe</h2>
          
          <div className="beliefs-list">
            {/* Belief 1 */}
            <div className="belief-item">
              <div className="belief-content">
                <h3 className="belief-heading">
                  Sales is <strong>everything</strong>
                </h3>
                <p className="belief-text">
                  <strong>Selling is the ultimate life skill.</strong> It gets you promoted, attracts top talent, builds businesses, and even sparks relationships. The best often don't come from elite schools or have perfect resumes—they're underdog until they prove their worth. We're here to help them do just that.
                </p>
              </div>
              <div className="belief-separator"></div>
            </div>

            {/* Belief 2 */}
            <div className="belief-item">
              <div className="belief-content">
                <h3 className="belief-heading">Tech will be a commodity</h3>
                <p className="belief-text">
                  As AI advances, building tech products will become easier, but <strong>forging deep relationships with customers will become harder</strong>. Technology matters, but relationships matter more—they're the true foundation of lasting success in business.
                </p>
              </div>
              <div className="belief-separator"></div>
            </div>

            {/* Belief 3 */}
            <div className="belief-item">
              <div className="belief-content">
                <h3 className="belief-heading">Money matters</h3>
                <p className="belief-text">
                  <strong>Starting a company is tough</strong>—it's the ultimate test of delayed gratification. Even with success, it can take years before you see a dollar in your own pocket, while your peers enjoy steady, high salaries. That's why we're offering $100k if you succeed in the challenge—to give you the stability and focus to fully commit to building a billion-dollar business for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Box Section */}
      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-box">
            <div className="founder-image-wrapper">
              <img src="/bolun.png" alt="Bolun Li" className="founder-photo" />
            </div>
            <div className="founder-content">
              <h3 className="founder-note-title">A Note from the Founder</h3>
              <div className="founder-text">
                <p>
                  Freshman year of college, I bet myself I'd buy a Ferrari before graduation. To win, I decided to start a company. That's how <strong>Zogo</strong>, the "Duolingo for financial literacy," was born.
                </p>
                <p>
                  I had no idea what he was doing — until a mentor named Scott saw potential in me and my idea and gave me $100k to make it happen.
                </p>
                <p>
                  But Scott didn't stop there — he set a challenge for me: sell his product to 10 customers in 3 months. It felt impossible. I had no contacts, no product, just a powerpoint. But to my surprise, I made it happen, and those first 10 customers changed <strong>everything</strong>.</p>
                <p>
                  Zogo's growth skyrocketed: 10 customers became 100, then 200. Eventually, Zogo was acquired for 8 figures in 2021 — just two months before graduation. I had won my bet, and it changed everything.                </p>
                <p>
                Now, I'm on a mission to give others the opportunity that Scott gave me — to <strong>support the next generation of entrepreneurs</strong>.
                </p>
              </div>
              <div className="founder-signature">
                <img src="/bolun-signature.svg" alt="Bolun Li signature" className="signature-svg" />
                <div className="signature-title">(Non-technical) Founder of <strong>Zogo</strong></div>
                <div className="signature-affiliation">Giving back with <strong>Vamo Fellowships</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-heading">Ready for the challenge?</h2>
          <p className="cta-subheading">Show us what you can offer the world.</p>
          <a href="https://prcphuf5zmd.typeform.com/to/lAnbVfCL?typeform-source=www.pineapplefellowship.com" target="_blank" rel="noopener noreferrer" className="btn-apply-cta">Apply now</a>
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

export default Landing;
