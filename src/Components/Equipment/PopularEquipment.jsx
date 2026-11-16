import EquipmentCard from "../EquipmentCard/EquipmentCard.jsx";
import SectionHeader from "../SectionHeader.jsx";
import { equipment } from "../../data/equipment.jsx";

function PopularEquipment() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16">
      <SectionHeader
        eyebrow="Чаще всего арендуют"
        title="Популярное оборудование"
        linkText="Смотреть все"
        href="/equipment"
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {equipment.slice(0,4).map((item) => (
          <EquipmentCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            image={item.image}
            available={item.available}
            total={item.total}
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
