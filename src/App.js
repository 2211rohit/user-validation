import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInForm from "./components/user-form";
import TopNav from "./components/top-nav";
import styles from "./App.module.scss";
import SideNav from "./components/side-nav"
import AboutUs from "./components/about-us"
import ContactUs from "./components/contact-us"
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <div className={styles.App}>
        <TopNav />
        <SideNav />
        <div className={styles.appForm}>
        <Switch>
          <Route exact path="/">
            <SignInForm />
          </Route>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
        </Switch>
        </div>
      </div>
        <Footer/>
    </Router>
  );
}