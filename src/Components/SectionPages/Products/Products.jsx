import SectionHeader from "../SectionHeader";
import ProductCard from "../../productCard//ProductCard";

const products = [
  {
    id: 1,
    name: "Коврик для йоги Flow",
    category: "Спорт",
    price: 2790,
    inStock: true,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&q=80"
  },
  {
    id: 2,
    name: "Кроссовки Runner Pro",
    category: "Спорт",
    price: 8490,
    inStock: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
  },
  {
    id: 3,
    name: "Ваза Ceramic Sand",
    category: "Дом",
    price: 3490,
    inStock: true,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80"
  },
  {
    id: 4,
    name: "Настольная лампа Linea",
    category: "Дом",
    price: 4990,
    inStock: true,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80"
  }
];

function Products() {
  const popularProducts = products.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <SectionHeader
        eyebrow="Выбор покупателей"
        title="Популярные товары"
        linkText="Смотреть все"
        href="/products"
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;