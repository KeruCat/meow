import { ShoppingBag } from "lucide-react";

function ProductCard({ id, name, category, image, price, inStock }) {
  const href = `/products/${id}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-gray-400">
      <a href={href} className="block aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </a>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-gray-500">{category}</p>

        <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-gray-900">
          <a href={href} className="hover:underline">
            {name}
          </a>
        </h3>

        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-[15px] font-semibold text-gray-900">
            {price.toLocaleString("ru-RU")} ₽
          </span>

          <span
            className={`flex items-center gap-1.5 text-[11px] font-medium ${
              inStock ? "text-emerald-900" : "text-gray-400"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                inStock ? "bg-emerald-900" : "bg-gray-400"
              }`}
            ></span>
            {inStock ? "В наличии" : "Нет в наличии"}
          </span>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <a
            href={href}
            className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 text-xs font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
          >
            Подробнее
          </a>

          <button
            type="button"
            className="inline-flex h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-emerald-900 px-3 text-xs font-medium text-white shadow transition-colors hover:bg-emerald-800"
          >
            <ShoppingBag/>
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;