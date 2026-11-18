import FilterGroup from "./FilterGroup";
import { categories } from "../../data/categories";
import { countActiveFilters } from "../../utils/catalog";

const inputClass =
  "w-full rounded-lg border border-line bg-page px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-muted/60 focus:border-accent";

const dayOptions = [
  { value: "", label: "Любой срок" },
  { value: "1", label: "1 сутки" },
  { value: "2", label: "2 суток" },
  { value: "3", label: "3 суток" }
];

function FilterPanel({ filters, onChange, onReset }) {
  const activeCount = countActiveFilters(filters);

  function toggleCategory(name) {
    const selected = filters.categories.includes(name)
      ? filters.categories.filter((category) => category !== name)
      : [...filters.categories, name];

    onChange({ categories: selected });
  }

  return (
    <aside className="h-fit rounded-xl border border-line bg-card p-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-semibold text-ink">
          Фильтры
          {activeCount > 0 && (
            <span className="rounded-full bg-accent px-2 text-xs font-bold text-page">
              {activeCount}
            </span>
          )}
        </h2>

        <button
          type="button"
          onClick={onReset}
          disabled={activeCount === 0}
          className="text-xs font-medium text-accent hover:underline disabled:cursor-not-allowed disabled:text-ink-muted/40 disabled:no-underline"
        >
          Сбросить
        </button>
      </div>

      <div className="mt-4">
        <FilterGroup title="Категория">
          {categories.map(({ name }) => (
            <label key={name} className="flex items-center gap-2 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={filters.categories.includes(name)}
                onChange={() => toggleCategory(name)}
                className="h-4 w-4 accent-accent"
              />
              {name}
            </label>
          ))}
        </FilterGroup>

        <FilterGroup title="Цена за сутки, ₽">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              min="0"
              placeholder="От"
              value={filters.priceMin}
              onChange={(e) => onChange({ priceMin: e.target.value })}
              className={inputClass}
            />
            <input
              type="number"
              min="0"
              placeholder="До"
              value={filters.priceMax}
              onChange={(e) => onChange({ priceMax: e.target.value })}
              className={inputClass}
            />
          </div>
        </FilterGroup>

        <FilterGroup title="Срок аренды">
          <select
            value={filters.maxDays}
            onChange={(e) => onChange({ maxDays: e.target.value })}
            className={inputClass}
          >
            {dayOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FilterGroup>

        <FilterGroup title="Доступность">
          <label className="flex items-center gap-2 text-sm text-ink-muted">
            <input
              type="checkbox"
              checked={filters.onlyAvailable}
              onChange={(e) => onChange({ onlyAvailable: e.target.checked })}
              className="h-4 w-4 accent-accent"
            />
            Только свободное
          </label>
        </FilterGroup>
      </div>
    </aside>
  );
}

export default FilterPanel;