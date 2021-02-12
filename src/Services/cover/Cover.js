import React from "react";
import cover from "./images/bg.svg";
import styles from "./cover.module.css";
function Cover() {
  return (
    <div>
      <div className={styles.coverContainer}>
        <section className={styles.bg}>
          {" "}
          <h1 className={styles.heading1}>
            {" "}
            Just a smile away from{""}
            <br />
            <span className={styles.span}>Winning your customer’s trust</span>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Cover;
