import React from "react";
import styles from "./Career.module.css";
import SubTitleComponent from "@/app/components/SubTitleComponent/SubTitleComponent";
import CardComponent from "@/app/components/CardComponent/CardComponent";

//TODO: REPLACE PERIOD TO A REAL DATE AND CALCULATE THE TIME ON IT
const careerData = [
	{
		id: 1,
		position: "Software Engineer",
		company: "UOL Edtech",
		place: "São Paulo - Brazil",
		period: "Nov 2023 | Now - 1yr 5mos",
	},
	{
		id: 2,
		position: "Software Engineer",
		company: "Digital Pages",
		place: "São Paulo - Brazil",
		period: "Aug 2023 | Nov 2022 - 3mos",
	},
	{
		id: 3,
		position: "Font-end Software Developer",
		company: "Iteris Consulting & Software",
		place: "São Paulo - Brazil",
		period: "Jun 2022 | Aug 2023 - 1yr 2mos",
	},
	{
		id: 4,
		position: "Front-end Software Developer",
		company: "M&M Software Solutions",
		place: "São Paulo - Brazil",
		period: "Jan 2021 | Now - 3yr 5mos",
	},
];

const Career = () => {
	return (
		<div className={styles.careerContainer}>
			<SubTitleComponent subTitleText='Career' />
			<ul className={styles.careerCardItemsList}>
				{careerData.map(({ id, position, company, place, period }) => (
					<li key={id}>
						<CardComponent
							company={company}
							place={place}
							period={period}
							occupation={position}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Career;
