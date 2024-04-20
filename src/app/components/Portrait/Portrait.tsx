import Image from "next/image";
import React from "react";
import styles from "./Portrait.module.css";

const Portrait = () => {
	return (
		<div className={`${styles.containerImage}`}>
			<Image
				src='assets/matheus-image.svg'
				alt='Matheus Leal Software Developer created and owner of this website.'
				width={616}
				height={507}
				sizes='100vw'
				priority
			/>
		</div>
	);
};

export default Portrait;
