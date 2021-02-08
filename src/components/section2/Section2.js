import React from "react";
import pana from "./img/pana.svg";
import styles from "./section.module.css";

function Section2() {
  return (
    <div className={styles.sectionContainer}>
      <section className={styles.section2}>
        <img src={pana} alt="pana" className={styles.pana} />
        <article className={styles.article}>
          <h1 className={styles.heading1}>
            Welcome to{" "}
            <span className={styles.red}>Dwidasa Samsara Indonesia (DSI)</span>
          </h1>
          <p className={styles.paragraph}>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through DSI’s distinct front-end based
            application concept.
          </p>
          <p className={styles.paragraph1}>
            Managed by a team of professional experts with extensive experience
            and impressive track records, DSI believes that continuous
            improvements and innovations assure your business to run effectively
            and efficiently.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Section2;
