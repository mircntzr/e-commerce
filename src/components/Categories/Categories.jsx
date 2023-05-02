import React from "react";
import styles from "./Categories.module.css";
import { useCategory } from "../../context/CategoryContext";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Categories = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "mens-shoes",
  ];

  const handleCategoryClick = (category) => {
    setFilter(category);
  };

  return (
    <div className={styles.categoriesContainer}>
      <ul className={styles.categories}>
        {categories.map((category, index) => (
          <li
            onClick={() => handleCategoryClick(category)}
            className={category === filter ? styles.active : ""}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
