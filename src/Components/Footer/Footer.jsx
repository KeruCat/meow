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
    <footer>
      <div>
        <div>
          <Brand name="Витрина" />

          <p>
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

      <div>
        <div>
          <p>© 2026 Витрина. Учебный проект.</p>
          <p>Дизайн-система: React · Tailwind CSS · React Router</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;