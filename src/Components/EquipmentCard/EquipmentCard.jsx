import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

function EquipmentCard({ id, name, category, image, pricePerDay, available, total, minDays }) {
  const href = `/equipment/${id}`;
  const isAvailable = available > 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-gray-400">
      <Link to={href} className="block aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-gray-500">{category}</p>

        <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-gray-900">
          <Link to={href} className="hover:underline">
            {name}
          </Link>
        </h3>

        <p className="mt-2 text-[15px] font-semibold text-gray-900">
          {pricePerDay} ₽{" "}
          <span className="text-xs font-normal text-gray-500">/ сутки</span>
        </p>

        <div className="mt-2 flex items-center justify-between gap-2 text-[11px] font-medium">
          <span
            className={`flex items-center gap-1.5 ${
              isAvailable ? "text-emerald-900" : "text-gray-400"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isAvailable ? "bg-emerald-900" : "bg-gray-400"
              }`}
            ></span>
            {isAvailable ? `Свободно: ${available} из ${total}` : "Нет свободных"}
          </span>

          <span className="text-gray-500">от {minDays} сут.</span>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <Link
            to={href}
            className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 text-xs font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
          >
            Подробнее
          </Link>

          <button
            type="button"
            disabled={!isAvailable}
            className="inline-flex h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-emerald-900 px-3 text-xs font-medium text-white shadow transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            Забронировать
          </button>
        </div>
      </div>
    </article>
  );
}

export default EquipmentCard;