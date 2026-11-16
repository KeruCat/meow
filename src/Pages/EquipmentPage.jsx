import Breadcrumbs from "../Components/Breadcrumbs";
import FilterPanel from "../Components/Catalog/FilterPanel";
import SortSelect from "../Components/Catalog/SortSelect";
import EquipmentGrid from "../Components/Catalog/EquipmentGrid";
import { equipment } from "../data/equipment";

function EquipmentPage({ eyebrow, title }) {
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
        <EquipmentGrid equipment={equipment} />
      </div>
    </section>
  );
}

export default EquipmentPage;