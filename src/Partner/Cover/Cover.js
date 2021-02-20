import React from "react";
import styles from "./styles.module.css";
import left from "./left.svg";
import right from "./right.svg";

function Cover() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img className={styles.left} src={left} alt="left" />
        <img className={styles.right} src={right} alt="right" />

        <div className={styles.text}>
          <h1 className={styles.heading1}>
            Together we are strong, <br />{" "}
            <span className={styles.span}>
              One-stop solution for all banking needs
            </span>
          </h1>
          <p className={styles.paragraph}>
            Dwidasa Samsara Indonesia is a joint collaboration with several
            parties that has a good reputation as a business partner, so that we
            can be the first choice as a “one stop solution” for all banking
            services provider.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cover;
