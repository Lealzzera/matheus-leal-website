import React from "react";
import styles from "./ProjectsSection.module.css";
import TitleGradientComponent from "../TitleGradientComponent/TitleGradientComponent";
import SubTitleComponent from "../SubTitleComponent/SubTitleComponent";
import { projects } from "./projects";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      data-aos="fade-down"
      className={`${styles.projectsContainer} container`}
    >
      <div className={styles.descriptionContainer}>
        <TitleGradientComponent
          fontDesktopSize="3rem"
          fontMobileSize="2.25rem"
          textColor={
            "-webkit-linear-gradient(left, var(--light-yellow) 0%, var(--yellow) 34%, var(--orange) 100%)"
          }
          titleText="Learn, Develop, Repeat."
        />
        <p>
          Here you can navigate and check out some projects I’ve worked in my
          trajectory. Some of them are still active, others have been
          discontinued.
        </p>
      </div>
      <div className={styles.projectsWrap}>
        <SubTitleComponent subTitleText="Projects" />
        <ul className={styles.projectsList}>
          {projects.map(({ urlAddress, projectName }, index) => (
            <li key={index}>
              <Link href={{ pathname: urlAddress }} target="blank">
                {projectName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
