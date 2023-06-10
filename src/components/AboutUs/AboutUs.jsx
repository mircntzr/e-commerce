import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
import style from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className={style.AboutUsContainer}>
        <div className={style.AboutUsContent}>
          <h1>About Us</h1>
          <h3>Our Story</h3>
          <p>
            EST. 2017 Our Story At vintaggy.com, we are a team of creative
            individuals with a passion for empowering our customers to break
            free from the ordinary and design their own unique products. Our
            platform provides a user-friendly and advanced interface where users
            can easily design a range of products including t-shirts, hoodies,
            phone cases, socks, and more. With our 3D preview feature, customers
            can visually inspect their designs and experience the 3D model of
            their product in any environment using their camera, if supported by
            their device. We also guarantee delivery within 3-4 business days,
            making it effortless for users to order their dream products. At
            vintaggy.com, we are committed to providing quality service and
            products. Our mission is to inspire people to add color to their
            lives by creating extraordinary and one-of-a-kind designs. We take
            pride in welcoming all those who share our vision to create unique
            and creative products on our platform.
          </p>
        </div>
      </div>
      <Footer />
      <Policies />
    </>
  );
};

export default AboutUs;
