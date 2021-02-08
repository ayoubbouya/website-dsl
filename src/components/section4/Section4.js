import React from "react";
import logo from "../header/img/logo.svg";
import silver from "./img/image 7.svg";
import net from "./img/image 9.svg";
import java from "./img/image 10.svg";
import ios from "./img/image 11.svg";
import android from "./img/image 13.svg";
import blackberry from "./img/image 14.svg";
import styles from "./section.module.css";

function Section4() {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <article className={styles.article1}>
          <img src={logo} alt="logo" />
          <h5 className={styles.heading5}>PT Dwidasa Samsara Indonesia</h5>
          <p className={styles.paragraph}>
            Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
          </p>
        </article>
        <article className={styles.article2}>
          <h5 className={styles.heading6}>Contact</h5>
          <ul className={styles.paragraph}>
            <li>Phone : +62.21.5314.1135</li>
            <li>Fax : +62.21.5314.1135</li>
            <li>Email : community@dwidasa.com</li>
          </ul>
        </article>
        <article className={styles.article3}>
          <div className={styles.images}>
            <img src={silver} alt="silver" className={styles.company} />
            <img src={net} alt="net" className={styles.company} />
            <img src={java} alt="java" className={styles.company} />
            <img src={ios} alt="ios" className={styles.company} />
            <img src={android} alt="android" className={styles.company} />
            <img src={blackberry} alt="blackberry" className={styles.company} />
          </div>
        </article>
      </section>
    </div>
  );
}

export default Section4;
