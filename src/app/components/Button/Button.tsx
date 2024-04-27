import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
	buttonText: string;
	disabled?: boolean;
};

const Button = ({ buttonText, disabled }: ButtonProps) => {
	return (
		<div className={styles.containerButton}>
			<button disabled={disabled} type='submit'>
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
