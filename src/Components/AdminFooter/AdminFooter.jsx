import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, Tag, ShoppingCart, Users } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { label: "Товары", icon: Package, path: "/admin/products" },
  { label: "Категории", icon: Tag, path: "/admin/categories" },
  { label: "Заказы", icon: ShoppingCart, path: "/admin/orders" },
  { label: "Пользователи", icon: Users, path: "/admin/users" },
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
        <p className="text-sm">Учебный шаблон · CRUD товаров и категорий</p>
      </div>
    </aside>
  );
}

export default AdminFooter;