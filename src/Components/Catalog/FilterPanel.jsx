import FilterGroup from "./FilterGroup.jsx";
import { categories } from "../../data/categories.jsx";

const inputClass = "w-full rounded-lg border border-line bg-page px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400";

function FilterPanel() {
  return (
    <aside className="h-fit rounded-xl border border-line bg-page p-5">
      <h2 className="text-base font-semibold text-ink">Фильтры</h2>

      <div className="mt-4">
        <FilterGroup title="Даты аренды">
          <label className="block text-xs text-ink-muted">
            С
            <input type="date" className={`${inputClass} mt-1`} />
          </label>
          <label className="block text-xs text-ink-muted">
            По
            <input type="date" className={`${inputClass} mt-1`} />
          </label>
        </FilterGroup>

        <FilterGroup title="Категория">
          {categories.map((category) => (
            <label key={category.name} className="flex items-center gap-2 text-sm text-ink-muted">
              <input type="checkbox" className="h-4 w-4 accent-accent" />
              {category.name}
            </label>
          ))}
        </FilterGroup>

        <FilterGroup title="Цена за сутки, ₽">
          <div className="grid grid-cols-2 gap-2">
            <input type="number" placeholder="От" className={inputClass} />
            <input type="number" placeholder="До" className={inputClass} />
          </div>
        </FilterGroup>

        <FilterGroup title="Доступность">
          <label className="flex items-center gap-2 text-sm text-ink-muted">
            <input type="checkbox" className="h-4 w-4 accent-accent" />
            Только свободное
          </label>
        </FilterGroup>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="h-9 rounded-md border border-line bg-page text-sm font-medium text-ink transition-colors hover:bg-card"
        >
          Сбросить
        </button>
        <button
          type="button"
          className="h-9 rounded-md bg-accent text-sm font-medium text-page transition-colors hover:bg-accent-dim"
        >
          Применить
        </button>
      </div>
    </aside>
  );
}

export default FilterPanel;