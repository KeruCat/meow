import ProductCard from "../productCard/ProductCard";

function ProductGrid({ products }) {
  return (
    <div>
      <p>Найдено товаров: {products.length}</p>

      <div>
        {products.map((product) => (
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
    </div>
  );
}

export default ProductGrid;