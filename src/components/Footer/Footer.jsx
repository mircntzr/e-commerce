import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <span className={styles.footerTitle}>About Us</span>
        <ul>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <span className={styles.footerTitle}>Help</span>
        <ul>
          <li>FAQ</li>
          <li>Returns and Exchanges</li>
          <li>Shipping Information</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <span className={styles.footerTitle}>Follow Us</span>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <span className={styles.footerTitle}>Download the App</span>
        <div className={styles.appLinks}>
          <a href="#">
            <i className="fab fa-apple"></i>
          </a>
          <a href="#">
            <i className="fab fa-google-play"></i>
          </a>
        </div>
      </div>
      <div className={styles.footerSection}>
        <span className={styles.footerTitle}>Subscribe</span>
        <div className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your email address" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
