import React from "react";
import Footer from "../Home/footer/Footer";
import Header from "../Home/header/Header";
import Section4 from "../Home/section4/Section4";
import Companies from "./Companies/Companies";
import Cover from "./cover/Cover";
function Clients() {
  return (
    <div>
      <Header />
      <Cover />
      <Companies />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Clients;
