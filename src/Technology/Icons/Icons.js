import React from "react";
import styles from "./icons.module.css";
import java from "./images/java.svg";
import php from "./images/php.svg";
import css from "./images/css_3.svg";
import html from "./images/html5.svg";
import microsoft from "./images/microsoft.svg";

function Icons() {
  return (
    <div>
      <section className={styles.section}>
        <img src={java} alt="" className={styles.img} />
        <img src={php} alt="" className={styles.img} />
        <img src={css} alt="" className={styles.img} />
        <img src={html} alt="" className={styles.img} />
        <img src={microsoft} alt="" className={styles.img} />
      </section>
    </div>
  );
}

export default Icons;
