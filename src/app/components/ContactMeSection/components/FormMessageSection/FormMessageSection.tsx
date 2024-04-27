"use client";

import SubTitleComponent from "@/app/components/SubTitleComponent/SubTitleComponent";
import React, { useState } from "react";
import styles from "./FormMessageSection.module.css";
import InputText from "@/app/components/InputText/InputText";
import TextAreaComponent from "@/app/components/TextAreaComponent/TextAreaComponent";
import Button from "@/app/components/Button/Button";
import { init, send } from "@emailjs/browser";

init({
	publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_ENV,
});

const FormMessageSection = () => {
	const [nameInputValue, setNameInputValue] = useState("");
	const [emailInputValue, setEmailInputValue] = useState("");
	const [messageContentValue, setMessageContentValue] = useState("");
	const [loading, setLoading] = useState(false);
	const [stateMessage, setStateMessage] = useState("");

	const templateParams = {
		from_name: nameInputValue,
		email: emailInputValue,
		message: messageContentValue,
		client_email: emailInputValue,
		client_name: nameInputValue,
	};

	const sendEmail = async (event: React.FormEvent) => {
		event.preventDefault();
		if (
			process.env.NEXT_PUBLIC_SERVICE_ID &&
			process.env.NEXT_PUBLIC_TEMPLATE_ID
		) {
			try {
				setLoading(true);
				await send(
					process.env.NEXT_PUBLIC_SERVICE_ID,
					process.env.NEXT_PUBLIC_TEMPLATE_ID,
					templateParams
				);
				setEmailInputValue("");
				setMessageContentValue("");
				setNameInputValue("");
				setStateMessage("Email sent successfully!");
			} catch (error) {
				console.error(error);
				setStateMessage("Error to send your email, try again later.");
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<div className={styles.formContainer}>
			<SubTitleComponent subTitleText='Say Hello' />
			<form onSubmit={sendEmail}>
				<div>
					<InputText
						disabled={loading}
						maxLength={40}
						inputValue={nameInputValue}
						changeInputValue={(e) => setNameInputValue(e.target.value)}
						placeHolder='Who are you?'
						label='Name'
						id='name'
					/>
				</div>
				<div>
					<InputText
						disabled={loading}
						maxLength={60}
						inputValue={emailInputValue}
						changeInputValue={(e) => setEmailInputValue(e.target.value)}
						placeHolder="What's your E-mail address?"
						label='E-mail'
						id='email'
						type='email'
					/>
				</div>
				<div>
					<TextAreaComponent
						maxLength={400}
						disabled={loading}
						textAreaValue={messageContentValue}
						onChangeTextAreaValue={(e) =>
							setMessageContentValue(e.target.value)
						}
						placeHolder='What would you like to text me?'
						id='textAreaField'
						label='Message'
					/>
				</div>
				<div>
					<p style={{ paddingTop: "3px", color: "#10F1A0" }}>{stateMessage}</p>
					<Button disabled={loading} buttonText='Send' />
				</div>
			</form>
		</div>
	);
};

export default FormMessageSection;
