import React, { ChangeEvent } from "react";
import styles from "./TextAreaComponent.module.css";

type TextAreaProps = {
	placeHolder: string;
	label: string;
	id: string;
	textAreaValue: string;
	onChangeTextAreaValue: (value: ChangeEvent<HTMLTextAreaElement>) => void;
	disabled?: boolean;
	maxLength: number;
};

const TextAreaComponent = ({
	placeHolder,
	label,
	id,
	textAreaValue,
	disabled,
	maxLength,
	onChangeTextAreaValue,
}: TextAreaProps) => {
	return (
		<div className={styles.textAreaContainer}>
			<label htmlFor={id}>{label}</label>
			{disabled ? (
				<div className={styles.loadingContainer}>
					<div className={styles.loadingContent}></div>
				</div>
			) : (
				<textarea
					disabled={disabled}
					value={textAreaValue}
					onChange={onChangeTextAreaValue}
					required
					rows={10}
					maxLength={maxLength}
					id={id}
					placeholder={placeHolder}
				></textarea>
			)}
		</div>
	);
};

export default TextAreaComponent;
