import { useState, useRef, useEffect } from 'react';

export default function AudioScreen({ screen, onContinue }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const togglePlay = () => {
    if (playing) {
      clearInterval(intervalRef.current);
      setPlaying(false);
    } else {
      setPlaying(true);
      intervalRef.current = setInterval(() => {
        setSeconds(prev => {
          if (prev >= 60) {
            clearInterval(intervalRef.current);
            setPlaying(false);
            return 60;
          }
          return prev + 1;
        });
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + (100 / 60);
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (s) => `0:${String(Math.min(s, 60)).padStart(2, '0')}`;

  return (
    <div className="screen-container" key={screen.id}>
      <span className="screen-tag">{screen.tag}</span>
      <h1 className="screen-title">{screen.title}</h1>
      <p className="screen-subtitle">{screen.subtitle}</p>

      <div className="audio-container">
        <div className="audio-authority">
          <div className="audio-authority-name">{screen.authority.name}</div>
          <div className="audio-authority-title">{screen.authority.title}</div>
        </div>

        <div className="audio-player">
          <button className="audio-play-btn" onClick={togglePlay}>
            {playing ? (
              <svg viewBox="0 0 24 24" width="18" height="18">
                <rect x="6" y="4" width="4" height="16" fill="white" />
                <rect x="14" y="4" width="4" height="16" fill="white" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18">
                <polygon points="6,4 20,12 6,20" fill="white" />
              </svg>
            )}
          </button>
          <div className="audio-track">
            <div className="audio-bar">
              <div className="audio-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="audio-time">{formatTime(seconds)} / 1:00</div>
          </div>
        </div>

        <div className="audio-quote">{screen.quote}</div>
      </div>

      <button className="continue-btn" onClick={onContinue}>
        Continue →
      </button>
    </div>
  );
}
