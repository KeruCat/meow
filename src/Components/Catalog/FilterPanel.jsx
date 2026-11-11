import FilterGroup from "./FilterGroup";

const categories = ["Одежда", "Спорт", "Электроника", "Дом"];

const inputClass =
  "";

function FilterPanel() {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-base font-semibold text-gray-900">Фильтры</h2>

      <div className="mt-4">
        <FilterGroup title="Категория">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <input type="checkbox" className="h-4 w-4 accent-emerald-900" />
              {category}
            </label>
          ))}
        </FilterGroup>

        <FilterGroup title="Цена, ₽">
          <div className="grid grid-cols-2 gap-2">
            <input type="number" placeholder="От" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400" />
            <input type="number" placeholder="До" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400" />
          </div>
        </FilterGroup>

        <FilterGroup title="Наличие">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="h-4 w-4 accent-emerald-900" />
            Только в наличии
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