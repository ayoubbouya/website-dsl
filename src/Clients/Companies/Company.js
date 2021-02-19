import React from "react";
import styles from "./styles.module.css";
function Company(props) {
  return (
    <div className={styles.sectionContainer}>
      <section className={styles.section}>
        <div className={styles.image}>
          <img className={styles.picture} src={props.image} alt="company" />
        </div>
        <article className={styles.article}>
          <h1 className={styles.heading1}>{props.headingH1}</h1>
          <div className={styles.m1}>
            <h2 className={styles.heading2}> {props.headingH2}</h2>
            <p className={styles.paragraph}>{props.paragraph1}</p>
            <p className={styles.paragraph}>{props.paragraph2}</p>
            <h2 className={styles.heading2}> {props.headingH2T2}</h2>
            <p className={styles.paragraph}>{props.paragraph2T2}</p>
            <h2 className={styles.heading2}> {props.headingH2T3}</h2>
            <p className={styles.paragraph}>{props.paragraph2T3}</p>
            <h2 className={styles.heading2}> {props.headingH2T4}</h2>
            <p className={styles.paragraph}>{props.paragraph2T4}</p>
            <ul className={styles.lists}>
              <li>{props.list1}</li>
              <li>{props.list2}</li>
              <li>{props.list3}</li>
              <li>{props.list4}</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Company;
