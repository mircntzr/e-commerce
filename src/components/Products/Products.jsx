import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Product from "../Product/Product";
import { useFetch } from "../../hooks/useFetch";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Products = ({ search }) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  const { data, error, loading } = useFetch(
    `https://dummyjson.com/products?limit=100`
  );

  const { filter } = useContext(FilterContext);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data, page]);

  let filteredProducts = products.filter((product) => {
    return product.category === filter;
  });

  const mappedProducts = filter.length > 0 ? filteredProducts : products;

  if (loading) {
    return <h1 style={{ color: "black", height: "100%" }}>Loading...</h1>;
  }
  if (!loading && error) {
    return <h1>There is an error</h1>;
  }

  if (!error && !loading && products.length > 0) {
    return (
      <>
        <h1 className={styles.categoryTitle}>{filter}</h1>
        <section className={styles["products-container"]}>
          {mappedProducts
            .filter(
              (product) =>
                product.title.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <Product key={product.id} data={product} />
            ))}
        </section>
        <Footer />
      </>
    );
  }
};

export default Products;
