import Breadcrumbs from "../Components/Breadcrumbs";
import FilterPanel from "../Components/Catalog/FilterPanel";
import SortSelect from "../Components/Catalog/SortSelect";
import EquipmentGrid from "../Components/Catalog/EquipmentGrid";
import Loader from "../Components/Status/Loader";
import ErrorMessage from "../Components/Status/ErrorMessage";
import { useEquipment } from "../hooks/useEquipment";

function EquipmentPage({ eyebrow, title }) {
  const { equipment, loading, error, reload } = useEquipment();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-8">
      <Breadcrumbs items={[{ label: "Главная", to: "/" }, { label: title }]} />

      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-ink">
            {title}
          </h1>
        </div>

        <SortSelect />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <FilterPanel />

        <div>
          {loading && <Loader />}
          {error && <ErrorMessage message={error} onRetry={reload} />}
          {!loading && !error && <EquipmentGrid equipment={equipment} />}
        </div>
      </div>
    </section>
  );
}

export default EquipmentPage;