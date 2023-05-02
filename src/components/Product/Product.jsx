import React from "react";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart";
import { favouritesHandler } from "../../redux/favourites";
import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favourites = useSelector((state) => state.favourites);

  const isFavourite = favourites.filter(
    (favouriteProduct) => favouriteProduct.id === data.id
  );

  const { brand, description, price, thumbnail, title, id } = data;

  return (
    <div className={styles["product-card-container"]}>
      <div className={styles.favourite}>
        <FontAwesomeIcon
          onClick={() => {
            dispatch(favouritesHandler({ product: data }));
          }}
          className={styles["favourite-icon"]}
          icon={faStar}
        />
      </div>
      <div className={styles.imgBox}>
        <img
          onClick={() => navigate(`/product/${id}`)}
          src={thumbnail}
          alt="card"
        />
      </div>
      <div className={styles.contentBox}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <div
          className={styles.addToCart}
          onClick={() => dispatch(addToCart({ ...data, amount: 1 }))}
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Product;
