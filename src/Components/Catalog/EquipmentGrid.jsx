import EquipmentCard from "../EquipmentCard/EquipmentCard.jsx";

function ProductGrid({ equipment }) {
  return (
    <div>
      <p className="text-sm text-gray-500">Найдено позиций: {equipment.length}</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {equipment .map((equipment) => (
          <EquipmentCard
            key={equipment.id}
            id={equipment.id}
            name={equipment.name}
            category={equipment.category}
            image={equipment.image}
            price={equipment.price}
            inStock={equipment.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;