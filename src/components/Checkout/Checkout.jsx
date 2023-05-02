import React, { useState, useEffect } from "react";
import styles from "./Checkout.module.css";
import countriesData from "./countries.json";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    document.title = "Checkout";
  }, []);

  const cartTotal = cart.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);
  const shippingTotal = 19;
  const grandTotal = cartTotal + shippingTotal;

  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = countriesData.countries;
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    orderNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className={styles["checkout"]}>
        <div className={styles["billing"]}>
          <h2>Billing Details</h2>
          <form>
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="firstName"
                //value={formData.firstName || ""}
                onChange={handleInputChange}
                className={styles["form-control"]}
                placeholder="First Name"
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                // value={formData.lastName}
                onChange={handleInputChange}
                className={styles["form-control"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="companyName"
                placeholder="Company Name(Optional)"
                //value={formData.companyName}
                onChange={handleInputChange}
                className={styles["form-control"]}
              />
            </div>
            <div className={styles["form-group"]}>
              <select
                id="country"
                //value={selectedCountry}
                onChange={handleChange}
                className={styles["form-control"]}
                required
              >
                <option value="">Select a country / region...</option>
                {countries.map((country) => (
                  <option
                    key={country.code}
                    // value={country.code}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="streetAddress"
                placeholder="Street Address"
                //value={formData.streetAddress}
                onChange={handleInputChange}
                className={styles["form-control"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="apartment"
                placeholder="Apartment"
                //value={formData.apartment}
                onChange={handleInputChange}
                className={styles["form-control"]}
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="city"
                placeholder="City"
                //value={formData.city}
                onChange={handleInputChange}
                className={styles["form-control"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="state"
                placeholder="State"
                //value={formData.state}
                onChange={handleInputChange}
                className={styles["form-control"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="number"
                id="postalCode"
                placeholder="ZIP Code"
                // value={formData.postalCode}
                onChange={handleInputChange}
                className={styles["form-control"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="number"
                id="phoneNumber"
                placeholder="Phone Number"
                // value={formData.phoneNumber}
                onChange={handleInputChange}
                className={styles["form-control"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="email"
                id="email"
                placeholder="Email"
                // value={formData.email}
                onChange={handleInputChange}
                className={styles["form-control"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <h2>Additional information</h2>
              <textarea
                id="orderNotes"
                rows="4"
                placeholder="Order notes(optional)"
                // value={formData.orderNotes}
                onChange={handleInputChange}
                className={styles["form-control"]}
              ></textarea>
            </div>
          </form>
        </div>
        <div className={styles["details"]}>
          <div className={styles["order-summary"]}>
            {cart.map((cartItem) => (
              <div className={styles["item"]} key={cartItem.id}>
                <img src={cartItem.thumbnail} alt={cartItem.name} />
                <div>
                  <p className={styles["name"]}>{cartItem.name}</p>
                  <h4 className={styles["quantity"]}>
                    {" "}
                    Quantity: {cartItem.amount}{" "}
                  </h4>
                  <p className={styles["price"]}>
                    {" "}
                    {cartItem.amount * cartItem.price}${" "}
                  </p>
                </div>
              </div>
            ))}
            <p className={styles["subtotal"]}>
              <span>Subtotal</span>
              <span>{cartTotal}$</span>
            </p>
            <p className={styles["total"]}>
              <span>Total</span>
              <span>{grandTotal}$</span>
            </p>
          </div>
          <p className={styles["meta-info"]}>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <div className={styles["terms-and-conditions"]}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I have read and agree to the website terms and conditions
            </label>
          </div>
          <button className={styles["place-order"]}>Place Order</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
