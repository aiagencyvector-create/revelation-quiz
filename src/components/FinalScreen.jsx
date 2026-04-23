export default function FinalScreen({ screen, onSelect }) {
  return (
    <div className="screen-container final-screen" key={screen.id}>
      <span className="screen-tag">{screen.tag}</span>
      <h1 className="screen-title">{screen.title}</h1>
      <p className="screen-subtitle">{screen.subtitle}</p>

      <ul className="options-list">
        {screen.options.map((opt, i) => (
          <li
            key={i}
            className="option-card"
            onClick={() => onSelect(i)}
          >
            <span className="option-label">{opt.label}</span>
            <span className="option-text">{opt.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
