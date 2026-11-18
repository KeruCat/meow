import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import FilterPanel from "../Components/Catalog/FilterPanel";
import SearchField from "../Components/Catalog/SearchField";
import SortSelect from "../Components/Catalog/SortSelect";
import EquipmentGrid from "../Components/Catalog/EquipmentGrid";
import Loader from "../Components/Status/Loader";
import ErrorMessage from "../Components/Status/ErrorMessage";
import { useEquipment } from "../hooks/useEquipment";
import { DEFAULT_FILTERS, filterEquipment, sortEquipment } from "../utils/catalog";

function filtersFromUrl(search, category) {
  return {
    ...DEFAULT_FILTERS,
    search,
    categories: category ? [category] : []
  };
}

function EquipmentPage({ eyebrow, title }) {
  const { equipment, loading, error, reload } = useEquipment();

  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get("search") ?? "";
  const urlCategory = searchParams.get("category");

  const [filters, setFilters] = useState(() => filtersFromUrl(urlSearch, urlCategory));
  const [sort, setSort] = useState("default");

  const visibleEquipment = useMemo(
    () => sortEquipment(filterEquipment(equipment, filters), sort),
    [equipment, filters, sort]
  );

  function updateFilters(patch) {
    setFilters((prev) => ({ ...prev, ...patch }));
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-8">
      <Breadcrumbs items={[{ label: "Главная", to: "/" }, { label: title }]} />

      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-ink">
          {title}
        </h1>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <FilterPanel filters={filters} onChange={updateFilters} onReset={resetFilters} />

        <div>
          <div className="flex flex-wrap gap-3">
            <div className="min-w-60 flex-1">
              <SearchField
                value={filters.search}
                onChange={(search) => updateFilters({ search })}
              />
            </div>
            <SortSelect value={sort} onChange={setSort} />
          </div>

          <div className="mt-4">
            {loading && <Loader />}
            {error && <ErrorMessage message={error} onRetry={reload} />}
            {!loading && !error && (
              <EquipmentGrid
                equipment={visibleEquipment}
                total={equipment.length}
                onReset={resetFilters}
              /> 
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentPage;