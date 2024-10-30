import React from "react";
import styles from "./Career.module.css";
import SubTitleComponent from "@/app/components/SubTitleComponent/SubTitleComponent";
import CardComponent from "@/app/components/CardComponent/CardComponent";
import { getRangeTimeData } from "@/app/helpers/getRangeTimeData";
import careerData from "../../../../../../public/assets/files/careerData";
import Link from "next/link";

const Career = () => {
  const timePeriod = (date1: string, date2: string, period: string) => {
    return `${period} - ${getRangeTimeData(date1, date2)}`;
  };
  return (
    <div className={styles.careerContainer}>
      <SubTitleComponent subTitleText="Career" />
      <ul className={styles.careerCardItemsList}>
        {careerData.map(
          ({ id, position, company, place, period, start, end }) => (
            <li key={id}>
              <CardComponent
                company={company}
                place={place}
                period={() => timePeriod(start, end, period)}
                occupation={position}
              />
            </li>
          )
        )}
      </ul>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        download
        href="/matheus-leal-resume-english.pdf"
        className={styles.pdfLink}
      >
        Download as a PDF file.
      </Link>
    </div>
  );
};

export default Career;
