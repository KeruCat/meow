import FilterPanel from "../Components/Catalog/FilterPanel";
import ProductGrid from "../Components/Catalog/ProductGrid";
import { products } from "../data/products";

function ProductsPage({ eyebrow, title }) {
  return (
    <section>
      <p>
        {eyebrow}
      </p>
      <h1>
        {title}
      </h1>
      
      <div>
        <FilterPanel />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

export default ProductsPage;