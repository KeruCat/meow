import { Search as SearchIcon } from "lucide-react";

function Search() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex overflow-hidden rounded-lg border border-accent"
    >
      <input
        type="text"
        placeholder="Поиск оборудования"
        className="min-w-0 flex-1 bg-card px-4 py-2 text-sm text-ink outline-none placeholder:text-ink-muted/60"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-accent px-4 text-sm font-medium text-page transition-colors hover:bg-accent-dim"
      >
        <SearchIcon className="h-4 w-4" />
        Найти
      </button>
    </form>
  );
}

export default Search;