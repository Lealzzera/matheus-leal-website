import React from "react";
import styles from "./InputText.module.css";

type InputTextProps = {
	placeHolder: string;
	label: string;
	id: string;
};

const InputText = ({ placeHolder, label, id }: InputTextProps) => {
	return (
		<div className={styles.inputTextContainer}>
			<label htmlFor={id}>{label}</label>
			<input required type='text' id={id} placeholder={placeHolder} />
		</div>
	);
};

export default InputText;
