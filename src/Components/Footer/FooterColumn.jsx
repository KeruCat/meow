function FooterColumn({ title, links }) {
  return (
    <div>
      <p>
        {title}
      </p>

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;