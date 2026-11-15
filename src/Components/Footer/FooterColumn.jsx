import NavItem from "../Header/NavItem.jsx";
function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        {title}
      </p>

      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <NavItem
                path={link.href}
                label={link.label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;