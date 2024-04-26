import React from "react";
import styles from "./Button.module.css";

const Button = () => {
	return (
		<div className={styles.containerButton}>
			<button type='submit'>Send</button>
		</div>
	);
};

export default Button;
