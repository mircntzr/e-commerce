import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import productsData from "./product.json";

const Products = ({ search }) => {
  const { filter } = useContext(FilterContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  let filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  const mappedProducts = filteredProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  if (products.length === 0) {
    return <h1 style={{ color: "black", height: "100%" }}>Loading...</h1>;
  }

  return (
    <>
      <h1 className={styles.categoryTitle}>{filter}</h1>
      <section className={styles["products-container"]}>
        {mappedProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Products;
