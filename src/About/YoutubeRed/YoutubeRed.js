import React from "react";
import styles from "./styles.module.css";
import yb from "./yb.svg";
import lineblack from "./LineBlack.svg";

function YoutubeRed() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <article className={styles.article}>
            <h1>DSI Culture</h1>
            <img src={lineblack} alt="lineBlack" className={styles.lineblack} />
            <p className={styles.paragraph}>
              Our commitment to innovation depends on everyone being comfortable
              sharing ideas and opinions. Every employee is a hands-on
              contributor, and everyone wears several hats. Because we believe
              that each DSI employee is an equally important part of our
              success.
            </p>
            <p className={styles.paragraph2}>
              We deeply understand that the average working person spends at
              least eight hours or even more, so we spend one third even half of
              our lives to work in a day. therefore we strive to provide a fun
              and positive environment in addition to a wide range of benefits
              to provide safety so they can enjoy working at Dwidasa Samsara
              Indonesia.
            </p>
          </article>
          <img src={yb} alt="youtube" className={styles.yb} />
        </div>
      </section>
    </div>
  );
}

export default YoutubeRed;
