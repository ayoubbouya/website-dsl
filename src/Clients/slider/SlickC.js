import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import quote from "./quoteicon.svg";
import profile from "./profile.svg";
import lineRed from "../../About-team/management/images/lineRed.svg";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}
class SlickC extends Component {
  render() {
    var settings = {
      className: "",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className={styles.slickSlider}>
        <div className={styles.headSlick}>
          <h1 className={styles.heading1}>Testimonial</h1>
          <img className={styles.redline} src={lineRed} alt="line red" />
        </div>

        <Slider {...settings}>
          <div>
            <section className={styles.section}>
              <img className={styles.profile} src={profile} alt="profile" />
              <article className={styles.article}>
                <img src={quote} alt="quote icon" />
                <p className={styles.paragraph}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p>Connie Robertson at Google</p>
              </article>
            </section>
          </div>
          <div>
            <section className={styles.section}>
              <img className={styles.profile} src={profile} alt="profile" />
              <article className={styles.article}>
                <img src={quote} alt="quote icon" />
                <p className={styles.paragraph}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p>Connie Robertson at Google</p>
              </article>
            </section>
          </div>
          <div>
            <section className={styles.section}>
              <img className={styles.profile} src={profile} alt="profile" />
              <article className={styles.article}>
                <img src={quote} alt="quote icon" />
                <p className={styles.paragraph}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p>Connie Robertson at Google</p>
              </article>
            </section>
          </div>
          <div>
            <section className={styles.section}>
              <img className={styles.profile} src={profile} alt="profile" />
              <article className={styles.article}>
                <img src={quote} alt="quote icon" />
                <p className={styles.paragraph}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p>Connie Robertson at Google</p>
              </article>
            </section>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SlickC;
