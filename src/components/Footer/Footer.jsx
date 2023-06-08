import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    setEmail("");
    alert("Başarıyla bültenimize kaydoldunuz!");
  };
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>COMPANY</h3>

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li
            onClick={() => navigate("/contactus")}
            className={styles.contactUs}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Help</h3>
        <ul>
          <li>Order Tracking</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Follow Us</h3>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/vintaggycom/" target="blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footerSection}>
        <span className={styles.footerTitle}>
          Subscribe{" "}
          <button className={styles.FooterBtn} onClick={handleSubmit}>
            Submit
          </button>{" "}
        </span>
        <div className={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.SocialIcons}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
          <a
            href="https://www.instagram.com/vintaggycom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
