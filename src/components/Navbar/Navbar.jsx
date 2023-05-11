import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const searchHandler = (e) => {
    if (!props.setSearch) {
      return;
    } else {
      props.setSearch(e.target.value);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.imgBox}>
        <h1 className={styles.brand} onClick={() => navigate("/")}>
          <img src="https://i.hizliresim.com/k9djcr8.png" alt="Logo" />
        </h1>
      </div>
      <div className={styles.inputBox}>
        <input
          onChange={searchHandler}
          type="text"
          placeholder="Search for product !"
        />

        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles["search-icon"]}
        />
      </div>

      <div className={styles.list}>
        <div
          onClick={() => navigate("/auth")}
          className={`${styles["user-div"]} ${styles["listItem"]}`}
        >
          <div className={styles.dropdown}>
            <div className={styles["user-div-dropdown"]}>
              <button className={styles["login-btn"]}>Login</button>
              <button className={styles["register-btn"]}>Sign Upl</button>
            </div>
          </div>
        </div>

        <div
          className={styles.listItem}
          onClick={() => navigate("/favourites")}
        >
          <FontAwesomeIcon icon={faStar} beat className={styles["list-icon"]} />{" "}
          Favorites
        </div>
        <div
          className={`${styles["cart-div"]} ${styles.listItem}`}
          onClick={() => navigate("/cart")}
        >
          <FontAwesomeIcon
            icon={faBasketShopping}
            beat
            className={styles["list-icon"]}
          />{" "}
          Basket
          <div className={styles["cart-length-container"]}>
            <span className={styles.cartLength}>{cart.length}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
