import React from "react";
import styles from "../management/styles.module.css";
import line from "../management/images/lineRed.svg";
import Card from "../Card";
import girl1 from "./cover (1).svg";
import boy1 from "./cover (2).svg";
import girl2 from "./cover (3).svg";
import girl3 from "./cover (4).svg";
import girl4 from "./cover (5).svg";
import girl5 from "./cover (6).svg";
import girl6 from "./cover (7).svg";
import girl7 from "./cover (8).svg";

function JavaSpecialist() {
  return (
    <div className={styles.bg}>
      <section className={styles.section1}>
        <div className={styles.head}>
          {" "}
          <h1 className={styles.heading1}>Mobile Specialist</h1>
          <img className={styles.lineRed} src={line} alt="line red" />
        </div>
        <div className={styles.cards}>
          {" "}
          <Card job="System Analyst" image={girl1} />
          <Card job="System Analyst" image={boy1} />
          <Card job="Programmer" image={girl2} />
          <Card job="Programmer" image={girl3} />
          <Card job="System Analyst" image={girl4} />
          <Card job="System Analyst" image={girl5} />
          <Card job="Programmer" image={girl6} />
          <Card job="Programmer" image={girl7} />
        </div>
      </section>
    </div>
  );
}

export default JavaSpecialist;
