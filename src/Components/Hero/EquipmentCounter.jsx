function EquipmentCounter({ count }) {
  return (
    <div className="absolute bottom-4 right-4 hidden rounded-xl border border-line bg-card/90 px-4 py-2.5 backdrop-blur sm:block">
      <p className="text-xs text-ink-muted">Позиций в каталоге</p>
      <p className="text-2xl font-bold text-accent">{count}</p>
    </div>
  );
}

export default EquipmentCounter;