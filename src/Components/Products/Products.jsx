import SectionHeader from "../SectionHeader";
import ProductCard from "../productCard/ProductCard";
import { products } from "../../data/products";
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