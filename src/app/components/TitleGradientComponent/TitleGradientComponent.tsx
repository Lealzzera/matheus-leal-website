"use client";

import React, { useEffect, useState } from "react";
import styles from "./TitleGradientComponent.module.css";

type TitleGradientComponentProps = {
	titleText: string;
	textColor: string;
	fontDesktopSize?: string;
	fontMobileSize?: string;
};

const TitleGradientComponent = ({
	titleText,
	textColor,
	fontDesktopSize,
	fontMobileSize,
}: TitleGradientComponentProps) => {
	const [screenSize, setScreenSize] = useState<number>(0);

	useEffect(() => {
		const checkScreenSize = () => {
			setScreenSize(window.innerWidth);
		};

		window.addEventListener("resize", checkScreenSize);
		checkScreenSize();
		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);
	return (
		<div>
			{screenSize !== 0 && (
				<h1
					className={styles.title}
					style={{
						background: `${textColor}`,
						backgroundClip: "text",
						fontSize: `${screenSize >= 900 ? fontDesktopSize : fontMobileSize}`,
					}}
				>
					{titleText}
				</h1>
			)}
		</div>
	);
};

export default TitleGradientComponent;
