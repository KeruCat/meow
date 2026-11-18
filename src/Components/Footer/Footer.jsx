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
    <footer className="mt-16 border-t border-line bg-page sm:mt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:grid-cols-3 sm:px-6 sm:py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Brand name="Эвент-Прокат" alwaysShowName />

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
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Эвент-Прокат. Учебный проект.</p>
          <p>React · Tailwind CSS · React Router</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;