import React from "react";
import styles from "./SkillsAndTechs.module.css";
import SubTitleComponent from "@/app/components/SubTitleComponent/SubTitleComponent";
import JavascriptIcon from "@/icons/JavascriptIcon";
import NestIcon from "@/icons/NestIcon";
import VueJsIcon from "@/icons/VueJsIcon";
import NextIcon from "@/icons/NextIcon";
import TailWindIcon from "@/icons/TailWindIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import NodeJsIcon from "@/icons/NodeJsIcon";
import StyledComponentsIcon from "@/icons/StyledComponentsIcon";
import ReactJsIcon from "@/icons/ReactJsIcon";
import JestIcon from "@/icons/JestIcon";

const SkillsAndTechs = () => {
	return (
		<div className={styles.containerSkills}>
			<SubTitleComponent subTitleText='Skills & Techs' />
			<div className={styles.skillsIcons}>
				<JavascriptIcon />
				<NestIcon />
				<VueJsIcon />
				<NextIcon />
				<TailWindIcon />
				<TypescriptIcon />
				<NodeJsIcon />
				<StyledComponentsIcon />
				<ReactJsIcon />
				<JestIcon />
			</div>
		</div>
	);
};

export default SkillsAndTechs;
