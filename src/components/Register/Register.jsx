import React, { useState } from "react";
import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <div className={styles["input-box"]}>
          <input type="text" />
        </div>
        <label>Password</label>
        <div className={styles["input-box"]}>
          <input type={showPassword ? "text" : "password"} />
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword((show) => !show)}
            icon={showPassword ? faEye : faEyeSlash}
          />
        </div>
        <div className={styles.control}>
          Your password must contain at least 7 characters, including letters
          and numbers.
        </div>
        <div className={styles["gender-text"]}>Gender (Optional)</div>
        <div className={styles["gender-buttons"]}>
          <button
            onClick={() => setGender("Female")}
            className={
              gender === "Female"
                ? `${styles["gender-item"]} ${styles.selected}`
                : styles["gender-item"]
            }
          >
            Women
          </button>
          <button
            className={
              gender === "Male"
                ? `${styles["gender-item"]} ${styles.selected}`
                : styles["gender-item"]
            }
            onClick={() => setGender("Male")}
          >
            Man
          </button>
        </div>
        <button className={styles["submit-btn"]}>Register</button>
        <div style={{ fontSize: "12px", paddingTop: "5px", color: "gray" }}>
          By clicking Register, I agree to the{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Membership Terms
          </span>{" "}
          .
        </div>
        <div className={styles["checkbox-container"]}>
          <div className={styles["checkbox-item"]}>
            <input type="checkbox" style={{ width: "50px", height: "50px" }} />
            <span>
              I accept the processing of my personal data and the sending of
              electronic messages to be informed about the campaigns.
            </span>
          </div>
          <div className={styles["checkbox-item"]}>
            <input type="checkbox" />
            <span>
              I have read and understood the{" "}
              <span style={{ textDecoration: "underline" }}>
                Disclosure Statement
              </span>{" "}
              regarding the processing of my personal data.
            </span>
          </div>
        </div>
      </form>
      <div className={styles["social-buttons"]}>
        <div className={styles["social-btn"]}>
          <img
            src="https://iconarchive.com/download/i80444/uiconstock/socialmedia/Facebook.ico"
            alt="facebook-icon"
            className={styles.icon}
          />
          <div className={styles["social-text"]}>
            <span className={styles.brand}>Facebook</span>
            <span className={styles["login-text"]}>
              Register with Facebook.
            </span>
          </div>
        </div>
        <div className={styles["social-btn"]}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Google_Plus_icon_%282015-2019%29.svg/1200px-Google_Plus_icon_%282015-2019%29.svg.png"
            alt="facebook-icon"
            className={styles.icon}
          />
          <div className={styles["social-text"]}>
            <span className={styles.brand}>Google</span>
            <span className={styles["login-text"]}>Register with Google.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
