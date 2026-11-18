import { Link } from "react-router-dom";

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
        {title}
      </p>

      <ul className="mt-3 space-y-1 sm:mt-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="inline-block py-1 text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;