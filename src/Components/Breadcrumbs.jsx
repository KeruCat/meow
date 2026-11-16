import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <nav
      aria-label="Хлебные крошки"
      className="flex flex-wrap items-center gap-2 text-xs text-ink-muted"
    >
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {index > 0 && <span>/</span>}

          {item.to ? (
            <Link to={item.to} className="transition-colors hover:text-accent">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;