import { LayoutDashboard, Package, Tag, CalendarCheck, Users } from "lucide-react";

export const adminMenu = [
  { label: "Обзор", icon: LayoutDashboard, path: "/admin" },
  { label: "Оборудование", icon: Package, path: "/admin/equipment" },
  { label: "Категории", icon: Tag, path: "/admin/categories" },
  { label: "Бронирования", icon: CalendarCheck, path: "/admin/bookings" },
  { label: "Клиенты", icon: Users, path: "/admin/clients" }
];