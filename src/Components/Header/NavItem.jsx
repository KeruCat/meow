import { NavLink } from "react-router-dom";

function NavItem({ label, path }) {
  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-accent ${
          isActive ? "text-accent" : "text-ink-muted"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default NavItem;