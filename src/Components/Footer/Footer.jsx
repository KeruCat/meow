import Brand from "../Header/Brand";
import FooterColumn from "./FooterColumn";

const columns = [
  {
    title: "Каталог",
    links: [
      { label: "Все товары", href: "/products" },
      { label: "Новинки", href: "/products?sort=new" },
      { label: "Скидки", href: "/products" }
    ]
  },
  {
    title: "Покупателям",
    links: [
      { label: "Корзина", href: "/cart" },
      { label: "Вход", href: "/login" },
      { label: "Регистрация", href: "/register" }
    ]
  },
  {
    title: "Магазин",
    links: [
      { label: "Админ-панель", href: "/admin" },
      { label: "Управление товарами", href: "/admin/products" },
      { label: "Категории", href: "/admin/categories" }
    ]
  }
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand name="Витрина" />

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
            Учебный интернет-магазин: витрина, корзина и админ-панель с CRUD на React.
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

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Витрина. Учебный проект.</p>
          <p>Дизайн-система: React · Tailwind CSS · React Router</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;