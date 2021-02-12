import React from "react";
import styles from "./product.module.css";
import line from "../../Services/content/img/Line.svg";
import pana from "../images/pana.svg";
function Product() {
  return (
    <div>
      <section className={styles.section}>
        <article className={styles.content}>
          <h1 className={styles.heading1}>Our Product</h1>
          <img className={styles.line} src={line} alt="line" />
          <p className={styles.paragraph}>
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application such as Internet
            Banking; mobile frontend application such as Mobile Banking;
            transaction based banking such as EDC Banking; and other financial
            platforms such as Personal Investment Portfolio.
          </p>
          <p className={styles.paragraph}>
            Our product and service range will technically safeguard your
            business operations through continued application development. It is
            all topped with our integrated procedure made in accordance with the
            industry’s best practices, which will drive the built-in system
            towards the creation of secured and value added services for you as
            business partners.
          </p>
        </article>
        <article className={styles.pana}>
          <img className={styles.panaImage} src={pana} alt={pana} />
        </article>
      </section>
    </div>
  );
}

export default Product;
