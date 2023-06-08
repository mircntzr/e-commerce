import React from "react";
import styles from "./Categories.module.css";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Categories = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const categories = [
    "cup",
    "bag",
    "clock",
    "dress",
    "women accessory",
    "glasses",
    "phone case",
  ];

  const handleCategoryClick = (category) => {
    if (category === filter) {
      return;
    }

    setFilter(category);
  };

  const handleClearFilter = () => {
    setFilter(null);
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
      <div className={styles.filterBtnDiv}>
        {filter && (
          <button className={styles.filterBtn} onClick={handleClearFilter}>
            Clear Filter
          </button>
        )}
      </div>
    </div>
  );
};

export default Categories;
