import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.headerNavLink} ${styles.active}` : styles.headerNavLink;

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={getNavLinkClassName}>
          Recipes
        </NavLink>

        <NavLink to="/favorites" className={getNavLinkClassName}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
