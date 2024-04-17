"use client";

import React, { useEffect, useState } from "react";
import styles from "./MenuHeader.module.css";
import MenuMobileIcon from "@/icons/MenuMobileIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

const MenuHeader = () => {
	const [screenSize, setScreenSize] = useState<number | null>(300);
	// const windowWidth = window.innerWidth;

	// const getScreenSize = () => {
	// 	if (windowWidth) {
	// 		setScreenSize(windowWidth);
	// 		return windowWidth;
	// 	}
	// };

	// window.addEventListener("resize", getScreenSize);

	// useEffect(() => {
	// 	if (windowWidth) {
	// 		setScreenSize(windowWidth);
	// 	}
	// }, [windowWidth]);
	return (
		<header>
			{screenSize !== null && screenSize > 900 && (
				<nav className={`${styles.menuNav} container `}>
					<ul className={styles.ulList}>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
					<div className={styles.iconsLinks}>
						<a href='https://www.linkedin.com'>
							<LinkedInIcon />
						</a>
						<a href='https://www.github.com'>
							<GitHubIcon />
						</a>
					</div>
				</nav>
			)}
			{screenSize !== null && screenSize <= 900 && (
				<div className={styles.menuMobileContainer}>
					<div className={styles.iconsLinks}>
						<a href='https://www.linkedin.com'>
							<LinkedInIcon />
						</a>
						<a href='https://www.github.com'>
							<GitHubIcon />
						</a>
					</div>
					<MenuMobileIcon />
				</div>
			)}
		</header>
	);
};

export default MenuHeader;
