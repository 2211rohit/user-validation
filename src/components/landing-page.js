import { NavLink } from "react-router-dom";
import styles from '../App.module.scss'

export default function LandingPage() {
  return (
    <div>
      <div className={styles.pageSwitcher}>
        <NavLink
          to="/"
          activeClassName={styles.pageSwitcherItemActive}
          className={styles.pageSwitcherItem}
        >
          Sign In
        </NavLink>
        <NavLink
          to="/about-us"
          activeClassName={styles.pageSwitcherItemActive}
          className={styles.pageSwitcherItem}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName={styles.pageSwitcherItemActive}
          className={styles.pageSwitcherItem}
        >
          Contact Us
        </NavLink>
      </div>

      <div className={styles.formTitle}>
        <NavLink
          to="/"
          activeClassName={styles.formTitleLinkActive}
          className={styles.formTitleLink}
        >
          Sign up here!
        </NavLink>
      </div>
    </div>
  );
}
