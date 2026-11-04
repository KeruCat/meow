import { ArrowRight } from "lucide-react";

function CategoryCard({ name, image, href }) {
  return (
    <a
      href={href}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-gray-400"
    >
      <div className="aspect-[5/4] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3.5">
        <span className="text-sm font-semibold text-gray-900">{name}</span>
        <ArrowRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

export default CategoryCard;