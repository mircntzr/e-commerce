import React from "react";
import styles from "./ContactUs.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className={styles.ContactUs}>
        <h2>Contact Us</h2>
        <div className={styles.ContactUsContainer}>
          <p>+1 (315) 277-7161</p>
          <p>contact@berfka.com</p>
          <p>https://www.instagram.com/vintaggycom/</p>

          <p>Contact Me</p>
          <p>Fields marked with an * are required</p>

          <div className={styles.ContactUsInputs}>
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email *" />

            <textarea placeholder="Message *" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
