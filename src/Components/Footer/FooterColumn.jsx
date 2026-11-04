function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        {title}
      </p>

      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;