function EquipmentCounter({ count }) {
  return (
    <div className="absolute -bottom-4 left-5 rounded-xl border border-line bg-page px-4 py-3 shadow-sm">
      <p className="text-xs text-ink-muted">
        Позиций в каталоге
      </p>

      <span className="mt-1 block text-xl font-medium text-ink">
        {count}
      </span>
    </div>
  );
}

export default EquipmentCounter;
