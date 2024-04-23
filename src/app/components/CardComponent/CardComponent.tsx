import React from "react";
import styles from "./CardComponent.module.css";

type CardComponentProps = {
	occupation: string;
	company: string;
	place: string;
	period: string;
};

const CardComponent = ({
	occupation,
	company,
	place,
	period,
}: CardComponentProps) => {
	return (
		<div className={styles.cardContainer}>
			<h3 className={styles.occupationTitle}>{occupation}</h3>
			<p className={styles.companyText}>
				{company}
				<span className={styles.placeText}> | {place}</span>
			</p>
			<p className={styles.periodText}>{period}</p>
		</div>
	);
};

export default CardComponent;
