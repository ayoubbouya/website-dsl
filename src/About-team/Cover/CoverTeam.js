import React from "react";
import styles from "./styles.module.css";
import people from "./people.svg";
import left from "./left.svg";
import right from "./right.svg";

function CoverTeam() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.cover}>
          <img src={left} alt="left" className={styles.left} />
          <img src={right} alt="right" className={styles.right} />
          <img src={people} alt="people" className={styles.people} />
        </div>

        <h1 className={styles.heading}>
          Alone is a vision <br />{" "}
          <span className={styles.span}>together we make it reality</span>
        </h1>
      </section>
    </div>
  );
}

export default CoverTeam;
