import { ArrowRight } from "lucide-react";

function CategoriesHeader() {
  return (
    <div>
      <div>
        <p>Категории</p>
        <h2>Популярные категории</h2>
      </div>

      <a href="/products">
        Весь каталог
        <ArrowRight />
      </a>
    </div>
  );
}

export default CategoriesHeader;