import ProductCard from "../productCard/ProductCard";

function ProductGrid({ products }) {
  return (
    <div>
      <p className="text-sm text-gray-500">Найдено товаров: {products.length}</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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