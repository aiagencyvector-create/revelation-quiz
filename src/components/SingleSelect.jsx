export default function SingleSelect({ screen, selected, onSelect }) {
  return (
    <div className="screen-container" key={screen.id}>
      <span className="screen-tag">{screen.tag}</span>
      <h1 className="screen-title">{screen.title}</h1>
      {screen.subtitle && <p className="screen-subtitle">{screen.subtitle}</p>}
      <ul className="options-list">
        {screen.options.map((opt, i) => (
          <li
            key={i}
            className={`option-card${selected === i ? ' selected' : ''}`}
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
