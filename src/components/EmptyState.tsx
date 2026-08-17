export function EmptyState() {
  return (
    <div className="empty-state">
      <span aria-hidden="true">∅</span>
      <h2>No matching playbooks</h2>
      <p>Try a system name, response type, or broader operational risk.</p>
    </div>
  );
}
