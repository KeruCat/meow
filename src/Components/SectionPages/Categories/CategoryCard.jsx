import { ArrowRight } from "lucide-react";

function CategoryCard({ name, image }) {
  return (
    <a >
      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <span>{name}</span>
        <ArrowRight/>  
      </div>
    </a>
  );
}

export default CategoryCard;