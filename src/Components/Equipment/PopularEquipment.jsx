import SectionHeader from "../SectionHeader.jsx";
import EquipmentCard from "../EquipmentCard/EquipmentCard.jsx";
import { equipment } from "../../data/equipment.jsx";

function PopularEquipment() {
  const popular = equipment.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16">
      <SectionHeader
        eyebrow="Чаще всего арендуют"
        title="Популярное оборудование"
        linkText="Смотреть все"
        href="/equipment"
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {popular.map((item) => (
          <EquipmentCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            image={item.image}
            pricePerDay={item.pricePerDay}
            minDays={item.minDays}
            inStock={item.inStock}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularEquipment;