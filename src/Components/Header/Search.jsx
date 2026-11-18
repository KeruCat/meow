import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const text = query.trim();
    navigate(text ? `/equipment?search=${encodeURIComponent(text)}` : "/equipment");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex overflow-hidden rounded-lg border border-accent"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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