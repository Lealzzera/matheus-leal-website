import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={`${styles.footer} container`}>
			<p>
				Made by{" "}
				<span>
					<a href='https://www.matheusleal.dev'>Matheus Leal</a>
				</span>
			</p>
		</footer>
	);
};

export default Footer;
