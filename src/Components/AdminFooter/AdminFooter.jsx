import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, Tag, CalendarCheck, Users } from "lucide-react";

const menuItems = [
  { label: "Обзор", icon: LayoutDashboard, path: "/admin" },
  { label: "Оборудование", icon: Package, path: "/admin/equipment" },
  { label: "Категории", icon: Tag, path: "/admin/categories" },
  { label: "Бронирования", icon: CalendarCheck, path: "/admin/bookings" },
  { label: "Клиенты", icon: Users, path: "/admin/clients" }
];

function AdminFooter() {
  return (
    <aside className="flex h-full min-h-screen w-64 flex-col">
      <nav className="flex flex-col gap-1 p-4">
        {menuItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            end={path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 ${isActive ? "active" : ""}`
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <p className="text-sm">Учебный проект · управление выдачей оборудования</p>
      </div>
    </aside>
  );
}

export default AdminFooter;