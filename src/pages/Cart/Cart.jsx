import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/CartItem/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronRight,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const cartTotal = cart.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);

  const shippingTotal = 19;
  const grandTotal = cartTotal + shippingTotal;

  useEffect(() => {
    document.title = "My Cart";
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles["cart-page-container"]}>
          <div className={styles.carts}>
            {cart.length > 0 ? (
              <h1>My Cart ({cart.length} Items)</h1>
            ) : (
              <div className={styles.cartLink}>
                <div className={styles.cartDiv}>
                  <FontAwesomeIcon
                    icon={faBasketShopping}
                    bounce
                    className={styles["cart-icon"]}
                  />
                  <h1>Your cart is empty.</h1>
                </div>
                <button
                  onClick={() => navigate("/")}
                  className={styles["start-btn"]}
                >
                  Start Shopping
                </button>
              </div>
            )}
            <div className={styles["carts-container"]}>
              {cart.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>
          </div>

          {cart.length > 0 && (
            <div className={styles["total-amount"]}>
              <div className={styles["order-details"]}>
                <h1>Order Summary</h1>
                <div className={styles["sum-of-products"]}>
                  Total of Items <span>{cartTotal}</span>$
                </div>
                <div className={styles["sum-of-products"]}>
                  Shipping Total <span>{shippingTotal}</span>$
                </div>
                <div className={styles["all-calculated"]}>{grandTotal} $</div>
              </div>
              <div className={styles.coupon}>
                <input type="text" placeholder="Kupon kodunu giriniz" />
                <button className={styles.discountBtn}>
                  <FontAwesomeIcon icon={faPlus} />
                  Apply Coupon
                </button>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className={styles["approve-btn"]}
              >
                Approve Cart <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
