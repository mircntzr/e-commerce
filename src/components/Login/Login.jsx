import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigator = useNavigate();

  const userLocalStorage = localStorage.getItem("user");
  useEffect(() => {
    if (userLocalStorage) {
      navigator("/");
    }
  }, []);

  return (
    <>
      <form className={styles["module"]}>
        <div className={styles["form-item"]}>
          <label>E-mail</label>
          <div className={styles["input-box"]}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label>Password</label>
          <div className={styles["input-box"]}>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              onClick={() => setShowPassword((show) => !show)}
              style={{ cursor: "pointer" }}
              icon={showPassword ? faEye : faEyeSlash}
            />
          </div>
          <div className={styles["forgot-password"]}>Forgot Password</div>
          <button className={styles["submit-btn"]}>Login</button>
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
            <span className={styles["login-text"]}> Login with </span>
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
            <span className={styles["login-text"]}> Login with </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
