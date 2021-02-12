import React from "react";
import styles from "./section.module.css";
import line from "../../Services/content/img/Line.svg";
function Section() {
  return (
    <div>
      <section className={styles.section}>
        <article className={styles.content}>
          <h1 className={styles.heading1}>Our Technology</h1>
          <img className={styles.line} src={line} alt="line" />
          <p className={styles.paragraph}>
            First JAVA, runs on more than 850 million personal computers
            worldwide, and on billions of devices worldwide, including mobile
            and TV devices.The latest Java version contains important
            enhancements to improve performance, stability and security of the
            Java applications that run on your machine. Installing this free
            update will ensure that your Java applications continue to run
            safely and efficiently. The best part of JAVA is free.
          </p>
          <p className={styles.paragraph}>
            We also use PHP for general occation, why? we think you already know
            the reason,of course because is the most flexible language on earth
            that can colaborate very well with all language.
          </p>
          <p className={styles.paragraph}>
            for the strusture is HTML & CSS ( who does not know ? ) cause it's
            the basic language use for the web and help us creating a very
            outstanding view. its become important cause it make our system
            looks good in front of the eyes of our client, (doesnt agree?), Hmm,
            let me ask you if you have a good software but with bad UI/UX, do
            people use it? cause for it we can reach our goals.
          </p>
          <p className={styles.paragraph}>
            What about Microsoft technology, why not. . . We always strive to
            remain the best and try to keep developing what we have.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Section;
