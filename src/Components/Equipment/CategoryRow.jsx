import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import EquipmentCard from "../EquipmentCard/EquipmentCard";
import { equipment } from "../../data/equipment";

function CategoryRow({ name, icon: Icon }) {
  const items = equipment.filter((item) => item.category === name).slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 pt-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-2.5 text-xl font-bold text-ink">
          <Icon className="h-5 w-5 text-accent" />
          {name}
        </h2>

        <Link
          to={`/equipment?category=${encodeURIComponent(name)}`}
          className="flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
        >
          Все в категории
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <EquipmentCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default CategoryRow;