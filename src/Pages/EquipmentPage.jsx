import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import Breadcrumbs from "../Components/Breadcrumbs";
import FilterPanel from "../Components/Catalog/FilterPanel";
import FilterDrawer from "../Components/Catalog/FilterDrawer";
import SearchField from "../Components/Catalog/SearchField";
import SortSelect from "../Components/Catalog/SortSelect";
import EquipmentGrid from "../Components/Catalog/EquipmentGrid";
import Loader from "../Components/Status/Loader";
import ErrorMessage from "../Components/Status/ErrorMessage";
import { useEquipment } from "../hooks/useEquipment";
import {
  DEFAULT_FILTERS,
  countActiveFilters,
  filterEquipment,
  sortEquipment
} from "../utils/catalog";

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
  const [filtersOpen, setFiltersOpen] = useState(false); 

  useEffect(() => {
    setFilters(filtersFromUrl(urlSearch, urlCategory));
  }, [urlSearch, urlCategory]);

  const visibleEquipment = useMemo(
    () => sortEquipment(filterEquipment(equipment, filters), sort),
    [equipment, filters, sort]
  );

  const activeCount = countActiveFilters(filters);
  const closeFilters = useCallback(() => setFiltersOpen(false), []); 

  function updateFilters(patch) {
    setFilters((prev) => ({ ...prev, ...patch }));
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  const filterPanel = (
    <FilterPanel filters={filters} onChange={updateFilters} onReset={resetFilters} />
  );

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Главная", to: "/" }, { label: title }]} />

      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <div className="hidden lg:block">{filterPanel}</div>

        <div className="min-w-0">
          <div className="flex flex-wrap gap-3">
            <div className="w-full sm:w-auto sm:min-w-60 sm:flex-1">
              <SearchField
                value={filters.search}
                onChange={(search) => updateFilters({ search })}
              />
            </div>

            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-2 text-sm text-ink transition-colors hover:border-accent lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 text-accent" />
              Фильтры
              {activeCount > 0 && (
                <span className="rounded-full bg-accent px-2 text-xs font-bold text-page">
                  {activeCount}
                </span>
              )}
            </button>

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

      <FilterDrawer
        open={filtersOpen}
        onClose={closeFilters}
        resultsCount={visibleEquipment.length}
      >
        {filterPanel}
      </FilterDrawer>
    </section>
  );
}

export default EquipmentPage;