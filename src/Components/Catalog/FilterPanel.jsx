import FilterGroup from "./FilterGroup.jsx";

const categories = ["Звук", "Свет", "Сцена", "Мебель"];

const inputClass = "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400";

function FilterPanel() {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-base font-semibold text-gray-900">Фильтры</h2>

      <div className="mt-4">
        <FilterGroup title="Даты аренды">
          <label className="block text-xs text-gray-500">
            С
            <input type="date" className={`${inputClass} mt-1`} />
          </label>
          <label className="block text-xs text-gray-500">
            По
            <input type="date" className={`${inputClass} mt-1`} />
          </label>
        </FilterGroup>

        <FilterGroup title="Категория">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="h-4 w-4 accent-emerald-900" />
              {category}
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
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="h-4 w-4 accent-emerald-900" />
            Только свободное
          </label>
        </FilterGroup>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="h-9 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
        >
          Сбросить
        </button>
        <button
          type="button"
          className="h-9 rounded-md bg-emerald-900 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
        >
          Применить
        </button>
      </div>
    </aside>
  );
}

export default FilterPanel;