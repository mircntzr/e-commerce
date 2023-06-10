import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
import style from "./Faq.module.css";

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className={style.faqContainer}>
        <div className={style.faqContent}>
          <h2>Frequently Asked Questions</h2>
          <p>
            <strong>How can I design products?</strong>
            <br />
            To design a product, click on the "Design Now" button and choose
            from the available options such as uploading images, using stock
            photos, adding text and collages.
          </p>
          <p>
            <strong>What is 3D preview?</strong>
            <br />
            Our 3D preview feature allows customers to visually inspect their
            designs and experience the 3D model of their product in any
            environment using their camera, if supported by their device.
          </p>
          <p>
            <strong>Can you help with the design?</strong>
            <br />
            We do not offer design services, but our platform provides a
            user-friendly and advanced interface for customers to easily design
            their own products.
          </p>
          <p>
            <strong>What payment methods are available?</strong>
            <br />
            We accept payments through Stripe, Paypal, and Apple Pay.
          </p>
          <p>
            <strong>
              When will the product I designed and purchased be delivered to me?
            </strong>
            <br />
            We guarantee delivery within 3-4 business days.
          </p>
          <p>
            <strong>What is the subject you pay the most attention to?</strong>
            <br />
            We are committed to providing quality service and products to our
            customers.
          </p>
          <p>
            <strong>What thought do you adopt?</strong>
            <br />
            Our mission is to inspire people to add color to their lives by
            creating extraordinary and one-of-a-kind designs.
          </p>
        </div>
      </div>
      <Footer />
      <Policies />
    </>
  );
};

export default Faq;
