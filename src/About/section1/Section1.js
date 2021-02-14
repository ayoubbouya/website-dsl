import React from "react";
import styles from "./section.module.css";
import logo from "../images/logoX.svg";
function Section1() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.cover}>
          <p className={styles.paragraph}>
            to grow the business together <br />
            <span className={styles.span}>
              Continous effort through improvement and innovation
            </span>
          </p>
          <img src={logo} alt="logoX" className={styles.logo} />
        </div>
      </section>
    </div>
  );
}

export default Section1;
