import { ArrowRight } from "lucide-react";

function SectionHeader({ eyebrow, title, linkText, href }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-medium uppercase text-gray-500">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-gray-900" style={{ color: "rgb(89, 89, 91)" }}>
          {title}
        </h2>
      </div>

      <a
        href={href}
        className="hidden items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 sm:flex"
      >
        {linkText}
        <ArrowRight/>  
      </a>
    </div>
  );
}

export default SectionHeader;