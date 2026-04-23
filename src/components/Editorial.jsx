export default function Editorial({ screen, onContinue }) {
  return (
    <div className="screen-container" key={screen.id}>
      <span className="screen-tag">{screen.tag}</span>
      <p className="editorial-warning">{screen.warning}</p>
      {screen.headline && <h2 className="editorial-headline">{screen.headline}</h2>}
      {screen.paragraphs.map((p, i) => (
        <p key={i} className="editorial-paragraph">{p}</p>
      ))}
      {screen.closingBold && <p className="editorial-bold">{screen.closingBold}</p>}
      {screen.scripture && <p className="editorial-scripture">{screen.scripture}</p>}
      <button className="continue-btn" onClick={onContinue}>
        {screen.cta}
      </button>
    </div>
  );
}
