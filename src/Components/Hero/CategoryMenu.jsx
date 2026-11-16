import { Link } from "react-router-dom";
import { ChevronRight, Menu } from "lucide-react";
import { categories } from "../../data/categories";

function CategoryMenu() {
  return (
    <nav className="hidden overflow-hidden rounded-2xl border border-line bg-card lg:block">
      <div className="flex items-center gap-2 bg-accent px-4 py-3 text-sm font-bold text-page">
        <Menu className="h-4 w-4" />
        Категории
      </div>

      <ul className="divide-y divide-line">
        {categories.map(({ name, icon: Icon }) => (
          <li key={name}>
            <Link
              to={`/equipment?category=${encodeURIComponent(name)}`}
              className="flex items-center gap-3 px-4 py-3 text-sm text-ink-muted transition-colors hover:text-accent"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{name}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryMenu;