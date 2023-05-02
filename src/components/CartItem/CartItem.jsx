import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCube } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseAmount,
  removeFromCart,
  increaseByAmount,
} from "../../redux/cart";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item }) => {
  const [productAmount, setProductAmount] = useState(item.amount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { thumbnail, brand, description, price } = item;

  const itemPrice = price * item.amount;

  useEffect(() => {
    dispatch(
      increaseByAmount({
        product: item,
        amount: productAmount,
      })
    );

    if (!productAmount) {
      setProductAmount("");
    }
  }, [productAmount, dispatch, item]);

  useEffect(() => {
    setProductAmount(item.amount);
  }, [item.amount]);

  return (
    <div className={styles["cart-item-container"]}>
      <div className={styles.sellerDiv}>
        <div className={styles.sellerText}>Satıcı : </div>
        <div className={styles.seller}>{brand}</div>
        <FontAwesomeIcon className={styles.arrowIcon} icon={faChevronRight} />
      </div>
      {price > 50 && (
        <div className={styles.shipment}>
          <FontAwesomeIcon
            icon={faCube}
            style={{ color: "green", position: "relative", top: "1px" }}
          />{" "}
          Kargo Bedava !
        </div>
      )}
      <div className={styles["product"]}>
        <div className={styles["product-details"]}>
          <img
            onClick={() => navigate(`/product/${item.id}`)}
            src={thumbnail}
            alt="product"
          />
          <div
            className={styles["product-name"]}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <span className={styles.brand}>{brand} </span> {description}
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            disabled={item.amount >= 10}
            className={styles.counter}
            onClick={() => {
              dispatch(addToCart(item));
              setProductAmount(productAmount + 1);
            }}
          >
            +
          </button>
          <input
            maxLength={1}
            disabled={item.amount > 10}
            type="text"
            value={productAmount}
            className={styles.amount}
            onChange={(e) => {
              setProductAmount(e.target.value);
            }}
          />
          <button
            disabled={item.amount <= 1}
            onClick={() => {
              dispatch(decreaseAmount(item));
              setProductAmount(productAmount - 1);
            }}
            className={styles.counter}
          >
            -
          </button>
          <div className={styles["price-container"]}>
            <div className={styles.price}>{itemPrice}$</div>
          </div>
          <div
            className={styles.trash}
            onClick={() => dispatch(removeFromCart(item))}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
