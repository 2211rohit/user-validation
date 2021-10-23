import styles from '../App.module.scss'

export default function Footer() {
  return (
    <footer className={styles.pageFooter}>

    <div className={styles.footerLeft}>

      <h3 className={styles.footerCompanyName}>Company Name</h3>

      <p className={styles.footerLinks}>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/contact">Contact Us</a>
      </p>
    </div>

    <div className={styles.footerCenter}>
      <h3 className={styles.footerCompanyName}>Address:</h3>
      <p className={styles.footerInfo}>444 City CentreTech Park, New Delhi</p>
    </div>

    <div className={styles.footerRight}>

    <h3 className={styles.footerCompanyName}>About the company</h3>

      <p className={styles.footerInfo}>
        Lorem ipsum dolor sit amet, consectateur.
      </p>
    </div>
  </footer>
  )
}
