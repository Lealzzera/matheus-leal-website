import React from "react";
import styles from "./SkillsAndTechs.module.css";
import SubTitleComponent from "@/app/components/SubTitleComponent/SubTitleComponent";
import NestIcon from "@/icons/NestIcon";
import VueJsIcon from "@/icons/VueJsIcon";
import NextIcon from "@/icons/NextIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import NodeJsIcon from "@/icons/NodeJsIcon";
import ReactJsIcon from "@/icons/ReactJsIcon";
import PostgreSQLIcon from "@/icons/PostgreSQLIcon";
import PythonIcon from "@/icons/PythonIcon";
import VitestIcon from "@/icons/VitestIcon";
import AwsIcon from "@/icons/AwsIcon";

const SkillsAndTechs = () => {
  return (
    <div className={styles.containerSkills}>
      <SubTitleComponent subTitleText="Skills & Techs" />
      <div className={styles.skillsIcons}>
        <PostgreSQLIcon />
        <NestIcon />
        <VueJsIcon />
        <NextIcon />
        <PythonIcon />
        <TypescriptIcon />
        <NodeJsIcon />
        <AwsIcon />
        <ReactJsIcon />
        <VitestIcon />
      </div>
    </div>
  );
};

export default SkillsAndTechs;
