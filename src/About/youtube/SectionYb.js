import React from "react";
import styles from "./styles.module.css";
import line from "../../Services/content/img/Line.svg";
import yb from "./card-item.svg";
function SectionYb() {
  return (
    <div>
      <section className={styles.sectionYb}>
        <article className={styles.article}>
          <img src={yb} alt="yb" className={styles.yb} />
          <div className={styles.content}>
            <h1>Our Future Prespective</h1>
            <img src={line} alt="line" />
            <h3>Vision</h3>
            <p>
              To become the leading application service provider (ASP) focusing
              on front-end application delivered for Indonesia’s banking and fi
              nancial industry.
            </p>
            <h3>Mission</h3>
            <p>
              To grow the business together with clients by providing enhanced
              services and wide delivery channel to end-users.
            </p>
          </div>
        </article>
        <article></article>
      </section>
    </div>
  );
}

export default SectionYb;
