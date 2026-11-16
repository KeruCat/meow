import EquipmentCard from "../EquipmentCard/EquipmentCard.jsx";

function ProductGrid({ equipment }) {
  return (
    <div>
      <p className="text-sm text-ink-muted">Найдено позиций: {equipment.length}</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {equipment .map((equipment) => (
          <EquipmentCard
            key={equipment.id}
            id={equipment.id}
            name={equipment.name}
            category={equipment.category}
            image={equipment.image}
            pricePerDay={equipment.pricePerDay}
            available = {equipment.available}
            total={equipment.total}
            minDays={equipment.minDays}
            inStock={equipment.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;