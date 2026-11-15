import SectionHeader from "../SectionHeader.jsx";
import CategoryCard from "./CategoryCard.jsx";

const categories = [
  { name: "Звук", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" },
  { name: "Свет", image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80" },
  { name: "Сцена", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80" },
  { name: "Мебель", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80" }
];



function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10">
      <SectionHeader
        eyebrow="Категории"
        title="Категории оборудования"
        linkText="Весь каталог"
        href="/equipment"
      />;

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            href={`/equipment?category=${encodeURIComponent(category.name)}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;