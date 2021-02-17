import React from "react";
import Footer from "../Home/footer/Footer";
import Header from "../Home/header/Header";
import Section4 from "../Home/section4/Section4";
import CoverTeam from "../About-team/Cover/CoverTeam";
import Management from "./management/Management";
import Consultant from "./Consultant/Consultant";
import MobileSpecialist from "./MobileSpecialist/MobileSpecialist";
import JavaSpecialist from "./JavaSpecialist/JavaSpecialist";

function Team() {
  return (
    <div>
      <Header />
      <CoverTeam />
      <Management />
      <Consultant />
      <MobileSpecialist />
      <JavaSpecialist />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Team;
