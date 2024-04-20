"use client";
import ArrowIcon from "@/icons/ArrowIcon";
import TitleGradientComponent from "@/app/components/TitleGradientComponent/TitleGradientComponent";
import styles from "./WelcomePageSection.module.css";

export default function WelcomePageSection() {
	return (
		<section className={styles.welcomePageContainer}>
			<div className={styles.infoContainer}>
				<div className={styles.pictureWrap}></div>
				<div className={styles.textContainer}>
					<TitleGradientComponent
						fontDesktopSize='2rem'
						fontMobileSize='1.25rem'
						textColor='-webkit-linear-gradient(left, var(--light-green), var(--light-blue))'
						titleText='Think, Develop and Share.'
					/>
					<p className={styles.subTitleText}>Fullstack Software Developer.</p>
					<ArrowIcon />
				</div>
			</div>
		</section>
	);
}
