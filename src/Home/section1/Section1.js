import React from "react";
import styles from "./section.module.css";
import pana from "./img/pana.svg";
function Section() {
  return (
    <div>
      <section className={styles.section1}>
        <article>
          <h1 className={styles.heading1}>
            Making the most of the ever-growing <br />
            <span className={styles.red}>Information Technology</span>{" "}
          </h1>
          <p className={styles.paragraph}>
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </p>
          <button className={styles.btn}>read more</button>
        </article>
        <img src={pana} alt="pana" className={styles.pana} />
      </section>
    </div>
  );
}

export default Section;
