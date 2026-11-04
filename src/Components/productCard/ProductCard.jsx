import { ShoppingBag } from "lucide-react";

function ProductCard({ id, name, category, image, price, inStock }) {
  const href = `/products/${id}`;

  return (
    <article>
      <a href={href}>
        <img src={image} alt={name} />
      </a>

      <div>
        <p>{category}</p>

        <h3>
          <a href={href}>{name}</a>
        </h3>

        <div>
          <span>{price} ₽</span>

          <span>
            <span></span>
            {inStock ? "• В наличии" : "• Нет в наличии"}
          </span>
        </div>

        <div>
          <a href={href}>Подробнее</a>

          <button type="button">
            <ShoppingBag />
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;