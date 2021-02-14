import React from "react";
import Footer from "../Home/footer/Footer";
import Header from "../Home/header/Header";
import Section4 from "../Home/section4/Section4";
import Contactus from "./ContactUs/Contactus";
import Section1 from "./section1/Section1";
import SectionArticle from "./sectionArticle/SectionArticle";
import SectionYb from "./youtube/SectionYb";
import YoutubeRed from "./YoutubeRed/YoutubeRed";
function About() {
  return (
    <div>
      <Header />
      <Section1 />
      <SectionArticle />
      <SectionYb />
      <YoutubeRed />
      <Contactus />
      <Section4 />
      <Footer />
    </div>
  );
}

export default About;
