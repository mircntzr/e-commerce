import React from "react";
import { useLocation } from "react-router-dom";
import Categories from "../Categories/Categories";
import Navbar from "../Navbar/Navbar";
import ProductContainer from "../ProductContainer/ProductContainer";
import styles from "./ProductDetails.module.css";
import Footer from "../Footer/Footer";
import productsData from "../Products/product.json";

const ProductDetails = () => {
  const productId = useLocation().pathname.split("/")[2];
  const selectedProduct = productsData.products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <>
      <Navbar />
      <Categories />
      <div className="container">
        <main className={styles["main-page-container"]}>
          <ProductContainer product={selectedProduct} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
