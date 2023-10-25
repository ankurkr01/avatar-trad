import React from "react";
import Navbar from "./Navbar";
import HomeBanner from "./HomeBanner";
import Footer from "./Footer";
import DisplayVisualizer from "./DisplayVisualizer";
import ProductImage from "./ProductImage";
import GetTouch from "./GetTouch";
import GiveNumber from "./GiveNumber";
import CategoriesImages from "./CategoriesImages";

const Home = () => {
  return (
    <div>
      
      <Navbar />
      <HomeBanner />
      <CategoriesImages />
      <DisplayVisualizer />
      <ProductImage />
      <GetTouch />
      <GiveNumber />
      <Footer />
    </div>
  );
};

export default Home;
