export function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="search-bar">
      <span className="sr-only">Search playbooks</span>
      <span aria-hidden="true">⌕</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search by risk, system, or response..." />
      {value && <button type="button" onClick={() => onChange("")}>Clear search</button>}
    </label>
  );
}
