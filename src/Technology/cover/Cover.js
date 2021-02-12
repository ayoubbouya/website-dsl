import React from "react";
import styles from "./cover.module.css";
import mac from "./mac.svg";
function Cover() {
  return (
    <div>
      <section className={styles.cover}>
        <img src={mac} alt="macbook" className={styles.mac} />
        <h1 className={styles.heading1}>
          “Knowledge” some way of future up-to-date in latest technology
        </h1>
        <button className={styles.btn}>Learn More</button>
      </section>
    </div>
  );
}

export default Cover;
