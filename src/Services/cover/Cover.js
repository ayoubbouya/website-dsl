import React from "react";
import cover from "./images/Background.svg";
import cover1 from "./images/Background1.svg";
import styles from "./cover.module.css";
function Cover() {
  return (
    <div>
      <div className={styles.coverContainer}>
        <img className={styles.bg} src={cover} alt="cover" />
        <img className={styles.bg1} src={cover1} alt="cover1" />
        <h1 className={styles.heading1}>
          {" "}
          Just a smile away from{" "}
          <span className={styles.span}>Winning your customer’s trust</span>
        </h1>
      </div>
    </div>
  );
}

export default Cover;
