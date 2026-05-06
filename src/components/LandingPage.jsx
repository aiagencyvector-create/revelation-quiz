import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './LandingPage.css';

const stats = [
  { value: '2022', label: 'BIS published programmable CBDC framework' },
  { value: '2023', label: 'WEF unveiled global governance roadmap' },
  { value: '2024', label: 'NATO modeled multi-front conflict on Israel' },
  { value: '95 AD', label: 'John described it all — from Patmos' },
];

const chapters = [
  { num: '01', title: 'Wars & Geopolitics', desc: 'Ezekiel 38, Daniel 2, Revelation 16 — mapped to Russia, Iran, China, and Israel today.' },
  { num: '02', title: 'The Global Economic System', desc: 'CBDCs, the BIS framework, and Revelation 13:17 — "no one may buy or sell."' },
  { num: '03', title: 'AI & The Mark', desc: 'Biometric surveillance, digital identity systems, and what Scripture actually says.' },
  { num: '04', title: 'Climate & The Trumpets', desc: 'How Trumpet judgments in Revelation 8-9 align with documented environmental data.' },
  { num: '05', title: 'The Post-Tribulation Case', desc: '1,800 years of Church history + 14 key Scripture passages.' },
  { num: '06', title: 'Complete Prophetic Timeline', desc: 'Every seal, trumpet, and bowl — mapped to historical and current events.' },
];

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const num = parseInt(end);
    if (isNaN(num)) { setCount(end); return; }
    let frame = 0;
    const totalFrames = Math.round(duration / 16);
    const counter = setInterval(() => {
      frame++;
      setCount(Math.round(num * Math.min(frame / totalFrames, 1)));
      if (frame >= totalFrames) clearInterval(counter);
    }, 16);
    return () => clearInterval(counter);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function RevealOnScroll({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const startQuiz = () => navigate('/quiz');

  return (
    <div className="landing">
      {/* ===== HERO — Full Cinematic ===== */}
      <section className="hero">
        <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.25}px)` }}>
          <div className="hero-bg-img hero-bg-1" />
          <div className="hero-bg-img hero-bg-2" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-fire-glow" />
        <div className="hero-content">
          <RevealOnScroll>
            <div className="hero-badge">A PROPHECY & REALITY ASSESSMENT</div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <h1 className="hero-title">
              WHAT IF EVERYTHING<br />
              <span className="hero-highlight">IS ALREADY HAPPENING?</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <p className="hero-subtitle">
              Bible meets Geopolitics, Science & Economics.<br />
              A personalized assessment that connects what you're seeing
              to what was written 2,000 years ago.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={600}>
            <button className="hero-cta" onClick={startQuiz}>
              <span>Take the Assessment</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <p className="hero-micro">Free &middot; 3 minutes &middot; No email required</p>
          </RevealOnScroll>
        </div>
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ===== PROBLEM — Cinematic Split ===== */}
      <section className="section section-problem">
        <div className="section-bg-accent" />
        <div className="section-inner">
          <RevealOnScroll>
            <span className="section-tag">THE DISCONNECT</span>
            <h2 className="section-title">
              You can feel it.<br />
              <span className="text-accent">Something is converging.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="section-text">
              The war in the Middle East. The economy on the edge. AI accelerating beyond control.
              Natural disasters that won't stop. You've heard sermons about "the end times" —
              but no one has connected the <strong>actual data</strong> to the <strong>actual text</strong>.
            </p>
          </RevealOnScroll>
          <div className="problem-grid">
            {[
              'Churches teach Revelation as symbolic — disconnected from current events',
              'The pre-tribulation rapture view has left millions unprepared to endure',
              "Geopolitical data confirms prophecy — but secular institutions don't reference Scripture",
              "Most believers can't explain the prophetic timeline — even to their own families",
            ].map((text, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="problem-card">
                  <div className="problem-line" />
                  <p>{text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVIDENCE — Data Wall ===== */}
      <section className="section section-data">
        <div className="section-inner">
          <RevealOnScroll>
            <span className="section-tag">THE EVIDENCE</span>
            <h2 className="section-title">
              Economists, Military Strategists, and Scientists<br />
              <span className="text-accent">Are Describing Revelation</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="data-timeline">
              {stats.map((stat, i) => (
                <div key={i} className="data-entry">
                  <div className="data-year">{stat.value}</div>
                  <div className="data-connector" />
                  <p className="data-desc">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="data-quote">
              <span className="data-quote-mark">"</span>
              <p>
                None of these institutions referenced the Bible. None of them are Christian organizations.
                And yet — a first-century exile named John, writing from the island of Patmos,
                described a world where no one could buy or sell without a mark, where a coalition of nations
                from the north would descend on Israel, where the entire global economic and political system
                would be centralized under one authority.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CINEMATIC BREAK — Scripture ===== */}
      <section className="cinematic-break">
        <div className="cinematic-break-bg" />
        <div className="cinematic-break-overlay" />
        <div className="cinematic-break-content">
          <RevealOnScroll>
            <p className="cinematic-verse">
              "He who endures to the end<br />will be saved."
            </p>
            <p className="cinematic-ref">Matthew 24:13</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHAPTERS — Grid ===== */}
      <section className="section section-chapters">
        <div className="section-inner">
          <RevealOnScroll>
            <span className="section-tag">WHAT THE ASSESSMENT REVEALS</span>
            <h2 className="section-title">
              Six domains. Real evidence.<br />One ancient source.
            </h2>
          </RevealOnScroll>
          <div className="chapters-grid">
            {chapters.map((ch, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="chapter-card">
                  <span className="chapter-num">{ch.num}</span>
                  <h3 className="chapter-title">{ch.title}</h3>
                  <p className="chapter-desc">{ch.desc}</p>
                  <div className="chapter-glow" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRANSFORMATION ===== */}
      <section className="section section-transform">
        <div className="section-inner">
          <RevealOnScroll>
            <span className="section-tag">THE SHIFT</span>
            <h2 className="section-title">What changes in 14 days</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="transform-table">
              <div className="transform-col">
                <div className="transform-header before">Before</div>
                {[
                  'Revelation feels symbolic and distant',
                  "Can't explain the timeline to anyone",
                  'Anxiety about the future — even as a believer',
                  'Avoids the topic in conversation',
                  'Waiting to be raptured out',
                ].map((item, i) => (
                  <div key={i} className="transform-row before">
                    <span className="transform-icon x" /> {item}
                  </div>
                ))}
              </div>
              <div className="transform-col">
                <div className="transform-header after">After</div>
                {[
                  'Every chapter maps to a verifiable current event',
                  'Clear timeline — peace in knowing the ending',
                  'Can connect Scripture to geopolitics, AI & economics',
                  "Ready to guide family through what's coming",
                  'Prepared to endure, resist, and overcome',
                ].map((item, i) => (
                  <div key={i} className="transform-row after">
                    <span className="transform-icon check" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== NUMBERS ===== */}
      <section className="section section-numbers">
        <div className="section-inner">
          <div className="numbers-grid">
            {[
              { end: '163', suffix: '', label: 'Pages' },
              { end: '14', suffix: '', label: 'Day protocol' },
              { end: '20', suffix: '', label: 'Min / day' },
              { end: '6', suffix: '', label: 'Chapters' },
            ].map((n, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="number-card">
                  <div className="number-value"><CountUp end={n.end} suffix={n.suffix} /></div>
                  <p>{n.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOK OFFER — Apocalyptic ===== */}
      <section className="section-book">
        <div className="book-bg">
          {/* Apocalyptic scene layers */}
          <div className="book-bg-sky" />
          <div className="book-bg-fire" />
          <div className="book-bg-embers" />
        </div>
        <div className="book-overlay" />
        <div className="book-content">
          <RevealOnScroll>
            <span className="section-tag">THE REVELATION INTELLIGENCE GUIDE</span>
          </RevealOnScroll>

          {/* Book visual */}
          <RevealOnScroll delay={200}>
            <div className="book-visual">
              <div className="book-glow" />
              <div className="book-object">
                <div className="book-cover">
                  <div className="book-spine" />
                  <div className="book-front">
                    <div className="book-inner-glow" />
                    <div className="book-title-block">
                      <span className="book-title-small">THE</span>
                      <span className="book-title-main">REVELATION</span>
                      <span className="book-title-main">INTELLIGENCE</span>
                      <span className="book-title-small">GUIDE</span>
                      <div className="book-title-line" />
                      <span className="book-title-sub">PROPHECY &middot; GEOPOLITICS &middot; SCIENCE</span>
                    </div>
                    <div className="book-pages-text">163 PAGES</div>
                  </div>
                </div>
                {/* Floating particles around book */}
                <div className="book-particle book-particle-1" />
                <div className="book-particle book-particle-2" />
                <div className="book-particle book-particle-3" />
                <div className="book-particle book-particle-4" />
                <div className="book-particle book-particle-5" />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <h2 className="book-headline">
              163 pages connecting ancient prophecy<br />
              to <span className="text-accent">what's happening right now</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="book-features">
              <div className="book-feature">
                <span className="book-feature-num">01</span>
                <div>
                  <strong>Complete Prophetic Timeline</strong>
                  <p>Every seal, trumpet, and bowl — mapped to historical and current events</p>
                </div>
              </div>
              <div className="book-feature">
                <span className="book-feature-num">02</span>
                <div>
                  <strong>Geopolitical Analysis</strong>
                  <p>Russia, Iran, China, Israel — how Ezekiel 38 is unfolding today</p>
                </div>
              </div>
              <div className="book-feature">
                <span className="book-feature-num">03</span>
                <div>
                  <strong>Economic Control Systems</strong>
                  <p>CBDCs, programmable currency, and Revelation 13:17</p>
                </div>
              </div>
              <div className="book-feature">
                <span className="book-feature-num">04</span>
                <div>
                  <strong>AI & The Mark</strong>
                  <p>Biometric surveillance, digital identity, and what Scripture actually says</p>
                </div>
              </div>
              <div className="book-feature">
                <span className="book-feature-num">05</span>
                <div>
                  <strong>14-Day Reading Plan</strong>
                  <p>20 minutes per day — one revelation per chapter, at your own pace</p>
                </div>
              </div>
              <div className="book-feature">
                <span className="book-feature-num">06</span>
                <div>
                  <strong>Readiness Checklist</strong>
                  <p>Printable — spiritual, practical, and relational preparation</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={500}>
            <div className="book-cta-box">
              <a
                href="https://buy.stripe.com/00w00b8vH5oX1WObB35Ne01"
                target="_blank"
                rel="noopener noreferrer"
                className="book-buy-btn"
              >
                <span>Get the Guide Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="book-secure">Secure checkout via Stripe &middot; Instant PDF delivery</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <p className="footer-scripture">
            "Blessed is the one who reads aloud the words of this prophecy, and blessed are those
            who hear it and take to heart what is written in it, because the time is near."
          </p>
          <p className="footer-ref">Revelation 1:3</p>
          <div className="footer-divider" />
          <p className="footer-copy">
            Revelation Intelligence Protocol
          </p>
        </div>
      </footer>
    </div>
  );
}
