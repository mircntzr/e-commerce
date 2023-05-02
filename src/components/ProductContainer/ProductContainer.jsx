import React, { useState } from "react";
import styles from "./ProductContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart";
import { favouritesHandler } from "../../redux/favourites";

const ProductContainer = ({ product, loading }) => {
  const [imageSource, setImageSource] = useState(product?.thumbnail);

  const favourites = useSelector((state) => state.favourites);

  const isFavourite = favourites.filter((fav) => fav.id === product?.id);

  const dispatch = useDispatch();

  return (
    <section className={styles["product-container"]}>
      <div className={styles.imgBox}>
        <img src={imageSource} alt="" />
      </div>
      <div className={styles["content-box"]}>
        <div className={styles.brandText}>
          <span className={styles.brand}>{product?.brand}</span>
          {product?.description}
        </div>
        <div className={styles.sellerText}>
          <span className={styles.seller}>Seller: </span>
          <span className={styles.brandSpan} style={{ paddingRight: "3px" }}>
            {product?.brand}
          </span>
          <img
            src="https://cdn.dsmcdn.com/indexing-sticker-stamp/stage/4b0d7ef1-8e8f-4c8f-b1c7-637e432ea2b4.png"
            alt="tick"
            className={styles.tick}
          />
        </div>
        <div className={styles.price}>{product?.price} $</div>
        <div className={styles.collections}></div>
        <div className={styles.line}></div>
        <div className={styles["other-photos-text"]}>Other Photos :</div>
        <div className={styles["image-container"]}>
          {product?.images.map((src, idx) => (
            <img
              src={src.length > 0 && src}
              className={styles["mini-photo"]}
              alt="mini-product"
              key={idx}
              onMouseOver={() => setImageSource(src)}
            />
          ))}
        </div>
        <div className={styles["button-div"]}>
          <button
            className={styles["cart-btn"]}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
          <button
            className={
              isFavourite.length > 0
                ? `${styles["fav-btn"]} ${styles["selected"]}`
                : styles["fav-btn"]
            }
            onClick={() => dispatch(favouritesHandler({ product }))}
          >
            <FontAwesomeIcon className={styles["heart-icon"]} icon={faHeart} />{" "}
          </button>
        </div>
        <div
          className={styles["other-photos-text"]}
          style={{ marginTop: "20px" }}
        >
          Featured Information:
        </div>
        <ul className={styles.list}>
          <li>
            Free return within 15 days. For detailed information,{" "}
            <span className={styles.clickText}>click here</span>.
          </li>
          <li>
            This product will be sent by{" "}
            <span className={styles.brandName}> {product?.brand}</span>.
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ProductContainer;
