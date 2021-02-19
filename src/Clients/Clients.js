import React from "react";
import Footer from "../Home/footer/Footer";
import Header from "../Home/header/Header";
import Section4 from "../Home/section4/Section4";
import Companies from "./Companies/Companies";
import Cover from "./cover/Cover";
import SlickC from "./slider/SlickC";
function Clients() {
  return (
    <div>
      <Header />
      <Cover />
      <Companies />
      <SlickC />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Clients;
