import { clsx } from "clsx";
import css from "./AdminPlannerNavigationSection.module.css";
import { NavLink } from "react-router-dom";

export default function AdminPlannerNavigationSection() {
  const navLinkClass = ({ isActive }) => {
    return clsx(css.navText, isActive && css.active);
  };

  return (
    <div className={css.navContainer}>
      <nav className={css.wrapper}>
        <NavLink to="calendar" className={navLinkClass}>
          Календар
        </NavLink>

        <NavLink to="leads" className={navLinkClass}>
          Ліди
        </NavLink>

        <NavLink to="clients" className={navLinkClass}>
          Клієнти
        </NavLink>
      </nav>
    </div>
  );
}
