"use client";

import TitleGradientComponent from "@/app/components/TitleGradientComponent/TitleGradientComponent";
import styles from "./AboutSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Portrait from "@/app/components/Portrait/Portrait";
import SkillsAndTechs from "./components/SkillsAndTechs/SkillsAndTechs";

const AboutSection = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section
			id='about'
			data-aos='fade-right'
			className={`${styles.aboutContainer}`}
		>
			<div className={styles.titleContainer}>
				<TitleGradientComponent
					fontDesktopSize='3rem'
					fontMobileSize='2.25rem'
					textColor={
						"-webkit-linear-gradient(left, var(--hot-pink), var(--violet), var(--pink), var(--purple))"
					}
					titleText='Hello World!'
				/>
				<p className={styles.subTitleText}>
					My name is <span>Matheus Leal</span> and I am a Software Developer.
				</p>
			</div>
			<div className={styles.descriptionContainer}>
				<Portrait />
				<p className={styles.subTitleText}>
					A Brazilian <span>Fullstack Developer</span> with 4+ years experience
					of software development, located in Santa Catarina - Brazil, I’ve been
					working with the most current and sofisticated technologies available,
					building the best possible solutions to my costumers, getting really
					powerfull results and achieving total end-user satisfaction. I’m open
					to Job opportunities where I can contribute, learn and grow. If you
					have a good opportunity that matches with my skills and experiences
					don’t hesitate and feel free to contact me.
				</p>
			</div>
			<SkillsAndTechs />
		</section>
	);
};

export default AboutSection;
