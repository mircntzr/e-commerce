import React from "react";
import styles from "./NoFavourite.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NoFavourite = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["no-fav-container"]}>
      <FontAwesomeIcon icon={faStar} spin className={styles.heart} />
      <p className={styles.empty}>Your favorite list is empty</p>
      <p className={styles.emptyDesc}>
        You can start shopping and add the products you want
      </p>
      <button className={styles["start-btn"]} onClick={() => navigate("/")}>
        Start Shopping
      </button>
    </div>
  );
};

export default NoFavourite;
