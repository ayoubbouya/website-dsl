import React from "react";
import styles from "./management/styles.module.css";
import facebook from "./icons/Facebook.svg";
import twitter from "./icons/Twitter.svg";
import instagram from "./icons/Instagram.svg";
function Card(props) {
  return (
    <div>
      <article className={styles.card}>
        <img src={props.image} alt="woman" className={styles.memberImg} />
        <h5 className={styles.heading5}>{props.job}</h5>
        <h4 className={styles.heading4}>Rodney Stratton</h4>
        <div className={styles.icons}>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </article>
    </div>
  );
}

export default Card;
