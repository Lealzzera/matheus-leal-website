"use client";
import ArrowIcon from "@/icons/ArrowIcon";
import TitleGradientComponent from "@/app/components/TitleGradientComponent/TitleGradientComponent";
import styles from "./WelcomePageSection.module.css";
import { useRef } from "react";

export default function WelcomePageSection() {
	const sectionRef = useRef<HTMLTableSectionElement>(null);
	const handleSendToAbout = () => {
		const screenSize = sectionRef.current?.clientHeight;

		if (screenSize) {
			window.scroll({
				top: screenSize + 40,
				left: 100,
				behavior: "smooth",
			});
		}
	};
	return (
		<section ref={sectionRef} className={styles.welcomePageContainer}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<TitleGradientComponent
						fontDesktopSize='2rem'
						fontMobileSize='1.25rem'
						textColor='-webkit-linear-gradient(left, var(--light-green), var(--light-blue))'
						titleText='Think, Develop and Share.'
					/>
					<p className={styles.subTitleText}>A Fullstack Software Developer.</p>
					<div
						onClick={handleSendToAbout}
						className={styles.arrowIconContainer}
					>
						<ArrowIcon />
					</div>
				</div>
			</div>
		</section>
	);
}
