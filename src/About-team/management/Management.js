import React from "react";
import styles from "./styles.module.css";
import man1 from "./images/man1.svg";
import woman from "./images/woman.svg";
import line from "./images/lineRed.svg";
import Card from "../Card";

function Management() {
  return (
    <div>
      <section className={styles.section1}>
        <div className={styles.head}>
          {" "}
          <h1 className={styles.heading1}>Management</h1>
          <img className={styles.lineRed} src={line} alt="line red" />
        </div>
        <div className={styles.cards}>
          {" "}
          <Card job="President Director" image={man1} />
          <Card job="Director" image={woman} />
        </div>
      </section>
    </div>
  );
}

export default Management;
