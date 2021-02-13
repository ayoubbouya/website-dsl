import React from "react";
import Footer from "../Home/footer/Footer";
import Header from "../Home/header/Header";
import Section4 from "../Home/section4/Section4";
import Section1 from "./section1/Section1";
import SectionArticle from "./sectionArticle/SectionArticle";
import SectionYb from "./youtube/SectionYb";
function About() {
  return (
    <div>
      <Header />
      <Section1 />
      <SectionArticle />
      <SectionYb />
      <Section4 />
      <Footer />
    </div>
  );
}

export default About;
