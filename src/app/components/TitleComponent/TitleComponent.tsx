"use client";

import React from "react";
import styles from "./TitleComponent.module.css";

type TitleComponentProps = {
	titleText: string;
	textColor: string;
};

const TitleComponent = ({ titleText, textColor }: TitleComponentProps) => {
	return (
		<div>
			<h1
				className={styles.title}
				style={{ background: `${textColor}`, backgroundClip: "text" }}
			>
				{titleText}
			</h1>
		</div>
	);
};

export default TitleComponent;
