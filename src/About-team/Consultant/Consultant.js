import React from "react";
import styles from "../management/styles.module.css";
import line from "../management/images/lineRed.svg";
import Card from "../Card";
import girl1 from "./girl1.svg";
import boy from "./boy.svg";
import girl2 from "./girl2.svg";
import woman1 from "./boy.svg";

function Consultant() {
  return (
    <div className={styles.bg}>
      <section className={styles.section1}>
        <div className={styles.head}>
          {" "}
          <h1 className={styles.heading1}>Consultant</h1>
          <img className={styles.lineRed} src={line} alt="line red" />
        </div>
        <div className={styles.cards}>
          {" "}
          <Card job="President Director" image={girl1} />
          <Card job="Director" image={boy} />
          <Card job="President Director" image={girl2} />
          <Card job="President Director" image={woman1} />
        </div>
      </section>
    </div>
  );
}

export default Consultant;
