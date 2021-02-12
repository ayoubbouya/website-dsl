import React from "react";
import styles from "./sectionRed.module.css";

function SectionRed() {
  return (
    <div>
      <section className={styles.sectionRed}>
        <h1 className={styles.heading1}>
          The most advanced technology{" "}
          <span className={styles.span}>
            always work hand-in-hand with qualified people
          </span>
        </h1>
      </section>
    </div>
  );
}

export default SectionRed;
