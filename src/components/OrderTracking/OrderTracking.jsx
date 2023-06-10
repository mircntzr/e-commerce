import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
import style from "./OrderTracking.module.css";
const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [billingEmail, setBillingEmail] = useState("");

  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleBillingEmailChange = (event) => {
    setBillingEmail(event.target.value);
  };

  const handleTrackButtonClick = () => {};

  return (
    <>
      <div className={style.OrderTrackingContainer}>
        <Navbar />
        <div className={style.OrderTrackingContent}>
          <h1>Order Tracking</h1>
          <p>
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
          <input
            className={style.OrderTrackingInput}
            type="text"
            placeholder="Order ID"
            value={orderId}
            onChange={handleOrderIdChange}
          />
          <input
            className={style.OrderTrackingInput}
            type="text"
            placeholder="Billing Email"
            value={billingEmail}
            onChange={handleBillingEmailChange}
          />
          <button
            className={style.OrderTrackingBtn}
            onClick={handleTrackButtonClick}
          >
            Track
          </button>
        </div>
        <Footer />
        <Policies />
      </div>
    </>
  );
};

export default OrderTracking;
