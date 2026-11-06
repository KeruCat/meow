import { NavLink } from "react-router-dom";

function NavItem({ label, path }) {
  return (
    <a
      href={path}
      className={({ isActive }) =>
        `text-sm transition-colors hover:text-gray-950 ${
          isActive ? "text-gray-950" : "text-gray-600"
        }`
      }
    >
      {label}
    </a>
  );
}

export default NavItem;