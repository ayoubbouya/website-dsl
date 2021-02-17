import React from "react";
import styles from "./styles.module.css";
import cover from "./group1332.svg";
function CoverTeam() {
  return (
    <div>
      <section className={styles.section}>
        <img src={cover} alt="cover" className={styles.img} />
        <h1 className={styles.heading1}>
          Alone is a vision <br />{" "}
          <span className={styles.span}>together we make it reality</span>
        </h1>
      </section>
    </div>
  );
}

export default CoverTeam;
