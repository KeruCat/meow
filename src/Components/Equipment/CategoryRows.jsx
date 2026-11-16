import CategoryRow from "./CategoryRow";
import { categories } from "../../data/categories";

function CategoryRows() {
  return (
    <>
      {categories.map(({ name, icon }) => (
        <CategoryRow key={name} name={name} icon={icon} />
      ))}
    </>
  );
}

export default CategoryRows;