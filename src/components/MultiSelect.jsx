export default function MultiSelect({ screen, selected, onToggle, onContinue }) {
  return (
    <div className="screen-container" key={screen.id}>
      <span className="screen-tag">{screen.tag}</span>
      <h1 className="screen-title">{screen.title}</h1>
      {screen.subtitle && <p className="screen-subtitle">{screen.subtitle}</p>}
      <ul className="options-list">
        {screen.options.map((opt, i) => (
          <li
            key={i}
            className={`option-card multi${selected.includes(i) ? ' selected' : ''}`}
            onClick={() => onToggle(i)}
          >
            <span className="option-label">{opt.label}</span>
            <span className="option-text">{opt.text}</span>
            <span className="option-check" />
          </li>
        ))}
      </ul>
      <button
        className="continue-btn"
        disabled={selected.length === 0}
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
}
