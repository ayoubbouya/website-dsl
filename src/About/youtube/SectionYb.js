import React from "react";
import styles from "./styles.module.css";
import line from "../../Services/content/img/Line.svg";
import yb from "./card-item.svg";
import vision from "./vision.svg";
import mission from "./missionIcon.svg";

function SectionYb() {
  return (
    <div>
      <section className={styles.sectionYb}>
        <article className={styles.article}>
          <div className={styles.youtube}>
            <img src={yb} alt="yb" className={styles.yb} />
          </div>

          <div className={styles.content}>
            <h1 className={styles.heading1}>Our Future Prespective</h1>
            <img src={line} alt="line" className={styles.line} />
            <div className={styles.paragraph}>
              <h3 className={styles.heading3}>
                {" "}
                <img
                  src={vision}
                  alt="visionIcon"
                  className={styles.icon}
                />{" "}
                Vision
              </h3>
              <p className={styles.mr}>
                To become the leading application service provider (ASP)
                focusing on front-end application delivered for Indonesia’s
                banking and fi nancial industry.
              </p>
            </div>
            <div className={styles.paragraph}>
              <h3 className={styles.heading3}>
                {" "}
                <img
                  src={mission}
                  alt="missionIcon"
                  className={styles.icon}
                />{" "}
                Mission
              </h3>
              <p className={styles.mr}>
                To grow the business together with clients by providing enhanced
                services and wide delivery channel to end-users.
              </p>
            </div>
          </div>
        </article>
        <article></article>
      </section>
    </div>
  );
}

export default SectionYb;
