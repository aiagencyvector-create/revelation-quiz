export default function Comparison({ screen, onContinue }) {
  return (
    <div className="screen-container" key={screen.id}>
      <span className="screen-tag">{screen.tag}</span>
      <h1 className="screen-title">{screen.title}</h1>

      <div className="comparison-table">
        <div className="comparison-header before">BEFORE</div>
        <div className="comparison-header after">AFTER</div>
        {screen.before.map((item, i) => (
          <>
            <div key={`b-${i}`} className="comparison-cell before">
              <span className="icon">❌</span> {item}
            </div>
            <div key={`a-${i}`} className="comparison-cell after">
              <span className="icon">✅</span> {screen.after[i]}
            </div>
          </>
        ))}
      </div>

      <button className="continue-btn" onClick={onContinue}>
        Continue →
      </button>
    </div>
  );
}
