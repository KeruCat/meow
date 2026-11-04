import { ArrowRight } from "lucide-react";

function SectionHeader({ eyebrow, title, linkText, href }) {
  return (
    <div>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <a href={href}>
        {linkText}
        <ArrowRight/>  
      </a>
    </div>
  );
}

export default SectionHeader;