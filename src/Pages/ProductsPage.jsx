import FilterPanel from "../Components/Catalog/FilterPanel";
import ProductGrid from "../Components/Catalog/ProductGrid";
import { products } from "../data/products";

function ProductsPage({ eyebrow, title }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        {eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-5xl tracking-tight text-gray-900">
        {title}
      </h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <FilterPanel />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

export default ProductsPage;