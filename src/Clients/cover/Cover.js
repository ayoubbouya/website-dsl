import React from "react";
import styles from "./styles.module.css";
import cover from "./pana.svg";
import groups from "./Group.svg";

function Cover() {
  return (
    <div className={styles.containerCover}>
      <section className={styles.section}>
        <h1 className={styles.heading1}>
          Taking our client in more comfortable way{" "}
          <span className={styles.span}>
            {" "}
            <br /> Deliver IT around the globe
          </span>
        </h1>

        <img className={styles.image} src={cover} alt="cover" />
      </section>
      <img src={groups} alt="groups" className={styles.groups} />
    </div>
  );
}

export default Cover;
