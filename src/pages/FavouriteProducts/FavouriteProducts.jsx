import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./FavouriteProducts.module.css";
import { faStar, faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import NoFavourite from "../../components/NoFavourite/NoFavourite";

const FavouriteProducts = () => {
  const favourites = useSelector((state) => state.favourites);

  const [selectedCategory, setSelectedCategory] = useState("Favorilerim");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Favoriler";
  }, []);
  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        <header className={styles["categories-container"]}>
          <div className={styles.categories}>
            <div
              className={
                selectedCategory === "Favorilerim"
                  ? `${styles["category-item"]} ${styles["category-item-selected"]}`
                  : styles["category-item"]
              }
              onClick={() => setSelectedCategory("Favorilerim")}
            >
              <FontAwesomeIcon className={styles.icon} icon={faStar} fade />
              <h1>My Favorites</h1>
            </div>
            <div
              className={
                selectedCategory === "Koleksiyonlarım"
                  ? `${styles["category-item"]} ${styles["category-item-selected"]}`
                  : styles["category-item"]
              }
              onClick={() => setSelectedCategory("Koleksiyonlarım")}
            >
              <FontAwesomeIcon className={styles.icon} icon={faList} fade />
              <h1>My Lists</h1>
            </div>
          </div>
        </header>
        <section className={styles["main-content-container"]}>
          {favourites.length > 0 ? (
            <div className={styles.productsContainer}>
              {favourites
                .filter(
                  (fav) =>
                    fav.title.toLowerCase().includes(search.toLowerCase()) ||
                    fav.description.toLowerCase().includes(search)
                )
                .map((item) => (
                  <Product data={item} key={item.id} />
                ))}
            </div>
          ) : (
            <NoFavourite />
          )}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default FavouriteProducts;
