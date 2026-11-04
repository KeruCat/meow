import SectionHeader from "../SectionHeader";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Одежда",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
  },
  {
    name: "Спорт",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
  },
  {
    name: "Электроника",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
  }
];

function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10">
      <SectionHeader
        eyebrow="Категории"
        title="Популярные категории"
        linkText="Весь каталог"
        href="/products"
      />

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            href={`/products?category=${encodeURIComponent(category.name)}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;