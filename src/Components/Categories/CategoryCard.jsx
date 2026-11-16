import { ArrowRight } from "lucide-react";

function CategoryCard({ name, image, href }) {
  return (
    <a
      href={href}
      className="group overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent"
    >
      <div className="aspect-[5/4] overflow-hidden bg-card">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3.5">
        <span className="text-sm font-semibold text-ink">{name}</span>
        <ArrowRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

export default CategoryCard;