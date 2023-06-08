import React from "react";
import style from "./Cansellation.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
function Cansellation() {
  return (
    <>
      <Navbar />
      <div className={style.Property}>
        <div className={style.PropertyContainer}>
          <h1>Return and Cancellation Policy</h1>
          <span>Return and Cancellation Policy</span>
          <div>
            This Intellectual Property and Licensing Agreement (“Agreement”) is
            entered into by and between [Berfka] (“we”, “us”, “our”) and the
            user (“user”, “you”, “customer”) of our website and services.
            <ul>
              <li>
                1. Cancellations Due to the custom nature of our products, we
                cannot accept cancellations once an order has been placed and
                production has begun. We encourage you to double-check your
                order details, such as the design, product type, and shipping
                address, before submitting your order.
              </li>
              <li>
                2. Returns and Refunds As our products are customized and
                made-to-order, we do not generally accept returns or offer
                refunds. However, we are committed to providing high-quality
                products and customer satisfaction. If there is a defect or
                issue with the product you received, please contact us within
                [X] days of delivery, and we will work with you to resolve the
                issue. We may, in our sole discretion, offer a replacement,
                refund, or store credit, depending on the circumstances.
              </li>
              <li>
                3. Damaged or Incorrect Products If you receive a damaged or
                incorrect product, please notify us within [X] days of delivery.
                You may be required to provide photographic evidence of the
                issue, as well as information about your order, such as your
                order number and a description of the problem. We will evaluate
                the issue and, if we determine that the product is damaged or
                incorrect due to our error, we will work with you to provide a
                suitable resolution, such as a replacement or refund.
              </li>
              <li>
                4. Shipping Issues We are not responsible for any delays, lost
                packages, or additional costs caused by incorrect or incomplete
                shipping information provided by the customer. If your package
                is lost or delayed, we recommend contacting the shipping carrier
                to inquire about the status of your package. If there is an
                issue with the delivery of your order due to our error, please
                contact us, and we will work with you to resolve the issue.
              </li>
              <li>
                5. Exchanges Due to the custom nature of our products, we do not
                offer exchanges. If you wish to order a different product or
                design, you must place a new order.
              </li>
            </ul>
            <button className={style.ContactUsBtn}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
      <Policies />
    </>
  );
}

export default Cansellation;
