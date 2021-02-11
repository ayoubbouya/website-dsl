import React from "react";
import styles from "./section.module.css";
import product from "./img/product.svg";
import service from "./img/service.svg";
import technology from "./img/technology.svg";

function Section3() {
  return (
    <div>
      {" "}
      <section className={styles.section3}>
        <h1 className={styles.heading1}>Product and Service</h1>
        <div className={styles.articleContainer}>
          <article className={styles.article}>
            <img src={product} />
            <h2 className={styles.heading2}>Our Product</h2>
            <p className={styles.paragraph}>
              Our product is made on the base of our team’s careful research and
              analyses, ranging from internet based application.
            </p>
            <button className={styles.btn}>read more</button>
          </article>
          <article className={styles.article}>
            <img src={service} />
            <h2 className={styles.heading2}>Our Service</h2>
            <p className={styles.paragraph}>
              DSI’s shared service solutions focus on the front-end based
              software development, designed specifically for the banking and
              financial sectors.
            </p>
            <button className={styles.btn}>read more</button>
          </article>
          <article className={styles.article}>
            <img src={technology} />
            <h2 className={styles.heading2}>Our Technology</h2>
            <p className={styles.paragraph}>
              First JAVA, runs on more than 850 million personal computers
              worldwide, and on billions of devices worldwide, including mobile
              and TV devices.
            </p>
            <button className={styles.btn}>read more</button>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Section3;
