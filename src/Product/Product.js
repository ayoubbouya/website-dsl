import React from "react";
import Header from "../Home/header/Header";
import SectionRed from "./sectionRed/SectionRed";
import ProductContent from "./ProductContent/ProductContent";
import Section4 from "../Home/section4/Section4";
import Footer from "../Home/footer/Footer";

function Product() {
  return (
    <div>
      <Header />
      <SectionRed />
      <ProductContent />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Product;
