export default function Completion() {
  return (
    <div className="screen-container">
      <div className="completion">
        <h2>Your Assessment Is Complete.</h2>
        <p className="completion-text">
          Based on your answers, the 14-Day Revelation Intelligence Protocol
          is the next step to connecting what you're seeing in the world
          to what was written 2,000 years ago.
        </p>

        <div className="completion-offer">
          <div className="completion-book">
            <div className="completion-book-glow" />
            <div className="completion-book-cover">
              <span className="completion-book-sm">THE</span>
              <span className="completion-book-title">REVELATION</span>
              <span className="completion-book-title">INTELLIGENCE</span>
              <span className="completion-book-sm">GUIDE</span>
              <div className="completion-book-line" />
              <span className="completion-book-sub">163 PAGES</span>
            </div>
          </div>

          <div className="completion-details">
            <h3>What you'll receive:</h3>
            <ul>
              <li>163-page illustrated PDF guide</li>
              <li>Complete prophetic timeline — wall-ready</li>
              <li>Wars, economics, AI & climate mapped to Scripture</li>
              <li>The post-tribulation case with 14 key passages</li>
              <li>14-day reading plan — 20 min/day</li>
              <li>"Am I Prepared?" readiness checklist</li>
            </ul>
          </div>
        </div>

        <a
          href="https://buy.stripe.com/00w00b8vH5oX1WObB35Ne01"
          target="_blank"
          rel="noopener noreferrer"
          className="completion-buy-btn"
        >
          <span>Get the Revelation Intelligence Guide</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <p className="completion-secure">Secure checkout via Stripe &middot; Instant PDF delivery</p>

        <p className="completion-scripture">
          "He who has an ear, let him hear what the Spirit says to the churches."
          <br />
          <span>Revelation 2:7</span>
        </p>
      </div>
    </div>
  );
}
