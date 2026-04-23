export default function Offer({ screen, selected, onSelect }) {
  return (
    <div className="screen-container" key={screen.id}>
      <span className="screen-tag">{screen.tag}</span>
      <h1 className="screen-title">{screen.title}</h1>
      <p className="screen-subtitle">{screen.subtitle}</p>

      <div className="offer-items">
        {screen.items.map((item, i) => (
          <div key={i} className="offer-item">
            <span className="offer-item-number">{String(i + 1).padStart(2, '0')}</span>
            <div className="offer-item-content">
              <div className="offer-item-title">{item.title}</div>
              <div className="offer-item-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

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
