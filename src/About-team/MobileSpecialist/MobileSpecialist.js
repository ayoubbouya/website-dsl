import React from "react";
import styles from "../management/styles.module.css";
import line from "../management/images/lineRed.svg";
import Card from "../Card";
import boy1 from "./boy1.svg";
import girl1 from "./girl1.svg";
import boy2 from "./boy2.svg";
import girl2 from "./girl2.svg";

function MobileSpecialist() {
  return (
    <div>
      <section className={styles.section1}>
        <div className={styles.head}>
          {" "}
          <h1 className={styles.heading1}>Mobile Specialist</h1>
          <img className={styles.lineRed} src={line} alt="line red" />
        </div>
        <div className={styles.cards}>
          {" "}
          <Card job="System Analyst" image={boy1} />
          <Card job="System Analyst" image={girl1} />
          <Card job="Programmer" image={boy2} />
          <Card job="Programmer" image={girl2} />
        </div>
      </section>
    </div>
  );
}

export default MobileSpecialist;
