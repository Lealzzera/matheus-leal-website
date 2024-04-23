import SubTitleComponent from "@/app/components/SubTitleComponent/SubTitleComponent";
import React from "react";
import styles from "./FormMessageSection.module.css";
import InputText from "@/app/components/InputText/InputText";
import TextAreaComponent from "@/app/components/TextAreaComponent/TextAreaComponent";
import Button from "@/app/components/Button/Button";

const FormMessageSection = () => {
	return (
		<div className={styles.formContainer}>
			<SubTitleComponent subTitleText='Say Hello' />
			<form>
				<div>
					<InputText placeHolder='Who are you?' label='Name' id='name' />
				</div>
				<div>
					<InputText
						placeHolder="What's your E-mail address?"
						label='E-mail'
						id='email'
					/>
				</div>
				<div>
					<TextAreaComponent
						placeHolder='What would you like to text me?'
						id='textAreaField'
						label='Message'
					/>
				</div>
				<div>
					<Button />
				</div>
			</form>
		</div>
	);
};

export default FormMessageSection;
