/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./ContactMeSection.module.css";
import TitleGradientComponent from "../TitleGradientComponent/TitleGradientComponent";
import FormMessageSection from "./components/FormMessageSection/FormMessageSection";

const ContactMeSection = () => {
  return (
    <section
      id="contact"
      data-aos="fade-right"
      className={`${styles.contactmeContainer} container`}
    >
      <div className={styles.descriptionContainer}>
        <TitleGradientComponent
          fontDesktopSize="3rem"
          fontMobileSize="2.25rem"
          textColor={
            "-webkit-linear-gradient(left, var(--alice-green) 0%, var(--ice-blue) 41%, var(--pool-green) 78%, var(--green) 100%)"
          }
          titleText="Don't be shy, Email me."
        />
        <p>
          Let’s talk about FPS games, series, news from the technologies' world
          or even about job opportunities. I’m a little bit busy but I promise
          that I’ll do my best to reply you ASAP.
        </p>
      </div>
      <FormMessageSection />
      <p
        style={{
          marginTop: "3rem",
          color: "var(--dark-grey)",
          fontSize: "0.875rem",
        }}
      >
        It’s a pleasure to meet you.
      </p>
    </section>
  );
};

export default ContactMeSection;
