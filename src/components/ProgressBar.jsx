export default function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}
