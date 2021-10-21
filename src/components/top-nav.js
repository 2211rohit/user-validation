import { NavLink } from "react-router-dom";
import styles from '../App.module.scss'

export default function TopNav() {
  return (
    <div>
      <div className={styles.pageSwitcher}>
        <NavLink
          to="/"
          className={styles.pageSwitcherItem}
        >
          SignIn
        </NavLink>
        <NavLink
          to="/contact"
          className={styles.pageSwitcherItem}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}
