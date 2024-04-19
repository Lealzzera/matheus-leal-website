import TitleComponent from "../TitleComponent/TitleComponent";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<section className={`${styles.aboutContainer}`}>
			<div className={styles.titleContainer}>
				<TitleComponent
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
