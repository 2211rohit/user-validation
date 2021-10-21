import { NavLink } from "react-router-dom";
import styles from '../App.module.scss'

export default function Footer() {
  return (
    <div>
      <div className={styles.pageFooter}>
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
