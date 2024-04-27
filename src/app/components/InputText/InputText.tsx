import React, { ChangeEvent } from "react";
import styles from "./InputText.module.css";

type InputTextProps = {
	placeHolder: string;
	label: string;
	id: string;
	inputValue: string;
	changeInputValue: (value: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	disabled?: boolean;
	maxLength: number;
};

const InputText = ({
	placeHolder,
	label,
	id,
	inputValue,
	type,
	disabled,
	maxLength,
	changeInputValue,
}: InputTextProps) => {
	return (
		<div className={styles.inputTextContainer}>
			<label htmlFor={id}>{label}</label>
			<input
				disabled={disabled}
				maxLength={maxLength}
				value={inputValue}
				onChange={changeInputValue}
				required
				type={type ? type : "text"}
				id={id}
				placeholder={placeHolder}
			/>
		</div>
	);
};

export default InputText;
