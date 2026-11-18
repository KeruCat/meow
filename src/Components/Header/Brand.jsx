import { Link } from "react-router-dom";

function Brand({ name }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-page">
        {name.charAt(0)}
      </span>
      <span className="hidden text-sm font-bold uppercase tracking-[0.16em] text-ink min-[144px]:inline">
        {name}
      </span>
    </Link>
  );
}

export default Brand;