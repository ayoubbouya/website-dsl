import React from "react";
import styles from "./styles.module.css";
import line from "../../About-team/management/images/lineRed.svg";
import company1 from "./company1.svg";
import company2 from "./company2.svg";
import company3 from "./company3.svg";
import shape1 from "./SideShape.svg";
import shape2 from "./Oval.svg";

function PartnerLine() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.center}>
          <h1 className={styles.heading1}>Partners Line Up</h1>
          <img className={styles.line} src={line} alt="linered" />
        </div>
        <div className={styles.cards}>
          <article className={styles.card}>
            <img className={styles.company} src={company1} alt="company 1" />
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis
              volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis
              bibendum hendrerit pulvinar.
            </p>
          </article>
          <article className={styles.card}>
            <img className={styles.company} src={company2} alt="company 2" />
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis
              volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis
              bibendum hendrerit pulvinar.
            </p>
          </article>
          <article className={styles.card}>
            <img className={styles.company} src={company3} alt="company 3" />
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis
              volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis
              bibendum hendrerit pulvinar.
            </p>
          </article>
        </div>
        <img className={styles.shape1} src={shape1} alt="sideshape" />
        <img className={styles.shape2} src={shape2} alt="sideshape" />
      </section>
    </div>
  );
}

export default PartnerLine;
