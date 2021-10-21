import React from "react";
import styles from '../App.module.scss'

export default function AboutUs() {
  return (
    <div className={styles.formCenter}>
      <div className={styles.formTitle}>
        <h4
          className={styles.formTitleLink}
        >
          This is a about us page
        </h4>
      </div>
    </div>
  );
}
