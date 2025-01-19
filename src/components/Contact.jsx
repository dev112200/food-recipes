import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.box}>
      <div className={styles.contactContainer}>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.contactInfo}>
          <div className={styles.contactSection}>
            <h2>Email</h2>
            <p>
              If you have any questions or inquiries, feel free to reach us at:
            </p>
            <p className={styles.email}>contact@foodrecipes.com</p>
          </div>

          <div className={styles.contactSection}>
            <h2>Location</h2>
            <p>We are based in:</p>
            <p className={styles.location}>Tundla, Firozabad,U.P (283204)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
