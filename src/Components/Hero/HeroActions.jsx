import { Link } from "react-router-dom";

function HeroActions() {
  return (
    <div className="mt-8 flex items-center gap-3">
      <Link
        to="/equipment"
        className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-page transition-colors hover:bg-accent-dim"
      >
        Выбрать оборудование
      </Link>

      <Link
        to="/admin"
        className="rounded-lg border border-line bg-page px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-card"
      >
        Админ-панель
      </Link>
    </div>
  );
}

export default HeroActions;