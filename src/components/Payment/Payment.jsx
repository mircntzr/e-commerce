import React, { useState } from "react";
import styles from "./Payment.module.css";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const location = useLocation();
  const { grandTotal } = location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles["payment"]}>
      <Navbar />
      <div className={styles["payment-container"]}>
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={handlePaymentMethodChange}
              />
              Credit Card
            </label>
          </div>
          <div className={styles["form-group"]}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentMethodChange}
              />
              PayPal
            </label>
          </div>
          {paymentMethod === "credit-card" && (
            <div>
              <div className={styles["form-group"]}>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="tel"
                  id="cardNumber"
                  inputMode="numeric"
                  autocomplete="cc-number"
                  minLength="3"
                  maxlength="16"
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="cardName">Cardholder Name</label>
                <input type="text" id="cardName" required />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="expirationDate">Expiration Date</label>
                <input type="date" id="expirationDate" required />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="tel"
                  id="cvv"
                  required
                  pattern="[3 "
                  maxLength="3"
                  min
                  minLength="3"
                />
              </div>
            </div>
          )}
          <div className={styles["form-group"]}>
            <label htmlFor="totalAmount">Total Amount</label>
            <input
              type="text"
              id="totalAmount"
              value={`${grandTotal}$`}
              readOnly
            />
          </div>
          <button type="submit" className={styles["submit-payment"]}>
            Submit Payment
          </button>
        </form>
      </div>
      <Footer />
      <Policies />
    </div>
  );
};

export default Payment;
