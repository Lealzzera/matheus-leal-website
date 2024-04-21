import React from "react";
import styles from "./SubTitleComponent.module.css";

type SubTitleComponent = {
	subTitleText: string;
};

const SubTitleComponent = ({ subTitleText }: SubTitleComponent) => {
	return (
		<div>
			<h2 className={styles.subTitle}>{subTitleText}</h2>
		</div>
	);
};

export default SubTitleComponent;
