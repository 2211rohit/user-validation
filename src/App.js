import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignInForm from "./components/user-form";
import LandingPage from "./components/landing-page";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <div className={styles.appAside}>
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
            <NavLink
              to='/contact'
              activeClassName={styles.sideNavTitleLinkActive}
              className={styles.sideNavTitleLink}>
              Contact Us
            </NavLink>
          </div>
          <div className={styles.appForm}>
            <LandingPage />
            <Route path="/" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
