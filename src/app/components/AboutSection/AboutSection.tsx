import TitleGradientComponent from "@/app/components/TitleGradientComponent/TitleGradientComponent";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<section className={`${styles.aboutContainer}`}>
			<div className={styles.titleContainer}>
				<TitleGradientComponent
					fontDesktopSize='3rem'
					fontMobileSize='2.25rem'
					textColor={
						"-webkit-linear-gradient(left, var(--hot-pink), var(--violet), var(--pink), var(--purple))"
					}
					titleText='Hello World!'
				/>
			</div>
		</section>
	);
};

export default AboutSection;
