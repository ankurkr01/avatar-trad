import React from "react";
import Categories from "./CategoriesContent";
import Product from "./ProductContent";

const Content = ({ activeCategory }) => {
  return (
    <main className="main-container">
      <div className="contain_data bg-light">
        {activeCategory === "Categories" && <Categories />}
        {activeCategory === "Products" && <Product />}
      </div>
    </main>
  );
};

export default Content;
