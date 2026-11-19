import { NavLink } from "react-router-dom";
import { adminMenu } from "../../data/adminMenu";

function AdminSidebar() {
  return (
    <aside className="border-b border-line lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
      <div className="lg:sticky lg:top-[57px] lg:flex lg:min-h-[calc(100vh-57px)] lg:flex-col">
        <nav
          aria-label="Разделы админ-панели"
          className="flex gap-1 overflow-x-auto p-3 lg:flex-col lg:overflow-visible lg:p-4"
        >
          {adminMenu.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/admin"}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-card text-accent"
                    : "text-ink-muted hover:bg-card hover:text-ink"
                }`
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto hidden border-t border-line p-4 lg:block">
          <p className="text-xs leading-relaxed text-ink-muted">
            Учебный проект · управление выдачей оборудования
          </p>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;