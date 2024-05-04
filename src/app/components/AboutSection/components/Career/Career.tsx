import React from "react";
import styles from "./Career.module.css";
import SubTitleComponent from "@/app/components/SubTitleComponent/SubTitleComponent";
import CardComponent from "@/app/components/CardComponent/CardComponent";
import { getRangeTimeData } from "@/app/helpers/getRangeTimeData";
import careerData from "@/files/careerData";

const Career = () => {
	const timePeriod = (date1: string, date2: string, period: string) => {
		return `${period} - ${getRangeTimeData(date1, date2)}`;
	};
	return (
		<div className={styles.careerContainer}>
			<SubTitleComponent subTitleText='Career' />
			<ul className={styles.careerCardItemsList}>
				{careerData.map(
					({ id, position, company, place, period, started, endded }) => (
						<li key={id}>
							<CardComponent
								company={company}
								place={place}
								period={() => timePeriod(started, endded, period)}
								occupation={position}
							/>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default Career;
