import EquipmentCard from "../EquipmentCard/EquipmentCard";

function EquipmentGrid({ equipment, total, onReset }) {
  return (
    <div>
      <p className="text-sm text-ink-muted">
        Найдено: {equipment.length} из {total}
      </p>

      {equipment.length === 0 ? (
        <div className="mt-4 rounded-xl border border-line bg-card p-10 text-center">
          <p className="font-medium text-ink">Ничего не найдено</p>
          <p className="mt-1 text-sm text-ink-muted">
            Попробуйте изменить запрос или сбросить фильтры.
          </p>

          <button
            type="button"
            onClick={onReset}
            className="mt-4 rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-page"
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {equipment.map((item) => (
            <EquipmentCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default EquipmentGrid;