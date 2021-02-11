import React from "react";
import pana from "./img/pana.svg";
import styles from "./content.module.css";
import line from "./img/Line.svg";
function Content() {
  return (
    <div>
      <section className={styles.section}>
        <article className={styles.content}>
          <h1 className={styles.heading1}>Our Service</h1>
          <img className={styles.line} src={line} alt="line" />
          <p className={styles.paragraph}>
            DSI’s shared service solutions focus on the front-end based software
            development, designed specifically for the banking and financial
            sectors. We short-cut your front-liners to customers interaction
            process through a way that mediates your business process in a more
            direct communication means, in just a smile away from winning your
            customer’s trust.
          </p>
          <p className={styles.paragraph}>
            Through close partnership, we always work together with your team,
            all throughout from pretopost project cycles – initial planning,
            project development, implementation, evaluation up to reporting
            documentation – to fully coach you so that all your specific
            business.
          </p>
          <p className={styles.paragraph}>
            requirements can be delivered at the right time to the right
            audience of particular interests. Moreover, our team will support
            you to provide a detailed consultation throughout operation stage,
            and after the project implementation cycles by applying specific
            monitoring and improvement methodology. Our experienced people will
            drive your personalized service, by utilizing the best technology
            supports no other businesses can provide.
          </p>
        </article>
        <article className={styles.pana}>
          <img className={styles.panaImage} src={pana} alt={pana} />
        </article>
      </section>
    </div>
  );
}

export default Content;
