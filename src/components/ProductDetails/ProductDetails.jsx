import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Categories from "../Categories/Categories";
import Navbar from "../Navbar/Navbar";
import ProductContainer from "../ProductContainer/ProductContainer";
import styles from "./ProductDetails.module.css";
import Footer from "../Footer/Footer";
const ProductDetails = () => {
  const productId = useLocation().pathname.split("/")[2];

  const { data, loading } = useFetch(
    `https://dummyjson.com/products/${productId}`
  );

  return (
    <>
      <Navbar />
      <Categories />
      <div className="container">
        {!loading && (
          <main className={styles["main-page-container"]}>
            <ProductContainer product={data} />
          </main>
        )}
        {loading && <h1>Loading....</h1>}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
