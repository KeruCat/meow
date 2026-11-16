import Brand from "../Header/Brand.jsx";
import FooterColumn from "./FooterColumn.jsx";
const columns = [
  {
    title: "Каталог",
    links: [
      { label: "Всё оборудование", href: "/equipment" },
      { label: "Звук", href: "/equipment?category=Звук" },
      { label: "Свет", href: "/equipment?category=Свет" }
    ]
  },
  {
    title: "Клиентам",
    links: [
      { label: "Бронирование", href: "/booking" },
      { label: "Вход", href: "/login" },
      { label: "Регистрация", href: "/register" }
    ]
  },
  {
    title: "Управление",
    links: [
      { label: "Админ-панель", href: "/admin" },
      { label: "Оборудование", href: "/admin/equipment" },
      { label: "Бронирования", href: "/admin/bookings" }
    ]
  }
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-page">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand name="Эвент-Прокат" />

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Прокат оборудования для мероприятий: каталог, доступность, сроки и онлайн-бронирование.
          </p>
        </div>

        {columns.map((column) => (
          <FooterColumn
            key={column.title}
            title={column.title}
            links={column.links}
          />
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Эвент-Прокат. Учебный проект.</p>
          <p>Дизайн-система: React · Tailwind CSS · React Router</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;