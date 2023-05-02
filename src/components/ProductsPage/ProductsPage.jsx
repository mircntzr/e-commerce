import React, { useState } from "react";
import Categories from "../Categories/Categories";

const ProductsPage = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
