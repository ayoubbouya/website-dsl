import React from "react";
import line from "../../Services/content/img/Line.svg";
import styles from "./sectionArticle.module.css";
function SectionArticle() {
  return (
    <div>
      <article className={styles.article}>
        <h1 className={styles.heading1}>
          About Dwidasa Samsara Indonesia (DSI)
        </h1>
        <img src={line} alt="line" className={styles.line} />
        <p className={styles.paragraph}>
          <span className={styles.red}>Dwidasa Samsara Indonesia (DSI)</span>
          was firstly established in 2010 by the founders, who each of them has
          a common end objective to innovate new creations by making the most of
          the ever-growing information technology through{" "}
          <span className={styles.red}>DSI</span>’s distinct front-end based
          application concept. Managed by a team of professional experts with
          extensive experience and impressive track records,{" "}
          <span className={styles.red}>DSI</span> believes that continuous
          improvements and innovations assure your business to run effectively
          and efficiently.
        </p>
        <p className={styles.paragraph}>
          Then from that perspective, we named our company
          <span className={styles.red}> ‘Dwidasa Samsara Indonesia’</span> ,
          which means continuous efforts through improvement and innovation will
          help us evolving toward the forefront position in Indonesia. In
          responding to various clients’ specifi c requirements, DSI will work
          consistently in optimizing its existing reliable resources combined
          with well-trained team supports, to present particularly the dynamic
          fi nancial industry sector with its customized solutions.
        </p>
        <p className={styles.paragraph}>
          Considering the complexity of the clients’ demand, however
          notwithstanding the size of the organization, DSI is always committed
          to work effectively for growing the business together with business
          partners, through its innovative and collaborative methodology while
          assuring a fast response time to customers. That way, the final output
          is delivered in a secured and timely manner, towards the attainment of
          the most effi cient outcome.
        </p>
        <p className={styles.paragraph}>
          For DSI, both technical and non-technical supports are as important as
          the partnership we have built with your business. Among others, our
          partnership portfolio has been built with various business segments
          such as Internet Service Provider (ISP), Application Service Provider
          (ASP) and Payment Network corporations. Through such partnerships, we
          are evolving together to a new height of innovative explorations and
          effective improvements with purpose to having a sustainable business
          operation cycles.
        </p>
      </article>
    </div>
  );
}

export default SectionArticle;
