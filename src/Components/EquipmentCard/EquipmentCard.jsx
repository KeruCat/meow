import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

function EquipmentCard({ id, name, category, image, pricePerDay, available, total, minDays }) {
  const href = `/equipment/${id}`;
  const isAvailable = available > 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent">
      <Link to={href} className="block aspect-[4/3] overflow-hidden bg-page">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-ink-muted">{category}</p>

        <h3 className="mt-1.5 line-clamp-2 min-h-10 text-sm font-semibold leading-snug text-ink">
          <Link to={href} className="hover:text-accent">
            {name}
          </Link>
        </h3>

        <p className="mt-2 whitespace-nowrap text-lg font-bold text-accent">
          {pricePerDay.toLocaleString("ru-RU")} ₽{" "}
          <span className="text-xs font-normal text-ink-muted">/ сутки</span>
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 whitespace-nowrap rounded-lg bg-page px-3 py-1.5 text-[11px]">
          <span
            className={`flex min-w-0 items-center gap-1.5 font-medium ${
              isAvailable ? "text-accent" : "text-ink-muted/60"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                isAvailable ? "bg-accent" : "bg-ink-muted/40"
              }`}
            ></span>
            <span className="truncate">
              {isAvailable ? `Свободно: ${available} из ${total}` : "Нет свободных"}
            </span>
          </span>

          <span className="shrink-0 text-ink-muted">от {minDays} сут.</span>
        </div>

        <div className="mt-auto flex gap-2 pt-4">
          <Link
            to={href}
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-line px-3 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Подробнее
          </Link>

          <button
            type="button"
            disabled={!isAvailable}
            className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-accent px-2 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-page disabled:cursor-not-allowed disabled:border-line disabled:text-ink-muted/40 disabled:hover:bg-transparent"
          >
            <CalendarCheck className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Забронировать</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default EquipmentCard;