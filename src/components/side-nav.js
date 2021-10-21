import { NavLink } from "react-router-dom";
import styles from '../App.module.scss'

export default function SideNav() {
  return <div className={styles.appAside}>
    <NavLink
      to='/'
      activeClassName={styles.sideNavTitleLinkActive}
      className={styles.sideNavTitleLink}>
      Home
    </NavLink>
    <NavLink
      to='/about-us'
      activeClassName={styles.sideNavTitleLinkActive}
      className={styles.sideNavTitleLink}>
      About Us
    </NavLink>
  </div>
}