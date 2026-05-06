const PROFILE_LABELS = {
  0: 'Committed Christian',
  1: 'Returning Believer',
  2: 'Spiritual Seeker',
  3: 'Skeptic Investigator',
};

const GAP_TOPICS = [
  'Global economic control & Revelation 13',
  'AI, surveillance & the Mark of the Beast',
  'Middle East geopolitics & Ezekiel 38',
  'Climate catastrophes & the Trumpet judgments',
  'Global government & the collapse of the West',
  'Post-tribulation — why Scripture supports it',
];

const DEPTH_LEVELS = {
  0: { label: 'Beginner', plan: 'Start with the 14-day reading plan — 20 minutes per day.' },
  1: { label: 'Intermediate', plan: 'Begin with the geopolitical & economic chapters first.' },
  2: { label: 'Advanced', plan: 'Jump straight into the post-tribulation case + timeline.' },
  3: { label: 'Expert', plan: 'Use the full timeline as a teaching reference.' },
};

export default function Completion({ answers = {} }) {
  const profileIdx = answers[2];
  const depthIdx = answers[4];
  const gapIndices = Array.isArray(answers[5]) ? answers[5] : [];

  const profile = profileIdx != null ? PROFILE_LABELS[profileIdx] : 'Reader';
  const depth = depthIdx != null ? DEPTH_LEVELS[depthIdx] : DEPTH_LEVELS[0];
  const focusAreas = gapIndices.length > 0
    ? gapIndices.map(i => GAP_TOPICS[i]).filter(Boolean)
    : ['Global economic control & Revelation 13', 'Middle East geopolitics & Ezekiel 38'];

  return (
    <div className="screen-container">
      <div className="completion">
        <span className="screen-tag">YOUR RESULT</span>
        <h2>Your Assessment Is Complete.</h2>
        <p className="completion-text">
          Based on your answers, here's the path we recommend for you.
        </p>

        <div className="result-card">
          <div className="result-row">
            <span className="result-label">Profile</span>
            <span className="result-value">{profile}</span>
          </div>
          <div className="result-row">
            <span className="result-label">Level</span>
            <span className="result-value">{depth.label}</span>
          </div>
          <div className="result-row result-row-stack">
            <span className="result-label">Your focus areas</span>
            <ul className="result-focus">
              {focusAreas.slice(0, 4).map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
          <div className="result-recommendation">
            <strong>Recommended next step:</strong> {depth.plan}
          </div>
        </div>

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
            <h3>What's inside:</h3>
            <ul>
              <li>163-page illustrated PDF guide</li>
              <li>Complete prophetic timeline — wall-ready</li>
              <li>Wars, economics, AI & climate mapped to Scripture</li>
              <li>The post-tribulation case with 14 key passages</li>
              <li>14-day reading plan — 20 min/day</li>
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
