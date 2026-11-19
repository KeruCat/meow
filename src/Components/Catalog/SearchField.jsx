import { Search, X } from "lucide-react";

function SearchField({ value, onChange, placeholder }) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder = {placeholder}
        className="w-full rounded-lg border border-line bg-card py-2 pl-10 pr-9 text-sm text-ink outline-none placeholder:text-ink-muted/60 focus:border-accent"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Очистить поиск"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-ink-muted transition-colors hover:text-accent"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default SearchField;