import FilterGroup from "./FilterGroup";

const categories = ["Одежда", "Спорт", "Электроника", "Дом"];

const inputClass =
  "";

function FilterPanel() {
  return (
    <aside>
      <h2>Фильтры</h2>

      <div>
        <FilterGroup title="Категория">
          {categories.map((category) => (
            <label
              key={category}
            >
              <input type="checkbox" />
              {category}
            </label>
          ))}
        </FilterGroup>

        <FilterGroup title="Цена, ₽">
          <div>
            <input type="number" placeholder="От" />
            <input type="number" placeholder="До" />
          </div>
        </FilterGroup>

        <FilterGroup title="Наличие">
          <label >
            <input type="checkbox" />
            Только в наличии
          </label>
        </FilterGroup>
      </div>

      <div>
        <button
          type="button"
        >
          Сбросить
        </button>
        <button
          type="button"
        >
          Применить
        </button>
      </div>
    </aside>
  );
}

export default FilterPanel;