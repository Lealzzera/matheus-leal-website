import React from "react";
import styles from "./TextAreaComponent.module.css";

type TextAreaProps = {
	placeHolder: string;
	label: string;
	id: string;
};

const TextAreaComponent = ({ placeHolder, label, id }: TextAreaProps) => {
	return (
		<div className={styles.textAreaContainer}>
			<label htmlFor={id}>{label}</label>
			<textarea rows={10} id={id} placeholder={placeHolder}></textarea>
		</div>
	);
};

export default TextAreaComponent;
