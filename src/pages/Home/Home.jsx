import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Policies from "../../components/Policies/Policies";

const Home = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "ri-ticaret";
  }, []);

  return (
    <>
      <div className="home">
        <Navbar setSearch={setSearch} />
        <Categories />
        <Products search={search} />
        <Policies />
      </div>
    </>
  );
};

export default Home;
